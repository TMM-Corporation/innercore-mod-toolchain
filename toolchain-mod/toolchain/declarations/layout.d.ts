declare namespace Alignment {
    const LEFT: number;
    const CENTER_H: number;
    const RIGHT: number;
    const TOP: number;
    const CENTER_V: number;
    const BOTTOM: number;
    const CENTER: number;
}
/**
 * immutable rectangle, that represents ui area
 */
declare class UiRect {
    constructor(...args: any[]);
    x1: any;
    y1: any;
    x2: any;
    width: any;
    y2: any;
    height: any;
    zIndex: number;
    scale: number;
    inherit(other: any, zIndexAdd: any): UiRect;
    setZIndex(z: any): void;
    isNull(): boolean;
    addPadding(left: any, top: any, right: any, bottom: any): UiRect;
    scaled(toWidth: any): UiRect;
}
declare class RenderedUiContent {
    backgroundColorElement: {
        type: string;
        color: number;
    };
    elements: {};
    drawing: {
        type: string;
        color: number;
    }[];
    drawingIds: {};
    subscribers: any[];
    _release(element: any): void;
    mountView(id: any, type: any, renderedView: any): void;
    unmountView(id: any): void;
    clear(): void;
    setBackgroundColor(color: any): void;
}
declare namespace RenderedUiContent {
    const TYPE_DRAWING: string;
    const TYPE_ELEMENT: string;
}
declare namespace Utils {
    function parseColor(color: any, fallback: any): any;
    function parseColor(color: any, fallback: any): any;
    function parseColorInDescription(desc: any, propName: any, fallback: any): void;
    function parseColorInDescription(desc: any, propName: any, fallback: any): void;
}
declare class WorkerThread {
    _queue: any[];
    _thread: any;
    _aLock: java.util.concurrent.locks.ReentrantLock;
    _qLock: java.util.concurrent.locks.ReentrantLock;
    enqueue(action: any): QueuedAction;
    clear(): void;
    clearAndAwait(): void;
    awaitAll(): void;
    runSynced(action: any): void;
}
declare class QueuedAction {
    constructor(action: any);
    action: any;
    errorHandler: (e: any) => any;
    successHandler: (result: any) => void;
    run(): void;
    then(successHandler: any): QueuedAction;
    error(errorHandler: any): QueuedAction;
}
declare class ParserStorage {
    _storage: {};
    _resolvers: {};
    get(scope: any, id: any, fallbackFactory: any): any;
    resolve(scope: any, id: any): any;
    store(scope: any, id: any, value: any): any;
    remove(scope: any, id: any): any;
    addResolver(scope: any, resolver: any): void;
}
declare namespace ParserStorage {
    const _defaultStorage: ParserStorage;
    function getDefault(): ParserStorage;
    const SCOPE_VIEW: string;
    const SCOPE_WINDOW_LAYOUT: string;
    const allScopes: string[];
}
declare class ParserBase {
    constructor(storage: any);
    storage: any;
    _errorHandlerSection: any[];
    _errors: any[];
    _embedded: {};
    _pushErrorHandlerSection(name: any): void;
    _popErrorHandlerSection(): any;
    _reportError(error: any): void;
    clearErrors(): void;
    throwErrors(): void;
    _pushEmbedded(name: any, json: any): void;
    _popEmbedded(name: any): void;
    _getCurrentlyEmbedded(name: any): any;
}
declare namespace FileUtils {
    const _error: any;
    function resolvePath(path: any): any;
    function resolvePath(path: any): any;
    function readText(path: any): string;
    function readText(path: any): string;
    function readJson(path: any): any;
    function readJson(path: any): any;
    function getError(): any;
    function getError(): any;
}
declare class UiFileReader {
    constructor(storage: any, defaultScope: any);
    storage: any;
    defaultScope: any;
    _errorReceivers: any[];
    addErrorReceiver(receiver: any): UiFileReader;
    _reportError(error: any): void;
    readFile(file: any): void;
    readDirectory(path: any): void;
}
declare namespace UiFileReader {
    const _defaultReader: UiFileReader;
    function getDefault(): UiFileReader;
}
declare namespace UiStaticParser {
    function parseWindowGroup(json: any): UiWindowGroup;
    function parseWindowGroup(json: any): UiWindowGroup;
    function parseSingleWindow(json: any): any;
    function parseSingleWindow(json: any): any;
    function parseWindows(json: any): any;
    function parseWindows(json: any): any;
    function parseViews(json: any): any;
    function parseViews(json: any): any;
    function parseView(json: any, strict: any): any;
    function parseView(json: any, strict: any): any;
}
declare class ViewParser extends ParserBase {
    constructor(storage: any);
    _resolve(json: any): any;
    _parseViews(json: any): any;
    parseViews(json: any, section: any): any;
    parseView(json: any, strict: any, section: any): any;
    newPlaceholderView(): UiLinearLayout;
}
declare namespace ViewParser {
    const _viewFactories: {};
    function addViewFactory(name: any, factory: any): void;
    function addDefaultViewFactory(name: any, clazz: any): void;
    function getViewFactory(name: any): any;
}
declare class WindowParser extends ParserBase {
    constructor(viewParser: any, storage: any);
    viewParser: any;
    _resolve(json: any): any;
    _getIdFromJson(json: any): any;
    _parseConstraints(constraints: any, windowsMap: any): {};
    _parseWindow(window: any, windowMap: any, json: any): void;
    parseWindowsIntoMap(json: any): {};
    _windowsMapToGroup(windowsMap: any): UiWindowGroup;
    _windowsMapToSingle(windowsMap: any): any;
    parseWindows(json: any): any;
    parseWindowGroup(json: any): UiWindowGroup;
    parseSingleWindow(json: any): any;
    getViewParser(): any;
}
declare class UiView {
    parent: any;
    window: any;
    uid: string;
    rect: UiRect;
    _avalilableRect: any;
    _cachedWidth: number;
    _cachedHeight: number;
    width: number;
    height: number;
    padding: number[];
    _realignQueued: boolean;
    setUid(uid: any): UiView;
    getViewById(id: any): UiView;
    addAllViewsWithId(result: any, id: any): void;
    setSize(width: any, height: any): UiView;
    setPadding(...padding: any[]): UiView;
    getParent(): any;
    setParent(parent: any): void;
    setWindow(window: any): void;
    parseJson(parser: any, json: any): void;
    mount(renderedContent: any): void;
    unmount(renderedContent: any): void;
    update(): void;
    measureAndRealign(availableRect: any): UiRect;
    onMeasureAndRealign(availableRect: any): UiRect;
    measureSize(availableRect: any, fillHorizontal: any, fillVertical: any): {
        width: any;
        height: any;
    };
    requestMeasureAndRealign(): void;
    _enqueueRealignAsRoot(): void;
    isAffectedByChildRealign(): boolean;
    onChildRealigned(): void;
}
declare namespace UiView {
    const nextId: number;
    const WRAP: number;
    const FILL: number;
}
declare class UiNullView extends UiView {
}
declare class UiViewGroup extends UiView {
    isUiViewGroup: boolean;
    children: any[];
    setChildren(children: any): UiViewGroup;
    parseChildren(parser: any, children: any): void;
}
declare class UiAbsoluteLayout extends UiViewGroup {
}
declare class UiGrid extends UiViewGroup {
    grid: {};
    rows: any[];
    columns: any[];
    measure(): void;
}
declare class UiLinearLayout extends UiViewGroup {
    constructor(orientation: any);
    isHorizontal: boolean;
    setOrientation(orientation: any): void;
}
declare namespace UiLinearLayout {
    const VERTICAL: string;
    const HORIZONTAL: string;
}
/**
 *
 */
declare class UiPanel extends UiViewGroup {
    constructor(width: any, internalWidth: any, internalHeight: any);
    oWidth: any;
    oHeight: number;
    iWidth: any;
    iHeight: any;
}
declare class UiDescriptionBasedView extends UiView {
    constructor(description: any);
    subscribers: any[];
    description: any;
    _measuredOffsetX: number;
    _measuredOffsetY: number;
    parse(description: any): any;
    setDescription(description: any): void;
    render(): void;
    getScopeType(): string;
    setMeasuredOffset(x: any, y: any): void;
    rebuild(renderedElement: any, rect: any): void;
    subscribe(target: any, rectProvider: any): void;
    unsubscribe(target: any): void;
}
declare class UiRenderedElementSet {
    constructor(elements: any);
    elements: any;
    isElemSet: boolean;
}
declare class UiImageView extends UiDescriptionBasedView {
    constructor(description: any);
    _measuredWidth: number;
    _measuredHeight: number;
}
declare class UiButtonView extends UiImageView {
    constructor(description: any);
}
declare class UiFrameView extends UiDescriptionBasedView {
    constructor(description: any);
    _measuredWidth: number;
    _measuredHeight: number;
}
declare class UiSlotView extends UiDescriptionBasedView {
    constructor(description: any);
    _measuredSize: number;
    setLinkedSlotName(name: any): UiSlotView;
}
declare class UiInventorySlotView extends UiSlotView {
    constructor(description: any);
}
declare let JavaString: typeof java.lang.String;
declare let StringBuilder: typeof java.lang.StringBuilder;
declare class UiTextView extends UiDescriptionBasedView {
    constructor(description: any);
    measuredText: string;
    _addEndingToLastLine(lines: any, maxLen: any): void;
    _splitInLines(lines: any, text: any, maxLen: any, maxLines: any, wrapWords: any): any;
    _formatText(text: any, maxLen: any, maxLines: any, wrapWords: any): any[];
}
declare class UiWindowConstraints {
    isUiWindowConstraints: boolean;
    uid: number;
    left: {
        target: any;
        side: string;
        offset: number;
    };
    right: {
        target: any;
        side: string;
        offset: number;
    };
    top: {
        target: any;
        side: string;
        offset: number;
    };
    bottom: {
        target: any;
        side: string;
        offset: number;
    };
    width: number;
    height: number;
    listeners: any[];
    addListener(listener: any): void;
    _detach(name: any, constraint: any): void;
    _attach(name: any, constraint: any): {
        target: any;
        offset: number;
        side: any;
    };
    _parseConstraints(constraints: any): any;
    clear(): void;
    addConstraints(constraints: any): UiWindowConstraints;
    detachRootConstraints(): void;
    setSize(width: any, height: any): void;
    _calcXBounds(last: any, cache: any): {
        x1: any;
        x2: any;
    };
    _calcXBoundsAndClip(last: any, cache: any): {
        x1: number;
        x2: number;
    };
    _calcYBounds(last: any, cache: any): {
        y1: any;
        y2: any;
    };
    _calcYBoundsAndClip(last: any, cache: any): {
        y1: number;
        y2: number;
    };
    getRect(): UiRect;
    getLocation(): {
        x: any;
        y: any;
        width: any;
        height: any;
    };
    dispatchChangedEvent(_cache: any): void;
}
declare namespace UiWindowConstraints {
    const _nextUid: number;
    namespace _namesAndOpposites {
        const left: string;
        const right: string;
        const top: string;
        const bottom: string;
    }
    namespace _rectCoordBySide {
        const left_1: string;
        export { left_1 as left };
        const right_1: string;
        export { right_1 as right };
        const top_1: string;
        export { top_1 as top };
        const bottom_1: string;
        export { bottom_1 as bottom };
    }
    function parse(obj: any): any;
    const Root: UiWindowConstraintsRoot;
}
declare class UiWindowConstraintsRoot extends UiWindowConstraints {
    rect: UiRect;
}
declare class UiWindowGroup {
    isUiWindowGroup: boolean;
    defaultContainer: UI.Container;
    windowGroup: UI.WindowGroup;
    _windows: {};
    _nextName: number;
    _nextUniqueName(): string;
    addWindow(...args: any[]): any;
    removeWindowByName(name: any): void;
    getWindow(name: any): any;
    getAllNames(): string[];
    open(): void;
    close(): void;
    refresh(): void;
    getNativeWindow(): UI.WindowGroup;
    getViewById(id: any): any;
    getAllViewsById(id: any): any[];
    addAllViewsWithId(result: any, id: any): void;
}
declare class UiWindow {
    constructor(constraints: any, contentSize: any);
    isUiWindow: boolean;
    defaultContainer: UI.Container;
    content: RenderedUiContent;
    worker: WorkerThread;
    constraints: any;
    _contentSize: {
        scale: any;
        width: any;
        height: any;
        strict: any;
    };
    _contentRect: UiRect;
    _windowRect: UiRect;
    _windowLocation: any;
    _windowDescription: {
        location: any;
        elements: {};
        drawing: {
            type: string;
            color: number;
        }[];
    };
    window: UI.Window;
    view: any;
    setBackgroundColor(color: any): UiWindow;
    setView(view: any): void;
    _parseContentSizeDescription(description: any): {
        scale: any;
        width: any;
        height: any;
        strict: any;
    };
    _updateRectAndLocation(): void;
    _applyLocation(): void;
    setContentSize(contentSize: any, preventUpdate: any): void;
    setConstraints(constraints: any): void;
    addConstraints(constraints: any): UiWindow;
    getRect(): UiRect;
    enqueue(action: any): QueuedAction;
    queueLocationUpdate(): void;
    queueBoundLocationsUpdate(): void;
    queueRefresh(): void;
    open(): void;
    refresh(): void;
    close(): void;
    getNativeWindow(): UI.Window;
    getViewById(id: any): any;
    getAllViewsById(id: any): any[];
    addAllViewsWithId(result: any, id: any): void;
}
declare namespace UiWindow {
    const SCALE_DEFAULT: number;
    const SCALE_AUTO: number;
}
