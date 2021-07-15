/// <reference path="core-engine.d.ts" />

type MinecraftDirection = number;

/**
 * If you want to create instances of the classes below in JS,
 * don't forget to call WRAP_JAVA
 */
declare namespace MineUtils {
    class Vec2f extends java.lang.Object {
        static readonly ZERO: Vec2f;
        static readonly ONE: Vec2f;
        static readonly UNIT_X: Vec2f;
        static readonly NEGATIVE_UNIT_X: Vec2f;
        static readonly UNIT_Y: Vec2f;
        static readonly NEGATIVE_UNIT_Y: Vec2f;
        static readonly MAX: Vec2f;
        static readonly MIN: Vec2f;
        readonly x: number;
        readonly y: number;
        constructor(x: number, y: number);
    }
    class Vec3d extends java.lang.Object {
        static readonly ZERO: Vec3d;
        readonly xCoord: number;
        readonly yCoord: number;
        readonly zCoord: number;
        constructor(x: number, y: number, z: number);
        constructor(vec: Vec3i);
        subtractReverse(vec: Vec3d): Vec3d;
        normalize(): Vec3d;
        dotProduct(vec: Vec3d): number;
        subtract(vec: Vec3d): Vec3d;
        subtract(x: number, y: number, z: number): Vec3d;
        add(vec: Vec3d): Vec3d;
        addVector(x: number, y: number, z: number): Vec3d;
        distanceTo(vec: Vec3d): number;
        squareDistanceTo(vec: Vec3d): number;
        squareDistanceTo(x: number, y: number, z: number): number;
        scale(val: number): Vec3d;
        lengthVector(): number;
        lengthSquared(): number;
        getIntermediateWithXValue(vec: Vec3d, x: number): Nullable<Vec3d>;
        getIntermediateWithYValue(vec: Vec3d, y: number): Nullable<Vec3d>;
        getIntermediateWithZValue(vec: Vec3d, z: number): Nullable<Vec3d>;
        rotatePitch(pitch: number): Vec3d;
        rotateYaw(yaw: number): Vec3d;
        static fromPitchYawVector(pyv: Vec2f): Vec3d;
        static fromPitchYaw(pitch: number, yaw: number): Vec3d;
    }
    class Vec3i extends java.lang.Object implements java.lang.Comparable<Vec3i> {
        static readonly NULL_VECTOR: Vec3i;
        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly vec: Vec3d;
        readonly side: number;
        constructor(x: number, y: number, z: number, side: number, vec: Vec3d);
        constructor(x: number, y: number, z: number, side: number, dx: number, dy: number, dz: number);
        constructor(x: number, y: number, z: number);
        compareTo(vec: Vec3i): number;
        getX(): number; getY(): number; getZ(): number;
        crossProduct(vec: Vec3i): Vec3i;
        getDistance(x: number, y: number, z: number): number;
        distanceSq(toX: number, toY: number, toZ: number): number;
        distanceSqToCenter(x: number, y: number, z: number): number;
        distanceSq(to: Vec3i): number;
    }
    class BlockPos extends Vec3i {
        static readonly ORIGIN: BlockPos;
        constructor(x: number, y: number, z: number, side: number, vec: Vec3d);
        constructor(x: number, y: number, z: number, side: number, dx: number, dy: number, dz: number);
        constructor(x: number, y: number, z: number);
        constructor(vec: Vec3d);
        constructor(vec: Vec3i);
        add(x: number, y: number, z: number): BlockPos;
        add(vec: Vec3i): BlockPos;
        subtract(vec: Vec3i): BlockPos;
        up(): BlockPos;
        up(n: number): BlockPos;
        down(): BlockPos;
        down(n: number): BlockPos;
        north(): BlockPos;
        north(n: number): BlockPos;
        south(): BlockPos;
        south(n: number): BlockPos;
        west(): BlockPos;
        west(n: number): BlockPos;
        east(): BlockPos;
        east(n: number): BlockPos;
        offset(facing: MinecraftDirection): BlockPos;
        offset(facing: MinecraftDirection, n: number): BlockPos;
        crossProduct(vec: Vec3i): BlockPos;
        toLong(): number;
        static fromLong(serialized: number): BlockPos;
        static getAllInBox(from: BlockPos, to: BlockPos): java.lang.Iterable<BlockPos>;
    }
    class AxisAlignedBB extends java.lang.Object {
        readonly minX: number;
        readonly minY: number;
        readonly minZ: number;
        readonly maxX: number;
        readonly maxY: number;
        readonly maxZ: number;
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
        constructor(pos: BlockPos);
        constructor(pos1: BlockPos, pos2: BlockPos);
        constructor(min: Vec3d, max: Vec3d);
        setMaxY(y: number): AxisAlignedBB;
        addCoord(x: number, y: number, z: number): AxisAlignedBB;
        expand(x: number, y: number, z: number): AxisAlignedBB;
        expandXyz(value: number): AxisAlignedBB;
        union(other: AxisAlignedBB): AxisAlignedBB;
        offset(x: number, y: number, z: number): AxisAlignedBB;
        offset(pos: BlockPos): AxisAlignedBB;
        calculateXOffset(other: AxisAlignedBB, offsetX: number): number;
        calculateYOffset(other: AxisAlignedBB, offsetY: number): number;
        calculateZOffset(other: AxisAlignedBB, offsetZ: number): number;
        intersectsWith(other: AxisAlignedBB): boolean;
        intersects(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        intersects(min: Vec3d, max: Vec3d): boolean;
        isVecInside(vec: Vec3d): boolean;
        getAverageEdgeLength(): number;
        contract(value: number): AxisAlignedBB;
        isClosest(vec1: Vec3d, vec2: Nullable<Vec3d>, vec3: Vec3d): boolean;
        collideWithXPlane(d: number, vec1: Vec3d, vec2: Vec3d): Nullable<Vec3d>;
        collideWithYPlane(d: number, vec1: Vec3d, vec2: Vec3d): Nullable<Vec3d>;
        collideWithZPlane(d: number, vec1: Vec3d, vec2: Vec3d): Nullable<Vec3d>;
        intersectsWithYZ(vec: Vec3d): boolean;
        intersectsWithXZ(vec: Vec3d): boolean;
        intersectsWithXY(vec: Vec3d): boolean;
        hasNaN(): boolean;
        getCenter(): Vec3d;
    }
    class MathHelper extends java.lang.Object {
        static roundUpToPowerOfTwo(value: number): number;
        static calculateLogBaseTwoDeBruijn(value: number): number;
        static calculateLogBaseTwo(value: number): number;
        static clamp_float(num: number, min: number, max: number): number;
        static clamp_int(num: number, min: number, max: number): number;
        static intFloorDiv(f: number): number;
    }
}

declare class ChiselMode extends java.lang.Object {
    getCandidates(player: number, pos: MineUtils.BlockPos, side: MinecraftDirection): java.lang.Iterable<MineUtils.BlockPos>;
    getBounds(side: MinecraftDirection): MineUtils.AxisAlignedBB;
    name(): string;
    getUnlocName(): string;
    getUnlocDescription(): string;
    getLocalizedName(): string;
    getLocalizedDescription(): string;
    getCacheState(origin: MineUtils.BlockPos, side: MinecraftDirection): number[];
    private constructor(desc: string);
    private constructor(name: Nullable<string>, desc: string);
    static readonly PANEL: ChiselMode;
    static readonly COLUMN: ChiselMode;
    static readonly ROW: ChiselMode;
    static readonly CONTIGUOUS: ChiselMode;
    static readonly CONTIGUOUS_2D: ChiselMode;
}

declare function WRAP_JAVA(name: "net.minecraft.util.math.Vec2f"): typeof MineUtils.Vec2f;
declare function WRAP_JAVA(name: "net.minecraft.util.math.Vec3d"): typeof MineUtils.Vec3d;
declare function WRAP_JAVA(name: "net.minecraft.util.math.Vec3i"): typeof MineUtils.Vec3i;
declare function WRAP_JAVA(name: "net.minecraft.util.math.BlockPos"): typeof MineUtils.BlockPos;
declare function WRAP_JAVA(name: "net.minecraft.util.math.AxisAlignedBB"): typeof MineUtils.AxisAlignedBB;
declare function WRAP_JAVA(name: "com.toxesfoxes.chisel.ChiselMode"): typeof ChiselMode;