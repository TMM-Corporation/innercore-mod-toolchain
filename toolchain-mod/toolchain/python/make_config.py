import json
import os
import os.path

from base_config import BaseConfig

class MakeConfig(BaseConfig):
	def __init__(self, filename, root_dir):
		self.filename = filename
		self.root_dir = root_dir
		self.mod_dir = os.path.abspath(os.path.join(self.filename, ".."))
		with open(filename, encoding="utf-8") as file:
			self.json = json.load(file)
		BaseConfig.__init__(self, self.json)

	def get_root_dir(self):
		return self.root_dir

	def get_path(self, relative_path, from_mod=None):
		if(from_mod):
			return os.path.abspath(os.path.join(self.mod_dir, relative_path))
		else:
			return os.path.abspath(os.path.join(self.root_dir, relative_path))

	def get_adb(self):
		return self.get_path("toolchain/adb/adb.exe")

	def get_paths(self, relative_path, filter=None, paths=None):
		if paths is None:
			paths = []
		if len(relative_path) > 0 and relative_path[-1] == "*":
			path = self.get_path(relative_path[:-1], True)
			if not os.path.isdir(path):
				return []
			for f in os.listdir(path):
				file = os.path.join(path, f)
				if filter is None or filter(file):
					paths.append(file)
		else:
			path = self.get_path(relative_path, True)
			if filter is None or filter(path):
				paths.append(path)
		return paths

projects_config = None
root_config = None
make_config = None
# search for projects.json
for i in range(0, 4):
	projects_file = os.path.join("../" * i, "projects.json")
	root_path = "../" * i
	if os.path.isfile(projects_file):
		with open(os.path.abspath(projects_file), encoding="utf-8") as file:
			projects_config = json.load(file)
		root_config = os.path.abspath(root_path)
		break
if projects_config is None:
	raise RuntimeError("failed to find projects.json")

# search for project make file json
if projects_config is not None:
	current_project_name = projects_config["current"]
	projects = projects_config["projects"]
	current_project_info = projects[current_project_name]
	current_project_folder = current_project_info["folder"]
	current_project_make = current_project_info["make_config"]

	for i in range(0, 4):
		make_file = os.path.join("../" * i, current_project_folder+"/"+current_project_make)
		if os.path.isfile(make_file):
			make_config = MakeConfig(make_file, root_config)

if make_config is None:
	raise RuntimeError("failed to find project make json file")


if __name__ == '__main__':
	print(make_config.get_value("native"))

