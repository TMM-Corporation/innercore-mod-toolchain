/// <reference path="./android.d.ts"/>


/**
 * Java object of the mod, contains some useful values and methonds
 */
declare var __mod__: java.lang.Object

/**
 * Mod name
 */
declare var __name__: string

/**
 * Full path to the mod's directory, ends with "/"
 */
declare var __dir__: string

/**
 * Main mod configuration manager, settings are stored in config.json file. For 
 * more information about config.json, see {@page Mod Configuration Files}
 */
declare var __config__: Config

/**
 * Full path to current Horizon pack directory
 */
declare var __packdir__: string


/**
 * @returns PreloaderAPI level, default is 1
 */
declare function getLevel(): number

declare function onLoaded(): void

declare function onModLoaded(): void

declare function onCallback(name: string, args: Object[]): void

declare function setupCallbacks(executable: any): void

/**
 * Writes message to the log, using specified log prefix
 * Prefix of the message = PRELOADER
 * @param message message to be logged
*/
declare function log(message: string): void

/**
 * Show toast with text message
 * And writes message to the log, using specified log prefix
 * Prefix of the message = PRELOADER-PRINT
 * @param message message to be logged
*/
declare function print(str: string): void


declare namespace Resources {

	function addRuntimePack(typeStr: string, name: string): string

	function getAllResourceDirectories(): string[]

	function getAllResourceDirectoriesPaths(): string[]

	function searchFilesInDir(result: Array<string>, baseDir: java.io.File, file: java.io.File, regex: string): void

	function getAllMatchingResourcesInDir(_directory: Object, regex: string): string[]

	function getAllMatchingResourcesInPath(_directory: Object, regex: string): string[]

	function getAllMatchingResources(regex: string): string[]

	function getResourcePathNoVariants(path: string): java.io.File | null

	function getResourcePath(path: string): string | null

}

