// Copyright (C) 2020-2026 New Entity Operations Inc.
// MIT License
// https://NewEntity.io
// repo: https://github.com/NewEntityAI/newentity.git
// npm: newentity
// newentity.js
// Version 1.0 (2026/05/20)

let timeLoadedStart = null;
let timeLoadedEnd = null;
function benchmarkInitRuntime() {
  timeLoadedStart = new Date().getTime();
}
benchmarkInitRuntime();
let runtimeTimeInstanceInitialization = 0;
let STATUS_IPC = "ACCEPTING";
const ON = true;
const OFF = false;
const OUTLINK = ON;
const HOST = "<YOUR_SITE_HERE>";
const presetAnchorLocalDomain = "<YOUR_LOCAL_IP_HERE>";
const presetAnchorLocalVerbose = "newentity";
const rootLocal = "<YOUR_NEW_ENTITY_ROOT_HERE>";
const idInstance = "<YOUR_INSTANCE_ID_HERE>";
const enforceHTTPS = 1;
const HTTPS_ONLY = 1;
const IS_LOCAL = 1;
let statusNetwork = true;
let statusLastWas = true;
let statusCycles = 0;
const presetAnchorUrl = window.location.href;
const presetAnchorLocalPin = "//";
let [anchorLocalDomain, HOST_LOCAL_PORT, HOST_NOW, HOST_LOCAL_PORT_NEWENTITY, NEWENTITY_NOW, CDN_NOW] = Array(6).fill("");
if (presetAnchorUrl.includes(presetAnchorLocalPin + presetAnchorLocalVerbose)) {
  anchorLocalDomain = presetAnchorLocalVerbose;
} else {
  anchorLocalDomain = presetAnchorLocalDomain;
}
const HOST_LOCAL = anchorLocalDomain;
const HOST_LOCAL_CDN = anchorLocalDomain;
const HOST_LOCAL_CDN_PORT = ":<YOUR_LOCAL_CDN_PORT_HERE>";
const HOST_LOCAL_NEWENTITY = anchorLocalDomain;
const NEWENTITY = "<YOUR_NEWENTITY_HOST_HERE>";
const CDN = "<YOUR_ASSET_PUBLIC_LOCATION_HERE>";
const keyCDN = "/<YOUR_CDN_KEY_HERE>";
const sockINOUT = "/AIREP/";
const themePreferred = "light";
const themeDark = "themeDark.css";
const themeLight = "themeLight.css";
const themeFallback = themeLight;
let SPA_ORIGIN = "https://" + presetAnchorLocalVerbose;
let SPA_ORIGIN_PORT = ":<YOUR_EXAMPLE_PORT_HERE>";
let SPA_ORIGIN_COMPILED = SPA_ORIGIN + SPA_ORIGIN_PORT;
let lastActivePath = "";
if (HTTPS_ONLY == 1) {
  if (IS_LOCAL == 0) {
    HOST_NOW = "https://" + HOST;
    CDN_NOW = "https://" + CDN;
    NEWENTITY_NOW = "https://" + NEWENTITY;
    SPA_ORIGIN = NEWENTITY_NOW;
    lastActivePath = SPA_ORIGIN;
  } else {
    HOST_NOW = "https://" + HOST_LOCAL + HOST_LOCAL_PORT;
    CDN_NOW = "https://" + HOST_LOCAL_CDN + HOST_LOCAL_CDN_PORT;
    NEWENTITY_NOW = "https://" + HOST_LOCAL_NEWENTITY + HOST_LOCAL_PORT_NEWENTITY;
    SPA_ORIGIN = SPA_ORIGIN_COMPILED;
    lastActivePath = SPA_ORIGIN;
  }
} else {
  if (IS_LOCAL == 0) {
    HOST_NOW = "http://" + HOST;
    CDN_NOW = "http://" + CDN;
    NEWENTITY_NOW = "http://" + NEWENTITY;
    SPA_ORIGIN = NEWENTITY_NOW;
    lastActivePath = SPA_ORIGIN;
  } else {
    HOST_NOW = "http://" + HOST_LOCAL + HOST_LOCAL_PORT;
    CDN_NOW = "http://" + HOST_LOCAL_CDN + HOST_LOCAL_CDN_PORT;
    NEWENTITY_NOW = "http://" + HOST_LOCAL_NEWENTITY + HOST_LOCAL_PORT_NEWENTITY;
    SPA_ORIGIN = SPA_ORIGIN_COMPILED;
    lastActivePath = SPA_ORIGIN;
  }
}
const HOST_NOW_ENDPOINT = "/enclave/ore/development";
const HOST_NOW_ENDPOINT_API = "/api/status-check?domain=";
const HOST_NOW_ENDPOINT_INSPECTION = "/enclave/inquisitor?inspectionPath=";
const HOST_NOW_ENDPOINT_PATH = "/enclave/home?currentPath=";
const HOST_NOW_OPERATIONS_PORT = "<YOUR_OPERATIONS_PORT_HERE>";
const HOST_NOW_OPERATIONS_PORT_API = "<YOUR_API_TRANSIENT_PORT_HERE>";
const HOST_NOW_RESOLVED_API = HOST_NOW + ":" + HOST_NOW_OPERATIONS_PORT_API + HOST_NOW_ENDPOINT_API;
const HOST_NOW_RESOLVED_INSPECTION = HOST_NOW + HOST_NOW_ENDPOINT_INSPECTION;
const HOST_NOW_RESOLVED_PATH = HOST_NOW + HOST_NOW_ENDPOINT_PATH;
const HOST_NOW_RESOLVED_SPA = HOST_NOW + HOST_NOW_ENDPOINT;
const HOST_OPERATIONS_PORT_LOCATION = HOST_NOW + ":" + HOST_NOW_OPERATIONS_PORT;
const booleanTrue = true;
const booleanFalse = false;
const cureMuted = "";
const cureLinebreak = "\n";
const symbolComma = ",";
const symbolComment = "//";
const symbolPipe = "|";
const symbolPound = "#";
const symbolQuoteTrippleDouble = '"""';
const symbolQuoteTrippleSingle = "'''";
const helperSeperator = "----------------------------------------";
const helperSeperatorStar = "****************************************";
const helperRepeat = "-";
const helperRepeatStar = "*";
const marginAdminMenuBlock = "377px";
const marginAdminMenuHidden = "-14px";
const marginExtraDataInstanceBlock = "377px";
const marginExtraDataInstanceHidden = "-14px";
const marginInformationOnlyBlock = "377x";
const marginInformationOnlyHidden = "0px";
const marginAuditPanelInquisitorBlock = "412px";
const marginAuditPanelInquisitorHidden = "-14px";
const transitionAdminMenu = "transition: visibility .6s linear .2s, width " + "0.1s linear; opacity: 1; visibility: visible;";
const transitionVanityMenu = "transition: visibility .6s linear .2s, width " + "0.1s linear; opacity: 1; visibility: visible;";
const HTML_DEFAULT_FILE_NOT_FOUND = "<div style='text-align: center; color:white; margin-top:233px;'>File not found</div>";
let toggleStateViewExpandNow = null;
let [defaultSrc, hrefUpdated, inTransitURL, originalHref, originalSrc, pathNow, srcUpdated] = Array(9).fill("");
const html = document.documentElement;
const body = document.body;
const fullPathIs = window.location.pathname + window.location.search + window.location.hash;
let globalTempIllusionValue = 0;
let modifierConstruct = {};
const sourceIconSlug = "/static/img/grandmaster/";
const sourceIconFile = "Badge1thumb.png";
const sourceIconDirectory = "Badge21thumb.png";
const sourceIconNotAvailable = "Badge35thumb.png";
const fullyQualifiedSource = CDN_NOW + keyCDN + sourceIconSlug;
const fullyQualifiedSourceIf = fullyQualifiedSource + sourceIconFile;
const fullyQualifiedSourceId = fullyQualifiedSource + sourceIconDirectory;
const fullyQualifiedSourceNa = fullyQualifiedSource + sourceIconNotAvailable;
const classifierQueueLookup = 10;
const descriptiveTitle = 9;
const imageFormat = 14;
const lastTouchY = 0;
const metaFeatures = 10;
const ownerCopyright = 11;
const recordCreationDate = 12;
const safetyRating = 13;
const touchScrollSpeedFactor = 1.5;
const wheelScrollSpeedFactor = 0.5;
let hasProtectedRegionalState = 0;
const blockLocation = "NONE";
const eventMouse = ON;
const eventMouseOver = ON;
const eventOperatorKey = ON;
const viewCollapse = "&#x2015";
const viewExpanded = "&#128065";
const FRAME_MACRO_WIDTH_A = 1023;
const FRAME_MACRO_HEIGHT_A = 644;
let depthZNow = 0;
let pixelBase = 0;
let screenX = 0;
let screenY = 0;
let screenZ = 0;
let screenRendX = 0;
let screenRendY = 0;
let screenRendZ = 0;
const POSel = "pSelected: ";
const screenXtext = " -> Width: ";
const screenYtext = " -> Height: ";
const screenZtext = " -> Depth: ";
const levelVisionRenderMax = 1720;
const levelVisionRenderMin = 400;
const levelVisionRenderMin1 = 520;
const levelVisionRenderMin2 = 780;
const levelVisionRenderMin3 = 1040;
const levelVisionRenderMin4 = 1360;
const weightVectorProcessorHDR = 7;
const weightVectorProcessorMinimal = 2;
const weightVectorProcessorMinimal3 = 3;
const weightVectorProcessorMinimal4 = 4;
const weightVectorProcessorMinimal5 = 5;
const weightVectorProcessorMinimal6 = 6;
const delayActionExtraInstanceAudit = 240;
const delayActionMacro = 240;
const originPoint = HOST_NOW;
const enclavePoint = "/enclave/home";
const deliveryPoint = CDN_NOW;
const newentityPoint = NEWENTITY_NOW;
const rootDomain = originPoint;
const pageCurrent = document.URL;
const sectionAbout = "/about/";
const sectionAPI = "/api/";
const sectionContent = "/content/";
const sectionEnclave = "/enclave/";
const sectionGatekeeper = "/gatekeeper/";
const sectionLegal = "/termsofservice/";
const sectionMail = "/mail/";
const sectionPhotos = "/photos/";
const sectionPlaylist = "/playlist/";
const sectionSkills = "/skills/";
const sectionTextpage = "/textpage/";
const sectionWriting = "/writing/";
const locationGatekeeper = "/gatekeeper/enter";
const locationMock = "/mock/";
const locationSiteMap = "/sitemap.xml";
const slugTextpageAssets = "assets";
const slugTextpageTerminal = "terminal";
const urlFullPathAIREP = originPoint + sockINOUT;
var urlFullPathMock = originPoint + locationMock;
const urlAbout = originPoint + sectionAbout;
const urlAPI = originPoint + sectionAPI;
const urlContent = originPoint + sectionContent;
const urlEnclave = originPoint + sectionEnclave;
const urlGatekeeper = originPoint + sectionGatekeeper;
const urlLegal = originPoint + sectionLegal;
const urlMail = originPoint + sectionMail;
const urlPhotos = originPoint + sectionPhotos;
const urlPlaylist = originPoint + sectionPlaylist;
const urlSkills = originPoint + sectionSkills;
const urlWriting = originPoint + sectionWriting;
const priorityAlpha = urlAbout;
const priorityBeta = urlMail;
const priorityGamma = urlPhotos;
const NEWENTITY_TEMPO = newentityPoint + "/tempo";
const enter = "enter";
const newentity_enter = sectionGatekeeper + enter;
const favoritePoint = "/photos/favorite";
const preferredModeFalse = 0;
const preferredModeTrue = 1;
const preferredLegacyFalse = 0;
const preferredLegacyTrue = 1;
const preferredTimeAlert = 5;
const preferredTAbase = 0;
const preferredTAa = 1;
const preferredTAb = 5;
const preferredTAc = 60;
const preferredTAunit = 'seconds';
const preferredNetworkImplosion = 4000;
const preferredTrackerInterval = 1000;
const preferredWindowMax = "MAX";
const startPresentationPath = "/photos/presentation";
const startingPointPresentation = originPoint + startPresentationPath;
const staticPaththumb = deliveryPoint + keyCDN + "/static/img/thumb/";
const staticPathimage = deliveryPoint + keyCDN + "/static/img/site-image/";
const contextInstanceActionFailure = "Can't perform that action";
const contextInstanceCalled = "Area";
const contextInstanceNotAvailable = "not available";
const contextInstanceProtectedCalled = "Protected";
const contextInstanceRan = "ran";
const defaultMetaSearchName = "core_host_site_feature";
const defaultVanityMapObject = 2;
const defaultVanityMapString = "Map: Entity-> Ryan McKenna, Apprentice Collection::: EntityScript-MEDIA-FORMAT: FEATURE00000001";
const endpointAssets = sectionTextpage + slugTextpageAssets;
const staticPaths = {
  thumb: staticPaththumb,
  image: staticPathimage
};
const destroyModeFrame = [["document.exitFullscreen", ["Generic", "No Hook Defined"]], ["document.msExitFullscreen", ["IE", "No Hook Defined"]], ["document.webkitExitFullscreen", ["Safari", "No Hook Defined"]]];
const openModeFrame = [["fullscreenAsset.requestFullscreen", ["Generic", "No Hook Defined"]], ["fullscreenAsset.msRequestFullscreen", ["IE", "No Hook Defined"]], ["fullscreenAsset.webkitRequestFullscreen", ["Safari", "No Hook Defined"]]];
let objectRequestGET = {
  "CURRENTSITEMAP": locationSiteMap,
  "DOMAIN": originPoint,
  "LOCATIONCOMM": sockINOUT
};
const mapTemplate = ["TitleMedia", "ClassifiersMedia", "ForSaleMedia", "RightsHolder", "YearCreated", "SafeForKids", "CollectionName", "ImageType"];
const collectionDefault = "Ryan McKenna, Apprentice Collection";
const collectionRightsHolder = "Ryan McKenna";
const lookupFactories = {
  "CollectionNameOptions": new Map([[0, collectionDefault]]),
  "ForSaleMedia": new Map([[0, "Not for Sale"], [1, "For Sale"]]),
  "RightsHolder": new Map([[0, collectionRightsHolder]]),
  "YearCreated": new Map([[0, "2005 or Before"], [1, "2009"], [2, "2010"], [3, "2011"], [4, "2012"], [5, "2013"], [6, "2014"], [7, "2015"], [8, "2016"], [9, "2017"], [10, "2018"], [11, "2019"], [12, "2020"], [13, "2021"], [14, "2022"], [15, "2023"], [16, "2024"]]),
  "SafeForKids": new Map([[0, "Not Safe for Kids"], [1, "Safe For Kids"]]),
  "ImageTypeOptions": new Map([[0, "jpg"], [1, "jpeg"], [2, "png"], [3, "tiff"], [4, "tif"], [5, "webp"], [6, "gif"], [7, "webm"], [8, "mp4"], [9, "mp3"]])
};
const queryTableUrl = ["/enclave/asset/", "/enclave/local/", "/enclave/network/"];
const internalTranslatorUrl = ["/enclave/manager/images", "/enclave/manager/images/", "/enclave/ore", "/enclave/ore/"];
const slugDescriptive = {
  startsWith: ["/about/", "/keys/", "/termsofservice/"]
};
let toggleState = localStorage.getItem('menuReduced') === 'true';
let toggleStateHand = localStorage.getItem('menuHandReduced') === 'true';
let toggleStateAdmin = localStorage.getItem('menuAdminReduced') === 'true';
let toggleStateExtraDataInstanceAudit = localStorage.getItem('extraDataInstanceAudit') === 'false';
let toggleStateVanity = localStorage.getItem('menuVanityReduced') === 'true';
let toggleStateViewExpand = localStorage.getItem('viewExpand') === 'true';
let localStorageImageRoot = localStorage.getItem('imageRoot') || false;
let localStorageImageVanity = localStorage.getItem('imageVanity') || false;
let divTreeInstanceNow = null;
let eventOperationLast = null;
let killRing = 0;
let hasGottenState = false;
let isAsc = false;
let isActiveMap = 1;
let isActiveTree = 0;
let isFileNow = 0;
let [isNestedScrolling, isScrollingInsideNestedDiv] = Array(2).fill(false);
let [isFilterDirectory, isFilterEntityScript, isFilterFile, isFilterNotAvailable] = Array(4).fill(false);
let [filterDefaultValueDirectory, filterDefaultValueEntityScript, filterDefaultValueFile, filterDefaultValueNotAvailable] = Array(4).fill(false);
let [filtersStateDirectory, filtersStateEntityScript, filtersStateFile, filtersStateNotAvailable] = Array(4).fill(true);
let counterTimeNow = 0;
let listCurred = [];
let clickCountSmoke = 0;
let indexEmulator = 0;
let isFirstEnterSmoke = true;
let pauseDurationsEmulator = [];
let pauseTimesEmulator = [];
let pauseIndexEmulator = 0;
let terminalInputText = cureMuted;
var [morphState, morphHandState, propertyState, toggleLockerlink, toggleViewExpand] = Array(5).fill(true);
var [propertyHandState, stateIsNowOff] = Array(2).fill(false);
let stateActive = "";
let stateDirectory = 0;
let stateExtraInstance = 0;
let stateFile = 0;
queNowSurvivalNoneState = 1;
[isDynamicWindowVisible, isDynamicHandWindowVisible] = Array(2).fill(false);
let [regionX, regionY, regionZ] = Array(3).fill(0);
runtimeCyclesInquisitorAudit = 0;
stateExtraInstanceNow = 0;
stateExtraInstanceNowNested = 0;
stateExtraInstanceNowPinLeft = 0;
stateInputNow = 0;
stateTextareaNow = 0;
textOptions = [];
typingTimeout = 0;
typingSpeed = 0;
[windowX, windowY, windowZ] = Array(3).fill(0);
let TOTALORIGINS = 0;
let exportedResponseNavigationEvent = null;
let exportedResponseNavigationKey = null;
try {
  document.getElementById("pathCurrentSlug").innerHTML;
} catch (error) {}
let DEBUGGING = false;
const DEBUGGING_MEDIA = false;
let skipVerboseEvents = false;
let SIMULATION_FORCE_ALT_EVENTS = false;
let DEBUGGINGfe = {
  DefaultDebugging: false,
  DefaultDebuggingAbort: false,
  DefaultDebuggingAJAX: false,
  DefaultDebuggingAlter: false,
  DefaultDebuggingAudit: false,
  DefaultDebuggingBrowsemeh: false,
  DefaultDebuggingBuild: false,
  DefaultDebuggingConfig: false,
  DefaultDebuggingData: false,
  DefaultDebuggingDynamic: false,
  DefaultDebuggingEvent: false,
  DefaultDebuggingFactory: false,
  DefaultDebuggingInitializers: false,
  DefaultDebuggingInquisitor: false,
  DefaultDebuggingInteractive: false,
  DefaultDebuggingInterface: false,
  DefaultDebuggingLegacy: false,
  DefaultDebuggingLockerlink: false,
  DefaultDebuggingMedia: false,
  DefaultDebuggingNetwork: false,
  DefaultDebuggingOperations: false,
  DefaultDebuggingOrigin: false,
  DefaultDebuggingPerformance: false,
  DefaultDebuggingPrecheck: false,
  DefaultDebuggingPreload: false,
  DefaultDebuggingRenderer: false,
  DefaultDebuggingResult: false,
  DefaultDebuggingSecurity: false,
  DefaultDebuggingSPA: false,
  DefaultDebuggingState: false,
  DefaultDebuggingText: false,
  DefaultDebuggingTime: false,
  DefaultDebuggingTheme: false,
  DefaultDebuggingVanity: false,
  DefaultDebuggingVerbose: false,
  DefaultDebuggingVerboseExtreme: false
};
function debuggingAbortBadFetch(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingAbort !== false) {
    console.log("ABORT=> status of current fetch was: " + STATUS);
  }
}
function debuggingAJAXExecution(INSTANCE, OBJECTPARTIAL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingAJAX !== false) {
    console.log("AJAX=> " + INSTANCE + ": " + OBJECTPARTIAL);
  }
}
function debuggingAlterWindow(ALTEROBJECT, PROPERTY, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingAlert !== false) {
    if (ALTEROBJECT === null || ALTEROBJECT === undefined || PROPERTY === null || PROPERTY === undefined) {
      console.log("ALTER=> Window property could not be set because ALTEROBJECT, or PROPERTY is formatted incorrectly");
    } else {
      if (STATUS === 'ran') {
        console.log("ALTER=> " + ALTEROBJECT + " (" + STATUS + ") with the property: " + property);
      } else {
        console.log("ALTER=> Window property could not be set");
      }
    }
  }
}
function debuggingAuditState(CYCLE, INSTANCE, OBJECT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingAudit !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("AUDIT=> " + CYCLE + "::: " + INSTANCE + ": " + OBJECT);
  }
}
function debuggingBrowsemehFetchInitial(ENDPOINT, FACTORYLOOKUP, FUNCTION, PATHSSTATIC, TEMPLATEMAP, UNITYOBJECT, VALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBrowsemeh !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("BROWSEMEH=> " + FUNCTION + " running...");
    console.log("BROWSEMEH=> endpoint: " + ENDPOINT);
    console.log("BROWSEMEH=> mapTemplate: " + TEMPLATEMAP);
    console.log("BROWSEMEH=> staticPaths: " + PATHSSTATIC);
    console.log("BROWSEMEH=> lookupFactories: " + FACTORYLOOKUP);
    console.log("BROWSEMEH=> illusionValue: " + VALUE);
    console.log("BROWSEMEH=> unityObject: " + UNITYOBJECT);
  }
}
function debuggingBuildCodePre(CODE, PRE, TEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log(helperSeperator);
    console.log("Building the entities render-ready runtimes...");
    console.log(helperSeperator);
    console.log("BUILD=> Building a code pre in the html frame...");
    if (PRE !== null || PRE !== undefined) {
      console.log("BUILD=> the pre block was either not available or undefined");
    } else {
      console.log("BUILD=> PRE (" + PRE + ") was operatable with the text: ");
      console.log("BUILD=> PRE text: \n" + TEXT);
      console.log("BUILD=> PRE code: \n" + CODE);
    }
  }
}
function debuggingBuildCodePreEmpty() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> No code elements were found.");
  }
}
function debuggingBuildCodePreNodeScalar(NODELIST, SCALARVALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> Text block rendered on scalarValue: " + SCALARVALUE + " with an element: " + NODELIST);
  }
}
function debuggingBuildCodePreNodeOperation(NODEACTIVEPRE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> Operating on the pre code NodeList: " + NODEACTIVEPRE);
  }
}
function debuggingBuildCodePreNoPresentation() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> block empty: presentation was not matched");
  }
}
function debuggingBuildCodePreTextEmpty() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> No text-block elements were found in that pre");
  }
}
function debuggingBuildWindowRenderedOn(URLCURRENT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBuild !== false) {
    console.log("BUILD=> Build was attempted on (currentURL) window: " + URLCURRENT);
  }
}
function debuggingConfigStandard(TYPE, VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingConfig !== false) {
    if (TYPE.startsWith("---")) {
      console.log(TYPE);
    } else if (TYPE.startsWith('-**')) {
      console.log(VALUE);
      console.log(helperSeperator);
    } else {
      console.log("loaded=> " + TYPE + " ::: value: " + VALUE);
    }
  }
}
function debuggingConfigUnpack(TYPE, UNPACKOBJECT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingConfig !== false) {
    console.log("CONFIG=> unpack: " + TYPE);
    console.log(helperSeperator);
    Object.keys(UNPACKOBJECT).forEach(key => {
      console.log("key=> " + key + " ::: value: " + UNPACKOBJECT[key]);
    });
  }
}
function debuggingEventDynamicKey(KEYDYNAMIC) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> WINDOW: Dynamic KEY (" + KEYDYNAMIC + ")");
  }
}
function debuggingEventDynamicKeyFailure(CLASSFAILURE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> WINDOW: Dynamic KEY failure, element " + CLASSFAILURE + " not on the page.");
  }
}
function debuggingEventKeydown(MACRO, ZKEY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> keydown (" + ZKEY + ")::: macro, resolved location: " + LOCATION);
  }
}
function debuggingEventKeyInformation(EVENTKEYINFORMATION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> Operator Key Activated (" + EVENTKEYINFORMATION);
  }
}
function debuggingEventLegacyKeypress(EVENT, LEGACY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> Legacy keypress (" + LEGACY + "): " + EVENT);
  }
}
function debuggingEventMouse(EVENT, OBJECT, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false) {
    console.log("EVENT=> " + EVENT + "::: " + STATUS + "(" + OBJECT + ")");
  }
}
function debuggingEventStatefulQue(CLASSIFIER, EVENT, LABEL, METHOD, OBJECT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingEvent !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("EVENT=> " + EVENT + ", " + CLASSIFIER + "(" + METHOD + ")::: " + LABEL + ": " + OBJECT);
  }
}
function debuggingFactoryMutedStringTo(CONTEXT, STRINGVALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> providing a assembled string (" + CONTEXT + "): " + STRINGVALUE);
  }
}
function debuggingFactoryObjectPathBaseGenerator(BASE, NOW) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> urlBase was " + BASE + " (length: " + BASE.pathname.length + ") with a pathname of: " + BASE.pathname);
    console.log("FACTORY=> urlNow was " + NOW + " with a pathname of: " + NOW.pathname);
  }
}
function debuggingFactoryRendererAssetValue(KEY, VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingRenderer !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> information::: Asset instance information: " + KEY + ", Asset value: " + VALUE);
  }
}
function debuggingFactoryRendererAssetFailure(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingRenderer !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> information::: Asset instance information retrieval failure: " + ERROR);
  }
}
function debuggingFactoryRendererClass(TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingRenderer !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> renderer::: node (class) is: " + TYPE);
  }
}
function debuggingFactoryRendererClassPreset(TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingRenderer !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> renderer preset::: node (class) is: " + TYPE);
  }
}
function debuggingFactoryRendererClassNth(TYPE, WEIGHT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingRenderer !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> renderer::: node (class: nth - " + WEIGHT + ") is: " + TYPE);
  }
}
function debuggingFactoryResultPathBaseGenerator(RESULT, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> resulting base-wieghted (" + TYPE + ") path is: " + RESULT);
  }
}
function debuggingFactoryStackConstantStatus(CONSTANT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> stackConstant: " + CONSTANT);
  }
}
function debuggingFactoryStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> STATUS: " + STATUS);
  }
}
function debuggingFactoryStatusLast(STATUSLAST) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> STATUSLAST: " + STATUSLAST);
  }
}
function debuggingFactorySubmissionCheckWindow(WINDOWINSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> checking submission on window instance (" + TYPE + "): " + WINDOWINSTANCE);
  }
}
function debuggingFactorySubmissionComplete(CONTEXT, WINDOWINSTANCE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    if (CONTEXT === 0) {
      console.log("FACTORY=> no submission possible in the instance: " + WINDOWINSTANCE);
    } else {
      console.log("FACTORY=> " + CONTEXT + " submission on " + WINDOWINSTANCE + " is complete");
    }
  }
}
function debuggingFactoryViewCollapseCurrent(ATTRIBUTE, DIRECTIVE, LAST, START, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingResult !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("FACTORY=> ViewCollapseCurrent");
    console.log(" * attributeStack=> " + ATTRIBUTE);
    console.log(" * directiveChild=> " + DIRECTIVE);
    console.log(" * type=> " + TYPE);
    console.log(" * start=> " + START);
    console.log(" * last=> " + LAST);
  }
}
function debuggingDataInstance(CLASS, INSTANCE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingData !== false) {
    console.log("DATA=> *DataInstance (" + INSTANCE + "): " + CLASS);
  }
}
function debuggingDataInTransitValueSet(CLASSWAS, FILTER, VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingData !== false) {
    console.log("DATA=> *Data InTransitValue Set (" + CLASSWAS + ", to: " + FILTER + "): " + VALUE);
  }
}
function debuggingDataLocalValueSet(CLASSFILTER, CLASSVALUE, VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingData !== false) {
    console.log("DATA=> *Data LocalValue Set (" + CLASSFILTER + ", to: " + CLASSVALUE + "): " + VALUE);
  }
}
function debuggingDataLocalValue(CLASS, INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingData !== false) {
    console.log("DATA=> *Data LocalValue (" + CLASS + ", type: " + TYPE + "): " + INSTANCE);
  }
}
function debuggingDynamicWindowToggleKey(KEY, STATEWINDOWHIDDEN) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingDynamic !== false) {
    console.log("WINDOW=> Dynamic (toggled with KEY (" + KEY + "), hidden now?: " + STATEWINDOWHIDDEN);
  }
}
function debuggingInitializersVanityStatus(VANITY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInitializers !== false) {
    console.log("INIT=> VANITY (status): " + VANITY);
  }
}
function debuggingInquisitorActiveClass(CLASS, STATE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> stateActive (class: " + CLASS + "): " + STATE);
  }
}
function debuggingInquisitorExpand(BASENODE, EVENT, PARENT, PATH, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> Node Submit (" + TYPE + ")::: boolean: " + BASENODE);
    console.log("* EVENT => " + EVENT);
    console.log("* PARENT=> " + PARENT);
    console.log("* PATH  => " + PATH);
    console.log("* * Submited Node from the tree");
  }
}
function debuggingInquisitorExpansionUnpacking(EXPANSIONOBJECT, TREE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> Expansion Object");
    console.log("EXPANSIONOBJECT is: " + EXPANSIONOBJECT);
    console.log("* OBJECT.getAttribute('anchor') => " + EXPANSIONOBJECT.getAttribute('anchor'));
    console.log("* OBJECT.innerHTML (" + TREE + ")=> " + EXPANSIONOBJECT.innerHTML);
    console.log("* OBJECT.outerHTML (" + TREE + ")=> " + EXPANSIONOBJECT.outerHTML);
  }
}
function debuggingInquisitorNavigating(ACTION, PATH) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> Navigating " + ACTION + ": " + PATH);
  }
}
function debuggingInquisitorNodeAnchor(ANCHORNOW, NODENOW) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> NodeAnchor");
    console.log(" * ANCHOR => " + ANCHORNOW);
    console.log(" * NODE   => " + NODENOW);
  }
}
function debuggingInquisitorNodeSubmit(BASENODE, EVENT, PARENT, PATH, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> Node Submit (" + TYPE + ")::: boolean: " + BASENODE);
    console.log("* EVENT => " + EVENT);
    console.log("* PARENT=> " + PARENT);
    console.log("* PATH  => " + PATH);
    console.log("* * Submited Node from the tree");
  }
}
function debuggingInquisitorOperationsStatus(CLASS, OBJECT, PROPERTYACTION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false) {
    console.log("INQUISITOR=> status (" + CLASS + "), " + PROPERTYACTION + ": " + OBJECT);
  }
}
function debuggingInquisitorOperationsStatusVerbose(CLASS, OBJECT, PROPERTYACTION) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false && DEBUGGINGfe.DefaultDebuggingVerbose)) {
    console.log("INQUISITOR=> status (" + CLASS + "), " + PROPERTYACTION + ": " + OBJECT);
  }
}
function debuggingInquisitorQueryState(STATEQUERY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INQUISITOR=> query state was::: " + STATEQUERY);
  }
}
function debuggingInquisitorVentEvent(CASE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInquisitor !== false && DEBUGGINGfe.DefaultDebuggingVerbose)) {
    console.log("INQUISITOR=> vent event: " + CASE);
  }
}
function debuggingInteractiveHumanPageStats(pageCurrent, spentTime) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInteractive !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERACTIVE=> Human Page Stats");
    console.log("* Time spend on current page (" + pageCurrent + "): " + spentTime);
    console.log("* * You're now contributing a tempo slug to CORE.HOST: " + spentTime);
    console.log("* Time submited (" + spentTime + ") to CORE.HOST for page: " + pageCurrent);
  }
}
function debuggingInterfaceAction(ACTION, INSTANCE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> ACTION (" + ACTION + "): " + INSTANCE);
  }
}
function debuggingInterfaceCondition(CASE, CONDITION, INSTANCE, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + TYPE + " case (" + CASE + ") was " + CONDITION + " block: " + INSTANCE);
  }
}
function debuggingInterfaceFameActionAvailable(ACTION, ACTIONOBJECT) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + ACTION + " is available: " + ACTIONOBJECT);
  }
}
function debuggingInterfaceFameActionNotAvailable(ACTION) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + ACTION + " is not available on this page");
  }
}
function debuggingInterfaceFrameAudit(CLASS, INSTANCE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingAudit !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + CLASS + ": " + INSTANCE);
  }
}
function debuggingInterfaceFrameHandMorphStatus(STATUS, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> element handMorph (" + TYPE + ") status: " + STATUS);
  }
}
function debuggingInterfaceFrameHeightNow(FRAME, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame height (" + TYPE + "): " + FRAME);
  }
}
function debuggingInterfaceFrameHookError(ERROR) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame hook error: " + ERROR);
  }
}
function debuggingInterfaceFrameHookStatus(CLASS, INSTANCE, STATUS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + CLASS + "::: " + STATUS + ": " + INSTANCE);
  }
}
function debuggingInterfaceFrameHookValues(HOOK, OPTION, PLATFORM) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> Hooks Summary");
    console.log(" * Mode-type=>  dynamic:       " + OPTION);
    console.log(" * Extensions=> platform:      " + PLATFORM);
    console.log(" * Extensions-> runtime-hooks: " + HOOK);
  }
}
function debuggingInterfaceFrameMapConstruction(TYPEBACKEND) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> Instance frame construction for Map using: " + TYPEBACKEND);
  }
}
function debuggingInterfaceFrameRunner(STATUS, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> runner " + TYPE + " " + STATUS);
  }
}
function debuggingInterfaceFrameWeights(CLASSINSTANCE, SCALARVALUECLASS, SCALARVALUEOBJECT, SCALARWEIGHTCLASS, SCALARWEIGHTOBJECT) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INSTANCE=> " + CLASSINSTANCE + "::: [" + SCALARVALUECLASS + ": " + SCALARVALUEOBJECT + "], [" + SCALARWEIGHTCLASS + ": " + SCALARWEIGHTOBJECT + "]");
  }
}
function debuggingInterfaceFrameWidthCycle(CYCLE, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame width cycle (" + TYPE + "): " + CYCLE);
  }
}
function debuggingInterfaceFrameWidthNow(FRAME, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame width (" + TYPE + "): " + FRAME);
  }
}
function debuggingInterfaceFrameWidthGTFrameMacroWidth(CASE, TYPE, TYPE_MACRO) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame width, case " + CASE + " (" + TYPE + ") was > " + TYPE_MACRO);
  }
}
function debuggingInterfaceFrameWidthLTFrameMacroWidth(CASE, TYPE, TYPE_MACRO) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> frame width, case " + CASE + " (" + TYPE + ") was < " + TYPE_MACRO);
  }
}
function debuggingInterfaceFrameWidthGotAll() {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> acquired all frames to build special windows");
  }
}
function debuggingInterfaceFrameWidthMasterSwitchBranched(WAS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> branched the master switch, as: " + WAS);
  }
}
function debuggingInterfaceFrameWidthCase(CASE, STATELOCAL, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> switch case " + CASE + " state (" + TYPE + ") is: " + STATELOCAL);
  }
}
function debuggingInterfaceFrameWidthMode(MODE, VALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> switch mode (" + MODE + "): " + VALUE);
  }
}
function debuggingInterfaceFrameWidthMasterSwitchState(CASE, STATE, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> branched master switch case " + CASE + " state (" + TYPE + ") is: " + STATE);
  }
}
function debuggingInterfaceHeightExtraDataInstance(CUTOFFA, CUTOFFB, CUTOFFC, CUTOFFD, HEIGHTA, HEIGHTB, HEIGHTC, HEIGHTD, MAXBOUNDRY, MAXBOUNDRYA, MAXBOUNDRYB, MAXBOUNDRYC) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> setting the correct height for EXTRA=> dataInstance (extraDataInstance)...");
    console.log("INTERFACE=> The first cutoff was: " + CUTOFFA + ", metting the second cutoff at: " + CUTOFFB);
    console.log("INTERFACE=> The third cutoff was: " + CUTOFFC + ", metting the last cutoff at: " + CUTOFFD);
    console.log("INTERFACE=> Height A: " + HEIGHTA + ", Height B: " + HEIGHTB + ", Height C: " + HEIGHTC + ", Height D: " + HEIGHTD);
    console.log("INTERFACE=> Max boundry: " + MAXBOUNDRY);
    console.log("INTERFACE=> Max boundry sub values, A: " + MAXBOUNDRYA + ", B: " + MAXBOUNDRYB + ", C: " + MAXBOUNDRYC);
  }
}
function debuggingInterfaceIntrospectingTree(TREE, STACK) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> Introspecting Tree::: " + TREE + ": " + STACK);
  }
}
function debuggingInterfaceMasterSwitch(SWITCH, TYPE, WAS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> switch (" + TYPE + "), is: " + SWITCH);
  }
}
function debuggingInterfaceDomActiveElement(CONTEXT, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> " + TYPE + " " + CONTEXT);
  }
}
function debuggingInterfaceDomOldHtml(ELEMENT, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> old DOM HTML element: " + TYPE);
    console.log(ELEMENT);
  }
}
function debuggingInterfaceDomShadowIframe(FRAME, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> iFrame shadow DOM (" + TYPE + ") located with: " + FRAME);
  }
}
function debuggingInterfaceEndpointFoundation(FOUNDATION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> endpoint is " + FOUNDATION);
  }
}
function debuggingInterfaceEventsXYRegion(REGIONX, REGIONY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> provide established region: intercept (X): " + REGIONX + ", provide intercept (Y): " + REGIONY);
  }
}
function debuggingInterfaceFrameCreated(FRAMESTACK) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> frame (created)::: stack: ");
    console.log(" * FRAMESTACK");
    Object.keys(FRAMESTACK).forEach(slug => {
      console.log(" * decompiled slug: " + FRAMESTACK[slug]);
    });
  }
}
function debuggingInterfaceFrameSet(FRAME, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> frame (" + TYPE + ") was set as: " + FRAME);
  }
}
function debuggingInterfaceFrameStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> frame: " + STATUS);
  }
}
function debuggingInterfaceFrameStatusError(ERRORSTATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> frame: " + ERRORSTATUS);
  }
}
function debuggingEventXYVectorPosition2D(XLABEL, XOBJECT, YLABEL, YOBJECT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("EVENT=> [" + XLABEL + ": " + XOBJECT + ", " + YLABEL + ": " + YOBJECT + "]");
  }
}
function debuggingInterfaceFrameViewSwitchStatus(ACTION, CLASS, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> " + CLASS + " " + ACTION + ": " + STATUS);
  }
}
function debuggingInterfaceNetworkStateChanged(NOW) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> change detected: network is now " + NOW);
  }
}
function debuggingInterfaceNetworkStatusState(CASE, LASTSTATUS, NETWORKSTATUS, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("INTERFACE=> comparison of " + TYPE + " with case (" + CASE + "): and the statusLastWas = " + LASTSTATUS + ", and statusNetwork = " + NETWORKSTATUS);
  }
}
function debuggingInterfaceNoState(INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> " + TYPE + " had no runtime state, was: " + INSTANCE);
  }
}
function debuggingInterfaceOnOffState(CONDITION, CONTEXT, STATESTATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> state (" + CONTEXT + ") was " + CONDITION + ": " + STATESTATUS);
  }
}
function debuggingInterfaceStateQue(MESSAGE, QUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> state que was " + QUE + " with message: " + MESSAGE);
  }
}
function debuggingInterfaceStep(STEP) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false) {
    console.log("INTERFACE=> step: " + STEP);
  }
}
function debuggingInterfaceStateUnrestrained(STATE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> state: " + STATE);
  }
}
function defaultDebuggingInterfaceValueSet(CLASS, INSTANCE, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("INTERFACE=> value (" + CLASS + ")::: " + LABEL + ": " + INSTANCE);
  }
}
function debuggingLegacySupportStatus(OBJECTLEGACY, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingInterface !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("LEGACY=> " + STATUS + ": " + OBJECTLEGACY);
  }
}
function debuggingLockerlinkNotOnPage(CONTEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingLockerlink !== false) {
    console.log("LOCKERLINK=> " + CONTEXT + " was not found on this page");
  }
}
function debuggingMediaAccessibleImages(ACCESSIBLEIMAGES) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> accesibleImagesStack (" + ACCESSIBLEIMAGES + ")");
  }
}
function debuggingMediaAssetNotLocated(ERROR, ASSETENCASING) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> asset within " + ASSETENCASING + " not located with: " + ERROR);
  }
}
function debuggingMediaCallbackGenerated(INSTANCETYPE, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> callback generated (" + INSTANCETYPE + "): " + LABEL);
  }
}
function debuggingMediaCallbackImage(INSTANCE, SOURCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> callback expected for " + TYPE + " with source (src): " + SOURCE);
    console.log("MEDIA=> " + INSTANCE + " Url deconstruction on SRC: " + SOURCE.src + " and TYPE: " + TYPE);
  }
}
function debuggingMediaCallbackImageProcessing(TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> callback (" + TYPE + ") is processing...");
  }
}
function debuggingMediaCallbackImageWas(TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> callback (" + TYPE + ") was: " + TYPE);
  }
}
function debuggingMediaChangeImage(INSTANCEIMAGE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> Image change: " + INSTANCEIMAGE);
  }
}
function debuggingMediaConstructorMapBuilt(CONSTRUCTEDMAP) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> ConstructedMapBuild (built) as: ${CONSTRUCTEDMAP}`);
  }
}
function debuggingMediaCoreAssetInstance(GLOBALRIGHTSCODE, RATINGMEDIA, RIGHTSHOLDERMEDIA, TITLEMEDIA, TYPEMEDIA, YEARFROMMEDIA) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> CORE.HOST Asset::: View: ${TITLEMEDIA}, Copyright (C) ${YEARFROMMEDIA} ${RIGHTSHOLDERMEDIA}. This media work has been rated: ${RATINGMEDIA} -> TYPE of Media (${TYPEMEDIA}). The Global Rights Code for this asset is: ${GLOBALRIGHTSCODE}`);
  }
}
function debuggingMediaCoreAssetInstanceError(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> CORE.HOST Asset::: Some of, or all of your defined classifiers were not found with error: ${ERROR}`);
  }
}
function debuggingMediaNewEntityHostedAssetNA() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> CORE []( 0 . 0 )[] that hosted asset name or the asset itself does not exist.`);
  }
}
function debuggingMediaDataKey(INSTANCE, KEY) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> key: ${KEY}, instance: ${INSTANCE}`);
  }
}
function debuggingMediaFieldIdentifier(FIELDIDENTIFIER) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> CORE.HOST fieldIdentifier was: ${FIELDIDENTIFIER}`);
  }
}
function debuggingMediaFetchAndCreateMaps(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> fetch (fetchAndCreateMaps) status: ${STATUS}`);
  }
}
function debuggingMediaFetchedText(TEXT) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> data (text document:fetch): " + TEXT);
  }
}
function debuggingMediaFetchedTextHeaders(HEADERS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> data (text headers:fetch): " + HEADERS);
  }
}
function debuggingMediaFetchedTextParse(DATA, ROW) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=>  data (entity row:${ROW}): ${DATA}`);
  }
}
function debuggingMediaFieldIdentifierNotSet(error) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> ERROR: fieldIdentifier could not be set::: " + error);
    console.log("MEDIA=> Falling back to the preset fieldIdentifier");
  }
}
function debuggingMediaFinishedWritingSilo(SILO, TEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> Silo ${TEXT} (finished writing to): ${SILO}, size::: ${SILO.size}`);
  }
}
function debuggingMediaHitValue(HITVALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> theHitValue: ${HITVALUE}`);
  }
}
function debuggingMediaIllusionValue(OBJECT, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> IllusionValue (" + TYPE + "): " + OBJECT);
  }
}
function debuggingMediaIllusionValueError(VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> in-transit illusionValue encountered an error. It may be undefined. It may be that no map was found or parsable, is: " + VALUE);
  }
}
function debuggingMediaIllusionValueInTransit(VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> in-transit illusionValue: " + VALUE);
  }
}
function debuggingMediaIllusionValueState(CYCLE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBrowsemah !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> illusionValue state cycle: " + CYCLE);
  }
}
function debuggingMediaImageTypesAvailable() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(helperSeperator);
    console.log("MEDIA=> LOOKUP <:> ImageType's available:");
    console.log(helperSeperator);
    lookupFactories["ImageTypeOptions"].forEach((value, key) => {
      console.log(`MEDIA=> LOOKUP <:> key: ${key} ::: value: ${value}`);
    });
    console.log(helperSeperator);
  }
}
function debuggingMediaIndexMap(MAP, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> generating media-map, index of: " + TYPE);
    console.log("MEDIA=> nth destination 0 element " + TYPE + " is: " + MAP);
  }
}
function debuggingMediaIndexMapAmount(AMOUNT, INSTANCE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingBrowsemah !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> generated " + AMOUNT + " media-map instances on nth destination 0 element " + INSTANCE);
  }
}
function debuggingMediaIndexMapGeneratedAs(GENERATEDMAP) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(helperSeperator);
    console.log("MEDIA=> generated map as >>> ");
    var localCounter = 0;
    console.log(GENERATEDMAP);
    console.log(helperSeperator);
  }
}
function debuggingMediaIsExhausted() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> this site has reached the exhausted point and there are no more media pieces to display.`);
  }
}
function debuggingMediaLookupQueryPath(QUERYPATH, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> using the lookup query path ${TYPE}: ${QUERYPATH}`);
  }
}
function debuggingMediaLoopIth(ITHVALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> loop (${ITHVALUE})`);
  }
}
function debuggingMediaIndexMapOverride(INDEX, MAPOVERRIDE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> index-> map ${INDEX}: [...${MAPOVERRIDE}]`);
  }
}
function debuggingMediaMappedData(ITHVALUE, MAPPEDDATA) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> Map ${ITHVALUE} with data:`);
    console.log(`${MAPPEDDATA}`);
  }
}
function debuggingMediaIthTemplate(HEADERINDEX, RAWVALUE, TEMPLATE, VALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> Template::: ${TEMPLATE}, Header Index: ${HEADERINDEX}, Raw Value: ${RAWVALUE}, Mapped Value: ${VALUE}`);
  }
}
function debuggingMediaNaturalProperties(WIDTHINSTANCE, WIDTHNAME, HEIGHTINSTANCE, HEIGHTNAME) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log(`MEDIA=> wEW> (${WIDTHNAME})::: THEN ${WIDTHINSTANCE}px ::: mEW> (${HEIGHTNAME}) now: ${HEIGHTINSTANCE}px`);
  }
}
function debuggingMediaNoValidUtilityBuildNode() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> build node, no valid utily found for either mainImageDefault or mainImageBackground");
  }
}
function debuggingMediaMainImageDefaultNA() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> 'mainImageDefault' was not available");
  }
}
function debuggingMediaMapSize(IDMAP, MAPSIZEBYID) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> map id (" + IDMAP + ") had " + MAPSIZEBYID + " maps");
  }
}
function debuggingMediaNonEmptyArray() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> Generic array is not empty");
  }
}
function debuggingMediaNonInteractivePage() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> You are currently viewing a non-interactive page.");
  }
}
function debuggingMediaPOSel(INSTANCE, WEIGHT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> POSel (" + INSTANCE + ") weight: " + WEIGHT);
  }
}
function debuggingMediaRetrievalEndpoint(INSTANCE, SLUG) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> retrieval (" + INSTANCE + "), SLUG::: " + SLUG);
  }
}
function debuggingMediaRootSourceStatus(CONTEXT, STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    if (CONTEXT === "background") {
      console.log("MEDIA=> root source " + STATUS + " for " + TYPE + " " + CONTEXT + " falling back to standard " + CONTEXT + " image");
    } else if (CONTEXT === "presentation") {
      console.log("MEDIA=> root source " + STATUS + " for " + TYPE + " " + CONTEXT + " mode");
    } else if (CONTEXT === "favorite") {
      console.log("MEDIA=> root source " + STATUS + " for " + TYPE + " " + CONTEXT + " mode");
    }
  }
}
function debuggingMediaStackUnpack(ENDPOINT, FACTORY, MAP, OBJECT, PATHSSTATIC, TEMPVALUE, VALUE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingFactory !== false) {
    console.log("MEDIA=> final commit: media resolvable instance: ");
    console.log("* globalTempIllusionValue: " + TEMPVALUE);
    console.log("* endpointAssets:          " + ENDPOINT);
    console.log("* mapTemplate:             " + MAP);
    console.log("* staticPaths:             " + PATHSSTATIC);
    console.log("* lookupFactories:         " + FACTORY);
    console.log("* illusionValue:           " + VALUE);
    console.log("* unityObject:             " + OBJECT);
  }
}
function debuggingMediaStateAIS(LABEL, OBJECTALT, STATE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("MEDIA=> AIS (" + LABEL + ") state::: " + STATE + ": " + OBJECTALT);
  }
}
function debuggingMediaStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("MEDIA=> STATUS: " + STATUS);
  }
}
function debuggingMediaTestUnityObjectResolution(ENTITY, ENTITYTEXT, OBJECT, OBJECTGETTEXT, OBJECTLABEL) {
  try {
    document.getElementById(OBJECTGETTEXT).src = ENTITY.get(OBJECT);
    if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
      console.log("MEDIA=> " + OBJECTGETTEXT + " resolved with the " + ENTITYTEXT + "(" + OBJECTLABEL + "): " + OBJECT);
    }
  } catch (error) {
    if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
      console.log("MEDIA=> " + OBJECTTEXT + ": not located with: " + error);
    }
  }
}
function debuggingMediaTypeIs(MEDIATYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> the MediaType is: ${MEDIATYPE}`);
  }
}
function debuggingMediaUnavailableInstance(INSTANCE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> no media can be loaded here because it's not an allowed instance, was: " + INSTANCE);
  }
}
function debuggingMediaUnpackAssemblyCheck(INSTANCE, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> unpack check sample with headers.indexOf('" + TYPE + "'): " + INSTANCE);
  }
}
function debuggingMediaUnpackAssemblyRow(INSTANCE, ROW, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log(`MEDIA=> unpacked row for data[${TYPE}], row: ${ROW} and instance ::: ${INSTANCE}`);
  }
}
function debuggingMediaUrlInjest(SLUG, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("MEDIA=> endpoint fetch::: type (" + TYPE + "), and slugs: ");
    Object.keys(SLUG).forEach(slug => {
      console.log("MEDIA=> decompiled slug (" + TYPE + "): " + SLUG[slug]);
    });
  }
}
function debuggingMediaUtilityBuildNodeError(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> build node, error: " + ERROR);
  }
}
function debuggingMediaUnmatchedSegmentOnDCL() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> segment unmatched: On DOMContentLoaded");
  }
}
function debuggingMediaWindowPathCheck(INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> using " + TYPE + " to build a checker: " + INSTANCE);
  }
}
function debuggingMediaWindowProperties(STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> Window: " + TYPE + " is now " + STATUS);
  }
}
function debuggingMediaWindowPropertyUrl(PROPERTY, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> in transit url: " + TYPE + " is now: " + PROPERTY);
  }
}
function debuggingMediaWindowPropertyUrlPart(PROPERTY, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingMedia !== false) {
    console.log("MEDIA=> in transit url part: " + TYPE + " is now: " + PROPERTY);
  }
}
function debuggingNetworkCheckStatus(CASE, COROUTINE, CONTEXT, STATUS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false && DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> status (" + CASE + ") " + CONTEXT + ": " + STATUS + ", " + COROUTINE);
  }
}
function debuggingNetworkCheckStatusHeader(CYLCESSTATUS, LASTSTATUS, NETWORKSTATUS, STATE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false && DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> Checking for network connectivity...");
    console.log("NETWORK=> stateIsNowOff: " + STATE);
    console.log("NETWORK=> Received a status update for statusNetwork: " + NETWORKSTATUS);
    console.log("NETWORK=> statusLastWas (n: " + CYLCESSTATUS + "): " + LASTSTATUS);
  }
}
function debuggingNetworkCheckStatusIndicator(STATUS, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false && DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> " + TYPE + " status for statusIndicatorOnlineMain is: " + STATUS);
  }
}
function debuggingNetworkContactSubmission(OBJECTPOST, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false && DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    Object.keys(OBJECTPOST).forEach(slug => {
      console.log("NETWORK=> decompiled object (" + TYPE + "): " + OBJECTPOST[slug]);
    });
  }
}
function debuggingNetworkNewEntityStatus(STATUSCOMMUNICATION) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false && DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> This entity is " + STATUSCOMMUNICATION + " with CORE.HOST");
  }
}
function debuggingNetworkEdgeCaseFix(FIX) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> edge case fix for " + FIX);
  }
}
function debuggingNetworkEdgeCaseStatus(STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> edge case for " + TYPE + " status: " + STATUS);
  }
}
function debuggingNetworkErrorMakeMockRequest(ERROR, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> Error (" + TYPE + "): " + ERROR);
  }
}
function debuggingNetworkIPCStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log(STATUS + "-> dependent ipc connections");
  }
}
function debuggingNetworkOperationAJAXInjestEndpoint(ENDPOINT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> AJAX Injest Endpoint operation underway on endpoint: " + ENDPOINT);
  }
}
function debuggingNetworkMediaFetchInstanceStatus(FUNCTION, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    if (FUNCTION === "init") {
      console.log("NETWORK=> init::: function " + FUNCTION + " is " + STATUS);
    } else {
      console.log("NETWORK=> function " + FUNCTION + " is " + STATUS);
    }
  }
}
function debuggingNetworkMediaFetchInstanceVanity(VANITY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> instance VANITY detected as: " + VANITY);
  }
}
function debuggingNetworkMakeMockRequest(OBJECT, TYPE, TYPEREQUEST) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> MockRequest (" + TYPEREQUEST + ") for " + TYPE + ": " + OBJECT);
  }
}
function debuggingNetworkMakeMockRequestCsrf(STATUS, TOKEN, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> MockRequest token status (" + STATUS + " [" + TYPE + "]: " + TOKEN);
  }
}
function debuggingNetworkMakeMockRequestStatus(STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> MockRequest status (" + TYPE + "): " + STATUS);
  }
}
function debuggingNetworkMakeRequest(OBJECT, TYPE, TYPEREQUEST) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> MockRequest (" + TYPEREQUEST + ") for " + TYPE + ": " + OBJECT);
  }
}
function debuggingNetworkMakeRequestCsrf(STATUS, TOKEN, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> MockRequest token status (" + STATUS + " [" + TYPE + "]: " + TOKEN);
  }
}
function debuggingNetworkMakeRequestStatus(STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> Request status (" + TYPE + "): " + STATUS);
  }
}
function debuggingNetworkNavigatingTo(PATH) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> DOM navigation is being pushed to state, navigating to: " + PATH);
  }
}
function debuggingNetworkOperationAJAXInjestEndpointFailure(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> AJAX Injest Endpoint operation: Error during the fetch routine: " + ERROR);
  }
}
function debuggingNetworkQueryValueNotScoped(ALLOWEDSCOPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> You need to query an allowed type of origin update: i.e. " + ALLOWEDSCOPE);
  }
}
function debuggingNetworkResponseBasedDefault(TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + TYPE + ": Possibly undefined reference");
  }
}
function debuggingNetworkResponseBasedHref(HREF, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + TYPE + " based href assignment to: " + HREF);
  }
}
function debuggingNetworkResponseBasedSrc(SRC, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + TYPE + " based src assignment to: " + SRC);
  }
}
function debuggingNetworkResponseBasedUrl(URL, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + TYPE + " based url: " + URL);
  }
}
function debuggingNetworkResponseBasedUrlOriginal(HREFORIGINAL, INSTANCECURRENT, TYPE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> the current instance (" + TYPE + ") is: " + INSTANCECURRENT + ", value::: " + HREFORIGINAL);
  }
}
function debuggingNetworkResponseBasedUrlOriginalUpdated(HREFUPDATED) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> the HREF was updated to: " + HREFUPDATED);
  }
}
function debuggingNetworkResponseStatusCode(CODE, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> Response status code::: " + STATUS + ": " + CODE);
  }
}
function debuggingNetworkResponseLedLinkChange(CONTEXT, LINKS) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + CONTEXT + " led links changed to: " + LINKS);
  }
}
function debuggingNetworkResponseValue(CONTEXT, VALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false)) {
    console.log("NETWORK=> " + CONTEXT + " response value: ");
    console.log(VALUE);
  }
}
function debuggingNetworkShadowRevival(SHADOW) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> a shadow revival occured with value: " + SHADOW);
  }
}
function debuggingNetworkSPACorrectionHref(HREF) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> the SPA correction href is: " + HREF);
  }
}
function debuggingNetworkSPAFetchValue(INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> local curedPath is now " + TYPE + ": " + INSTANCE);
  }
}
function debuggingNetworkSPASetLAP(LAP) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> the last active path lastActivePath: " + LAP);
  }
}
function debuggingNetworkSPAUpdateLinkOrigins(CONTAINER, PATHCURED) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> containerClass (PATH: " + PATHCURED + ") was passed as: " + CONTAINER);
  }
}
function debuggingNetworkState(CONTEXT, VALUE) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> state is (" + CONTEXT + "): " + VALUE);
  }
}
function debuggingNetworkStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> status: " + STATUS);
  }
}
function debuggingNetworkStatusVerbose(CLASS, STATUSNETWORK) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("NETWORK=> status (" + CLASS + "): " + STATUSNETWORK);
  }
}
function debuggingNetworkStatusLocalOnly(error) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> Error while fetching external wide-network resource, local network-only: " + error);
  }
}
function debuggingNetworkStatusMagicHand(STATUS, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    if (STATUS === "NA") {
      console.log("NETWORK=> status (magic hand: " + TYPE + "): No magic hand was available. This page likely does not use one.");
    } else if (STATUS === "UPDATING") {
      console.log("NETWORK=> status (magic hand: " + TYPE + "): Updating origins.");
    } else {
      console.log("NETWORK=> status (magic hand: " + TYPE + "): Found");
    }
  }
}
function debuggingNetworkFetchEvent(url, options) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> Assembling an abort-ready controller now: [url=> [" + url + "], " + "options=> [" + options + "]]");
  }
}
function debuggingNetworkFetchError(ERROR, INSTANCE, PROMISE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> " + INSTANCE + " " + PROMISE + " error: " + ERROR);
  }
}
function debuggingNetworkFetchResponse(RESPONSETEXT, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> fetch response (text): " + RESPONSETEXT);
    if (RESPONSETEXT === undefined) {
      console.log("NETWORK=> (LABEL: " + LABEL + ") was undefined");
    }
  }
}
function debuggingNetworkFetchResponseResolved(RESPONSERESOLVEDTEXT, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> fetch response (text): " + RESPONSERESOLVEDTEXT);
    if (RESPONSERESOLVEDTEXT === undefined) {
      console.log("NETWORK=> (LABEL: " + LABEL + ") was undefined");
    }
  }
}
function debuggingNetworkStatusMap(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    if (STATUS === "offline") {
      console.log("NETWORK=> Map not found. Are you connected to the Internet?");
    } else if (STATUS === "bunk") {
      console.log("NETWORK=> Map loading error. It's BUNK!");
    } else {
      console.log("NETWORK=> Map loading error. It's not working (generic error)!");
    }
  }
}
function debuggingNetworkStatusOnline(zNetworkPromise) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingNetwork !== false) {
    console.log("NETWORK=> You are online: " + zNetworkPromise);
  }
}
function debuggingOperationsChunkArray(ARRAY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    for (let [key, value] of ARRAY.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
}
function debuggingOperationsChunkEvaluation(CHUNKNUMBER, CHUNKSIZE, END, START) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Chunk Evaluation [chunk: " + CHUNKNUMBER + "], [chunk.size: " + CHUNKSIZE + "], [start: " + START + "], [end: " + END + "]");
  }
}
function debuggingOperationsChunkVerifyFirst(RESULT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Chunk verify::: first instance  was: " + RESULT);
  }
}
function debuggingOperationsEndpoint(endpoint) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    try {
      console.log("OPERATIONS=> Operating on endpoint: " + endpoint);
    } catch (error) {
      console.log("OPERATIONS=> Endpoint operations error: " + error);
    }
  }
}
function debuggingOperationsEndpointPassTwo(ENDPOINT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    try {
      console.log("OPERATIONS=> Operating on endpoint (Pass Two): " + ENDPOINT);
    } catch (error) {
      console.log("OPERATIONS=> Endpoint operations error (Pass Two): " + error);
    }
  }
}
function debuggingOperationsExhausted(PROCESSEXHAUSTED) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> exhausted process (" + PROCESSEXHAUSTED + ")");
  }
}
function debuggingOperationsInstance(INSTANCE, OBJECT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> " + INSTANCE + ": " + OBJECT);
  }
}
function debuggingOperationsInstanceError(ERROR, TEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> " + TEXT + ": " + ERROR);
  }
}
function debuggingOperationsInterfaceOptimization(STATUSOPTIMIZATION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Interface Optimization: " + STATUSOPTIMIZATION);
  }
}
function debuggingOperationsInterfaceOptimizationError(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Interface Optimization error: " + ERROR);
  }
}
function debuggingOperationsLegacyAlert(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Legacy alert: " + STATUS);
  }
}
function debuggingOperationsMaintenanceVerbose(INSTANCE, LOGIC) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Maintenance verbose for " + INSTANCE + " with: " + LOGIC);
  }
}
function debuggingOperationsModernMode(MODECONTEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Modern Mode context: " + MODECONTEXT);
  }
}
function debuggingOperationsTextSpecial(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> Text, special::: " + STATUS);
  }
}
function debuggingOperationsTokenGenerated() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> token: generated");
  }
}
function debuggingOperationsTokenGenerationEmpty(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> token empty: " + ERROR);
  }
}
function debuggingOperationsTokenGenerationFailure(INFORMATION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> token failure: " + INFORMATION);
  }
}
function debuggingOperationsUploadFailure(STATUSINFORMATION) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> upload failure: " + STATUSINFORMATION);
  }
}
function debuggingOperationsUploadSuccess() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> all chunks were uploaded successfully");
  }
}
function debuggingOperationsUrlEndpoint(URLENDPOINT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> url endpoint: " + URLENDPOINT);
  }
}
function debuggingOperationsUrls(STACKURL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOperations !== false) {
    console.log("OPERATIONS=> urls: " + STACKURL);
  }
}
function debuggingOriginCorrection(TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> " + TYPE + ", correcting navigation origin");
  }
}
function debuggingOriginEndpointNow(OBJECT, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> " + TYPE + ": " + OBJECT);
  }
}
function debuggingOriginError(ERROR, METHOD, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> Error::: " + METHOD + "(" + STATUS + "): " + ERROR);
  }
}
function debuggingOriginLoadedSequence(SEQUENCE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> SPA, sequence loaded: " + SEQUENCE);
  }
}
function debuggingOriginSpaAlert(ALERT, REQUESTTYPE, TEXT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> You are " + ALERT + " " + REQUESTTYPE + " that " + TEXT);
  }
}
function debuggingOriginSpaEndpoint(ENDPOINT, INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> Spa Resolution (" + TYPE + ")::: " + INSTANCE + ": " + ENDPOINT);
  }
}
function debuggingOriginSpaFrame(FETCHEDFROM, INSTANCE, LINKVECTOR, LASTHREF, LASTSRC) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> SPA::: " + FETCHEDFROM + ": [[href] (last), " + LASTHREF + "], [[src] (last), " + LASTSRC + "], LINKS, " + LINKVECTOR + ", TEMPINSTANCE (innerHTML): " + INSTANCE);
  }
}
function debuggingOriginSpaLoaded() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> SPA::: successfully loaded");
  }
}
function debuggingOriginSpaNode(LINKSINTROSPECTION, SPANODE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> NODE SPA: [[key: " + SPANODE + "] =:= [value: " + LINKSINTROSPECTION + "]]");
  }
}
function debuggingOriginSpaResolution(DESTINATION, INSTANCE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingOrigin !== false) {
    console.log("ORIGIN=> Spa Resolution (" + TYPE + ")::: " + INSTANCE + ": " + DESTINATION);
  }
}
function debuggingPerformanceLoadTime(TIME, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingPerformance !== false) {
    console.log("PERFORMANCE=> " + TYPE + " runtime fully loaded in: " + TIME);
    console.log("PERFORMANCE=> -> -> -> to seconds: " + TIME * .001 + " seconds");
  }
}
function debuggingPerformanceInputKey(CONTEXT, KEY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingPerformance !== false) {
    if (CONTEXT === 'z') {
      console.log("PERFORMANCE=> input key (" + KEY + ") unsupported and uncaptured: was*" + CONTEXT);
    } else {
      console.log("PERFORMANCE=> input key (" + KEY + "): " + CONTEXT);
    }
  }
}
function debuggingPerformancePromptForNewBrowser() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingPerformance !== false) {
    console.log("PERFORMANCE=> Try a newer brower to improve site function and loading speeds.");
  }
}
function debuggingSecurityCTokenNow(CLASSTOKEN, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> token (" + CLASSTOKEN + "): " + STATUS);
  }
}
function debuggingSecurityKillActive(INSTANCE, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> Activity check: " + INSTANCE + " (" + LABEL + ")");
  }
}
function debuggingSecurityKillActiveState(INSTANCE, LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> Activity state: " + INSTANCE + " (" + LABEL + ")");
  }
}
function debuggingSecurityKillRingStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    if (STATUS === 0) {
      console.log("SECURITY=> Kill: Ring is down (" + STATUS + ")");
    } else {
      console.log("SECURITY=> Kill: Ring is up (" + STATUS + ")");
    }
  }
}
function debuggingSecurityKillRingStatusNoStateDetermination() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("SECURITY=> No state determination could be made for the protected region.");
  }
}
function debuggingSecurityKillRingStatusNotClear() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> You are currently within a protected portion of the application.");
  }
}
function debuggingSecurityKillRingStatusProtected() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> You are within a protected region, no event escalation occuring... falling back...");
  }
}
function debuggingSecurityProtectedAreaAlert(QUERYINSTANCE, STATE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> You are within a protected region (state: " + STATE + "): " + QUERYINSTANCE);
  }
}
function debuggingSecurityTokenPost(CLASSTOKEN, OBJECTTOKEN) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSecurity !== false) {
    console.log("SECURITY=> token (" + CLASSTOKEN + "): " + OBJECTTOKEN);
  }
}
function debuggingSimulationProvidePNG(TEXT, zAsset) {
  if (DEBUGGINGfe.DefaultDebugging !== false && SIMULATION_FORCE_ALT_EVENTS === true) {
    console.log("SIMULATION=> force " + TEXT + ": " + zAsset);
  }
}
function debuggingSPAError(ERROR) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSPA !== false) {
    console.log("SPA=> Failed with error=> " + ERROR);
  }
}
function debuggingSPAShadowInstance(LABEL) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSPA !== false) {
    console.log("SPA=> Instance (" + LABEL + ")");
  }
}
function debuggingSPAShadowInstanceStatus(CLASS, STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingSPA !== false) {
    console.log("SPA=> Instance Status (" + CLASS + "): " + STATUS);
  }
}
function debuggingStateMachineRuntime(STATE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("STATE=> type (" + TYPE + ") is=> " + STATE);
  }
}
function debuggingStateMorph(STATEMORPH, STORAGETYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingState !== false) {
    console.log("STATE=> storage type (" + STORAGETYPE + ") is: " + STATEMORPH);
  }
}
function debuggingStatePrecheck(PRECHECK) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingPrecheck !== false) {
    console.log("PRECHECK state is=> " + PRECHECK);
  }
}
function debuggingStatePreloaded(ASSET) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingState !== false || DEBUGGINGfe.DefaultDebuggingPreload !== false) {
    console.log("PRELOAD type (" + ASSET + "), status is=> loaded");
  }
}
function debuggingTextComment(CASE, NODE, SCALARVALUE, SCALARWEIGHT) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingText !== false) {
    console.log("TEXT=> comment case (" + CASE + ") on NODE class: " + NODE + "::: scalarValue of: " + SCALARVALUE + " and Position scalarWeightZ: " + SCALARWEIGHT);
  }
}
function debuggingThemePrefers(THEMEKEY) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTheme !== false) {
    console.log("THEME=> prefers: " + THEMEKEY);
  }
}
function debuggingThemePrefersEmpty() {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTheme !== false) {
    console.log("THEME=> prefers: empty (null)");
  }
}
function debuggingThemePrefersMatch(MATCH, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTheme !== false) {
    try {
      console.log("THEME=> prefers (" + TYPE + "): .matches as: " + MATCH.matches);
    } catch (error) {
      console.log("THEME=> prefers (" + TYPE + "): .matches did not work");
    }
  }
}
function debuggingThemePrefersUpdating(UPDATE, TYPE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTheme !== false) {
    try {
      console.log("THEME=> prefers (" + TYPE + "): updating to: " + UPDATE);
    } catch (error) {
      console.log("THEME=> prefers (" + TYPE + "): updating did not work");
    }
  }
}
function debuggingThemeSet(THEME, THEMECODE) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTheme !== false) {
    console.log("THEME=> set: " + THEME + " (" + THEMECODE + ")");
  }
}
function debuggingTimeAlert(CONTEXT, TIME) {
  if (skipVerboseEvents === false && (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingTime !== false || DEBUGGINGfe.DefaultDebuggingVerbose !== false)) {
    console.log("TIME=> Alert: You have been on this page for " + TIME + " " + CONTEXT);
  }
}
function debuggingVanityStatus(STATUS) {
  if (DEBUGGINGfe.DefaultDebugging !== false || DEBUGGINGfe.DefaultDebuggingVanity !== false) {
    console.log("VANITY=> " + STATUS);
  }
}
const MAINTENANCE = true;
const MAINTENANCE_VERBOSE = false;
const sectionMaintenance = "/about";
const queMaintenanceUp = "DOMContentLoaded";
const queMaintenanceDown = "pagehide";
function runTempoRoutine(legacy, mode) {
  stateStart();
  if (legacy === preferredLegacyFalse) {
    debuggingLegacySupportStatus(legacy, "not supporting legacy factors");
  } else if (legacy === preferredLegacyTrue) {
    debuggingLegacySupportStatus(legacy, "supporting legacy factors");
  } else {
    debuggingLegacySupportStatus(legacy, "Legacy state was unable to be determined.");
  }
  if (mode === preferredModeFalse) {
    debuggingNetworkNewEntityStatus("not communicating");
  } else if (mode === preferredModeTrue) {
    makeRequestGET(objectRequestGET);
    debuggingNetworkNewEntityStatus("communicating");
  } else {
    debuggingLegacySupportStatus(legacy, "Invalid mode: Falling back to OUTLINK: 0");
  }
}
function runWindowRoutine(legacy = preferredModeFalse) {
  windowProperties(defaultValue = preferredModeFalse);
  if (legacy === preferredModeTrue) {
    debuggingLegacySupportStatus(legacy, "supporting legacy builds");
  }
}
function runWindowRoutineMax(legacy = preferredModeFalse) {
  windowProperties(defaultValue = preferredWindowMax);
  if (legacy === preferredModeTrue) {
    debuggingLegacySupportStatus(legacy, "supporting legacy MAX builds");
  }
}
if (MAINTENANCE_VERBOSE === true) {
  debuggingOperationsMaintenanceVerbose(sectionMaintenance, "true");
  if (window.location.href !== HOST_NOW + sectionMaintenance) {
    location.replace(sectionMaintenance);
  }
} else {
  debuggingOperationsMaintenanceVerbose(sectionMaintenance, "false");
  if (document.addEventListener, legacy = ON, mode = OUTLINK) {
    debuggingOperationsLegacyAlert("New enough version was detected.");
    document.addEventListener(queMaintenanceUp, () => {
      runTempoRoutine(legacy, mode);
    });
    window.addEventListener(queMaintenanceDown, () => {
      destroyTempoRoutine();
    });
  } else if (document.attachEvent, legacy = ON) {
    debuggingOperationsLegacyAlert("Try a newer browser, site function and loading will work better!");
    document.attachEvent(queMaintenanceUp, runTempoRoutine);
    document.attachEvent(queMaintenaceDown, destroyTempoRoutine);
  }
}
const tryTheme = localStorage.getItem("defaultTheme");
if (tryTheme) {
  if (tryTheme === "light") {
    if (tryTheme === themePreferred) {
      document.documentElement.setAttribute('data-theme', "light");
      localStorage.setItem("defaultTheme", "light");
      debuggingThemeSet("light", "z1");
    } else {
      document.documentElement.setAttribute('data-theme', "dark");
      localStorage.setItem("defaultTheme", "dark");
      debuggingThemeSet("dark", "z1");
    }
  } else {
    if (tryTheme === themePreferred) {
      document.documentElement.setAttribute('data-theme', "dark");
      localStorage.setItem("defaultTheme", "dark");
      debuggingThemeSet("dark", "z2");
    } else {
      document.documentElement.setAttribute('data-theme', "light");
      localStorage.setItem("defaultTheme", "light");
      debuggingThemeSet("light", "z2");
    }
  }
} else {
  if (window.MatchMedia && window.matchMedia('(prefers-color-scheme: light').matches) {
    localStorage.setItem("defaultTheme", "light");
    document.documentElement.setAttribute('data-theme', "light");
    debuggingThemeSet("light", "z3");
  } else {
    if (themePreferred) {
      if (themePreferred === "light") {
        localStorage.setItem("defaultTheme", "light");
        document.documentElement.setAttribute('data-theme', "light");
        debuggingThemeSet("light", "z4");
      } else if (themePreferred === "dontset") {
        debuggingThemeSet("none set", "z1");
      } else {
        localStorage.setItem("defaultTheme", "dark");
        document.documentElement.setAttribute('data-theme', "dark");
        debuggingThemeSet("dark", "z4");
      }
    } else {
      localStorage.setItem("defaultTheme", "light");
      document.documentElement.setAttribute('data-theme', "light");
      debuggingThemeSet("light", "z4");
    }
  }
}
function abortBadFetch(url, options = {}) {
  const factoryAbort = new AbortController();
  const signal = factoryAbort.signal;
  options.signal = signal;
  debuggingNetworkFetchEvent(url, options);
  const fetchControllerPromise = fetch(url, options);
  fetchControllerPromise.abort = function () {
    debuggingAbortBadFetch('aborted');
    factoryAbort.abort();
  };
  return fetchControllerPromise;
}
async function fetchAndCreateMaps(endpoint, mapTemplate, staticPaths, lookupFactories, illusionValue = illusionValue, unityObject = unityObject) {
  let fetchPromise = null;
  debuggingBrowsemehFetchInitial(endpoint, lookupFactories, 'fetchAndCreateMaps', staticPaths, mapTemplate, unityObject, illusionValue);
  debuggingOperationsEndpoint(endpoint);
  try {
    fetchPromise = await abortBadFetch(endpoint);
    debuggingOperationsEndpointPassTwo(endpoint);
    const response = await fetchPromise;
    debuggingNetworkFetchResponse(response.text, "const response [response.text]");
    const text = await response.text();
    debuggingNetworkFetchResponseResolved(text, "const text [response.text resolved]");
    debuggingMediaFetchedText(text);
    const rows = text.trim().split(cureLinebreak);
    const headers = rows[0].split(symbolComma).map(header => header.trim().replace(/^"|"$/g, cureMuted));
    debuggingMediaFetchedTextHeaders(headers);
    const allData = [];
    const mapData = [];
    const constructorMapBuild = [];
    for (let i = 1; i < rows.length; i++) {
      const data = rows[i].match(/(".*?"|\[.*?\]|[^",\[\]]+)(?=\s*,|\s*$)/g).map(value => value.trim().replace(/^"|"$/g, cureMuted));
      allData.push(data);
      debuggingMediaFetchedTextParse(data, i);
      const slugMediaIndex = headers.indexOf("SlugMedia");
      const slugMediaType = headers.indexOf("ImageType");
      debuggingMediaUnpackAssemblyCheck(slugMediaIndex, 'SlugMedia');
      debuggingMediaUnpackAssemblyCheck(slugMediaType, 'ImageType');
      const slugMediaValue = data[slugMediaIndex];
      const MediaType = data[slugMediaType];
      debuggingMediaUnpackAssemblyRow(MediaType, i, 'MediaType');
      debuggingMediaUnpackAssemblyRow(slugMediaValue, i, 'slugMediaValue');
      dataCap = 13;
      debuggingMediaTypeIs(MediaType);
      if (isNaN(MediaType)) {
        debuggingMediaIsExhausted();
      }
      const provideImageTypePNG = lookupFactories["ImageTypeOptions"].get(2);
      debuggingSimulationProvidePNG("Provided Image Type: png force sim", provideImageTypePNG);
      mapData.push([0, "Map: Entity-> " + `${lookupFactories["CollectionNameOptions"].get(parseInt(data[headers.indexOf("CollectionName")]))}::: EntityScript-MEDIA-FORMAT: ${data[headers.indexOf("EntityScriptId")]}`]);
      mapData.push([1, staticPaths.thumb + `${data[headers.indexOf("SlugMedia")]}_step1.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([2, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}_step1.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([3, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}_step1.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([4, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}_step0.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([5, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}_step0.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([6, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}_step0.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      mapData.push([7, staticPaths.image + `${data[headers.indexOf("SlugMedia")]}.${lookupFactories["ImageTypeOptions"].get(parseInt(data[headers.indexOf("ImageType")]))}`]);
      formCap = 8;
      for (let j = 0; j < dataCap + 1; j++) {
        debuggingMediaLoopIth(j);
        const template = mapTemplate[j];
        const headerIndex = headers.indexOf(template);
        const rawValue = headerIndex !== -1 ? data[headerIndex] : cureMuted;
        const value = lookupFactories[template] ? lookupFactories[template].get(parseInt(rawValue)) : rawValue;
        debuggingMediaIthTemplate(headerIndex, rawValue, template, value);
        mapData.push([j + formCap, value]);
      }
      debuggingMediaMappedData(i, mapData);
      const map = new Map(mapData);
      constructorMapBuild.push(map);
      debuggingMediaConstructorMapBuilt(constructorMapBuild);
      constructorMapBuild.forEach((map, index) => {
        debuggingMediaIndexMapOverride(index, map);
      });
    }
    function getURLDependsLink(listPath, metaSearch, illusionValue = illusionValue) {
      debuggingMediaFinishedWritingSilo(listPath, "listPath");
      let photoEntity = new Map(listPath);
      debuggingMediaRetrievalEndpoint("photoEntity.get(unityObject)", photoEntity.get(unityObject));
      try {
        document.getElementById("mainImageDefault").src = photoEntity.get(unityObject);
      } catch (error) {
        debuggingMediaAssetNotLocated(error, "mainImageDefault");
        debuggingMediaTestUnityObjectResolution(photoEntity, "photoEntity", unityObject, "mainImageBackground", "unityObject");
      }
      function extractAndProcessData(mapTemplate, headers, lookupFactories, allData, illusionValue, constructorMapBuild, descriptiveTitle, ownerCopyright) {
        try {
          const dataForKey = allData[illusionValue - 1];
          debuggingMediaDataKey(dataForKey, "dataForKey");
          const dataForKeyString = String(dataForKey);
          debuggingMediaDataKey(dataForKeyString, "dataForKeyString");
          const dataFields = dataForKeyString.match(/(".*?"|\[.*?\]|[^",\[\]]+)(?=\s*,|\s*$)/g).map(value => value.trim().replace(/^"|"$/g, cureMuted));
          debuggingMediaDataKey(dataFields, "dataFields");
          const rightsHolder = parseInt(dataFields[5]);
          debuggingMediaDataKey(rightsHolder, "rightsHolder");
          const yearCreatedKey = parseInt(dataFields[6]);
          debuggingMediaDataKey(yearCreatedKey, "yearCreatedKey");
          const safeForKidsKey = parseInt(dataFields[7]);
          debuggingMediaDataKey(safeForKidsKey, "safeForKidsKey");
          const ImageType = parseInt(dataFields[9]);
          debuggingMediaDataKey(ImageType, "ImageType");
          const yearFromLookup = lookupFactories["YearCreated"].get(yearCreatedKey);
          debuggingMediaDataKey(yearFromLookup, "Year=> From Lookup");
          const safeForKidsLookup = lookupFactories["SafeForKids"].get(safeForKidsKey);
          debuggingMediaDataKey(safeForKidsLookup, "Safe for Kids?");
          const providedImageType = lookupFactories["ImageTypeOptions"].get(ImageType);
          debuggingMediaDataKey(providedImageType, "providedImageType");
          const rightsHolderMedia = lookupFactories["RightsHolder"].get(rightsHolder);
          debuggingMediaDataKey(rightsHolderMedia, "rightsHolderMedia");
          const valueDescriptiveTitle = dataFields[2];
          debuggingMediaDataKey(valueDescriptiveTitle, "valueDescriptiveTitle");
          const assetGRC = dataFields[0];
          debuggingMediaDataKey(assetGRC, "asset=> GRC");
          if (document.querySelector(".core-hosted-asset-name") !== null) {
            var grabAndPlaceContext = document.querySelector('.core-hosted-asset-name');
            grabAndPlaceContext.innerHTML = valueDescriptiveTitle;
          } else {
            debuggingMediaNewEntityHostedAsssetNA();
          }
          debuggingMediaCoreAssetInstance(assetGRC, safeForKidsLookup, rightsHolderMedia, valueDescriptiveTitle, providedImageType, yearFromLookup);
        } catch (error) {
          debuggingMediaCoreAssetInstanceError(ERROR);
        }
      }
      extractAndProcessData(mapTemplate, headers, lookupFactories, allData, illusionValue, constructorMapBuild, descriptiveTitle, ownerCopyright);
    }
    var stateFINowCured = illusionValue - 1;
    let listPath = cureMuted;
    let metaSearch = cureMuted;
    try {
      fieldIdentifier = constructorMapBuild[illusionValue].get(0);
      listPath = constructorMapBuild[stateFINowCured];
      metaSearch = constructorMapBuild[stateFINowCured];
    } catch (error) {
      debuggingMediaFieldIdentifierNotSet(error);
      fieldIdentifier = defaultVanityMapString;
      if (fieldIdentifier === undefined) {} else {
        listPath = new Map(constructorMapBuild[defaultVanityMapObject]);
        metaSearch = defaultMetaSearchName;
      }
    }
    debuggingMediaFieldIdentifier(fieldIdentifier);
    var theHitValue = fieldIdentifier.split('->')[1];
    debuggingMediaHitValue(theHitValue);
    debuggingMediaLookupQueryPath(listPath, 'listPath');
    getURLDependsLink(listPath, metaSearch, illusionValue = illusionValue);
  } catch (error) {
    if (fetchPromise) {
      debuggingMediaFetchAndCreateMaps("NetworkError::: " + error);
      try {
        fetchPromise.abort();
      } catch (errorNow) {
        debuggingNetworkFetchError(errorNow, "fetchPromise.abort", fetchPromise);
      }
    } else {
      debuggingMediaFetchAndCreateMaps("NetworkError (promise)");
    }
  }
}
function factoryCleanValueInput(assembledString, a = 0, b = 0, c = 0) {
  function valueProvide(STRINGCURED) {
    debuggingFactoryMutedStringTo('reconstruction: secure string field', STRINGCURED);
    return STRINGCURED;
  }
  if (a > 0) {
    valueProvide(assembledString);
  } else if (b > 0) {
    valueProvide(assembledString);
  } else if (c > 0) {
    valueProvide(assembledString);
  } else {}
  var windowNow = window.location.href;
  debuggingFactorySubmissionCheckWindow(windowNow, 'windowNow');
  if (windowNow === NEWENTITY_NOW + "/mail/") {
    debuggingFactorySubmissionComplete('/mail/', windowNow);
  } else {
    debuggingFactorySubmissionComplete(0, windowNow);
  }
}
function factoryCreateElement(element) {
  return document.createElement(element);
}
async function factoryGetEntityByClass(entity) {
  let entityClass = document.getElementsByClassName(`${entity}`);
  debuggingFactoryRendererClass(entity);
  return entityClass;
}
async function factoryGetEntityByClassNode(entity, weightedNode) {
  let entityClassNode = document.getElementsByClassName(`${entity}`)[`${weightedNode}`];
  debuggingFactoryRendererClassNth(entity, weightedNode);
  return entityClassNode;
}
function factoryGetInformationAsset() {
  const informationBox = {
    "Copyright": collectionDefault
  };
  try {
    for (var [k, v] of Object.entries(informationBox)) {
      try {
        debuggingFactoryRendererAssetValue(k, v);
        return v;
      } catch (error) {
        debuggingFactoryRendererAssetValueFailure(error);
      }
    }
  } catch (error) {
    debuggingFactoryRendererAssetValueFailure(error);
  }
}
function factoryGetPathAfterBaseUrl(URLBASE, URLNOW) {
  var urlBase = new URL(URLBASE);
  var urlNow = new URL(URLNOW);
  debuggingFactoryObjectPathBaseGenerator(urlBase, urlNow);
  let valueIs = urlNow.pathname.substring(urlBase.pathname.length);
  debuggingFactoryResultPathBaseGenerator(valueIs, 'valueIs');
  return valueIs;
}
function factoryUpdateLinks(linksSpa, TYPE) {
  for (var i = 0; i < linksSpa.length; i++) {
    try {
      if (TYPE === "[href]") {
        originalHref = linksSpa[i].href;
        debuggingNetworkResponseBasedHref(originalHref, 'linksSpa[i].href (originalHref)');
        inTransitURL = new URL(originalHref);
      } else if (TYPE === "[src]") {
        originalSrc = linksSpa[i].src;
        debuggingNetworkResponseBasedSrc(originalSrc, 'linksSpa[i].src (originalSrc)');
        inTransitURL = new URL(originalSrc);
      } else {
        debuggingOriginSpaAlert("not able", "query", "SPA section: Try [href] or [src]");
      }
    } catch (error) {
      if (NEWENTITY_NOW === HOST_NOW) {
        defaultSrc = SPA_ORIGIN_COMPILED;
        originalSrc = SPA_ORIGIN_COMPILED;
        originalHref = SPA_ORIGIN_COMPILED;
      } else {
        defaultSrc = NEWENTITY_NOW;
        originalHref = NEWENTITY_NOW;
        originalSrc = NEWENTITY_NOW;
      }
      debuggingNetworkResponseBasedDefault('linksSpa[i].src (defaultSrc)');
      inTransitURL = new URL(defaultSrc);
      debuggingOriginError(error, "Spa Correction", "MISSING");
    }
    pathNow = linksSpa[i];
    debuggingNetworkResponseBasedUrl(inTransitURL, 'inTransitUrl');
    if (originalHref === NEWENTITY_NOW + "/") {
      debuggingNetworkResponseBasedUrlOriginal(originalHref, NEWENTITY_NOW + "/", 'originalHref');
      if (NEWENTITY_NOW === HOST_NOW) {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW, SPA_ORIGIN_COMPILED);
          debuggingOriginSpaResolution(hrefUpdated, "AA", "[href]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW, SPA_ORIGIN_COMPILED);
          debuggingOriginSpaResolution(srcUpdated, "AB", "[src]");
        }
      } else {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW, NEWENTITY_NOW);
          debuggingOriginSpaResolution(hrefUpdated, "BA", "[src]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW, NEWENTITY_NOW);
          debuggingOriginSpaResolution(srcUpdated, "BB", "[src]");
        }
      }
      debuggingNetworkResponseBasedUrlOriginalUpdated(hrefUpdated, 'hrefUpdated');
      if (SPA_ORIGIN_COMPILED === hrefUpdated) {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            linksSpa[i].href = SPA_ORIGIN_COMPILED;
            debuggingOriginSpaResolution(linksSpa[i].href, "CA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = SPA_ORIGIN_COMPILED;
            debuggingOriginSpaResolution(linksSpa[i].src, "CB", "[src]");
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].href, "DA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].src, "DB", "[src]");
          }
        }
      } else {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            linksSpa[i].href = hrefUpdated;
            debuggingOriginSpaResolution(linksSpa[i].href, "EA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = srcUpdated;
            debuggingOriginSpaResolution(linksSpa[i].src, "EB", "[src]");
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW + hrefUpdated;
            debuggingOriginSpaResolution(linksSpa[i].href, "FA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW + srcUpdated;
            debuggingOriginSpaResolution(linksSpa[i].src, "FB", "[src]");
          }
        }
      }
    } else if (originalHref.startsWith(NEWENTITY_NOW + "/enclave")) {
      debuggingNetworkResponseBasedUrlOriginal(originalHref, NEWENTITY_NOW + "/enclave", 'originalHref');
      if (NEWENTITY_NOW === HOST_NOW) {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW + "/enclave", SPA_ORIGIN_COMPILED);
          debuggingOriginSpaResolution(hrefUpdated, "GA", "[href]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW + "/enclave", SPA_ORIGIN_COMPILED);
          debuggingOriginSpaResolution(srcUpdated, "GB", "[src]");
        }
      } else {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW + "/enclave", "");
          debuggingOriginSpaResolution(hrefUpdated, "HA", "[href]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW + "/enclave", "");
          debuggingOriginSpaResolution(srcUpdated, "HB", "[src]");
        }
      }
      debuggingNetworkResponseBasedUrlOriginalUpdated(hrefUpdated, 'hrefUpdated');
      if (SPA_ORIGIN_COMPILED === hrefUpdated) {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            linksSpa[i].href = SPA_ORIGIN_COMPILED;
            debuggingOriginSpaResolution(linksSpa[i].href, "IA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = SPA_ORIGIN_COMPILED;
            debuggingOriginSpaResolution(linksSpa[i].src, "IB", "[src]");
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].href, "JA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].src, "JB", "[src]");
          }
        }
      } else {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            linksSpa[i].href = linksSpa[i].href.replace(NEWENTITY_NOW + "/enclave", SPA_ORIGIN_COMPILED);
            debuggingOriginSpaResolution(linksSpa[i].href, "KA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = linksSpa[i].src.replace(NEWENTITY_NOW + "/enclave", SPA_ORIGIN_COMPILED);
            debuggingOriginSpaResolution(linksSpa[i].src, "KB", "[src]");
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW + hrefUpdated;
            debuggingOriginSpaResolution(linksSpa[i].href, "LA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW + srcUpdated;
            debuggingOriginSpaResolution(linksSpa[i].src, "LB", "[src]");
          }
        }
      }
    } else if (originalHref.startsWith(NEWENTITY_NOW + "/")) {
      debuggingNetworkResponseBasedUrlOriginal(originalHref, NEWENTITY_NOW + "/enclave", 'originalHref');
      if (NEWENTITY_NOW === HOST_NOW) {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW + "/", "/");
          debuggingOriginSpaEndpoint(hrefUpdated, "MA", "[href]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW + "/", "/");
          debuggingOriginSpaEndpoint(srcUpdated, "MB", "[src]");
        }
      } else {
        if (TYPE === "[href]") {
          hrefUpdated = originalHref.replace(NEWENTITY_NOW + "/", "/");
          debuggingOriginSpaEndpoint(hrefUpdated, "NA", "[href]");
        } else if (TYPE === "[src]") {
          srcUpdated = originalSrc.replace(NEWENTITY_NOW + "/", "/");
          debuggingOriginSpaEndpoint(srcUpdated, "NB", "[src]");
        }
      }
      debuggingNetworkResponseBasedUrlOriginalUpdated(hrefUpdated, 'hrefUpdated');
      if (SPA_ORIGIN_COMPILED === hrefUpdated) {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            linksSpa[i].href = hrefUpdated;
            debuggingOriginSpaResolution(linksSpa[i].href, "QA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = srcUpdated;
            debuggingOriginSpaResolution(linksSpa[i].src, "QB", "[src]");
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].href, "RA", "[href]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW;
            debuggingOriginSpaResolution(linksSpa[i].src, "RB", "[src]");
          }
        }
      } else {
        if (NEWENTITY_NOW === HOST_NOW) {
          if (TYPE === "[href]") {
            if (hrefUpdated.startsWith(SPA_ORIGIN_COMPILED)) {
              linksSpa[i].href = SPA_ORIGIN_COMPILED + hrefUpdated;
              debuggingOriginSpaResolution(linksSpa[i].href, "SAA", "[href]");
            } else {
              linksSpa[i].href = SPA_ORIGIN_COMPILED + hrefUpdated;
              debuggingOriginSpaResolution(linksSpa[i].href, "SAB", "[href]");
            }
          } else if (TYPE === "[src]") {
            if (srcUpdated.startsWith(SPA_ORIGIN_COMPILED)) {
              linksSpa[i].src = srcUpdated;
              debuggingOriginSpaResolution(linksSpa[i].src, "SBA", "[src]");
            } else {
              linksSpa[i].src = srcUpdated;
              debuggingOriginSpaResolution(linksSpa[i].src, "SBB", "[src]");
            }
          }
        } else {
          if (TYPE === "[href]") {
            linksSpa[i].href = NEWENTITY_NOW + hrefUpdated;
            debuggingOriginSpaResolution(linksSpa[i].html, "SCB", "[html]");
          } else if (TYPE === "[src]") {
            linksSpa[i].src = NEWENTITY_NOW + srcUpdated;
            debuggingOriginSpaResolution(linksSpa[i].src, "SCB", "[src]");
          }
        }
      }
    } else if (originalHref === undefined) {
      debuggingOriginSpaResolution("undefined", "undefined", "[undefined]");
    }
  }
}
function factoryUpdateTheme() {
  const prefersTheme = localStorage.getItem("defaultTheme");
  if (prefersTheme) {
    Object.keys(prefersTheme).forEach(key => {
      debuggingThemePrefers(`${key}`);
    });
  }
  let prefersThemeToggle = prefersTheme;
  if (prefersThemeToggle !== null) {
    debuggingThemePrefersUpdating(prefersThemeToggle, 'prefersThemeToggle');
    let themeNow = "light";
    if (prefersThemeToggle === "light") {
      try {
        document.getElementById("themeInjection").href = `/${themeLight}`;
      } catch (error) {
        debuggingThemePrefersEmpty();
      }
    } else {
      try {
        document.getElementById("themeInjection").href = `/${themeDark}`;
      } catch (error) {
        debuggingThemePrefersEmpty();
      }
    }
  } else {
    debuggingThemePrefersMatch(themeFallback, 'themeFallback');
    document.getElementById("themeInjection").href = `/${themeFallback}`;
  }
}
const newentity = document.getElementById("newentity");
const newentityUnrestrained = document.getElementById("newentity-unrestrained");
const defaultBlockPre = "preCode";
const defaultBlockPreChild = "textEntity";
const styleStatusTypeDisplayOptionOne = "display:none;";
const styleStatusTypeDisplayOptionTwo = "display:block;";
const styleMenuConstantContainerHidden = "opacity:0;visibility:hidden;width:0;height:0;";
const styleMenuConstantContainerVisible = "transition: opacity .5s,visibility 0s linear .5s,width .5s ease-out; opacity: 1; visibility: visible; width: 100%; overflow-y: scroll; overflow-x: scroll;height: 100vh;";
const styleMenuConstantContainerVisibleLoaded = "transition: opacity .5s,visibility 0s linear .5s,width .5s ease-out; opacity: 1; visibility: visible; width: 100%; overflow-y: scroll; overflow-x: scroll;height: 900px;";
const styleMenuHandHidden = "opacity:0;visibility:hidden;width:0;height:0;";
const styleMenuHandVisible = cureMuted;
const adminMorph = document.getElementById("adminMorph");
const assetInformation = document.getElementById("asset-information");
const auditPanelInquisitorInstance = document.getElementById("auditPanelInquisitorInstance");
const blinkerEmulator = document.getElementById('blinkerEmulator');
const buttonContact = document.getElementById("buttonContact");
const buttonHQAsset = document.getElementById('buttonHQAsset');
const buttonOptimizeAsset = document.getElementById('buttonOptimizeAsset');
const buttonOptimizeImage = document.getElementById('buttonOptimizeImage');
const entityImage = document.getElementById("entityImage");
const fullscreenAsset = document.getElementById("mainImageDefault");
const fullscreenAssetBackground = document.getElementById("mainImageBackground");
const fullscreenDock = document.getElementById("dock-station");
const fullscreenEnter = document.getElementById("fullscreen-enter");
const fullscreenExit = document.getElementById("fullscreen-exit");
const handMorph = document.getElementById("handMorph");
const inTransitNewEntityHostedAsset = document.querySelector(".core-hosted-asset-name");
const mainImageHQ = document.getElementById("mainImageHQ");
const nestedDiv = document.querySelector('.entitySectionContent');
const optimizeImage = document.getElementById("optimizeImage");
const refreshButton = document.getElementById('refreshButton');
const smoke = document.getElementById('smoke');
const smokesHome = document.getElementById('smokesHome');
const textElement = document.getElementById('text');
const uploadForm = document.querySelector('.upload_asset');
const vanityMorph = document.getElementById("vanityMorph");
let extraDataInstance = document.getElementById("extraDataInstance");
let nestedDivUnrestrained = document.querySelector('.entitySectionContent-unrestrained');
async function makeNetworkCheck() {
  statusNetwork = navigator.onLine;
  statusCycles++;
  debuggingNetworkCheckStatusHeader(statusCycles, statusLastWas, statusNetwork, stateIsNowOff);
  let statusIndicatorOnlineMain = document.getElementById('waiting');
  debuggingNetworkCheckStatusIndicator(statusIndicatorOnlineMain, 'initial');
  if (statusIndicatorOnlineMain !== null) {
    if (statusNetwork === true) {
      try {
        zNetworkPromise = await abortBadFetch("https://www.core.host/fetchResolver", {
          mode: 'no-cors'
        });
        debuggingNetworkStatusOnline(zNetworkPromise);
        statusIndicatorOnlineMain.classList.remove('waiting');
        statusIndicatorOnlineMain.classList.remove('offline');
        statusIndicatorOnlineMain.classList.add('online');
      } catch (error) {
        debuggingNetworkStatusLocalOnly(error);
        statusIndicatorOnlineMain.classList.remove('online');
        statusIndicatorOnlineMain.classList.remove('offline');
        statusIndicatorOnlineMain.classList.add('waiting');
      }
    } else if (statusNetwork === false) {
      statusIndicatorOnlineMain.classList.remove('waiting');
      statusIndicatorOnlineMain.classList.remove('online');
      statusIndicatorOnlineMain.classList.add('offline');
    }
  } else {
    debuggingNetworkCheckStatus("initial", "statusIndicatorOnlineMain: Falling back to default status configuration", "null", "waiting");
  }
  if (stateIsNowOff === false) {
    oldDomMap = document.querySelector('.entity-content-map');
    if (oldDomMap) {
      debuggingInterfaceDomOldHtml(oldDomMap.innerHTML, 'oldDomMap.innerHTML');
      if (statusNetwork === true) {
        let statusWindowMap = document.querySelector('.entity-content-map');
        if (statusWindowMap !== null) {
          debuggingInterfaceNetworkStatusState('b', statusLastWas, statusNetwork, 'statusWindowMap');
          if (statusLastWas === statusNetwork) {
            debuggingNetworkState('same as before', 'true');
            try {
              debuggingInterfaceCondition('a', 'true', oldDomMap.innerHTML, 'oldDomMap.innerHTML');
            } catch (error) {
              debuggingInterfaceStep("Failed oldDomMap.innerHTML pull: Building the Map shadow DOM instance now.");
            }
          } else {
            if (statusCycles === 1) {
              debuggingNetworkState('Up-state detected', 'in-transit');
              statusLastWas = false;
              statusCycles = 0;
            } else {
              debuggingNetworkState('Nth-cycle detected', 'in-transit');
              debuggingInterfaceNetworkStateChanged("online");
              try {
                debuggingInterfaceCondition('b', 'true', oldDomMap.innerHTML, 'oldDomMap.innerHTML');
                statusWindowMap.innerHTML = oldDomMap.innerHTML;
                isActiveMap = 1;
                debuggingInterfaceFrameSet(statusWindowMap.innerHTML, 'statusWindowMap.innerHTML');
                statusLastWas = true;
                statusCycles = 0;
                stateIsNowOff = true;
              } catch (error) {
                debuggingNetworkState('nth cycle', "Error: " + error);
              }
            }
          }
        }
        let statusIndicatorOnlineMain = document.getElementById('waiting');
        if (statusIndicatorOnlineMain !== null) {
          statusIndicatorOnlineMain.classList.remove('offline');
          statusIndicatorOnlineMain.classList.remove('waiting');
          statusIndicatorOnlineMain.classList.add('online');
        } else {
          debuggingNetworkCheckStatus("a", "statusIndicatorOnlineMain: Falling back to check span.waiting", "null", "waiting");
          statusIndicatorOnlineMain = document.getElementById('waiting');
          if (statusIndicatorOnlineMain !== null) {
            statusIndicatorOnlineMain.classList.remove('offline');
            statusIndicatorOnlineMain.classList.remove('waiting');
            statusIndicatorOnlineMain.classList.add('online');
          } else {
            debuggingNetworkCheckStatusIndicator("null", "Going online...");
          }
        }
      } else {
        if (statusNetwork !== null) {
          if (statusNetwork === false) {
            let statusWindowMap = document.querySelector('.entity-content-map');
            if (statusWindowMap !== null) {
              debuggingInterfaceNetworkStatusState('a', statusLastWas, statusNetwork, 'statusWindowMap');
              if (statusLastWas === statusNetwork) {
                debuggingNetworkState('same as before', 'false');
                try {
                  debuggingInterfaceCondition('c', 'false', oldDomMap.innerHTML, 'oldDomMap.innerHTML');
                } catch (error) {
                  debuggingInerfaceStateQue(error, "Not online during first cycle");
                }
              } else {
                debuggingInterfaceNetworkStateChanged("offline");
                if (statusCycles === 1) {
                  statusWindowMap.innerHTML = "<div class='entity-content-map'><br><br>You are offline</br></div>";
                  isActiveMap = 0;
                  stateIsNowOff = false;
                  statusLastWas = false;
                } else if (statusCycles > 1) {
                  statusWindowMap.innerHTML = "<div class='entity-content-map'><br><br>You are offline</br></div>";
                  isActiveMap = 0;
                  stateIsNowOff = false;
                  statusLastWas = false;
                  statusCycles = 0;
                } else {
                  statusWindowMap.innerHTML = "<div class='entity-content-map'><br><br>You are offline</br></div>";
                  stateIsNowOff = false;
                  statusLastWas = false;
                  isActiveMap = 0;
                  debuggingInterfaceNoState(statusCycles, 'statusCycles');
                }
              }
            }
            let statusIndicatorOnlineMain = document.getElementById('waiting');
            if (statusIndicatorOnlineMain !== null) {
              statusIndicatorOnlineMain.classList.remove('online');
              statusIndicatorOnlineMain.classList.remove('waiting');
              statusIndicatorOnlineMain.classList.add('offline');
            } else {
              debuggingNetworkCheckStatus("b", "statusIndicatorOnlineMain: Falling back to check span.waiting", "null", "waiting");
              statusIndicatorOnlineMain = document.getElementById('waiting');
              if (statusIndicatorOnlineMain !== null) {
                statusIndicatorOnlineMain.classList.remove('online');
                statusIndicatorOnlineMain.classList.remove('waiting');
                statusIndicatorOnlineMain.classList.add('offline');
              } else {
                debuggingNetworkCheckStatusIndicator("null", "Falling back...");
              }
            }
          }
        } else {
          statusWindowMap.innerHTML = "There was an error retrieving the Map status.";
          isActiveMap = 0;
          statusLastWas = false;
          statusCycles = 0;
        }
      }
    }
  } else {
    if (statusNetwork !== null) {
      debuggingNetworkEdgeCaseFix("statusNetwork is not null");
      if (statusNetwork === false) {
        debuggingNetworkEdgeCaseStatus("false", "statusNetwork");
        let statusWindowMap = document.querySelector(".entity-content-map");
        statusWindowMap.innerHTML = "<div class='entity-content-map'><br><br>You are offline</br></div>";
        isActiveMap = 0;
        let statusIndicatorOnlineMain = document.getElementById('waiting');
        if (statusIndicatorOnlineMain !== null) {
          statusIndicatorOnlineMain.classList.remove('online');
          statusIndicatorOnlineMain.classList.remove('waiting');
          statusIndicatorOnlineMain.classList.add('offline');
        } else {
          debuggingNetworkCheckStatus("c", "statusIndicatorOnlineMain: Falling back to check span.waiting", "null", "waiting");
          statusIndicatorOnlineMain = document.getElementById('waiting');
          if (statusIndicatorOnlineMain !== null) {
            statusIndicatorOnlineMain.classList.remove('online');
            statusIndicatorOnlineMain.classList.remove('waiting');
            statusIndicatorOnlineMain.classList.add('offline');
          } else {
            debuggingNetworkCheckStatusIndicator("null", "falling back...");
          }
        }
        statusLastWas = false;
        statusCycles = 0;
      } else if (statusNetwork === true) {
        debuggingNetworkEdgeCaseStatus("true", "statusNetwork");
        let shadowDomIframeMap = document.getElementById("shadowDomIframeMap");
        if (shadowDomIframeMap !== null) {
          debuggingInterfaceDomShadowIframe(shadowDomIframeMap.innerHTML, 'shadowDomIframeMap.innerHTML');
          let statusWindowMap = document.querySelector('.entity-content-map');
          if (statusLastWas === statusNetwork) {
            if (isActiveMap === 1) {
              debuggingInterfaceDomActiveElement("is already 1", 'isActiveMap');
              isActiveMap++;
            } else if (isActiveMap > 1) {
              debuggingInterfaceDomActiveElement("is greater than 1 (a)", 'isActiveMap');
              if (isActiveMap === 2) {
                statusWindowMap.innerHTML = shadowDomIframeMap.innerHTML;
                isActiveMap = 999;
              }
            } else {
              debuggingInterfaceDomActiveElement("is greater than 1 (b)", 'isActiveMap');
              statusWindowMap.innerHTML = shadowDomIframeMap.innerHTML;
              isActiveMap = 999;
            }
          } else {
            debuggingInterfaceNetworkStateChanged("resyncing, statusLastWas mismatched to statusNetwork...");
            if (isActiveMap === 1) {
              debuggingInterfaceDomActiveElement("is already 1", 'isActiveMap');
              isActiveMap++;
            } else if (isActiveMap > 1) {
              debuggingInterfaceDomActiveElement("is greater than 1", 'isActiveMap');
              statusWindowMap.innerHTML = shadowDomIframeMap.innerHTML;
              isActiveMap = 1;
              isActiveMap = 999;
            }
          }
          statusLastWas = true;
          statusCycles = 0;
        }
        let statusIndicatorOnlineMain = document.getElementById('waiting');
        if (statusIndicatorOnlineMain !== null) {
          statusIndicatorOnlineMain.classList.add('online');
        } else {
          debuggingNetworkCheckStatus("d", "statusIndicatorOnlineMain: Falling back to check span.waiting", "null", "waiting");
          statusIndicatorOnlineMain = document.getElementById('waiting');
          if (statusIndicatorOnlineMain !== null) {
            statusIndicatorOnlineMain.classList.remove('offline');
            statusIndicatorOnlineMain.classList.remove('waiting');
            statusIndicatorOnlineMain.classList.add('online');
          } else {
            debuggingNetworkCheckStatusIndicator("null", "falling back...");
          }
        }
      }
    }
  }
}
async function makeMockRequestPOST(tempo_contribution) {
  let oXMLHR = new XMLHttpRequest();
  debuggingNetworkMakeMockRequest(tempo_contribution, "tempo_contribution", "post");
  oXMLHR.onerror = function () {
    debuggingNetworkErrorMakeMockRequest(error, "makeMockRequestPost");
    oXMLHR.abort();
  };
  oXMLHR.open("POST", urlFullPathMock, true);
  try {
    var csrf_meta_token = document.querySelector('meta[name="cValueHidden"]').content;
    if (csrf_meta_token) {
      debuggingNetworkMakeMockRequestCsrf("valid", csrf_meta_token, "application/json");
      oXMLHR.setRequestHeader('X-csrf-token', csrf_meta_token);
      oXMLHR.setRequestHeader('Content-Type', 'application/json');
      oXMLHR.send(tempo_contribution);
      debuggingNetworkMakeMockRequestStatus("Success", 'makeMockRequestPOST');
    } else {
      debuggingNetworkErrorMakeMockRequest(error, "tempo-> object was null (makeMockRequestPost)");
    }
  } catch (error) {
    debuggingNetworkErrorMakeMockRequest(error, "tempo-> object not available (makeMockRequestPost)");
  }
}
async function makeRequestGET(active, objectRequestGET) {
  if (active = 0) {
    debuggingNetworkMakeRequestStatus("No activity between nodes", "makeRequestGET [objectRequestGET]");
  } else if (active = 1) {
    debuggingNetworkMakeRequestStatus("Activity detected between nodes: This site is public and set to receive communications on endpoint" + sockINOUT + ": Serving pages defined in -> " + locationSiteMap + " for DOMAIN: " + originPoint + "[" + NEWENTITY + "]", "makeRequestGET [objectRequestGET]");
  } else {
    debuggingNetworkMakeRequestStatus("No host or networked communication definitions are active.", "makeRequestGet [objectRequestGET]");
  }
}
async function makeRequestPOST(objectRequestPOST) {
  let oXMLHR = new XMLHttpRequest();
  oXMLHR.onerror = function () {
    debuggingNetworkErrorMakeMockRequest(error, "makeRequestPost");
    oXMLHR.abort();
  };
  oXMLHR.open("POST", urlMail, true);
  try {
    var csrf_meta_token = document.querySelector('meta[name="cValueHidden"]').content;
    if (csrf_meta_token) {
      debuggingNetworkMakeRequestCsrf("valid", csrf_meta_token, "application/json");
      oXMLHR.setRequestHeader('X-csrf-token', csrf_meta_token);
      oXMLHR.setRequestHeader('Content-Type', 'application/json');
      oXMLHR.send(tempo_contribution);
      debuggingNetworkMakeRequestStatus("Success", 'makeRequestPOST');
    } else {
      debuggingNetworkErrorMakeRequest(error, "tempo-> object was null (makeRequestPost)");
    }
  } catch (error) {
    debuggingNetworkErrorMakeRequest(error, "tempo-> object not available (makeRequestPost)");
  }
  oXMLHR.setRequestHeader('Content-Type', 'application/json');
  oXMLHR.send(objectRequestPost);
}
function loadedViewSPA(PATHLASTHREF, CONTAINER, FETCH, LINKS, TEMPINSTANCE, PATHLASTSRC) {
  debuggingOriginSpaLoaded();
  debuggingOriginSpaFrame(FETCH, TEMPINSTANCE.innerHTML, LINKS, PATHLASTHREF, PATHLASTSRC);
  TEMPINSTANCE.innerHTML = FETCH;
  Object.keys(LINKS).forEach(NODE => {
    debuggingOriginSpaNode(LINKS[NODE], NODE);
  });
}
function navigateTo(path) {
  debuggingInquisitorNavigating("to", path);
  debuggingNetworkNavigatingTo(path);
  updateLinksToSPAOrigin('.magic-hand', path);
}
function resetScrollingState() {
  isNestedScrolling = false;
  isScrollingInsideNestedDiv = false;
}
function updateLinksToSPAOrigin(containerClass, curedPath) {
  debuggingNetworkSPAUpdateLinkOrigins(containerClass, curedPath);
  var container = document.querySelector(containerClass);
  if (container) {
    var containerShadow = null;
    let TokenPost = cureMuted;
    let cTokenNow = document.getElementById("cToken");
    TokenPost = cTokenNow.textContent;
    let fetchValue = "";
    let shadowSetDomCurrent = document.querySelector('#shadowDomCurrent');
    shadowSetDomCurrent.innerHTML = lastActivePath;
    lastActivePath = "";
    if (NEWENTITY_NOW === HOST_NOW) {
      lastActivePath = SPA_ORIGIN_COMPILED;
    } else {
      lastActivePath = NEWENTITY_NOW;
    }
    debuggingNetworkSPASetLAP(lastActivePath);
    let links = null;
    fetchValue = curedPath;
    debuggingNetworkSPAFetchValue(fetchValue, 'fetchValue');
    fetch(fetchValue).then(response => response.text()).then(dataRequest => {
      debuggingNetworkResponseValue('in-transit', dataRequest);
      let tempDataDiv = factoryCreateElement('div');
      tempDataDiv.innerHTML = dataRequest;
      function updateSPAOriginLinks(DIVTEMP, ORIGIN) {
        if (ORIGIN === "[href]") {
          links = DIVTEMP.querySelectorAll('[href]');
          factoryUpdateLinks(links, '[href]');
        } else if (ORIGIN === "[src]") {
          links = DIVTEMP.querySelectorAll('[src]');
          factoryUpdateLinks(links, '[src]');
        } else {
          debuggingNetworkQueryValueNotScoped("[href], [src]");
        }
      }
      updateSPAOriginLinks(tempDataDiv, "[href]");
      updateSPAOriginLinks(tempDataDiv, "[src]");
      container = document.querySelector(containerClass);
      container.innerHTML = tempDataDiv.innerHTML;
      let shadowSetDomCurrent = document.querySelector('#shadowDomCurrent');
      debuggingOperationsExhausted("links");
      loadedViewSPA(hrefUpdated, container, fetchValue, links, shadowSetDomCurrent, srcUpdated);
      links = null;
    }).catch(function (error) {
      debuggingSPAError(error);
    });
  }
}
async function operationAJAXInjestEndpoint(currentPath) {
  debuggingNetworkOperationAJAXInjestEndpoint(currentPath);
  fetch(currentPath).then(response => response.text()).then(html => {
    let hand = document.querySelector('.magic-hand').innerHTML;
    if (hand === null) {
      debuggingNetworkStatusMagicHand("NA", '.magic-hand');
    } else {
      hand.innerHTML = html;
      debuggingNetworkStatusMagicHand("UPDATING", '.magic-hand');
      let reviveShadowDomCurrent = document.querySelector('#shadowDomCurrent');
      reviveShadowDomCurrent.innerHTML = currentPath;
      updateLinksToSPAOrigin(".magic-hand", currentPath);
    }
  }).catch(error => {
    debuggingNetworkOperationAJAXInjestEndpointFailure(error);
  });
}
function evaluateFrame() {
  let masterSwitch = morphState;
  let frameHtml = document.documentElement;
  let heightNow = frameHtml.offsetHeight;
  let widthNow = frameHtml.offsetWidth;
  debuggingInterfaceMasterSwitch(morphState, 'masterSwitch', 'morphState');
  debuggingInterfaceFrameWidthNow(widthNow, 'widthNow');
  debuggingInterfaceFrameHeightNow(heightNow, 'heightNow');
  if (widthNow < FRAME_MACRO_WIDTH_A) {
    debuggingInterfaceFrameWidthLTFrameMacroWidth("b", "widthNow", "FRAME_MACRO_WIDTH_A");
    nestedDivUnrestrained = document.querySelector('.entitySectionContent-unrestrained');
    auditPanelInquisitor = document.getElementById('auditPanelInquisitor');
    extraDataInstance = document.getElementById('extraDataInstance');
    if (nestedDivUnrestrained && auditPanelInquisitor && extraDataInstance) {
      if (masterSwitch === true) {
        nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
        auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
        if (stateExtraInstance = 0) {
          debuggingDataInstance("a", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
        } else {
          debuggingDataInstance("b", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
        }
      } else {
        nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
        auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
        if (stateExtraInstance = 0) {
          debuggingDataInstance("c", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
        } else {
          debuggingDataInstance("d", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
        }
      }
    }
  } else {
    debuggingInterfaceFrameWidthGTFrameMacroWidth("b", "widthNow", "FRAME_MACRO_WIDTH_A");
    if (masterSwitch === true) {
      nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
      auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
      if (stateExtraInstance = 0) {
        debuggingDataInstance("e", "extraDataInstance");
        extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
      } else {
        debuggingDataInstance("f", "extraDataInstance");
        extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
      }
    } else {
      nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
      auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
      if (stateExtraInstance = 0) {
        debuggingDataInstance("g", "extraDataInstance");
        extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
      } else {
        debuggingDataInstance("h", "extraDataInstance");
        extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
      }
    }
  }
}
function evaluateFrameHeight() {
  let masterSwitch = morphState;
  let frameHtml = document.documentElement;
  let heightNow = frameHtml.offsetHeight;
  debuggingInterfaceFrameHeightNow(heightNow, 'heightNow');
  debuggingInterfaceMasterSwitch(morphState, 'masterSwitch', 'morphState');
  nestedDivUnrestrained = document.querySelector('.entitySectionContent-unrestrained');
  auditPanelInquisitor = document.getElementById('auditPanelInquisitor');
  extraDataInstance = document.getElementById('extraDataInstance');
  if (nestedDivUnrestrained && auditPanelInquisitor) {
    if (masterSwitch === true) {} else {}
  } else {
    if (nestedDivUnrestrained && auditPanelInquisitor) {
      if (masterSwitch === true) {
        nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
        auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
        if (stateExtraInstance = 0) {
          debuggingDataInstance("i", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
        } else {
          debuggingDataInstance("j", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
        }
      } else {
        nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
        auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
        if (stateExtraInstance = 0) {
          debuggingDataInstance("k", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
        } else {
          debuggingDataInstance("l", "extraDataInstance");
          extraDataInstance.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
        }
      }
    }
  }
}
function evaluateFrameWidth() {
  let masterSwitch = morphState;
  let frameHtml = document.documentElement;
  let heightNow = frameHtml.offsetHeight;
  let widthNow = frameHtml.offsetWidth;
  debuggingInterfaceMasterSwitch(morphState, 'masterSwitch', 'morphState');
  debuggingInterfaceFrameWidthNow(widthNow, 'widthNow');
  debuggingInterfaceFrameHeightNow(heightNow, 'widthNow');
  nestedDivUnrestrained = document.querySelector('.entitySectionContent-unrestrained');
  auditPanelInquisitor = document.getElementById('auditPanelInquisitor');
  extraDataInstance = document.getElementById('extraDataInstance');
  if (widthNow < FRAME_MACRO_WIDTH_A) {
    debuggingInterfaceFrameWidthLTFrameMacroWidth("a", "widthNow", "FRAME_MACRO_WIDTH_A");
    if (nestedDivUnrestrained && auditPanelInquisitor) {
      nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
      auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
      extraDataInstance = "margin-left: " + marginExtraDataInstanceHidden + ";";
    }
  } else {
    debuggingInterfaceFrameWidthGTFrameMacroWidth("a", "widthNow", "FRAME_MACRO_WIDTH_A");
    if (nestedDivUnrestrained && auditPanelInquisitor && extraDataInstance) {
      debuggingInterfaceFrameWidthGotAll();
      if (masterSwitch === true) {
        debuggingInterfaceFrameWidthMasterSwitchBranched(true);
        if (stateExtraInstance === 0) {
          debuggingInterfaceFrameWidthMasterSwitchState("d", stateExtraInstance, 'stateExtraInstance');
          let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (stateExtraInstanceNow === 0) {
            debuggingInterfaceFrameWidthMasterSwitchState("c", stateExtraInstanceNow, 'stateExtraInstanceNow');
            if (stateValueLocalCheckExtraDataInstanceAudit === "false") {} else {
              stateExtraInstanceNow++;
            }
            stateExtraInstanceNow = 1;
          } else {
            debuggingInterfaceFrameWidthMasterSwitchState("d", stateExtraInstanceNow, 'stateExtraInstanceNow');
            if (stateExtraInstanceNow > 0) {
              if (stateExtraInstanceNow < 2) {
                debuggingDataInstance("m", "extraDataInstance");
                if (stateExtraInstance === 0) {
                  stateExtraInstance = 1;
                } else {
                  stateExtraInstance = 2;
                }
                stateExtraInstanceNow++;
                debuggingDataInstance("n", "extraDataInstance");
              }
            } else {
              debuggingDataInstance("A", "stateValueLocalCheckExtraDataInstanceAudit");
              if (stateValueLocalCheckExtraDataInstanceAudit === "false") {} else {
                stateExtraInstanceNow++;
              }
            }
          }
        } else {
          stateExtraInstance = 0;
          debuggingDataInstance("o", "extraDataInstance");
          let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (stateValueLocalCheckExtraDataInstanceAudit === "false") {
            toggleStateExtraDataInstanceAudit = false;
          } else {
            toggleStateExtraDataInstanceAudit = true;
          }
          stateExtraInstanceNow++;
        }
      } else {
        debuggingInterfaceFrameWidthMasterSwitchBranched(false);
        nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
        auditPanelInquisitor.style.cssText = "margin-left: " + marginAuditPanelInquisitorHidden + ";";
        if (stateExtraInstance === 0) {
          if (stateExtraInstanceNow === 0) {
            debuggingInterfaceFrameWidthMasterSwitchState("a", stateExtraInstanceNow, 'stateExtraInstanceNow');
            let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
            debuggingInterfaceFrameWidthCase("a", stateValueLocalCheckExtraDataInstanceAudit, "stateValueLocalCheckExtraDataInstanceAudit");
            if (stateValueLocalCheckExtraDataInstanceAudit === "false" || stateValueLocalCheckExtraDataInstanceAudit === null) {
              debuggingInterfaceFrameWidthMode("false or null", stateValueLocalCheckExtraDataInstanceAudit);
              stateExtraInstanceNow++;
              stateExtraInstanceNowNested = 0;
            } else {
              debuggingInterfaceFrameWidthMode("true and not null", stateValueLocalCheckExtraDataInstanceAudit);
              stateExtraInstanceNow++;
              stateExtraInstanceNowNested = 0;
            }
          } else {
            debuggingInterfaceFrameWidthMasterSwitchState("d", stateExtraInstanceNow, 'stateExtraInstanceNow');
            if (stateExtraInstanceNowNested === 0) {
              debuggingInterfaceFrameWidthMasterSwitchState("a", stateExtraInstanceNowNested, 'stateExtraInstanceNowNested');
              let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
              debuggingInterfaceFrameWidthCase("a", stateValueLocalCheckExtraDataInstanceAudit, "stateValueLocalCheckExtraDataInstanceAudit");
              if (stateExtraInstanceNowNested === 0) {
                debuggingInterfaceFrameWidthMasterSwitchState("c", stateExtraInstanceNowNested, 'stateExtraInstanceNowNested');
                if (stateValueLocalCheckExtraDataInstanceAudit === "false" || stateValueLocalCheckExtraDataInstanceAudit === null) {
                  debuggingInterfaceFrameWidthMode("false or null b", stateValueLocalCheckExtraDataInstanceAudit);
                  stateExtraInstanceNow++;
                  stateExtraInstanceNowNested++;
                } else {
                  debuggingInterfaceFrameWidthMode("true or not null b", stateValueLocalCheckExtraDataInstanceAudit);
                  stateExtraInstanceNow++;
                  stateExtraInstanceNowNested++;
                }
              } else {
                if (stateValueLocalCheckExtraDataInstanceAudit === "false" || stateValueLocalCheckExtraDataInstanceAudit === null) {
                  debuggingInterfaceFrameWidthMode("false or null c", stateValueLocalCheckExtraDataInstanceAudit);
                  stateExtraInstanceNow++;
                  stateExtraInstanceNowNested++;
                } else {
                  debuggingInterfaceFrameWidthMode("true or not null c", stateValueLocalCheckExtraDataInstanceAudit);
                  stateExtraInstanceNow++;
                  stateExtraInstanceNowNested++;
                }
              }
            } else {
              debuggingInterfaceFrameWidthMasterSwitchState("b", stateExtraInstanceNowNested, 'stateExtraInstanceNowNested');
              if (stateExtraInstanceNowPinLeft === 0) {
                debuggingInterfaceFrameWidthMasterSwitchState("resolved 0th PinLeft", stateExtraInstanceNowPinLeft, 'stateExtraInstanceNowPinLeft');
                let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
                if (stateExtraInstanceNowNested === 0) {
                  if (stateValueLocalCheckExtraDataInstanceAudit === "false" || stateValueLocalCheckExtraDataInstanceAudit === null) {
                    debuggingInterfaceFrameWidthMode("false or null c", stateValueLocalCheckExtraDataInstanceAudit);
                    stateExtraInstanceNow++;
                    stateExtraInstanceNowNested++;
                  } else {
                    debuggingInterfaceFrameWidthMode("true or not null d", stateValueLocalCheckExtraDataInstanceAudit);
                    stateExtraInstanceNow = 0;
                    stateExtraInstanceNowNested = 0;
                    stateExtraInstanceNowPinLeft = 0;
                  }
                } else {
                  debuggingInterfaceFrameWidthMasterSwitchState("d", stateExtraInstanceNowNested, 'stateExtraInstanceNowNested');
                  let localCheckNow = localStorage.getItem('menuAdminReduced');
                  if (localCheckNow === "false") {
                    debuggingInterfaceFrameWidthMasterSwitchState("d: special", localCheckNow, 'localCheckNow');
                    stateExtraInstanceNowPinLeft++;
                  } else {
                    debuggingInterfaceFrameWidthMasterSwitchState("d:special", localCheckNow, 'localCheckNow');
                    stateExtraInstanceNowPinLeft++;
                  }
                }
              } else {
                stateExtraInstanceNowPinLeft = 1;
                debuggingInquisitorVentEvent("A");
              }
            }
          }
        } else {
          debuggingInterfaceFrameWidthMode("extended 0th runtime", stateValueLocalCheckExtraDataInstanceAudit);
          if (runtimeCyclesInquisitorAudit === 1 || runtimeCyclesInquisitorAudit === 0) {
            debuggingInterfaceFrameWidthCycleJ(runtimeCyclesInquisitorAudit, 'runtimeCyclesInquisitorAudit');
            let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
            debuggingDataLocalValue("stateValueLocalCheckExtraDataInstanceAudit", stateValueLocalCheckExtraDataInstanceAudit, typeof stateValueLocalCheckExtraDataInstanceAudit);
            if (stateValueLocalCheckExtraDataInstanceAudit !== null) {
              if (stateValueLocalCheckExtraDataInstanceAudit === "false") {
                debuggingInterfaceFrameWidthMode("extra not null and false", stateValueLocalCheckExtraDataInstanceAudit);
              } else if (stateValueLocalCheckExtraDataInstanceAudit === "true") {
                debuggingInterfaceFrameWidthMode("extra not null and true", stateValueLocalCheckExtraDataInstanceAudit);
              } else {
                debuggingInterfaceFrameWidthMode("extra not null and edge case", stateValueLocalCheckExtraDataInstanceAudit);
              }
            }
            runtimeCyclesInquisitorAudit++;
          } else {
            debuggingInquisitorVentEvent("B");
          }
        }
      }
    }
  }
}
function alterWindowObject(ALTEROBJECT, PROPERTY) {
  if (ALTEROBJECT === windowX) {
    windowX = PROPERTY;
    debuggingAlterWindow(ALTEROBJECT, PROPERTY, contextInstanceRan);
  }
  if (ALTEROBJECT === windowY) {
    windowY = PROPERTY;
    debuggingAlterWindow(ALTEROBJECT, PROPERTY, contextInstanceRan);
  }
  if (ALTEROBJECT === windowZ) {
    windowZ = PROPERTY;
    debuggingAlterWindow(ALTEROBJECT, PROPERTY, contextInstanceRan);
  } else {
    debuggingAlterWindow(ALTEROBJECT, PROPERTY, contextInstanceNotAvailable);
  }
}
function buildCodePre(CODETYPE) {
  function prePresent(CODETYPE) {
    let preCode = factoryGetEntityByClass(defaultBlockPre);
    let codeText = factoryGetEntityByClass(defaultBlockPreChild);
    let codeNow = null;
    if (CODETYPE === "python") {
      codeNow = factoryGetEntityByClass('pythonEntity');
    }
    debuggingBuildCodePre(codeNow, preCode, codeText);
    if (preCode.length === 0 || preCode === null) {
      debuggingBuildCodePreEmpty();
    } else {
      debuggingBuildCodePreNodeOperation(preCode);
      const curred_bucket = [];
      if (preCode.length > 0) {
        if (codeText.length > 0 || codeText === null) {
          var scalarValue = codeText.length;
          var scalarWeight = 1;
          while (scalarWeight <= scalarValue) {
            var code_list = factoryGetEntityByClassNode('textEntity', scalarWeight - 1);
            scalarWeight++;
            var code_list_two = code_list.innerHTML;
            code_list.remove();
            var code_list_three = code_list_two.split(cureLinebreak);
            debuggingBuildCodePreNodeScalar(code_list_three, scalarValue);
            for (value in code_list_three) {
              if (value.startsWith("#") === true) {
                textCommentPound(value, scalarValue, scalarWeight);
              } else if (value.startsWith("//") === true) {
                textCommentDoubleForward(value, scalarValue, scalarWeight);
              } else {
                lineStandard(value, scalarValue, scalarWeight);
              }
            }
          }
        } else {
          debuggingBuildCodePreTextEmpty();
        }
        if (codeNow.length > 0) {
          var scalarValue = codeNow.length;
          var scalarWeight = 1;
          while (scalarWeight <= scalarValue) {
            var code_list = factoryGetEntityByClassNode('pythonEntity', weight = scalarWeight - 1);
            scalarWeight++;
            var code_list_two = code_list.innerHTML;
            code_list.remove();
            var code_list_three = code_list_two.split(cureLinebreak);
            debuggingBuildCodePreNodeScalar(code_list_three, scalarValue);
            for (value in code_list_three) {
              if (value.startsWith(symbolPound) === true) {
                textCommentPound(value, scalarValue, scalarWeight);
              } else if (value.startsWith(symbolQuoteTrippleSingle) === true) {
                textCommentTripleQuote(value, scalarValue, scalarWeight);
              } else {
                lineStandard(value, scalarValue, scalarWeight);
              }
            }
          }
        } else {
          debuggingBuildCodePreTextEmpty();
        }
      } else {
        debuggingBuildCodePreNoPresentation();
      }
    }
  }
  prePresent(CODETYPE);
  var currentURL = window.location.href;
  debuggingBuildWindowRenderedOn(currentURL);
}
function hookRunner(HOOK, STATUS) {
  debuggingInterfaceFrameHookStatus("hookRunner", HOOK, "destroyFullscreen() active");
  try {
    valueOption = destroyModeFrame[HOOK][0];
    valuePlatform = destroyModeFrame[HOOK][1][0];
    valueHook = destroyModeFrame[HOOK][1][1];
    debuggingInterfaceFrameHookValues(valueHook, valueOption, valuePlatform);
  } catch (error) {
    debuggingInterfaceFrameHookError(error);
  }
}
function destroyFullscreen() {
  let controlFrame = destroyModeFrame.length;
  debuggingInterfaceFrameAudit("controlFrame", controlFrame);
  if (controlFrame.length < 1 || controlFrame === null || controlFrame === undefined) {} else {
    let testFullScreen = window.fullScreen;
    debuggingInterfaceFrameAudit("testFullScreen", testFullScreen);
    if (testFullScreen === true) {
      var controlHit = 0;
      var controlCount = 0;
      while (controlHit === 0 && controlCount <= controlFrame) {
        try {
          destroyModeFrame[controlCount];
          controlHit++;
          controlCount++;
        } catch (error) {
          debuggingInterfaceFrameHookError(error);
          break;
        }
      }
      if (document.exitFullscreen) {
        try {
          document.exitFullscreen();
          hookRunner(HOOK = 0, "destroyFullscreen() active");
        } catch (error) {
          debuggingInterfaceFrameHookError(error);
        }
      } else if (document.msRequestFullscreen) {
        try {
          document.msRequestFullscreen();
          hookRunner(HOOK = 1, "destroyFullscreen() active");
        } catch (error) {
          debuggingInterfaceFrameHookError(error);
        }
      } else if (document.webkitExitFullscreen) {
        try {
          document.webkitExitFullscreen();
          hookRunner(HOOK = 2, "destroyFullscreen() active");
        } catch (error) {
          debuggingInterfaceFrameHookError(error);
        }
      } else {
        debuggingInterfaceFrameHookError("Error processing hook: DestroyFullscreen()");
      }
    } else {
      debuggingInterfaceFrameHookError("You are not in fullscreen mode, so you can not destroy a fullscreen frame");
    }
  }
}
function imageError(imageElement) {
  var grabImage = imageElement.closest('.full-size-photo');
  grabImage.innerHTML = HTML_DEFAULT_FILE_NOT_FOUND;
}
function injectLineStandard(value, scalarValue, scalarWeight) {
  let lineStandard = factoryCreateElement('span');
  lineStandard.className = "lineStandard";
  scalarWeightZ = scalarWeight - 1;
  debuggingInterfaceFrameWeights("lineStandard(i)", "scalarValue", scalarValue, "scalarWeightZ", scalarWeightZ);
}
function openFullscreen() {
  try {
    if (fullscreenAsset.requestFullscreen) {
      try {
        fullscreenAsset.requestFullscreen();
        hookRunner(HOOK = 0, "openFullscreen() active");
      } catch (error) {
        debuggingInterfaceFrameHookError(error);
      }
    } else if (fullscreenAsset.msRequestFullscreen) {
      try {
        fullscreenAsset.msRequestFullscreen();
        hookRunner(HOOK = 1, "openFullscreen() active");
      } catch (error) {
        debuggingInterfaceFrameHookError(error);
      }
    } else if (fullscreenAsset.webkitRequestFullscreen) {
      try {
        fullscreenAsset.webkitRequestFullscreen();
        hookRunner(HOOK = 2, "openFullscreen() active");
      } catch (error) {
        debuggingInterfaceFrameHookError(error);
      }
    } else {
      debuggingInterfaceFrameHookError("Error processing hook openFullscreen()");
    }
  } catch (error) {
    debuggingInterfaceFrameHookError("Fullscreen Asset capability is not available.");
  }
}
function reduceAnimationDots() {
  document.querySelector('.loading-que-dots').style.display = 'none';
}
function textCommentPound(value, scalarValue, scalarWeightZ) {
  let lineTextCommentPound = createElement('span');
  lineTextCommentPound.className = "textCommentPound";
  debuggingTextComment("#", "textCommentPound", scalarValue, scalarWeightZ);
}
function textCommentDoubleForward(value, scalarValue, scalarWeight) {
  let lineTextCommentDoubleForward = createElement('span');
  lineTextCommentDoubleForward.className = "textCommentDoubleForward";
  debuggingTextComment("//", "textCommentDoubleForward", scalarValue, scalarWeightZ);
}
function textCommentTripleQuote(value, scalarValue, scalarWeight) {
  let lineTextCommentTrippleQuote = createElement('span');
  lineTextCommentTrippleQuote.className = "textCommentTripleQuote";
  debuggingTextComment(symbolQuoteTripleSingle, "textCommentTripleQuote", scalarValue, scalarWeightZ);
}
function toggleDynamicWindow(KEY) {
  debuggingDynamicWindowToggleKey(KEY, isDynamicWindowVisible);
  var windowDynamicContainer = document.getElementById('constantContainer');
  windowDynamicContainer.classList.toggle('visible');
  isDynamicWindowVisible = !isDynamicWindowVisible;
}
let PRECHECK = 0;
debuggingStatePrecheck(PRECHECK);
function toggleAdminMenu(PRECHECK) {
  var spanElement = document.getElementById("adminMorph");
  if (spanElement) {
    var menuAdmin = document.querySelector('div.entityNavigation');
    if (menuAdmin) {
      let adminValueSet = localStorage.getItem('menuAdminReduced');
      nestedDivUnrestrained = document.querySelector('.entitySectionContent-unrestrained');
      if (PRECHECK === 1) {
        if (adminValueSet === undefined || adminValueSet === null) {
          spanElement.textContent = "->";
          morphState = false;
          debuggingStateMorph(morphState, '-> (e)');
          menuAdmin.classList.add('hidden');
          if (nestedDivUnrestrained) {
            nestedDivUnrestrained.style.cssText = transitionAdminMenu;
            debuggingInterfaceStateUnrestrained("e");
            setTimeout(() => {}, 600);
            if (URL.current in slugDescriptive) {
              nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
              debuggingInterfaceEndpointFoundation("descriptive");
            } else {
              nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
              debuggingInterfaceEndpointFoundation("non-descriptive");
            }
          }
        } else {
          if (adminValueSet === "true") {
            spanElement.textContent = "<-";
            morphState = true;
            debuggingStateMorph(morphState, '<- (f)');
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionAdminMenu;
              debuggingInterfaceStateUnrestrained("f");
              var localToggleTable = document.getElementById("ToggleTable");
              if (localToggleTable) {
                localToggleTable.style.cssText = "width: calc(100% - 489px)";
              }
              setTimeout(() => {}, 600);
              if (URL.current in slugDescriptive) {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
                debuggingInterfaceEndpointFoundation("descriptive");
              } else {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginInformationOnlyBlock + ";";
                debuggingInterfaceEndpointFoundation("non-descriptive");
              }
            }
          } else {
            spanElement.textContent = "->";
            morphState = false;
            debuggingStateMorph(morphState, '<- (g)');
            menuAdmin.classList.toggle('hidden');
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionAdminMenu;
              debuggingInterfaceStateUnrestrained("g");
              setTimeout(() => {}, 600);
              if (URL.current in slugDescriptive) {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
                debuggingInterfaceEndpointFoundation("descriptive");
              } else {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginInformationOnlyHidden + ";";
                debuggingInterfaceEndpointFoundation("non-descriptive");
              }
            }
          }
        }
      } else {
        if (adminValueSet === undefined || adminValueSet === null) {
          menuAdmin.classList.toggle('hidden');
          localStorage.setItem('menuAdminReduced', false);
          toggleStateAdmin = false;
          defaultDebuggingInterfaceValueSet("toggleStateAdmin", toggleStateAdmin, "A");
          spanElement.textContent = "<-";
          morphState = true;
          debuggingStateMorph(morphState, 'menuAdminReduced (a)');
          if (nestedDivUnrestrained) {
            nestedDivUnrestrained.style.cssText = transitionAdminMenu;
            debuggingInterfaceStateUnrestrained("menuAdminReduced (a)");
            setTimeout(() => {}, 600);
            if (URL.current in slugDescriptive) {
              nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
              debuggingInterfaceEndpointFoundation("descriptive");
            } else {
              nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
              debuggingInterfaceEndpointFoundation("non-descriptive");
            }
          }
        } else {
          let localCheckNow = localStorage.getItem('menuAdminReduced');
          if (localCheckNow === "true") {
            menuAdmin.classList.toggle('hidden');
            localStorage.setItem('menuAdminReduced', false);
            toggleStateAdmin = false;
            defaultDebuggingInterfaceValueSet("toggleStateAdmin", toggleStateAdmin, "B");
            morphState = false;
            debuggingStateMorph(morphState, 'menuAdminReduced (b)');
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionAdminMenu;
              debuggingInterfaceStateUnrestrained("menuAdminReduced (b)");
              setTimeout(() => {}, 600);
              if (URL.current in slugDescriptive) {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
                debuggingInterfaceEndpointFoundation("descriptive");
                var localToggleTable = document.getElementById("ToggleTable");
                spanElement.textContent = "->";
                if (localToggleTable) {
                  localToggleTable.style.cssText = "width: calc(100% - 89px)";
                }
              } else {
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
                debuggingInterfaceEndpointFoundation("non-descriptive");
                var localToggleTable = document.getElementById("ToggleTable");
                spanElement.textContent = "<-";
                if (localToggleTable) {
                  localToggleTable.style.cssText = "width: calc(100% - 89px)";
                }
              }
            }
          } else {
            menuAdmin.classList.toggle('hidden');
            localStorage.setItem('menuAdminReduced', true);
            toggleStateAdmin = false;
            defaultDebuggingInterfaceValueSet("toggleStateAdmin", toggleStateAdmin, "B");
            spanElement.textContent = "<-";
            morphState = false;
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionAdminMenu;
              let adminValueSet = localStorage.getItem('menuAdminReduced');
              debuggingInterfaceStateUnrestrained("menuAdminReduced (ca)");
              var localToggleTable = document.getElementById("ToggleTable");
              if (localToggleTable) {
                localToggleTable.style.cssText = "width: calc(100% - 489px)";
              }
              setTimeout(() => {}, 600);
              localStorage.setItem('menuAdminReduced', true);
              if (URL.current in slugDescriptive) {
                debuggingStateMorph(morphState, 'menuAdminReduced (ca)');
                nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
                debuggingInterfaceEndpointFoundation("descriptive");
              } else {
                morphState = true;
                var localMenuBranch = document.querySelector(".entityNavigation");
                var localToggleTable = document.getElementById("ToggleTable");
                if (localMenuBranch) {
                  if (localMenuBranch.classList.contains('hidden')) {
                    debuggingStateMorph(morphState, 'menuAdminReduced (cb1a)');
                    spanElement.textContent = "->";
                    nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuHidden + ";";
                    if (localToggleTable) {
                      localToggleTable.style.cssText = "width: calc(100% - 89px)";
                    }
                  } else {
                    debuggingStateMorph(morphState, 'menuAdminReduced (cb1b)');
                    spanElement.textContent = "<-";
                    nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
                    if (localToggleTable) {
                      localToggleTable.style.cssText = "width: calc(100% - 489px)";
                    }
                  }
                } else {
                  debuggingStateMorph(morphState, 'menuAdminReduced (cb2)');
                  nestedDivUnrestrained.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
                }
                debuggingInterfaceEndpointFoundation("non-descriptive");
              }
            }
          }
        }
      }
    } else {}
  } else {}
}
function toggleVanityMenu(PRECHECK) {
  var spanElement = document.getElementById("vanityMorph");
  if (spanElement) {
    var menuVanity = document.querySelector('div.entityNavigationVanity');
    if (menuVanity) {
      let vanityValueSet = localStorage.getItem('menuVanityReduced');
      if (PRECHECK === 1) {
        if (vanityValueSet === undefined || vanityValueSet === null) {
          defaultDebuggingInterfaceValueSet("vanityValueSet", vanityValueSet, "A");
          spanElement.textContent = "->";
          menuVanity.classList.add('hidden');
        } else {
          if (vanityValueSet === "true") {
            defaultDebuggingInterfaceValueSet("vanityValueSet", vanityValueSet, "B");
            spanElement.textContent = "<-";
            localStorage.setItem('menuAdminReduced', true);
          } else {
            defaultDebuggingInterfaceValueSet("vanityValueSet", vanityValueSet, "C");
            spanElement.textContent = "->";
            menuVanity.classList.toggle('hidden');
            localStorage.setItem('menuAdminReduced', false);
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionVanityMenu;
              setTimeout(() => {}, 600);
            }
          }
        }
      } else {
        if (vanityValueSet === undefined || vanityValueSet === null) {
          defaultDebuggingInterfaceValueSet("vanityValueSet", vanityValueSet, "D");
          menuVanity.classList.toggle('hidden');
          localStorage.setItem('menuVanityReduced', true);
          toggleStateVanity = true;
          defaultDebuggingInterfaceValueSet("toggleStateVanity", toggleStateVanity, "A");
          spanElement.textContent = "<-";
          if (nestedDivUnrestrained) {
            nestedDivUnrestrained.style.cssText = transitionVanityMenu;
            setTimeout(() => {}, 600);
          }
        } else {
          defaultDebuggingInterfaceValueSet("vanityValueSet", vanityValueSet, "E");
          let localCheckNow = localStorage.getItem('menuVanityReduced');
          if (localCheckNow === "true") {
            menuVanity.classList.toggle('hidden');
            localStorage.setItem('menuVanityReduced', false);
            toggleStateVanity = false;
            defaultDebuggingInterfaceValueSet("toggleStateVanity", toggleStateVanity, "B");
            spanElement.textContent = "->";
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionVanityMenu;
              setTimeout(() => {}, 600);
            }
          } else {
            menuVanity.classList.toggle('hidden');
            localStorage.setItem('menuVanityReduced', true);
            toggleStateVanity = true;
            defaultDebuggingInterfaceValueSet("toggleStateVanity", toggleStateVanity, "C");
            spanElement.textContent = "<-";
            if (nestedDivUnrestrained) {
              nestedDivUnrestrained.style.cssText = transitionVanityMenu;
              setTimeout(() => {}, 600);
            }
          }
        }
      }
    } else {}
  } else {}
}
function toggleDocumentProperty(selector, textOn, textOff) {
  var propertyElement = document.querySelector(selector);
  if (propertyElement) {
    propertyElement.textContent = propertyState ? textOn : textOff;
    if (propertyState) {
      propertyElement.style.display = 'none';
    } else {
      propertyElement.style.display = 'block';
    }
    propertyState = !propertyState;
  }
}
function toggleDocumentPropertyHand(selector, textOn, textOff) {
  var propertyElementHand = document.querySelector(selector);
  if (propertyElementHand) {
    propertyElement.textContent = propertyStateHand ? textOn : textOff;
    if (propertyStateHand) {
      propertyElementHand.style.display = 'none';
    } else {
      propertyElementHand.style.display = 'block';
    }
    propertyStateHand = !propertyStateHand;
  }
}
function toggleElementDisplay(elementId, selector, textOn, textOff) {
  var spanElement = document.getElementById(elementId);
  spanElement.textContent = morphState ? textOn : textOff;
  var element = document.querySelector(selector);
  element.classList.toggle('hidden');
  morphState = !morphState;
  debuggingStateMorph(morphState, 'element display (d)');
}
function toggleElementDisplayHand(elementId, selector, textOn, textOff) {
  var spanHandElement = document.getElementById(elementId);
  spanHandElement.textContent = morphHandState ? textOn : textOff;
  var elementHand = document.querySelector(selector);
  elementHand.classList.toggle('hidden');
  morphHandState = !morphHandState;
  constole.log("morphHandState=> " + morphHandState);
}
function toggleHandMenu() {
  var divElement = document.querySelector(".magic-hand");
  if (divElement === null) {
    alert(contextInstanceProtectedCalled + " " + contextInstanceCalled + ": " + contextInstanceActionFailure);
  } else {
    var handMenu = document.querySelector('.magic-hand');
    handCheck = localStorage.getItem('menuHandReduced', toggleStateHand);
    debuggingDataLocalValue("handCheck", handCheck, typeof handCheck);
    var spanElement = document.getElementById("handMorph");
    if (handCheck === "true") {
      toggleState = false;
      localStorage.setItem("stateGotten", false);
      spanElement.textContent = "v";
      handMenu.style.cssText = styleMenuHandHidden;
      localStorage.setItem('menuHandReduced', toggleState);
    } else {
      toggleState = true;
      spanElement.textContent = "^";
      handMenu.style.cssText = styleMenuConstantContainerVisible;
      localStorage.setItem('menuHandReduced', toggleState);
    }
  }
}
function toggleHandMenuAuto() {
  hasGotten = localStorage.getItem('stateGotten', hasGottenState);
  if (hasGotten === "false") {
    localStorage.setItem("stateGotten", true);
    var handMenu = document.querySelector('.magic-hand');
    handCheck = localStorage.getItem('menuHandReduced', toggleStateHand);
    debuggingDataLocalValue("handCheck", handCheck, typeof handCheck);
    if (handCheck === "false" || handCheck === null) {
      toggleStateHand = false;
      handMenu.style.cssText = styleMenuConstantContainerHidden;
      var spanHandElement = document.getElementById("handMorph");
      spanHandElement.textContent = "v";
    } else {
      toggleStateHand = true;
      localStorage.setItem('menuHandReduced', toggleStateHand);
      var spanHandElement = document.getElementById("handMorph");
      spanHandElement.textContent = "^";
      handMenu.style.cssText = styleMenuConstantContainerVisibleLoaded;
    }
  }
}
function toggleLockerlinkBar() {
  var lockerlinkMenu = document.querySelector('.menuLockerlink');
  if (lockerlinkMenu !== null) {
    lockerlinkMenu.classList.toggle('visible');
    toggleLockerlink = !toggleLockerlink;
  } else {
    debuggingLockerlinkNotOnPage("lockerlinkMenu");
  }
}
function toggleViewExpandSwitch() {
  toggleViewExpand = !toggleViewExpand;
  debuggingInterfaceFrameViewSwitchStatus("switched to", "toggleViewExpand", toggleViewExpand);
  var viewExpand = document.querySelector('span.view-expand-data');
  async function factoryAddNodeCurrent(attributeStack, instance, start, last) {
    let stackClassAdd = document.querySelectorAll(attributeStack);
    let stackClassAddArray = Array.from(stackClassAdd);
    let rangeClassAdd = stackClassAddArray.slice(start - 1, last);
    rangeClassAdd.forEach(classAttribute => classAttribute.add(attributeStack));
  }
  async function factoryTerminateNodeCurrent(attributeStack, instance, start, last) {
    let stackClassRemove = document.querySelectorAll(attributeStack);
    let stackClassRemoveArray = Array.from(stackClassAmmend);
    let rangeClassRemove = stackClassRemoveArray.slice(start - 1, last);
    rangeClassRemove.forEach(classAttribute => classAttribute.removeAttribute(attributeStack));
  }
  async function factoryViewExpanderCurrent(attributeStack, directiveChild, type, start, last) {
    let stackClassAmmend = cureMuted;
    if (directiveChild === "n+") {
      if (last === "INFINITY") {
        let stackConstant = attributeStack + "(" + directiveChild + start + ")";
        debuggingInterfaceIntrospectingTree("stackConstant", stackConstant);
        stackClassAmmend = document.querySelectorAll(stackConstant);
        if (type = "header") {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:revert;');
        } else {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:revert;');
        }
      } else {
        stackClassAmmend = document.querySelectorAll(attributeStack + "(" + directiveChild + start + ")");
        if (type = "header") {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:revert;');
        } else {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:revert;');
        }
      }
    }
  }
  async function factoryViewCollapseCurrent(attributeStack, directiveChild, type, start, last) {
    let stackClassAmmend = cureMuted;
    debuggingFactoryViewCollapseCurrent(attributeStack, directiveChild, last, start, type);
    if (directiveChild === "n+") {
      debuggingFactoryStatus("n+");
      if (last === "INFINITY") {
        debuggingFactoryStatusLast("INFINITY");
        let stackConstant = attributeStack + "(" + directiveChild + start + ")";
        debuggingFactoryStackConstantStatus(stackConstant);
        stackClassAmmend = document.querySelectorAll(stackConstant);
        if (type = "header") {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:none;');
        } else {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:none;');
        }
      } else {
        if (type = "header") {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:none;');
        } else {
          stackClassAmmend.forEach(section => section.style.cssText = 'display:none;');
        }
      }
    }
  }
  if (viewExpand !== null) {
    if (toggleViewExpand === true) {
      debuggingFactoryStatus("was true");
      toggleStateViewExpand = localStorage.setItem('viewExpand', true);
      viewExpand.innerHTML = viewExpanded;
      factoryViewExpanderCurrent('#ToggleTable th:nth-child', 'n+', "header", 5, 'INFINITY');
      factoryViewExpanderCurrent('#ToggleTable td:nth-child', 'n+', "cell", 5, 'INFINITY');
    } else {
      debuggingFactoryStatus("was false");
      toggleStateViewExpand = localStorage.setItem('viewExpand', false);
      viewExpand.innerHTML = viewCollapse;
      factoryViewCollapseCurrent('#ToggleTable th:nth-child', "n+", "header", 5, 'INFINITY');
      factoryViewCollapseCurrent('#ToggleTable td:nth-child', "n+", "cell", 5, 'INFINITY');
    }
  }
}
function toggleViewExpandAuto(INTENT) {
  toggleStateViewExpand = localStorage.getItem('viewExpand', toggleStateViewExpand);
  function runStateBuilder(isFresh) {
    function toggleViewExpand(DIRECTIVE) {
      var viewExpand = document.querySelector('span.view-expand-data');
      if (viewExpand !== null) {
        viewExpand.addEventListener('click', toggleViewExpandSwitch);
      } else {
        debuggingInterfaceFameActionNotAvailable("viewExpand");
      }
    }
    if (isFresh === true) {
      toggleStateViewExpand = localStorage.getItem('viewExpand', toggleStateViewExpand);
    }
    viewExpand = document.querySelector('span.view-expand-data');
    if (toggleStateViewExpand === "false") {
      debuggingInterfaceFameActionAvailable("toggleStateViewExpand", toggleStateViewExpand, "A");
      if (viewExpand !== null) {
        viewExpand.addEventListener('click', toggleViewExpandSwitch);
        viewExpand.innerHTML = viewCollapse;
        if (INTENT === "pass" && isFresh !== true) {} else {
          toggleViewExpand(INTENT);
        }
      }
    } else {
      debuggingInterfaceFameActionAvailable("toggleStateViewExpand", toggleStateViewExpand, "B");
      if (viewExpand !== null) {
        viewExpand.addEventListener('click', toggleViewExpandSwitch);
        viewExpand.innerHTML = viewExpanded;
        debuggingInterfaceFameActionAvailable("toggleStateViewExpand", toggleStateViewExpand, "C");
        if (INTENT === "pass" && isFresh !== true || toggleStateViewExpand === undefined) {
          toggleViewExpand(INTENT);
        } else {
          toggleViewExpand(INTENT);
        }
      }
    }
  }
  if (toggleStateViewExpand !== null) {
    runStateBuilder(false);
  } else {
    toggleStateViewExpandNow = localStorage.getItem('viewExpand', toggleStateViewExpand);
    runStateBuilder(true);
  }
}
async function windowProperties(defaultValue = 0) {
  debuggingMediaWindowProperties("running", "windowProperties");
  let indexMapURL = new Map();
  let urls = [];
  var urlInTransit = new URL(window.location.href);
  debuggingMediaWindowPropertyUrl(urlInTransit, "urlInTransit");
  var urlInTransitParts = urlInTransit.pathname;
  debuggingMediaWindowPropertyUrlPart(urlInTransit, "urlInTransit");
  function executeUrlMappings(VANITY) {
    async function fetchUrls(VANITY) {
      debuggingNetworkMediaFetchInstanceStatus("fetchUrls", "running");
      debuggingNetworkMediaFetchInstanceStatus(VANITY);
      const response = await fetch('/textpage/photos');
      const text = await response.text();
      urls = text.split(cureLinebreak).filter(line => line.trim() !== cureMuted);
      if (VANITY === 1) {
        debuggingVanityStatus("urlInTransitParts now::: " + urlInTransitParts + ": Adding vanity location to allowed render-locations");
        urls.push(urlInTransitParts);
      }
      debuggingMediaUrlInjest(urls, '/textpage/photos');
    }
    function generateIndexMap() {
      var localMap = 0;
      debuggingMediaIndexMap(rootDomain, 'rootDomain');
      debuggingOperationsUrls(urls);
      urls.forEach((url, index) => {
        debuggingOperationsUrlEndpoint(url);
        indexMapURL.set(rootDomain + url, index - 1);
        localMap++;
      });
      debuggingMediaIndexMapAmount(localMap, 'rootDomain');
      debuggingMediaMapSize(idInstance, indexMapURL.size);
    }
    async function init(VANITY) {
      debuggingNetworkMediaFetchInstanceStatus('init', 'loading');
      debuggingInitializersVanityStatus(VANITY);
      await fetchUrls(VANITY = VANITY);
      generateIndexMap();
      debuggingMediaIndexMapGeneratedAs(indexMapURL);
      var currentURL = document.URL;
      var illusionValue = indexMapURL.get(currentURL);
      debuggingMediaIllusionValueState(1);
      var unityObject = 0;
      if (defaultValue == 0) {
        screenX = screen.width;
        screenY = screen.height;
        screenZ = depthZNow;
      } else {
        screenX = levelVisionRenderMax + 1;
        screenY = "<br>-> overriding<br>-> forcing res: ?";
        screenZ = "<br>-> overriding<br>-> forcing res: ?";
      }
      let photoEntity = new Map();
      let listPath = new Map();
      function utilityBuild() {
        let windowModifiers = document.getElementById("windowModifiers");
        if (windowModifiers) {
          windowModifiers.innerHTML = "<b>unityObject</b><br>-> delivered: " + unityObject;
        }
      }
      async function dynamicMapURL() {
        async function generateCallbackImage(SRC, TYPE) {
          debuggingMediaCallbackImage("dynamicMap", SRC, TYPE);
          const loadImage = (src, callback) => {
            const img = new Image();
            img.onload = () => {
              callback(img);
            };
            img.src = src;
          };
          loadImage(photoEntity.get(unityObject), loadedImage => {
            debuggingMediaCallbackImageProcessing("image");
            if (TYPE === "mainImageDefault") {
              debuggingMediaCallbackImageWas("mainImageDefault");
              SRC.src = loadedImage.src;
            } else {
              debuggingMediaCallbackImageWas("mainImageBackground");
              SRC.src = loadedImage.src;
            }
          });
        }
        async function utilityBuild(unityObject) {
          var windowModifier = document.getElementById("windowModifiers");
          if (windowModifier) {
            windowModifiers.innerHTML = "<b>unityObject</b><br>-> delivered: " + unityObject;
          }
          try {
            const mainImageBackground = document.getElementById("mainImageBackground");
            if (mainImageBackground) {
              await generateCallbackImage(mainImageBackground, "mainImageBackground");
              debuggingMediaCallbackGenerated("mainImageBackground");
            } else {
              mainImage = document.getElementById("mainImageBackground");
              if (mainImage) {
                await generateCallbackImage(mainImageDefault, "mainImageDefault");
                debuggingMediaCallbackGenerated("image", "mainImageBackground");
              } else {
                debuggingMediaNoValidUtilityBuildNode();
              }
            }
          } catch (error) {
            debuggingMediaUtilityBuildNodeError(error);
          }
        }
        function utilityScore(screenX) {
          if (screenX < levelVisionRenderMin) {
            unityObject = weightVectorProcessorMinimal;
            debuggingMediaPOSel("AAAA", POSel + unityObject);
            utilityBuild(unityObject);
          } else if (screenX < levelVisionRenderMin1) {
            unityObject = weightVectorProcessorMinimal;
            debuggingMediaPOSel("BBBB", POSel + unityObject);
            utilityBuild(unityObject);
          } else if (screenX < levelVisionRenderMin2) {
            unityObject = weightVectorProcessorMinimal3;
            debuggingMediaPOSel("CCCC", POSel + unityObject);
            utilityBuild(unityObject);
          } else if (screenX < levelVisionRenderMin3) {
            unityObject = weightVectorProcessorMinimal4;
            debuggingMediaPOSel("DDDD", POSel + unityObject);
            utilityBuild(unityObject);
          } else if (screenX < levelVisionRenderMin4) {
            unityObject = weightVectorProcessorMinimal5;
            debuggingMediaPOSel("EEEE", POSel + unityObject);
            utilityBuild(unityObject);
          } else if (screenX < levelVisionRenderMax) {
            unityObject = weightVectorProcessorMinimal6;
            debuggingMediaPOSel("FFFF", POSel + unityObject);
            utilityBuild(unityObject);
          } else {
            unityObject = weightVectorProcessorHDR;
            debuggingMediaPOSel("GGGG", POSel + unityObject);
            utilityBuild(unityObject);
          }
        }
        let windowModifiers = document.getElementById("windowModifiers");
        if (windowModifiers) {
          windowModifiers.innerHTML = "Init Map: " + currentURL;
        }
        let windowProperties = document.getElementById("windowProperties");
        if (windowProperties) {
          windowProperties.innerHTML = "<u>Screen attributes</u><br><b>XValue</b><br>" + screenXtext + "<b>" + screenX + "PX</b><br><b>YValue</b><br>" + screenYtext + "<b>" + screenY + "PX</b>";
        }
        utilityScore(screenX);
        if (currentURL !== undefined) {
          debuggingOriginEndpointNow(currentURL, "currentURL");
          var illusionValue = indexMapURL.get(currentURL);
          if (illusionValue !== undefined) {
            debuggingMediaIllusionValueState(2);
            let windowURLMap = document.getElementById("windowURLMap");
            if (windowURLMap) {
              windowURLMap.innerHTML = "<b>Map generated</b><br>->  " + illusionValue;
            }
            debuggingMediaIllusionValueInTransit(illusionValue);
            if (illusionValue > 0) {
              globalTempIllusionValue = illusionValue;
              debuggingMediaStackUnpack(endpointAssets, lookupFactories, mapTemplate, unityObject, staticPaths, globalTempIllusionValue, illusionValue);
              fetchAndCreateMaps(endpointAssets, mapTemplate, staticPaths, lookupFactories, illusionValue = illusionValue, unityObject = unityObject);
            } else {
              globalTempIllusionValue = illusionValue;
              debuggingMediaIllusionValue(globalTempIllusionValue, "globalTempIllusionValue");
              if (inTransitNewEntityHostedAsset !== null) {
                inTransitNewEntityHostedAsset.innerHTML = "Image: Unavailable";
              }
              debuggingMediaIllusionValueError("failure=> " + globalTempIllusionValue);
              fetchAndCreateMaps(endpointAssets, mapTemplate, staticPaths, lookupFactories, illusionValue = illusionValue + 2, unityObject = unityObject);
            }
          } else {
            debuggingMediaStatus("illusionValue=> is undefined");
          }
        } else {
          debuggingMediaStatus("currentURL=> is undefined");
          globalTempIllusionValue = illusionValue;
          if (inTransitNewEntityHostedAsset !== null) {
            var grabAndPlaceContext = document.querySelector('.core-hosted-asset-name');
            grabAndPlaceContext.innerHTML = "Image: Unavailable";
          } else {}
          debuggingMediaIllusionValueError("failure=> " + globalTempIllusionValue);
        }
      }
      if (globalTempIllusionValue !== undefined) {
        dynamicMapURL();
      }
    }
    if (urlInTransitParts.startsWith("/@") || urlInTransitParts === "/" || urlInTransitParts === favoritePoint || urlInTransitParts === startPresentationPath) {
      init(VANITY);
    } else {
      debuggingMediaStatus("currentURL=> You need to allow-list in CORS your path or it won't load media!");
    }
  }
  if (urlInTransitParts.startsWith("/@")) {
    debuggingVanityStatus("urlInTransitParts");
    if (localStorageImageRoot !== false) {
      debuggingVanityStatus("instance with local storage set, using a custom root image.");
      executeUrlMappings(1);
    } else {
      debuggingVanityStatus("instance without local storage set, falling back to the default root image.");
      executeUrlMappings(1);
    }
  } else if (urlInTransitParts === "/" && localStorageImageRoot === false) {
    debuggingMediaRootSourceStatus("background", "is set", "generic");
    executeUrlMappings(0);
  } else if (urlInTransitParts === startPresentationPath) {
    debuggingMediaRootSourceStatus("presentation", "is set", "generic");
    executeUrlMappings(0);
  } else if (urlInTransitParts === favoritePoint) {
    debuggingMediaRootSourceStatus("favorite", "is set", "generic");
    executeUrlMappings(0);
  } else if (localStorageImageRoot !== "false") {
    try {
      var windowNow = window.location.href;
      var urlWindowNow = new URL(windowNow);
      debuggingMediaWindowPathCheck(urlWindowNow.pathname, "urlWindowNow.pathname");
      if (urlWindowNow.pathname !== "/" && !urlWindowNow.pathname.startsWith("/@") && urlWindowNow.pathname !== favoritePoint && urlWindowNow.pathname !== startPresentationPath) {
        debuggingMediaUnavailableInstance(windowNow);
      } else {
        debuggingMediaStatus("try stack, localStorageImageRoot is not false, so it's been set, checking it now.");
        if (urlInTransitParts === "/") {
          debuggingMediaStatus("Using the root path object with a custom root Image");
          executeUrlMappings(0);
        } else if (urlInTransitParts.startsWith("/@")) {
          debuggingMediaStatus("Using the vanity object with a custom vanity Image");
          executeUrlMappings(1);
        } else {
          if (urlInTransitParts === startPresentationPath) {
            debuggingMediaStatus("Generic root source is set as presentation mode");
            executeUrlMappings(0);
          } else if (urlInTransitParts === favoritePoint) {
            debuggingMediaStatus("Generic root source is a favorite");
            executeUrlMappings(0);
          } else {
            executeUrlMappings("NTH");
          }
        }
      }
    } catch (error) {
      executeUrlMappings(0);
    }
  } else {
    executeUrlMappings(0);
  }
}
document.addEventListener('DOMContentLoaded', function () {});
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  switch (event.key) {
    case '1':
      debuggingEventKeydown("Favorite", "l");
      loadPageFavorite("1");
      break;
    case 'a':
      debuggingEventKeydown("About", "a");
      loadPageAbout("a");
      break;
    case 'e':
      debuggingEventKeydown("Enclave", "e");
      loadPageEnclave("e");
      break;
    case 'g':
      debuggingEventKeydown("Gatekeeper", "g");
      loadPageGatekeeper("g");
      break;
    case 'h':
      debuggingEventKeydown("Home", "h");
      loadPageHome("h");
      break;
    case 'm':
      debuggingEventKeydown("Mail", "m");
      loadPageMail("m");
      break;
    case 'p':
      debuggingEventKeydown("Presentation", "p");
      loadPagePresentation("p");
      break;
    case 's':
      debuggingEventKeydown("Search", "s");
      loadPageSearch("s");
      break;
    case 'w':
      debuggingEventKeydown("Writing", "w");
      loadPageWriting("w");
      break;
    case 'x':
      if (isDynamicWindowVisible) {
        debuggingEventKeydown("Dynamic", "x");
        toggleDynamicWindow("x");
        isDynamicWindowVisible = false;
      }
      break;
    case 'l':
      toggleLockerlinkBar();
      break;
  }
});
document.addEventListener('touchmove', function (event) {
  if (!nestedDivUnrestrained && !nestedDiv) return;
  var targetDiv = nestedDivUnrestrained || nestedDiv;
  var currentTouchY = event.touches[0].clientY;
  var deltaY = lastTouchY - currentTouchY;
  if (isNestedScrolling === 'down' && deltaY > 0 || isNestedScrolling === 'up' && deltaY < 0) {
    targetDiv.scrollTop += deltaY * touchScrollSpeedFactor;
    isScrollingInsideNestedDiv = true;
    if (targetDiv.scrollTop === 0 || targetDiv.scrollTop === targetDiv.scrollHeight - targetDiv.clientHeight) {
      resetScrollingState();
    }
  } else if (deltaY < 0 && targetDiv.scrollTop > 0) {
    targetDiv.scrollTop += deltaY * touchScrollSpeedFactor;
    isNestedScrolling = 'up';
    isScrollingInsideNestedDiv = true;
  } else if (deltaY < 0 && targetDiv.scrollTop === 0 && !isScrollingInsideNestedDiv) {
    isNestedScrolling = 'up';
  }
  lastTouchY = currentTouchY;
}, {
  passive: false
});
document.addEventListener('touchstart', function (event) {
  lastTouchY = event.touches[0].clientY;
});
document.addEventListener('wheel', function (event) {
  if (!nestedDivUnrestrained && !nestedDiv) return;
  var targetDiv = nestedDivUnrestrained || nestedDiv;
  if (isNestedScrolling === 'down' && event.deltaY > 0) {
    targetDiv.scrollTop += event.deltaY * wheelScrollSpeedFactor;
    isScrollingInsideNestedDiv = true;
  } else if (isNestedScrolling === 'up' && event.deltaY < 0) {
    targetDiv.scrollTop += event.deltaY * wheelScrollSpeedFactor;
    isScrollingInsideNestedDiv = true;
    if (targetDiv.scrollTop === 0) {
      resetScrollingState();
    }
  } else if (event.deltaY < 0 && targetDiv.scrollTop > 0) {
    targetDiv.scrollTop += event.deltaY * wheelScrollSpeedFactor;
    isNestedScrolling = 'up';
    isScrollingInsideNestedDiv = true;
  } else if (event.deltaY < 0 && targetDiv.scrollTop === 0 && !isScrollingInsideNestedDiv) {
    isNestedScrolling = 'up';
  }
}, {
  passive: false
});
function xyEventIntercept() {
  debuggingInterfaceEventsXYRegion(regionX, regionY);
}
function xyEventIntersection(event) {
  var xAxis = event.clientX;
  var yAxis = event.clientY;
  debuggingEventXYVectorPosition2D("X-Axis", xAxis, "Y-Axis", yAxis);
  regionX = xAxis;
  regionY = yAxis;
}
function xyEventResponse() {
  let match = 0;
  if (regionX > 50 & regionY > 50) {
    match = 0;
  } else {
    match = 1;
  }
  if (match === 0) {
    debuggingEventMouse("Mouse", eventMouse, "STATUS");
  } else if (match === 1) {
    debuggingEventMouse("MouseOver", eventMouseOver, "SPECIAL STATUS");
  } else {
    debuggingEventMouse("Unspecified", "Non-provided", "-");
  }
}
function stateStart() {
  makeNetworkCheck();
  var trackerInterval = window.setInterval(tallyTime, preferredTrackerInterval);
}
function tallyTime() {
  counterTimeNow++;
  makeNetworkCheck();
  function segmentTime(UNIT) {
    if (parseInt(counterTimeNow) % UNIT === preferredTAbase) {
      debuggingTimeAlert(preferredTAunit, counterTimeNow);
    }
  }
  if (preferredTimeAlert === preferredTAc) {
    segmentTime(preferredTAc);
  } else if (preferredTimeAlert === preferredTAb) {
    segmentTime(preferredTAb);
  } else if (preferredTimeAlert === preferredTAa) {
    segmentTime(preferredTAa);
  } else {
    segmentTime(preferredTAc);
  }
}
function frameMacroWindowFrame() {
  setInterval(evaluateFrame, delayActionMacro);
}
function frameMacroWindowHeight() {
  setInterval(evaluateFrameHeight, delayActionMacro);
}
function frameMacroWindowWidth() {
  setInterval(evaluateFrameWidth, delayActionMacro);
}
function octavianFacilitateTimedAction(ACTIONCLASS) {
  if (ACTIONCLASS === "m") {
    debuggingInterfaceFrameMapConstruction("Octavian");
    const octavianGet = document.querySelector('.entity-content-map');
    const octavianGetMap = document.querySelector('#shadowDomIframeMap');
    function setTimerTimeout(INSTANCE, INSTANCEMAP) {
      if ((INSTANCE && INSTANCEMAP) !== null) {
        const iFrameOctavian = document.createElement('iframe');
        const iFrameOctavianMap = document.createElement('iframe');
        debuggingInterfaceFrameCreated({
          "iFrameOctavia: ": iFrameOctavian,
          "iFrameOctaviaMap": iFrameOctavianMap
        });
        const jumpStarter = setTimeout(() => {
          INSTANCE.src = "";
          INSTANCEMAP.src = "";
        }, preferredNetworkImplosion);
        INSTANCE.onload = () => {
          debuggingInterfaceFrameStatus("Loaded::: octavia: Map instance iframe");
          clearTimeout(jumpStarter);
        };
        INSTANCE.onerror = () => {
          debuggingInterfaceFrameStatusError("Did not load::: octavia: Map instance iframe didn't load, the network is probably down");
          clearTimeout(jumpStarter);
        };
        const defaultMarginHeightValue = document.querySelector('#shadowValueIframe.marginHeight');
        const defaultMarginWidthValue = document.querySelector('#shadowValueIframe.marginWidth');
        const defaultScrolling = document.querySelector('#shadowValueIframe.scrolling');
        const defaultSrcValue = document.querySelector('#shadowValueIframe.src');
        if ((defaultScrolling && defaultMarginWidthValue && defaultMarginHeightValue && defaultSrcValue) !== null) {
          iFrameOctavian.setAttribute('id', 'octavian');
          iFrameOctavian.setAttribute('scrolling', defaultScrolling.innerHTML);
          iFrameOctavian.setAttribute('marginWidth', defaultMarginWidthValue.innerHTML);
          iFrameOctavian.setAttribute('marginHeight', defaultMarginHeightValue.innerHTML);
          iFrameOctavian.setAttribute('src', defaultSrcValue.innerHTML);
          iFrameOctavianMap.setAttribute('id', 'octavian');
          iFrameOctavianMap.setAttribute('class', 'map');
          iFrameOctavianMap.setAttribute('scrolling', defaultScrolling.innerHTML);
          iFrameOctavianMap.setAttribute('marginWidth', defaultMarginWidthValue.innerHTML);
          iFrameOctavianMap.setAttribute('marginHeight', defaultMarginHeightValue.innerHTML);
          iFrameOctavianMap.setAttribute('src', defaultSrcValue.innerHTML);
          if (navigator.onLine) {
            INSTANCE.appendChild(iFrameOctavian);
            INSTANCEMAP.appendChild(iFrameOctavianMap);
            debuggingNetworkStatus("Built::: Octavian-enforced frames");
          }
        }
      } else {
        debuggingNetworkStatusMap("offline");
      }
    }
    setTimerTimeout(octavianGet, octavianGetMap);
  } else {
    debuggingNetworkStatusMap("bunk");
  }
}
function continueTyping() {
  if (indexEmulator < terminalInputText.length) {
    typingTimeout = setTimeout(typeLetter, typingSpeed);
  }
}
function destroyTempoRoutine() {
  formatVariableTime(counterTimeNow);
}
function formatTimeEnd() {
  timeEnd = 0;
}
function formatVariableTime(spentTime = counterTimeNow) {
  makeMockRequestPOST(tempo_contribution = spentTime);
  debuggingInteractiveHumanPageStats(pageCurrent, spentTime);
}
function loadPageAbout(KEY) {
  debuggingEventDynamicKey(KEY);
  fetch('/about/').then(function (response) {
    return response.text();
  }).then(function (html) {
    var aboutContainer = document.getElementById('constantContainer');
    if (aboutContainer !== null) {
      aboutContainer.innerHTML = html;
      if (!isDynamicWindowVisible) {
        toggleDynamicWindow(KEY);
      }
    } else {
      debuggingEventDynamicKeyFailure("aboutContainer");
    }
  }).catch(function (error) {
    debuggingEventDynamicKeyFailure("Failed to load page");
  });
}
function loadPageEnclave(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = enclavePoint;
}
function loadPageFavorite(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = favoritePoint;
}
function loadPageGatekeeper(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = newentity_enter;
}
function loadPageHome(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = originPoint;
}
function loadPageMail(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = sectionMail;
}
function loadPagePresentation(getEventInformation) {
  debuggingEventKeyInformation(getEventInformation);
  window.location = startingPointPresentation;
}
function loadPageSearch(KEY) {
  debuggingEventDynamicKey(KEY);
  fetch('/global/').then(function (response) {
    return response.text();
  }).then(function (html) {
    var searchContainer = document.getElementById('constantContainer');
    if (searchContainer !== null) {
      searchContainer.innerHTML = html;
      if (!isDynamicWindowVisible) {
        toggleDynamicWindow(KEY);
      }
    } else {
      debuggingEventDynamicKeyFailure("Failed to load page");
    }
  }).catch(function (error) {
    debuggingEventDynamicKeyFailure("Failed to load the search page: " + error);
  });
}
function loadPageWriting(KEY) {
  debuggingEventDynamicKey(KEY);
  fetch('/writing/').then(function (response) {
    return response.text();
  }).then(function (html) {
    var writingContainer = document.getElementById('constantContainer');
    if (writingContainer !== null) {
      writingContainer.innerHTML = html;
      if (!isDynamicWindowVisible) {
        toggleDynamicWindow(KEY);
      }
    } else {
      debuggingEventDynamicKeyFailure("writingContainer");
    }
  }).catch(function (error) {
    debuggingEventDynamicKeyFailure("Failed to load the writing page: " + error);
  });
}
function moduleMailInstance(fieldValue) {
  let counterCure = 0;
  var valueCleanInplaceList = new Map([["<", "\/<\/"], [">", "\/>\/"], ["?", "\/?\/"], ["/", "\/(/)\/"], ["#", "\/#\/"], ["&", "\/&\/"]]);
  function processTranslation(a = 0, b = 0, c = 0) {
    var assessValue = fieldValue[counterCure];
    try {
      var cureThisValue = valueCleanInplaceList.get(assessValue);
      listCurred.push(cureThisValue);
    } catch (err) {
      listCurred.push(assessValue);
    }
  }
  while (counterCure < fieldValue.length) {
    processTranslation();
    counterCure++;
  }
  let assembledString = listCurred.toString();
  factoryCleanValueInput(assembledString, a, b, c);
}
function onActiveKillInputMailHere(event) {
  debuggingSecurityKillActive("InputMail", "a");
  if (stateInputNow === 0) {
    hasProtectedRegionalState = 1;
    debuggingSecurityKillActiveState("Protected State: AKICH Active", "b");
  } else {
    hasProtectedRegionalState = 0;
    debuggingSecurityKillActiveState("Protected State: AKICH Inactive", "c");
  }
}
function onActiveKillInputName(event) {
  debuggingSecurityKillActive("InputName", "a");
  if (stateInputNow === 0) {
    hasProtectedRegionalState = 1;
    debuggingSecurityKillActiveState("Protected State: AKIN Active", "b");
  } else {
    hasProtectedRegionalState = 0;
    debuggingSecurityKillActiveState("Protected State: AKIN Inactive", "c");
  }
}
function onActiveKillTextarea(event) {
  debuggingSecurityKillActive("Textarea", "a");
  if (stateTextareaNow === 0) {
    hasProtectedRegionalState = 1;
    debuggingSecurityKillActiveState("Protected State: AKT Active", "b");
  } else {
    hasProtectedRegionalState = 0;
    debuggingSecurityKillActiveState("Protected State: AKT Active", "b");
  }
}
function animateUptimeMacro() {
  let timeNow = "13:20:33";
  if (timeNow < "00:00:00" && timeNow > "06:00:00") {} else if (timeNow > "8:00:00") {} else if (timeNow < "18:00:00") {} else if (timeNow > "18:00:00") {} else if (timeNow > "20:00:00") {} else {}
}
try {
  buttonContact.addEventListener('click', function () {
    let retrievalDOMFieldValueA = document.getElementById("name").value;
    fieldValueA = [];
    function StringA() {
      fieldValueA = retrievalDOMFieldValueA.split();
    }
    StringA(a = 1, b = 0, c = 0);
    moduleMailInstance(fieldValue = fieldValueA);
    let retrievalDOMFieldValueB = document.getElementById("your_message").value;
    fieldValueB = [];
    function StringB() {
      fieldValueB = retrievalDOMFieldValueB.split();
    }
    StringB(a = 0, b = 1, c = 0);
    moduleMailInstance(fieldValue = fieldValueB);
    let retrievalDOMFieldValueC = document.getElementById("contact_here").value;
    fieldValueC = [];
    function StringC() {
      fieldValueC = retrievalDOMFieldValueC.split();
    }
    StringC(a = 0, b = 0, c = 1);
    moduleMailInstance(fieldValue = fieldValueC);
    listCurred = [];
    const tokenCSRF = document.getElementById("csrf_token").value;
    const fieldType = document.getElementById("type").value;
    const ageRange = document.getElementById("age").value;
    let objectRequestPOST = {
      "csrf_token": tokenCSRF,
      "name": neededStringA,
      "type": fieldType,
      "your_message": neededStringB,
      "contact_here": neededStringC,
      "age": ageRange
    };
    debuggingNetworkContactSubmission(objectRequestPOST, "objectRequestPOST");
    if (window.location.href.includes('/mail/')) {
      makeRequestPOST(objectRequestPOST);
      debuggingOperationsTokenGenerated();
    } else {
      debuggingOperationsTokenGenerationFailure("You're not on the appropriate page to make this request: /mail/");
    }
  });
} catch (error) {
  debuggingOperationsTokenGenerationEmpty(error);
}
try {
  const inputsName = document.querySelector('input[name="contact_here"]');
  inputsName.addEventListener('focus', event => {
    onActiveKillInputMailHere(event);
  });
} catch (error) {
  debuggingSecurityProtectedAreaAlert('input[name="contact_here"]', 0);
}
try {
  const inputsName = document.querySelector('input[name="name"]');
  inputsName.addEventListener('focus', event => {
    onActiveKillInputName(event);
  });
} catch (error) {
  debuggingSecurityProtectedAreaAlert('input[name="name"]', 0);
}
try {
  const textareaAll = document.querySelector("textarea");
  textareaAll.addEventListener('focus', event => {
    onActiveKillTextarea(event);
  });
} catch (error) {
  debuggingSecurityProtectedAreaAlert("textarea", 0);
}
if (uploadForm) {
  const fileInput = document.getElementById('file');
  const progressBar = document.getElementById('progressBarUpload');
  const fileNameDisplay = document.querySelector('.file-name-display');
  uploadForm.addEventListener('submit', async event => {
    event.preventDefault();
    const csrfToken = document.getElementById('csrf_token').value;
    const urlParts = new URL(window.location.href);
    const username = urlParts.pathname.split('/')[2];
    const url = originPoint + `/enclave/${username}/upload/asset`;
    const currentTime = new Date();
    if (fileInput.files.length === 0) {
      alert('No file selected');
      return;
    } else {
      const chunkSize = 1024 * 1024;
      let totalFilesUploaded = 0;
      progressBar.style.width = '0%';
      progressBar.style.backgroundColor = '#008000';
      for (let fileIndex = 0; fileIndex < fileInput.files.length; fileIndex++) {
        const file = fileInput.files[fileIndex];
        const totalSize = file.size;
        const chunks = Math.ceil(totalSize / chunkSize);
        let chunkNumber = 0;
        let failedChunks = [];
        let continueUpload = true;
        fileNameDisplay.textContent = file.name;
        const formData = new FormData();
        while (chunkNumber < chunks && continueUpload) {
          const start = chunkNumber * chunkSize;
          const end = Math.min(totalSize, start + chunkSize);
          const chunk = file.slice(start, end);
          debuggingOperationsChunkEvaluation(`${chunkNumber}`, `${chunk.size}`, `${end}`, `${start}`);
          if (chunkNumber === 0) {
            const reader = new FileReader();
            reader.onload = function (event) {
              debuggingOperationsChunkVerifyFirst(event.target.result);
            };
            reader.readAsText(chunk);
          }
          formData.append('csrf_token', csrfToken);
          formData.append('chunk', chunk);
          formData.append('vcnkey', username);
          formData.append('record_date', currentTime);
          formData.append('route_complex', "ajax");
          formData.append('chunk_number', chunkNumber);
          formData.append('filename', file.name);
          debuggingOperationsChunkArray(formData);
          const headers = new Headers();
          headers.append('X-CSRFToken', csrfToken);
          try {
            const response = await fetch(url, {
              method: 'POST',
              body: formData,
              headers: headers,
              credentials: 'same-origin'
            });
            const progress = Math.round((chunkNumber + 1) / chunks * 100);
            progressBar.style.width = progress + '%';
            progressBar.textContent = progress + '%';
            if (!response.ok) {
              let operationsStatus = `Upload failed:  status (${response.status})`;
              debuggingOperationsUploadFailure(operationsStatus);
              throw new Error(operationsStatus);
            }
            const jsonResponse = await response.json();
            if (jsonResponse.status !== 'received' || jsonResponse.chunk !== chunkNumber) {
              let operationsStatus = `chunk-> server did not receive element ${chunkNumber} and an error was logged`;
              debuggingOperationsUploadFailure(operationsStatus);
              throw new Error(operationsStatus);
            }
          } catch (error) {
            debuggingOperationsUploadFailure(`${error.message}`);
            failedChunks.push(chunkNumber);
          }
          chunkNumber++;
        }
        if (!continueUpload) {
          debuggingOperationsUploadFailure('Upload was terminated due to repeated failures');
          break;
        }
        totalFilesUploaded++;
        if (totalFilesUploaded === fileInput.files.length) {
          progressBar.style.backgroundColor = '#800080';
          progressBar.textContent = 'Upload Complete';
          debuggingOperationsUploadFailure();
          alert('All files uploaded successfully');
          window.location.reload();
        }
      }
    }
  });
}
if (textElement !== null) {
  debuggingOperationsTextSpecial("Text to animate: found.");
  fetch(sectionTextpage + slugTextpageTerminal).then(response => response.text()).then(dataTextpage => {
    textOptions = dataTextpage.split(cureLinebreak).map(row => row.replace(/<<<i>/i, cureMuted).trim());
    startAnimation();
  });
} else {
  debuggingOperationsTextSpecial("No text to animate.");
}
function handleClickSmoke() {
  clickCountSmoke++;
  if (clickCountSmoke < 5) {
    smoke.classList.add('clicked');
  } else if (clickCountSmoke === 5) {
    smoke.classList.add('smoke-animation');
    smoke.removeEventListener('mouseenter', moveSmoke);
    setTimeout(() => {
      const newSmoke = factoryCreateElement('div');
      newSmoke.className = 'smoke reincarnated';
      newSmoke.style.left = 'calc(100% - 55px)';
      newSmoke.style.top = '44px';
      newSmoke.style.backgroundColor = 'rgb(237, 237, 237)';
      const mouth = factoryCreateElement('div');
      mouth.className = 'mouth';
      newSmoke.appendChild(mouth);
      const halo = factoryCreateElement('div');
      halo.className = 'halo';
      newSmoke.appendChild(halo);
      const ripText = factoryCreateElement('div');
      ripText.className = 'rip-text';
      ripText.innerHTML = 'R.I.P<br>Smoke';
      newSmoke.appendChild(ripText);
      const gravestone = factoryCreateElement('div');
      gravestone.className = 'gravestone';
      newSmoke.appendChild(gravestone);
      smokesHome.appendChild(newSmoke);
      newSmoke.addEventListener('click', () => {
        resetSmoke();
      });
    }, 2000);
  }
}
function moveSmoke() {
  if (clickCountSmoke < 5) {
    let newX, newY;
    if (isFirstEnterSmoke) {
      newX = Math.min(window.innerWidth - smoke.offsetWidth, smoke.offsetLeft + Math.random() * 89 + 89);
      newY = Math.min(window.innerHeight - smoke.offsetHeight, smoke.offsetTop + Math.random() * 89 + 89);
      isFirstEnterSmoke = false;
    } else {
      newX = Math.max(0, Math.min(window.innerWidth - smoke.offsetWidth, smoke.offsetLeft + (Math.random() - 0.5) * 100));
      newY = Math.max(0, Math.min(window.innerHeight - smoke.offsetHeight, smoke.offsetTop + (Math.random() - 0.5) * 100));
    }
    smoke.style.left = `${newX}px`;
    smoke.style.top = `${newY}px`;
  }
}
function resetSmoke() {
  smokesHome.innerHTML = '';
  smokesHome.appendChild(smoke);
  smoke.style.width = '34px';
  smoke.style.height = '34px';
  smoke.style.backgroundColor = '#1E90FF';
  smoke.className = 'smoke';
  smoke.innerHTML = '<div class="mouth"></div>';
  clickCountSmoke = 0;
  isFirstEnterSmoke = true;
  smoke.addEventListener('mouseenter', moveSmoke);
  smoke.addEventListener('click', handleClick);
}
function startAnimation() {
  clearTimeout(typingTimeout);
  terminalInputText = textOptions[Math.floor(Math.random() * textOptions.length)];
  const wpm = Math.floor(Math.random() * (124 - 66 + 1)) + 66;
  typingSpeed = 60000 / (wpm * 5);
  if (terminalInputText.length > 80) {
    pauseDurationsEmulator = [11, 19, 25, 47, 58, 71];
  } else if (terminalInputText.length > 40) {
    pauseDurationsEmulator = [18, 24, 31, terminalInputText.length - 2];
  } else {
    pauseDurationsEmulator = [12, 28, terminalInputText.length - 8];
  }
  pauseTimesEmulator = pauseDurationsEmulator.map(() => Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000);
  indexEmulator = 0;
  pauseIndexEmulator = 0;
  textElement.textContent = '';
  blinkerEmulator.style.opacity = 0;
  typeLetter();
}
function typeLetter() {
  if (indexEmulator < terminalInputText.length) {
    textElement.textContent += terminalInputText[indexEmulator++];
    if (indexEmulator === pauseDurationsEmulator[pauseIndexEmulator]) {
      blinkerEmulator.style.opacity = 1;
      typingTimeout = setTimeout(() => {
        blinkerEmulator.style.opacity = 0;
        if (pauseIndexEmulator < pauseDurationsEmulator.length - 1) {
          pauseIndexEmulator++;
        }
        continueTyping();
      }, pauseTimesEmulator[pauseIndexEmulator]);
    } else {
      typingTimeout = setTimeout(typeLetter, typingSpeed);
    }
  } else {
    blinkerEmulator.style.opacity = 1;
    setInterval(() => {
      blinkerEmulator.style.opacity = 1 - blinkerEmulator.style.opacity;
    }, 800);
  }
}
function highlightCells(TYPE) {
  debuggingInterfaceAction("RAN", "highlightCells");
  var table, tbody, rows, cell, link, i, working;
  let offset = 0;
  table = document.getElementById("ToggleTable");
  tbody = table.getElementsByTagName("tbody")[0];
  rows = tbody.rows;
  for (i = 0; i < rows.length; i++) {
    const row = rows[i];
    const tds = row.getElementsByTagName("td");
    debuggingOperationsInstance("row", row);
    cellLocation = rows[i].getElementsByTagName("TD")[2 + offset];
    link = cellLocation.getElementsByTagName("a")[0 + offset];
    cellWorking = rows[i].getElementsByTagName("TD")[3 + offset];
    linkWorking = cellWorking.getElementsByTagName("a");
    debuggingOperationsInstance("linkWorking[0]", linkWorking[0]);
    cellHidden = rows[i].getElementsByTagName("TD")[9 + offset];
    debuggingOperationsInstance("cellLocation.innerHTML", cellLocation.innerHTML);
    debuggingOperationsInstance("link.innerHTML", link.innerHTML);
    debuggingOperationsInstance("cellWorking.innerHTML", cellWorking.innerHTML);
    debuggingOperationsInstance("cellHidden.textContent", cellHidden.textContent);
    debuggingOperationsInstance("cellHidden.innerHTML", cellHidden.innerHTML);
    if (link && link.href.toLowerCase().startsWith("http://")) {
      link.classList.add("url-not-secure");
    }
    if (cellWorking.textContent.toLowerCase().trim() === "yes") {
      cellWorking.classList.add("instance-is-working");
    } else {
      link.classList.add("link-needs-audit");
      linkWorking[0].id = "status-working-no";
      cellWorking.classList.add("instance-not-working");
    }
    try {
      if (cellHidden.innerHTML.toLowerCase().trim() === "yes") {
        debuggingOperationsInstance("cellHidden.innerHTML value", cellHidden.innerHTML.toLowerCase().trim());
        for (let j = 0; j < tds.length; j++) {
          const td = tds[j];
          td.classList.add("row-overlay");
          link.classList.add("hiddenLink");
          const overlayRow = factoryCreateElement("div");
          overlayRow.className = 'overlay-row';
          rows[i].appendChild(overlayRow);
        }
      } else if (cellHidden.innerHTML.toLowerCase().trim() === "-") {
        debuggingOperationsInstance("cellHidden.innerHTML value", cellHidden.innerHTML.toLowerCase().trim());
        for (let j = 0; j < tds.length; j++) {
          const td = tds[j];
          td.classList.add("row-overlay-empty");
          link.classList.add("hiddenLink");
          const overlayRow = factoryCreateElement("div");
          overlayRow.className = 'overlay-row';
          rows[i].appendChild(overlayRow);
        }
      } else if (cellHidden.innerHTML.toLowerCase().trim() === "x") {
        debuggingOperationsInstance("cellHidden.innerHTML value", cellHidden.innerHTML.toLowerCase().trim());
        for (let j = 0; j < tds.length; j++) {
          const td = tds[j];
          td.classList.add("row-overlay-trim");
          link.classList.add("hiddenLink");
          const overlayRow = factoryCreateElement("div");
          overlayRow.className = 'overlay-row';
          rows[i].appendChild(overlayRow);
        }
      }
    } catch (error) {
      debuggingOperationsInstanceError(error, "No hidden properties to altern");
    }
  }
}
function sortableAlpha(columnIndex, isNumeric) {
  debuggingOperationsInstance("columnIndex", columnIndex);
  debuggingOperationsInstance("isNumeric", isNumeric);
  var offset = 0;
  var columnIndexOffset = columnIndex + offset;
  var table, tbody, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ToggleTable");
  tbody = table.getElementsByTagName("tbody")[0];
  switching = true;
  var x = cureMuted;
  var y = cureMuted;
  if (isAsc === false) {
    while (switching) {
      switching = false;
      rows = tbody.rows;
      for (i = 0; i < rows.length - 1; i++) {
        shouldSwitch = false;
        if (columnIndex === 0) {
          try {
            x = rows[i].querySelector("span b.statusAlert");
            y = rows[i + 1].querySelector("span b.statusAlert");
            debuggingOperationsInstance("x status (a)", x.innerHTML);
            debuggingOperationsInstance("y status (a)", y.innerHTML);
          } catch (error) {
            debuggingOperationsInstance("setting x,y table error", error);
          }
        } else {
          debuggingOperationsInstance("x, y was not 0 (a)", "-");
          try {
            x = rows[i].getElementsByTagName("TD")[columnIndexOffset];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndexOffset];
          } catch (error) {
            debuggingOperationsInstance("setting x,y table error", error);
          }
        }
        debuggingOperationsInstance("x (a)", x.innerHTML);
        debuggingOperationsInstance("y (a)", y.innerHTML);
        if (isNumeric) {
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            isAsc = true;
            shouldSwitch = true;
            break;
          }
        } else {
          try {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              isAsc = true;
              shouldSwitch = true;
              break;
            }
          } catch (error) {
            debuggingOperationsInstance("x/y can't be converted to lowercase", "-");
          }
        }
      }
      if (shouldSwitch) {
        isAsc = true;
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  } else {
    while (switching) {
      switching = false;
      rows = tbody.rows;
      for (i = 0; i < rows.length - 1; i++) {
        shouldSwitch = false;
        if (columnIndex === 0) {
          try {
            y = rows[i + 1].querySelector("span b.statusAlert");
            x = rows[i].querySelector("span b.statusAlert");
            debuggingOperationsInstance("x status (b)", x.innerHTML);
            debuggingOperationsInstance("y status (b)", y.innerHTML);
          } catch (error) {
            debuggingOperationsInstance("setting x,y table error", error);
          }
        } else {
          debuggingOperationsInstance("x, y was not 0 (b)", "-");
          y = rows[i + 1].getElementsByTagName("TD")[columnIndexOffset];
          x = rows[i].getElementsByTagName("TD")[columnIndexOffset];
        }
        debuggingOperationsInstance("x (b)", x.innerHTML);
        debuggingOperationsInstance("y (b)", y.innerHTML);
        if (isNumeric) {
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            isAsc = false;
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            isAsc = false;
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        isAsc = false;
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
if (window.api) {
  window.api.goHome(() => {
    window.location.href = "/";
  });
}
function checkLocationStatus(TYPE) {
  const offset = 0;
  const table = document.getElementById("ToggleTable");
  debuggingOperationsInstance("table", table);
  const rows = table.getElementsByTagName('tr');
  debuggingOperationsInstance("rows", rows);
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    debuggingOperationsInstance("rows", rows);
    const anchorElement = row.cells[2 + offset];
    let requiredFieldAnchor = anchorElement.getElementsByTagName("a")[0 + offset];
    const queryValue = requiredFieldAnchor;
    debuggingOperationsInstance("queryValue", queryValue);
    const statusSpan = row.cells[0 + offset].getElementsByTagName('span')[0];
    const statusSpanB = row.cells[0 + offset].querySelector('span b.statusAlert');
    debuggingOperationsInstance("statusSpan", statusSpan);
    if (queryValue === undefined) {
      debuggingNetworkFetchError("You can't query an undefined endpoint", queryValue, "not initialized");
    } else {
      fetch(HOST_NOW_RESOLVED_API + `${queryValue}`).then(response => {
        if (!response.ok) {
          statusSpan.className = "status-not-reachable";
          statusSpanB.innerHTML = "D";
          debuggingOperationsInstance("statusSpanB.innerHTML", statusSpanB.innerHTML);
          throw new Error(`HTTP error-> status: ${response.status}`);
        }
        return response.json();
      }).then(locIndicator => {
        debuggingNetworkStatusVerbose('locIndicator', locIndicator);
        if (locIndicator.success) {
          statusSpan.className = "status-okay";
          statusSpanB.innerHTML = "U";
          debuggingOperationsInstance("statusSpanB.innerHTML (a)", statusSpanB.innerHTML);
        } else {
          if (locIndicator.message.includes('400') || locIndicator.message.includes('404')) {
            statusSpan.className = "status-mangled";
            statusSpanB.innerHTML = "D";
            debuggingOperationsInstance("statusSpanB.innerHTML (b)", statusSpanB.innerHTML);
          } else {
            if (locIndicator.message.includes('401')) {
              statusSpan.className = "status-mangled-locked";
              statusSpanB.innerHTML = "M";
              debuggingOperationsInstance("statusSpanB.innerHTML (c)", statusSpanB.innerHTML);
            } else if (locIndicator.message.includes('403') || locIndicator.message.includes('407')) {
              statusSpan.className = "status-mangled";
              statusSpanB.innerHTML = "M";
              debuggingOperationsInstance("statusSpanB.innerHTML (d)", statusSpanB.innerHTML);
            } else if (locIndicator.message.includes('500') || locIndicator.message.includes('501') || locIndicator.message.includes('502')) {
              statusSpan.className = "status-not-reachable";
              debuggingOperationsInstance("Network error", error);
            } else {
              statusSpan.className = "status-not-reachable";
              statusSpanB.innerHTML = "D";
              debuggingOperationsInstance("statusSpanB.innerHTML (e)", statusSpanB.innerHTML);
            }
          }
        }
      }).catch(error => {
        if (error.message.includes('HTTP error-> status')) {
          const statusCode = parseInt(error.message.split(': ')[1], 10);
          debuggingNetworkResponseStatusCode(statusCode, "The response status code was");
        } else {
          debuggingNetworkResponseStatusCode("undefined", "Generic network error-> undefined");
        }
      });
    }
  }
}
let stateFilter = {
  ":D": ["DIRECTORY", filtersStateDirectory],
  ":E": ["ENTITYSCRIPT", filtersStateEntityScript],
  ":F": ["FILE", filtersStateFile],
  ":NA": ["NOTAVAILABLE", filtersStateNotAvailable]
};
function providesInquisitorDirectory() {
  runtimeInquisitorDirectory(blockLocation);
}
function providesInquisitorFile() {
  runtimeInquisitorFile();
}
function providesInquisitorFunctionality() {
  queNowSurvivalNoneState = 1;
  runtimeInquisitorFunctionality("standard");
}
function providesInquisitorFunctionalityTree(EVENT, PATH) {
  queNowSurvivalNoneState = 1;
  runtimeInquisitorFunctionalityTree(EVENT, PATH);
}
function getInquisitorIconSourceDirectoryActive(CURRENT, HIDDEN) {
  let eventAction = document.querySelector('span.eventAction');
  let eventAudit = document.querySelector('span.eventAudit');
  if (eventAction) {
    let instancePortalProperty = CURRENT;
    eventAction.innerHTML = instancePortalProperty;
  }
  if (eventAudit) {
    let instanceStatusProperty = HIDDEN;
    eventAudit.innerHTML = instanceStatusProperty;
  }
  let sourceNow = document.querySelector('#iconInquisitorAlert').src;
  debuggingInquisitorOperationsStatus("sourceNow", sourceNow, "directory");
  let naturalProperty = HIDDEN + "/" + CURRENT;
  if (HIDDEN.startsWith("/")) {
    debuggingInquisitorOperationsStatus("naturalProperty", naturalProperty, "pass");
  } else {
    naturalProperty = "/" + HIDDEN + "/" + CURRENT;
    debuggingInquisitorOperationsStatus("naturalProperty", naturalProperty, "augement directory");
  }
  lookupInquisitorFunc(naturalProperty);
  if (sourceNow !== fullyQualifiedSourceId) {
    sourceNow = fullyQualifiedSourceId;
    document.querySelector('#iconInquisitorAlert').src = sourceNow;
  }
}
function getInquisitorIconSourceFileActive(CURRENT, HIDDEN) {
  let eventAction = document.querySelector('span.eventAction');
  let eventAudit = document.querySelector('span.eventAudit');
  if (eventAction) {
    let instancePortalProperty = CURRENT;
    eventAction.innerHTML = instancePortalProperty;
  }
  if (eventAudit) {
    let instanceStatusProperty = HIDDEN;
    eventAudit.innerHTML = instanceStatusProperty;
  }
  let sourceNow = document.querySelector('#iconInquisitorAlert').src;
  debuggingInquisitorOperationsStatus("sourceNow", sourceNow, "file");
  let naturalProperty = HIDDEN + "/" + CURRENT;
  if (HIDDEN.startsWith("/")) {
    debuggingInquisitorOperationsStatus("naturalProperty", naturalProperty, "pass");
  } else {
    naturalProperty = "/" + HIDDEN + "/" + CURRENT;
    debuggingInquisitorOperationsStatus("naturalProperty", naturalProperty, "augement file");
  }
  lookupInquisitorFunc(naturalProperty);
  if (sourceNow !== fullyQualifiedSourceIf) {
    sourceNow = fullyQualifiedSourceIf;
    document.querySelector('#iconInquisitorAlert').src = sourceNow;
  }
}
function getInquisitorIconSourceDirectory() {
  let sourceNow = document.querySelector('#iconInquisitorAlert').src;
  debuggingInquisitorOperationsStatus("sourceNow", sourceNow, "querySelector::: #iconInquisitorAlert");
  if (sourceNow !== sourceIconDirectory) {
    sourceNow = fullyQualifiedSourceId;
    document.querySelector('#iconInquisitorAlert').src = sourceNow;
  }
}
function getInquisitorIconSourceFile() {
  let sourceNow = document.querySelector('#iconInquisitorAlert').src;
  debuggingInquisitorOperationsStatus("sourceNow", sourceNow, "querySelector::: #iconInquisitorAlert");
  if (sourceNow !== sourceIconFile) {
    sourceNow = fullyQualifiedSourceIf;
    document.querySelector('#iconInquisitorAlert').src = sourceNow;
  }
}
function runtimeInquisitorDirectory(inquisitorSearch) {
  isFileNow = 0;
  debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "was (passed as)");
  if (inquisitorSearch === "NA") {
    debuggingInquisitorOperationsStatus("-", "-", "NA: Custom Behavior Passed");
  } else {
    let directoryInstance = document.querySelectorAll('div.slug-fs-directory');
    let fileInstance = document.querySelectorAll('div.slug-fs-file');
    let cTokenNow = document.getElementById("cToken");
    let TokenPost = cureMuted;
    try {
      TokenPost = cTokenNow.textContent;
    } catch (error) {
      debuggingSecurityCTokenNow("cTokenNow", "Not in use::: Falling back: " + error);
    }
    let pathCurrentSlug = document.getElementById("pathCurrentSlug");
    if (cTokenNow === null) {
      debuggingSecurityCTokenNow("cTokenNow", "empty");
    } else {
      if (pathCurrentSlug === null) {} else {
        let qualifiedSlug = pathCurrentSlug.textContent;
        if (directoryInstance === null) {} else {
          debuggingSecurityTokenPost("TokenPost", TokenPost);
          function removeSelectedStyle() {
            directoryInstance.forEach(div => {
              div.classList.remove('hover-directory-static');
              div.classList.remove('hover-directory-static.b');
            });
            fileInstance.forEach(div => {
              div.classList.remove('hover-file-static');
              div.classList.remove('hover-file-static.b');
            });
          }
          if (inquisitorSearch === "NONE") {
            directoryInstance.forEach(div => {
              div.addEventListener('click', function (event) {
                removeSelectedStyle();
                div.classList.add('hover-directory-static');
                let IIN = document.querySelector('b#itemInquisitorNow');
                if (IIN) {
                  debuggingInquisitorOperationsStatus("IIN", IIN, "-");
                  let valueIIN = div.getAttribute('node');
                  debuggingInquisitorOperationsStatus("valueIIN", valueIIN, "-");
                  IIN.innerHTML = valueIIN;
                  if (event !== eventOperationLast) {
                    stateActive = div.textContent;
                    stateDirectory = valueIIN;
                    stateFile = 0;
                  }
                  eventOperationLast = event;
                }
              });
              div.setAttribute('node', queNowSurvivalNoneState);
              debuggingEventStatefulQue("single", "click event", "A", "queNowSurvivalNoneState", queNowSurvivalNoneState);
              queNowSurvivalNoneState++;
              div.addEventListener('dblclick', function (event) {
                let IIN = document.querySelector('b#itemInquisitorNow');
                if (IIN) {
                  debuggingInquisitorOperationsStatus("IIN", IIN, "-");
                  IIN.innerHTML = "-";
                }
                debuggingInquisitorOperationsStatus("queNowSurvivalNoneState D", queNowSurvivalNoneState, "-");
                if (div.contains(event.target)) {
                  debuggingInquisitorOperationsStatus("event.target", event.target, "-");
                  let dIi = event.target.querySelector('.slug-directory');
                  debuggingInquisitorOperationsStatus("dIi", dIi, "-");
                  let dataPostable = cureMuted;
                  if (dIi === null) {
                    dIi = event.target;
                    dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
                  } else {
                    dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
                  }
                  debuggingInquisitorOperationsStatus("dIi", dIi, "-");
                  debuggingInquisitorOperationsStatus("dIi.textContent A", dIi.textContent, "-");
                  let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlug)}`;
                  debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
                  let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
                  let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
                  let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
                  let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
                  debuggingInquisitorOperationsStatus("-", "-", "performed filter assignment");
                  const dataPost = {
                    pathInstanceNow: dataPostable,
                    instanceOverride: false,
                    isFile: false,
                    IFDD: isFilteredDirectoryValue.checked,
                    IFED: isFilteredEntityScriptValue.checked,
                    IFFD: isFilteredFileValue.checked,
                    IFND: isFilteredNotAvailableValue.checked
                  };
                  fetch(qualifiedPath, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'csrf-token': TokenPost
                    },
                    body: JSON.stringify(dataPost)
                  }).then(response => response.text()).then(dataRequest => {
                    debuggingInquisitorOperationsStatus("-", "-", "got request");
                    const tempDataDiv = factoryCreateElement('div');
                    tempDataDiv.innerHTML = dataRequest;
                    debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "A");
                    updateDomInstance(tempDataDiv, "STANDARD");
                  }).catch(error => {
                    debuggingInquisitorOperationsStatus("error", error, "POST");
                  });
                }
              });
            });
          } else {
            let qualifiedSlugNow = inquisitorSearch;
            debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "GOT::: B");
            let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}=${encodeURIComponent(qualifiedSlugNow)}`;
            debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
            let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
            let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
            let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
            let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
            const dataPost = {
              pathInstanceNow: qualifiedSlugNow,
              instanceOverride: true,
              isFile: false,
              IFDD: isFilteredDirectoryValue.checked,
              IFED: isFilteredEntityScriptValue.checked,
              IFFD: isFilteredFileValue.checked,
              IFND: isFilteredNotAvailableValue.checked
            };
            fetch(qualifiedPath, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'csrf-token': TokenPost
              },
              body: JSON.stringify(dataPost)
            }).then(response => response.text()).then(dataRequest => {
              const tempDataDiv = factoryCreateElement('div');
              tempDataDiv.innerHTML = dataRequest;
              debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "B");
              updateDomInstance(tempDataDiv, "PES");
            }).catch(error => {
              debuggingInquisitorOperationsStatus("error", error, "POST");
            });
          }
        }
      }
    }
  }
  buildFsInterfaceListeners();
}
function runtimeInquisitorFile() {
  let directoryInstance = document.querySelectorAll('div.slug-fs-directory');
  let fileInstance = document.querySelectorAll('div.slug-fs-file');
  let cTokenNow = document.getElementById("cToken");
  let TokenPost = cureMuted;
  try {
    TokenPost = cTokenNow.textContent;
  } catch (error) {
    debuggingSecurityCTokenNow("cTokenNow", "Not in use::: Falling back: " + error);
  }
  let pathCurrentSlug = document.getElementById("pathCurrentSlug");
  if (cTokenNow === null) {
    debuggingSecurityCTokenNow("cTokenNow", "empty");
  } else {
    if (pathCurrentSlug === null) {} else {
      let qualifiedSlug = pathCurrentSlug.textContent;
      if (fileInstance === null) {} else {
        debuggingSecurityTokenPost("TokenPost", TokenPost);
        function removeSelectedStyle() {
          directoryInstance.forEach(div => {
            div.classList.remove('hover-directory-static');
            div.classList.remove('hover-directory-static.b');
          });
          fileInstance.forEach(div => {
            div.classList.remove('hover-file-static');
            div.classList.remove('hover-file-static.b');
          });
        }
        fileInstance.forEach(div => {
          div.addEventListener('click', function (event) {
            removeSelectedStyle();
            div.classList.add('hover-file-static');
            debuggingInquisitorOperationsStatus("-", "-", "click event (single)");
            let IIN = document.querySelector('b#itemInquisitorNow');
            if (IIN) {
              debuggingInquisitorOperationsStatus("IIN", IIN, "-");
              let valueIIN = div.getAttribute('node');
              debuggingInquisitorOperationsStatus("valueIIN", valueIIN, "-");
              IIN.innerHTML = valueIIN;
              if (event !== eventOperationLast) {
                stateActive = div.textContent;
                stateDirectory = 0;
                stateFile = valueIIN;
              }
              eventOperationsLast = event;
            }
          });
          div.setAttribute('node', queNowSurvivalNoneState);
          debuggingInquisitorOperationsStatus("-", "-", "click event (single)");
          debuggingInquisitorOperationsStatus("queNowSurvivalNoneState", queNowSurvivalNoneState, "B");
          queNowSurvivalNoneState++;
          div.addEventListener('dblclick', function (event) {
            let IIN = document.querySelector('b#itemInquisitorNow');
            if (IIN) {
              debuggingInquisitorOperationsStatus("IIN", IIN, "-");
              IIN.innerHTML = "-";
            }
            debuggingInquisitorOperationsStatus("queNowSurvivalNoneState", queNowSurvivalNoneState, "E");
            if (div.contains(event.target)) {
              debuggingInquisitorOperationsStatus("event.target", event.target, "-");
              let dIi = event.target.querySelector('.slug-file');
              debuggingInquisitorOperationsStatus("dIi", dIi, "-");
              let dataPossible = cureMuted;
              if (dIi === null) {
                dIi = event.target;
                dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
              } else {
                dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
              }
              debuggingInquisitorOperationsStatus("dIi", dIi, "-");
              debuggingInquisitorOperationsStatus("-", "-", "currentPath Case C");
              let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlug)}`;
              debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
              let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
              let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
              let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
              let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
              const dataPost = {
                pathInstanceNow: dataPostable,
                instanceOverride: false,
                isFile: true,
                IFDD: isFilteredDirectoryValue.checked,
                IFED: isFilteredEntityScriptValue.checked,
                IFFD: isFilteredFileValue.checked,
                IFND: isFilteredNotAvailableValue.checked
              };
              fetch(qualifiedPath, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'csrf-token': TokenPost
                },
                body: JSON.stringify(dataPost)
              }).then(response => response.text()).then(dataRequest => {
                const tempDataDiv = factoryCreateElement('div');
                tempDataDiv.innerHTML = dataRequest;
                debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "C");
                isFileNow = 1;
                updateDomInstance(tempDataDiv, 'NONE');
              }).catch(error => {
                debuggingInquisitorOperationsStatus("error", error, "POST");
              });
            }
          });
        });
      }
    }
  }
  buildFsInterfaceListeners();
}
function runtimeInquisitorFunctionality(runtime) {
  debuggingInquisitorOperationsStatus("runtime", runtime, "Functionality");
  if (runtime === "standard") {
    var inputInquisitor = document.querySelector("input.search-input");
    debuggingInquisitorOperationsStatus("inputInquisitor", inputInquisitor, "-");
    if (inputInquisitor !== null) {
      inputInquisitor.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          const inquisitorSearch = inputInquisitor.value;
          debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "search");
          if (inquisitorSearch === cureMuted) {} else {
            runtimeInquisitorDirectory(inquisitorSearch);
          }
        }
      });
    }
  } else {
    var inputInquisitor = runtime;
    debuggingInquisitorOperationsStatus("inputInquisitor", inputInquisitor, "-");
    if (inputInquisitor !== null) {
      inputInquisitor.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          const inquisitorSearch = inputInquisitor.value;
          debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "search");
          if (inquisitorSearch === cureMuted) {} else {
            runtimeInquisitorDirectory(inquisitorSearch);
          }
        }
      });
    }
  }
}
function runtimeInquisitorFunctionalityTree(EVENT, runtime) {
  debuggingInquisitorOperationsStatus("runtime", runtime, "Functionality");
  if (runtime === "standard") {
    var inputInquisitor = document.querySelector("div#pathCurrentSlug");
    debuggingInquisitorOperationsStatus("inputInquisitor", inputInquisitor, "-");
    if (inputInquisitor !== null) {
      const inquisitorSearch = inputInquisitor.innerHTML;
      debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "search");
      if (inquisitorSearch === cureMuted) {} else {
        instanceGrab(inquisitorSearch);
      }
    }
  } else {
    var inputInquisitor = runtime;
    debuggingInquisitorOperationsStatus("inputInquisitor", inputInquisitor, "(b)");
    if (inputInquisitor !== null) {
      const inquisitorSearch = inputInquisitor;
      debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "search");
      if (inquisitorSearch === cureMuted) {} else {
        instanceGrab(inquisitorSearch);
      }
    } else {
      debuggingInquisitorOperationsStatus("inputInquisitor", "-", "null");
    }
  }
}
async function lookupInquisitorFunc(naturalProperty) {
  debuggingInquisitorOperationsStatus("lookupInquisitorFunc (naturalProperty)", naturalProperty, "with value");
  instanceGrabInquisitor(naturalProperty);
}
function checkStateDirectory() {}
function checkStateFile() {}
function destroysInstanceHoverDirectory(event) {
  debuggingInquisitorActiveClass("a", stateActive);
  debuggingInquisitorOperationsStatus("providesInstanceHover", "-", "destroyed");
  const hoverBlurb = document.querySelector('.blurbInquisitor');
  let queryCheckState = document.querySelector('span.eventAction');
  if (queryCheckState !== null) {
    if (queryCheckState.innerHTML !== stateActive) {
      debuggingInquisitorQueryState('not eq to stateActive, was: ' + queryCheckState);
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
      debuggingInquisitorOperationsStatus("hoverBlurb", "-", "fired (a)");
      queryCheckState.innerHTML = stateActive;
    } else {
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
    }
  }
}
function destroysInstanceHoverDirectoryTitle(event) {
  debuggingInquisitorActiveClass("b", stateActive);
  debuggingInquisitorOperationsStatus("providesInstanceHover", "-", "destroyed (a)");
  const hoverBlurb = document.querySelector('.blurbInquisitor');
  let queryCheckState = document.querySelector('span.eventAction');
  if (queryCheckState !== null) {
    if (queryCheckState.innerHTML !== stateActive) {
      debuggingInquisitorQueryState('not eq to stateActive, was: ' + queryCheckState);
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
      debuggingInquisitorOperationsStatus("hoverBlurb", "-", "fired (b)");
      queryCheckState.innerHTML = stateActive;
    } else {
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
    }
  }
}
function destroysInstanceHoverFile(event) {
  debuggingInquisitorActiveClass("c", stateActive);
  debuggingInquisitorOperationsStatus("providesInstanceHover", "-", "destroyed (b)");
  const hoverBlurb = document.querySelector('.blurbInquisitor');
  let queryCheckState = document.querySelector('span.eventAction');
  if (queryCheckState !== null) {
    debuggingInquisitorQueryState('not eq to stateActive');
    if (queryCheckState.innerHTML !== stateActive) {
      debuggingInquisitorQueryState('not eq to stateActive, was: ' + queryCheckState);
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
      debuggingInquisitorOperationsStatus("hoverBlurb", "-", "fired (c)");
      queryCheckState.innerHTML = stateActive;
    } else {
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
    }
  }
}
function destroysInstanceHoverFileTitle(event) {
  debuggingInquisitorActiveClass("d", stateActive);
  debuggingInquisitorOperationsStatus("providesInstanceHover", "-", "destroyed (c)");
  const hoverBlurb = document.querySelector('.blurbInquisitor');
  let queryCheckState = document.querySelector('span.eventAction');
  if (queryCheckState !== null) {
    if (queryCheckState.innerHTML !== stateActive) {
      debuggingInquisitorQueryState('not eq to stateActive, was: ' + queryCheckState);
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
      debuggingInquisitorOperationsStatus("hoverBlurb", "-", "fired (d)");
      queryCheckState.innerHTML = stateActive;
    } else {
      if (hoverBlurb) {
        hoverBlurb.remove();
      }
    }
  }
}
function providesInstanceHoverDirectory(event) {
  debuggingInquisitorOperationsStatus("providesInstanceHoverDirectory", "-", "activated");
  const hoverBlurb = factoryCreateElement('div');
  const hiddenProperty = document.getElementById("pathCurrentSlug").innerHTML;
  let currentProperty = cureMuted;
  const activeProperty = event.target.querySelector('.slug-directory');
  if (activeProperty) {
    currentProperty = activeProperty.innerHTML;
    debuggingInquisitorOperationsStatus("currentProperty", currentProperty, "-");
    if (hiddenProperty) {
      debuggingInquisitorOperationsStatus("hiddenProperty", hiddenProperty, "-");
      debuggingInquisitorOperationsStatus("getInquisitorIconSourceDirectoryActive", "-", "hover: running now");
      getInquisitorIconSourceDirectoryActive(currentProperty, hiddenProperty);
    } else {
      debuggingInquisitorOperationsStatus("activeProperty", "-", "not located");
    }
  }
}
function providesInstanceHoverDirectoryTitle(event) {
  debuggingInquisitorOperationsStatus("providesInstanceHoverDirectoryTitle", "-", "activated");
  const hoverBlurb = factoryCreateElement('div');
  const hiddenProperty = document.getElementById("pathCurrentSlug").innerHTML;
  let currentProperty = cureMuted;
  const activeProperty = event.target.querySelector('b.slug-directory');
  if (activeProperty) {
    currentProperty = activeProperty.innerHTML;
    debuggingInquisitorOperationsStatus("currentProperty", currentProperty, "-");
    if (hiddenProperty) {
      debuggingInquisitorOperationsStatus("hiddenProperty", hiddenProperty, "-");
      debuggingInquisitorOperationsStatus("getInquisitorIconSourceDirectoryActive", "-", "hover-title: running now");
      getInquisitorIconSourceDirectoryActive(currentProperty, hiddenProperty);
    } else {
      debuggingInquisitorOperationsStatus("activeProperty", "-", "not located");
    }
  }
}
function providesInstanceHoverFile(event) {
  debuggingInquisitorOperationsStatus("providesInstanceHoverFile", "-", "activated");
  const hoverBlurb = factoryCreateElement('div');
  const hiddenProperty = document.getElementById("pathCurrentSlug").innerHTML;
  let currentProperty = cureMuted;
  const activeProperty = event.target.querySelector('b.slug-file');
  if (activeProperty) {
    currentProperty = activeProperty.innerHTML;
    debuggingInquisitorOperationsStatus("currentProperty", currentProperty, "-");
    if (hiddenProperty) {
      debuggingInquisitorOperationsStatus("hiddenProperty", hiddenProperty, "-");
      let eventAction = document.querySelector('span.eventAction');
      let eventAudit = document.querySelector('span.eventAudit');
      if (eventAction) {
        let instancePortalProperty = currentProperty;
        eventAction.innerHTML = instancePortalProperty;
      }
      if (eventAudit) {
        let instanceStatusProperty = hiddenProperty;
        eventAudit.innerHTML = instanceStatusProperty;
      }
      debuggingInquisitorOperationsStatus("getInquisitorIconSourceFileActive", "-", "hover: running now");
      getInquisitorIconSourceFileActive(currentProperty, hiddenProperty);
    } else {
      debuggingInquisitorOperationsStatus("activeProperty", "-", "not located");
    }
  }
}
function providesInstanceHoverFileTitle(event) {
  debuggingInquisitorOperationsStatus("providesInstanceHoverFileTitle", "-", "activated");
  const hoverBlurb = factoryCreateElement('div');
  const hiddenProperty = document.getElementById("pathCurrentSlug").innerHTML;
  let currentProperty = cureMuted;
  const activeProperty = event.target.querySelector('.slug-file');
  if (activeProperty) {
    currentProperty = activeProperty.innerHTML;
    debuggingInquisitorOperationsStatus("currentProperty", currentProperty, "-");
    if (hiddenProperty) {
      debuggingInquisitorOperationsStatus("hiddenProperty", hiddenProperty, "-");
      let eventAction = document.querySelector('span.eventAction');
      let eventAudit = document.querySelector('span.eventAudit');
      if (eventAction) {
        let instancePortalProperty = currentProperty;
        eventAction.innerHTML = instancePortalProperty;
      }
      if (eventAudit) {
        let instanceStatusProperty = hiddenProperty;
        eventAudit.innerHTML = instanceStatusProperty;
      }
      debuggingInquisitorOperationsStatus("getInquisitorIconSourceFileActive", "-", "hover-title: running now");
      getInquisitorIconSourceFileActive(currentProperty, hiddenProperty);
    } else {
      debuggingInquisitorOperationsStatus("activeProperty", "-", "not located");
    }
  }
}
function setCorrectHeightExtraDataInstance(WAS) {
  let CutoffA = 3009;
  let CutoffB = 2800;
  let CutoffC = 1200;
  let CutoffD = 1;
  let heightA = "1012px";
  let heightB = "477px";
  let heightC = "211px";
  let heightD = "24px";
  let MaxBoundry = 10000;
  let MaxBoundryNMOne = 3008;
  let MaxBoundryNMTwo = 1199;
  let MaxBoundryNMThree = 629;
  debuggingInterfaceHeightExtraDataInstance(CutoffA, CutoffB, CutoffC, CutoffD, heightA, heightB, heightC, heightD, MaxBoundry, MaxBoundryNMOne, MaxBoundryNMTwo, MaxBoundryNMThree);
  let DIVSTATE = document.getElementById('extraDataInstance');
  async function logicDecideExtraDataInstance() {
    let stateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
    let stateDecider = null;
    if (stateValueLocalCheckExtraDataInstanceAudit === null) {
      debuggingInquisitorOperationsStatus("stateValueLocalCheckExtraDataInstance", "null", "not yet initialized: setting stateDecider to the default, false");
      stateDecider === false;
      localStorage.setItem("extraDataInstanceAudit", stateDecider);
      toggleStateExtraDataInstanceAudit = false;
    } else {
      if (stateValueLocalCheckExtraDataInstanceAudit === "false") {
        debuggingInterfaceMasterSwitch(stateValueLocalCheckExtraDataInstanceAudit, 'stateValueLocalCheckExtraDataInstanceAudit', 'extraDataInstanceAudit');
        stateDecider = false;
        localStorage.setItem("extraDataInstanceAudit", stateDecider);
        toggleStateExtraDataInstanceAudit = false;
      } else {
        debuggingInterfaceMasterSwitch(stateValueLocalCheckExtraDataInstanceAudit, 'stateValueLocalCheckExtraDataInstanceAudit', 'extraDataInstanceAudit');
        stateDecider = true;
        localStorage.setItem("extraDataInstanceAudit", stateDecider);
        toggleStateExtraDataInstanceAudit = true;
      }
    }
  }
  logicDecideExtraDataInstance();
  debuggingInterfaceFrameRunner("ran", logicDecideExtraDataInstance);
  if (DIVSTATE !== null) {
    debuggingInquisitorOperationsStatus("-", "-", "got a div state");
    if (WAS === 0) {
      debuggingInquisitorOperationsStatus("-", "-", "div state 0 was passed");
      DIVSTATE.style.cssText = styleStatusTypeDisplayOptionOne;
      stateExtraInstance = 0;
    } else {
      debuggingInquisitorOperationsStatus("-", "-", "div state 0 was not passed");
      if (stateExtraInstance === 0) {
        debuggingInquisitorOperationsStatus("dateInstance", "-", "EXTRA: updated");
        debuggingInquisitorOperationsStatus("styleStatusTypeDisplayOptionTwo".styleStatusTypeDisplayOptionTwo, "set div state style element to");
        let WIDTH_NOW = document.documentElement.clientWidth;
        debuggingInquisitorOperationsStatus("inquisitorExtraInputWidth (a)".WIDTH_NOW, "WIDTH_NOW");
        debuggingInquisitorOperationsStatus("styleStatusTypeDisplayOptionOne".styleStatusTypeDisplayOptionOne, "EXTRA: ERECTING DIV (dataInstacne) with style");
        if (WIDTH_NOW < MaxBoundry && WIDTH_NOW >= CutoffA) {
          debuggingInquisitorOperationsStatus("-", "-", "set height to 712px (a)");
          let newStateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (newStateValueLocalCheckExtraDataInstanceAudit) {
            if (newStateValueLocalCheckExtraDataInstanceAudit === "false" || newStateValueLocalCheckExtraDataInstanceAudit === null || newStateValueLocalCheckExtraDataInstanceAudit === undefined) {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was fals, null, or undefined");
              DIVSTATE.style.cssText = "height: " + heightA + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
              stateDecider = true;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = true;
            } else {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was true");
              DIVSTATE.style.cssText = "height: " + heightA + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
              stateDecider = false;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = false;
            }
          }
        } else if (WIDTH_NOW < MaxBoundryNMOne && WIDTH_NOW >= CutoffB) {
          debuggingInquisitorOperationsStatus("-", "-", "set height to Bpx (b)");
          let newStateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (newStateValueLocalCheckExtraDataInstanceAudit) {
            if (newStateValueLocalCheckExtraDataInstanceAudit === "false" || newStateValueLocalCheckExtraDataInstanceAudit === null || newStateValueLocalCheckExtraDataInstanceAudit === undefined) {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was fals, null, or undefined");
              DIVSTATE.style.cssText = "height: " + heightB + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
              stateDecider = true;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = true;
            } else {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was true");
              DIVSTATE.style.cssText = "height: " + heightB + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
              stateDecider = false;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = false;
            }
          }
        } else if (WIDTH_NOW < MaxBoundryNMTwo && WIDTH_NOW >= CutoffC) {
          debuggingInquisitorOperationsStatus("-", "-", "set height to Cpx (c)");
          let newStateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (newStateValueLocalCheckExtraDataInstanceAudit) {
            if (newStateValueLocalCheckExtraDataInstanceAudit === "false" || newStateValueLocalCheckExtraDataInstanceAudit === null || newStateValueLocalCheckExtraDataInstanceAudit === undefined) {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was fals, null, or undefined");
              DIVSTATE.style.cssText = "height: " + heightC + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
              stateDecider = true;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = true;
            } else {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was true");
              DIVSTATE.style.cssText = "height: " + heightC + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
              stateDecider = false;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = false;
            }
          }
        } else if (WIDTH_NOW < MaxBoundryNMThree && WIDTH_NOW >= CutoffD) {
          debuggingInquisitorOperationsStatus("-", "-", "set height to Dpx (d)");
          let newStateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (newStateValueLocalCheckExtraDataInstanceAudit) {
            if (newStateValueLocalCheckExtraDataInstanceAudit === "false" || newStateValueLocalCheckExtraDataInstanceAudit === null || newStateValueLocalCheckExtraDataInstanceAudit === undefined) {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was fals, null, or undefined");
              DIVSTATE.style.cssText = "height: " + heightD + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
              stateDecider = true;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = true;
            } else {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was true");
              DIVSTATE.style.cssText = "height: " + heightD + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
              stateDecider = false;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = false;
            }
          }
        } else {
          debuggingInquisitorOperationsStatus("-", "-", "set height to Dpx (d)");
          let newStateValueLocalCheckExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
          if (newStateValueLocalCheckExtraDataInstanceAudit) {
            if (newStateValueLocalCheckExtraDataInstanceAudit === "false" || newStateValueLocalCheckExtraDataInstanceAudit === null || newStateValueLocalCheckExtraDataInstanceAudit === undefined) {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was fals, null, or undefined");
              DIVSTATE.style.cssText = "height: " + heightD + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionTwo;
              stateDecider = true;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = true;
            } else {
              debuggingInquisitorOperationsStatus("newStateValueLocalCheckExtraDataInstanceAudit".newStateValueLocalCheckExtraDataInstanceAudit, "was true");
              DIVSTATE.style.cssText = "height: " + heightD + ";margin-left: " + marginAuditPanelInquisitorHidden + ";" + styleStatusTypeDisplayOptionOne;
              stateDecider = false;
              localStorage.setItem("extraDataInstanceAudit", stateDecider);
              toggleStateExtraDataInstanceAudit = false;
            }
          }
        }
      }
    }
  }
}
function buildFEextraDataInstanceListeners() {
  let isAvailable = document.querySelector('#auditPanelInquisitor .shield');
  if (isAvailable) {
    stateExtraInstance = 0;
    debuggingInquisitorOperationsStatus("FEextra", "-", "automatic setup: dataInstance: Building");
    isAvailable.addEventListener('click', function (event) {
      if (stateExtraInstance === 0) {
        setCorrectHeightExtraDataInstance(1);
      }
    });
  }
}
function addConditionalListener() {
  let modifyEnclave = document.querySelector('span.modify-enclave');
  if (modifyEnclave) {
    modifyEnclave.addEventListener('click', function () {
      toggleLockerlinkBar();
    });
  }
  let destroyLL = document.querySelector('span.terminate-item');
  if (destroyLL) {
    destroyLL.addEventListener('click', function () {
      toggleLockerlinkBar();
    });
  }
  let auditOverviewInformation = document.getElementById("auditPanelInquisitorInstance");
  if (auditOverviewInformation) {
    let auditStatusBox = document.getElementById("status-event");
    if (auditStatusBox) {
      auditStatusBox.addEventListener('mouseout', function () {
        auditOverviewInformation.style.display = "none";
      });
      auditStatusBox.addEventListener('mouseover', function () {
        auditOverviewInformation.style.display = "block";
      });
    } else {
      debuggingInquisitorOperationsStatus("auditStatusBox", "-", "none (a)");
    }
  } else {
    debuggingInquisitorOperationsStatus("auditStatusBox", "-", "none (b)");
  }
  let runtimeStateFilterFrame = 0;
  let filterInquisitorInstance = document.querySelector(".filter-inquisitorInstance");
  if (filterInquisitorInstance) {
    let filterStatusBox = document.getElementById("filterActivatorInquisitor");
    if (filterStatusBox) {
      filterInquisitorInstance.addEventListener('mouseenter', function () {
        filterInquisitorInstance.style.display = "block";
      });
      filterInquisitorInstance.addEventListener('mouseleave', function () {
        let computedStyleFSB = window.getComputedStyle(filterStatusBox);
        debuggingInquisitorOperationsStatus("computedStyleFSB.display", computedStyleFSB.display, "-");
        if (computedStyleFSB.display === "block") {
          filterInquisitorInstance.style.display = "none";
          filterStatusBox.style.backgroundColor = "white";
        } else {}
      });
      filterStatusBox.addEventListener('mouseover', function () {
        filterInquisitorInstance.style.display = "block";
        filterStatusBox.style.backgroundColor = "blue";
      });
      let provisionalCounterFilterStatusBox = 0;
      filterStatusBox.addEventListener('mouseout', function () {
        function makeFilterFrame() {
          if (provisionalCounterFilterStatusBox < 3) {
            if (runtimeStateFilterFrame === 0) {
              debuggingInquisitorOperationsStatus("makeFilterFrame", "-", "ran");
              filterInquisitorInstance = document.querySelector("div.filter-inquisitorInstance");
              let computedStyleFII = window.getComputedStyle(filterInquisitorInstance);
              debuggingInquisitorOperationsStatus("computedStyleFII", computedStyleFII, "computed");
              if (computedStyleFII.display === "block") {
                filterInquisitorInstance.style.display = "block";
                runtimeStateFilterFrame = 1;
              } else {
                filterInquisitorInstance.style.display = "none";
                filterStatusBox.style.backgroundColor = "white";
                debuggingInquisitorOperationsStatus("filterInquisitorInstance", "-", "none event");
                provisionalCounterFilterStatusBox++;
              }
            } else {}
          }
        }
        setInterval(makeFilterFrame, 2000);
      });
    } else {
      debuggingInquisitorOperationsStatus("filterStatusBox", "-", "none (a)");
    }
  } else {
    debuggingInquisitorOperationsStatus("filterStatusBox", "-", "none (b)");
  }
}
function instanceGrab(inquisitorSearch) {
  debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "passed as");
  if (inquisitorSearch === "NA") {
    debuggingInquisitorOperationsStatus("-", "-", "NA: Custom Behavior Passed");
  } else {
    let directoryInstance = document.querySelectorAll('div.slug-fs-directory');
    let fileInstance = document.querySelectorAll('div.slug-fs-file');
    let cTokenNow = document.getElementById("cToken");
    let TokenPost = cureMuted;
    try {
      TokenPost = cTokenNow.textContent;
    } catch (error) {
      debuggingSecurityCTokenNow("cTokenNow", "Not in use::: Falling back: " + error);
    }
    let pathCurrentSlug = document.getElementById("pathCurrentSlug");
    if (cTokenNow === null) {
      debuggingSecurityCTokenNow("cTokenNow", "empty");
    } else {
      if (pathCurrentSlug === null) {} else {
        let qualifiedSlug = pathCurrentSlug.textContent;
        if (directoryInstance === null) {} else {
          debuggingSecurityTokenPost("TokenPost", TokenPost);
          function removeSelectedStyle() {
            directoryInstance.forEach(div => {
              div.classList.remove('hover-directory-static');
              div.classList.remove('hover-directory-static.b');
            });
            fileInstance.forEach(div => {
              div.classList.remove('hover-file-static');
              div.classList.remove('hover-file-static.b');
            });
          }
          if (inquisitorSearch === "NONE") {
            directoryInstance.forEach(div => {
              div.addEventListener('click', function (event) {
                debuggingInquisitorOperationsStatus("queNow", queNow, "(c)");
                removeSelectedStyle();
                div.classList.add('hover-directory-static');
                let IIN = document.querySelector('b#itemInquisitorNow');
                if (IIN) {
                  debuggingInquisitorOperationsStatus("IIN", IIN, "-");
                  let valueIIN = div.getAttribute('node');
                  debuggingInquisitorOperationsStatus("valueIIN", valueIIN, "-");
                  IIN.innerHTML = valueIIN;
                  if (event !== eventOperationLast) {
                    stateActive = div.textContent;
                    stateDirectory = valueIIN;
                    stateFile = 0;
                  }
                  eventOperationLast = event;
                }
              });
              div.setAttribute('node', queNowSurvivalNoneState);
              debuggingInquisitorOperationsStatus("-", "-", "click event (single)");
              debuggingInquisitorOperationsStatus("queNowSurvivalNoneState", queNowSurvivalNoneState, "B");
              queNowSurvivalNoneState++;
              div.addEventListener('dblclick', function (event) {
                let IIN = document.querySelector('b#itemInquisitorNow');
                if (IIN) {
                  debuggingInquisitorOperationsStatus("IIN", IIN, "-");
                  IIN.innerHTML = 1;
                }
                debuggingInquisitorOperationsStatus("queNowSurvivalNoneState", queNowSurvivalNoneState, "C");
                if (div.contains(event.target)) {
                  debuggingInquisitorOperationsStatus("event.target", event.target, "-");
                  let dIi = event.target.querySelector('.slug-directory');
                  debuggingInquisitorOperationsStatus("dIi", dIi, "-");
                  let dataPostable = cureMuted;
                  if (dIi === null) {
                    dIi = event.target;
                    dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
                  } else {
                    dataPostable = dIi ? dIi.textContent : pathCurrentSlug;
                  }
                  debuggingInquisitorOperationsStatus("dIi", dIi, "-");
                  debuggingInquisitorOperationsStatus("dIi.textContent", dIi.textContent, "-");
                  debuggingInquisitorOperationsStatus("currentPath", "-", "D");
                  let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlug)}`;
                  debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
                  let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
                  let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
                  let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
                  let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
                  const dataPost = {
                    pathInstanceNow: dataPostable,
                    instanceOverride: false,
                    isFile: false,
                    IFDD: isFilteredDirectoryValue.checked,
                    IFED: isFilteredEntityScriptValue.checked,
                    IFFD: isFilteredFileValue.checked,
                    IFND: isFilteredNotAvailableValue.checked
                  };
                  fetch(qualifiedPath, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'csrf-token': TokenPost
                    },
                    body: JSON.stringify(dataPost)
                  }).then(response => response.text()).then(dataRequest => {
                    const tempDataDiv = factoryCreateElement('div');
                    tempDataDiv.innerHTML = dataRequest;
                    debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "X1");
                    updateDomInstance(tempDataDiv);
                    providesInquisitorDirectory();
                    providesInquisitorFile();
                    updateDomInstance(tempDataDiv, "PES");
                  }).catch(error => {
                    debuggingInquisitorOperationsStatus("error", error, "POST");
                  });
                }
              });
            });
          } else {
            debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorSearch, "GOT::: (G)");
            let qualifiedSlugNow = inquisitorSearch;
            debuggingInquisitorOperationsStatus("qualifiedSlugNow", qualifiedSlugNow, "(E)");
            let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlugNow)}`;
            debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
            let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
            let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
            let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
            let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
            const dataPost = {
              pathInstanceNow: qualifiedSlugNow,
              instanceOverride: true,
              isFile: false,
              IFDD: isFilteredDirectoryValue.checked,
              IFED: isFilteredEntityScriptValue.checked,
              IFFD: isFilteredFileValue.checked,
              IFND: isFilteredNotAvailableValue.checked
            };
            fetch(qualifiedPath, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'csrf-token': TokenPost
              },
              body: JSON.stringify(dataPost)
            }).then(response => response.text()).then(dataRequest => {
              const tempDataDiv = factoryCreateElement('div');
              tempDataDiv.innerHTML = dataRequest;
              debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "X2");
              updateDomInstance(tempDataDiv, "PES");
            }).catch(error => {
              debuggingInquisitorOperationsStatus("error", error, "POST");
            });
          }
        }
      }
    }
  }
}
function instanceGrabInquisitor(inquisitorInspectionValue) {
  debuggingInquisitorOperationsStatus("inquisitorSearch", inquisitorInspectionValue, "passed as inquisitorInspectionValue");
  if (inquisitorInspectionValue === "NA") {
    debuggingInquisitorOperationsStatus("-", "-", "NA: Custom Behavior Passed");
  } else {
    let cTokenNow = document.getElementById("cToken");
    let TokenPost = cureMuted;
    try {
      TokenPost = cTokenNow.textContent;
    } catch (error) {
      debuggingSecurityCTokenNow("cTokenNow", "Not in use::: Falling back: " + error);
    }
    if (cTokenNow === null) {
      debuggingSecurityCTokenNow("cTokenNow", "empty");
    } else {
      const dataPost = {
        instance: inquisitorInspectionValue
      };
      debuggingInquisitorOperationsStatus("cTokenNow-", cTokenNow, "-");
      debuggingInquisitorOperationsStatus("TokenPost", TokenPost, "-");
      let qualifiedSlugNow = inquisitorInspectionValue;
      let qualifiedPath = `${HOST_NOW_RESOLVED_INSPECTION}=${encodeURIComponent(qualifiedSlugNow)}`;
      fetch(qualifiedPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'csrf-token': TokenPost
        },
        body: JSON.stringify(dataPost)
      }).then(response => response.text()).then(dataRequest => {
        const tempDataDiv = factoryCreateElement('div');
        tempDataDiv.innerHTML = dataRequest;
        debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "-");
        updateDomInstanceInquisitor(tempDataDiv);
      }).catch(error => {
        debuggingInquisitorOperationsStatus("error", error, "POST");
      });
    }
  }
}
async function directoryNodeSubmit(EVENT, PARENT, PATH = rootLocal, BASENODE = true) {
  debuggingInquisitorNodeSubmit(BASENODE, EVENT, PARENT, PATH, "directory");
  providesInquisitorFunctionalityTree(EVENT, PATH);
}
async function directoryExpand(PARENT, PATH = rootLocal, BASENODE = true, event) {
  debuggingInquisitorExpand(BASENODE, event, PARENT, PATH, "directory");
  let valueAnchor = document.getElementById("pathCurrentSlug");
  if (valueAnchor) {
    debuggingInquisitorOperationsStatus("valueAnchor.innerHTML", valueAnchor.innerHTML, "(HH)");
  }
  let currentEventNode = cureMuted;
  if (BASENODE !== false) {
    debuggingInquisitorOperationsStatus("-", "-", "Expanding the origin point");
    let slugItem = factoryCreateElement('div');
    slugItem.className = "overflow-tree-expander";
    slugItem.setAttribute('node', TOTALORIGINS + 1);
    var treeExpandedOld = document.getElementById('tree-expanded');
    if (treeExpandedOld !== null) {
      debuggingInquisitorOperationsStatus("-", "-", "mimic request");
    }
    let TokenPost = cureMuted;
    let cTokenNow = document.getElementById("cToken");
    TokenPost = cTokenNow.textContent;
    debuggingInquisitorOperationsStatus("TokenPost", TokenPost, "-");
    let currentPath = document.querySelector('div#pathCurrentSlug');
    debuggingInquisitorOperationsStatus("currentPath.innerHTML", currentPath.innerHTML, "-");
    let qualifiedSlugNow = currentPath + event.target.innerHTML;
    debuggingInquisitorOperationsStatus("qualifiedSlugNow", qualifiedSlugNow, "BB");
    let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlugNow)}`;
    debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "BB");
    let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
    let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
    let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
    let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
    const dataPost = {
      pathInstanceNow: qualifiedSlugNow,
      instanceOverride: true,
      isFile: false,
      IFDD: isFilteredDirectoryValue.checked,
      IFED: isFilteredEntityScriptValue.checked,
      IFFD: isFilteredFileValue.checked,
      IFND: isFilteredNotAvailableValue.checked
    };
    fetch(qualifiedPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': TokenPost
      },
      body: JSON.stringify(dataPost)
    }).then(response => response.text()).then(dataRequest => {
      const tempDataDiv = factoryCreateElement('div');
      tempDataDiv.innerHTML = dataRequest;
      debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "BB");
      updateDomInstanceSideBar(event, tempDataDiv, BASENODE, slugItem);
    }).catch(error => {
      debuggingInquisitorOperationsStatus("error", error, "POST");
    });
  } else {
    debuggingInquisitorOperationsStatus("-", "-", "Not expanding the origin point: Got 2");
    let slugItem = factoryCreateElement('div');
    slugItem.className = "overflow-tree-nested";
    slugItem.setAttribute('node', TOTALORIGINS + 1);
    var treeExpandedOld = document.getElementById('tree-expanded');
    if (treeExpandedOld !== null) {
      debuggingInquisitorOperationsStatus("-", "-", "mimic request");
    }
    let TokenPost = cureMuted;
    let cTokenNow = document.getElementById("cToken");
    TokenPost = cTokenNow.textContent;
    debuggingInquisitorOperationsStatus("TokenPost", TokenPost, "-");
    let currentPath = document.querySelector('div#pathCurrentSlug');
    debuggingInquisitorOperationsStatus("currentPath.innerHTML", currentPath.innerHTML, "-");
    let qualifiedSlugNow = currentPath.innerHTML;
    debuggingInquisitorOperationsStatus("qualifiedSlugNow", qualifiedSlugNow, "CC");
    let qualifiedPath = `${HOST_NOW_RESOLVED_PATH}${encodeURIComponent(qualifiedSlugNow)}`;
    debuggingInquisitorOperationsStatus("qualifiedPath", qualifiedPath, "-");
    let isFilteredDirectoryValue = document.querySelector('input#checkboxInquisitorDirectory');
    let isFilteredEntityScriptValue = document.querySelector('input#checkboxInquisitorEntityScript');
    let isFilteredFileValue = document.querySelector('input#checkboxInquisitorFile');
    let isFilteredNotAvailableValue = document.querySelector('input#checkboxInquisitorNotAvailable');
    const dataPost = {
      pathInstanceNow: qualifiedSlugNow,
      instanceOverride: true,
      isFile: false,
      IFDD: isFilteredDirectoryValue.checked,
      IFED: isFilteredEntityScriptValue.checked,
      IFFD: isFilteredFileValue.checked,
      IFND: isFilteredNotAvailableValue.checked
    };
    fetch(qualifiedPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': TokenPost
      },
      body: JSON.stringify(dataPost)
    }).then(response => response.text()).then(dataRequest => {
      const tempDataDiv = factoryCreateElement('div');
      tempDataDiv.innerHTML = dataRequest;
      debuggingInquisitorOperationsStatus("tempDataDiv.innerHTML", tempDataDiv.innerHTML, "CC");
      updateDomInstanceSideBar(event, tempDataDiv, BASENODE, slugItem);
    }).catch(error => {
      debuggingInquisitorOperationsStatus("error", error, "POST");
    });
  }
}
function instanceInitTree(PARENT) {
  let elementsTreeInstanceFO = document.querySelectorAll('.origin');
  let elementRoot = PARENT.innerHTML;
  debuggingInquisitorOperationsStatus("PARENT.innerHTML", PARENT.innerHTML, "now elementRoot");
  if (elementsTreeInstanceFO !== null) {
    elementsTreeInstanceFO.forEach(div => {
      let nodeNow = div.getAttribute("node");
      if (nodeNow === null) {
        nodeNow = "null";
      }
      debuggingInquisitorOperationsStatus("nodeNow", nodeNow, "-");
      div.addEventListener('dblclick', function (event) {
        let divTreeInstanceNodeNow = event.target.innerHTML;
        debuggingInquisitorOperationsStatus("event.target.innerHTML", event.target.innerHTML, "event.target.innerHTML now (Tree=> now: divTreeInstanceNodeNow)");
      });
      div.addEventListener('click', function (event) {
        let divTreeInstanceNow = elementRoot + "/" + div.innerHTML;
        debuggingInquisitorOperationsStatus("divTreeInstanceNow", divTreeInstanceNow, "Tree=> now: divTreeInstanceNow");
        directoryNodeSubmit(event, PARENT, PATH = divTreeInstanceNow, BASENODE = false);
      });
      TOTALORIGINS++;
      debuggingInquisitorOperationsStatus("TOTALORIGINS", TOTALORIGINS, "-");
    });
  }
}
function treeListener(TREE, TREEEXPANDED, TREEEXPANDEDLENGTH) {
  TREE.addEventListener('dblclick', event => {
    if (isActiveTree === 0) {
      debuggingInquisitorOperationsStatus("isActiveTree", isActiveTree, "was 0");
      if (TREEEXPANDEDLENGTH > 1) {
        debuggingInquisitorOperationsStatus("TREEEXPANDEDLENGTH", TREEEXPANDEDLENGTH, "> 1");
        TREEEXPANDED.style.display = "block";
        directoryExpand(TREE, rootLocal, false, event);
        isActiveTree = 1;
      } else {
        debuggingInquisitorOperationsStatus("TREEEXPANDEDLENGTH", TREEEXPANDEDLENGTH, "< or = 1");
        TREEEXPANDED.style.display = "block";
        directoryExpand(TREE, rootLocal, false, event);
        isActiveTree = 1;
      }
    } else {
      debuggingInquisitorOperationsStatus("isActiveTree", isActiveTree, "not 0");
      isActiveTree = 0;
      try {
        const slugListOrigin = TREEEXPANDED.querySelectorAll('div.origin');
        slugListOrigin.classList.toggle('hidden');
      } catch (error) {
        const slugListOrigin = "div.origin unavailable";
        debuggingInquisitorOperationsStatus("slugListOrigin", slugListOrigin, "error: " + error);
      }
      try {
        const slugListOriginPoint = TREEEXPANDED.querySelectorAll('div.origin-point');
        slugListOriginPoint.classList.toggle('hidden');
      } catch (error) {
        const slugListOriginPoint = "div.origin-point unavailable";
        debuggingInquisitorOperationsStatus("slugListOriginPoint", slugListOriginPoint, "error: " + error);
      }
      try {
        const slugListOriginMutated = TREEEXPANDED.querySelectorAll('div.origin-muted');
        slugListOriginMutated.classList.toggle('hidden');
      } catch (error) {
        const slugListOriginMutated = "div.origin-muted unavailable";
        debuggingInquisitorOperationsStatus("slugListOriginMutated", slugListOriginMutated, "error: " + error);
      }
      TREEEXPANDED.style.display = "none";
    }
  });
}
function treeInit() {
  var treeExpanded = document.getElementById('tree-expanded');
  let TREE = document.querySelector('#tree-origin span.inquisitorRoot');
  if (TREE !== null) {
    if (treeExpanded !== null) {
      var styleObject = window.getComputedStyle(treeExpanded);
      if (styleObject.display === "none") {
        treeExpanded.style.display = "block";
        treeExpandedLength = treeExpanded.children.length;
        debuggingInquisitorOperationsStatus("LENGTH::: treeExpandedLength", treeExpandedLength, "(a)");
        treeListener(TREE, treeExpanded, treeExpandedLength);
      } else {
        debuggingInquisitorOperationsStatus("TREE::: treeExpanded", "not null", "launching expanded tree sequence styleObject.display is NOT none");
        treeExpanded.style.display = "none";
        treeExpandedLength = treeExpanded.children.length;
        debuggingInquisitorOperationsStatus("LENGTH::: treeExpandedLength", treeExpandedLength, "(b)");
        treeListener(TREE, treeExpanded, treeExpandedLength);
      }
    } else {
      debuggingInquisitorOperationsStatus("TREE::: treeExpanded", "null", "pass");
    }
  }
}
async function updateDomInstanceInquisitor(INSTANCE) {
  debuggingInquisitorOperationsStatus("updateDomInstanceInquisitor", "-", "taking place now");
  try {
    debuggingInquisitorOperationsStatus("INSTANCE.innerHTML", INSTANCE.innerHTML, "(HTML)");
    const partialExecutorInquisitorInstanceOverview = INSTANCE.querySelector('span#inquisitorInstanceOverview').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorInstanceOverview", partialExecutorInquisitorInstanceOverview);
    document.querySelector('span#inquisitorInstanceOverview').innerHTML = partialExecutorInquisitorInstanceOverview;
    const partialExecutorInquisitorInstanceOwner = INSTANCE.querySelector('span#inquisitorInstanceOwner').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorInstanceOwner", partialExecutorInquisitorInstanceOwner);
    document.querySelector('span#inquisitorInstanceOwner').innerHTML = partialExecutorInquisitorInstanceOwner;
    const partialExecutorInquisitorInstancePermissions = INSTANCE.querySelector('span#inquisitorInstancePermissions').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorInstancePermissions", partialExecutorInquisitorInstancePermissions);
    document.querySelector('span#inquisitorInstancePermissions').innerHTML = partialExecutorInquisitorInstancePermissions;
    const partialExecutorInquisitorInstanceSize = INSTANCE.querySelector('span#inquisitorInstanceSize').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorInstanceSize", partialExecutorInquisitorInstanceSize);
    document.querySelector('span#inquisitorInstanceSize').innerHTML = partialExecutorInquisitorInstanceSize;
    const partialExecutorInquisitorVisualQue = INSTANCE.querySelector('span#inquisitorVisualQue').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorVisualQue", partialExecutorInquisitorVisualQue);
    document.querySelector('span#inquisitorVisualQue').innerHTML = partialExecutorInquisitorVisualQue;
    const partialExecutorInquisitorValueAssembledResolvedPermissions = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueAssembledFEResolvedPermissions').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueAssembledResolvedPermissions", partialExecutorInquisitorValueAssembledResolvedPermissions);
    document.querySelector('#extraDataInstance .valueFEFs.valueAssembledFEResolvedPermissions').innerHTML = partialExecutorInquisitorValueAssembledResolvedPermissions;
    const partialExecutorInquisitorValueFEpath = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEpath').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEpath", partialExecutorInquisitorValueFEpath);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEpath').innerHTML = partialExecutorInquisitorValueFEpath;
    const partialExecutorInquisitorValueFEname = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEname').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEname", partialExecutorInquisitorValueFEname);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEname').innerHTML = partialExecutorInquisitorValueFEname;
    const partialExecutorInquisitorValueFEHEADER = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEHEADER').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEHEADER", partialExecutorInquisitorValueFEHEADER);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEHEADER').innerHTML = partialExecutorInquisitorValueFEHEADER;
    const partialExecutorInquisitorValueFEtype = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEtype').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEtype", partialExecutorInquisitorValueFEtype);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEtype').innerHTML = partialExecutorInquisitorValueFEtype;
    const partialExecutorInquisitorValueFEmode = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEmode').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEmode", partialExecutorInquisitorValueFEmode);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEmode').innerHTML = partialExecutorInquisitorValueFEmode;
    const partialExecutorInquisitorValueFEuser = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEuser').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEuser", partialExecutorInquisitorValueFEuser);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEuser').innerHTML = partialExecutorInquisitorValueFEuser;
    const partialExecutorInquisitorValueFEgroup = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEgroup').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEgroup", partialExecutorInquisitorValueFEgroup);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEgroup').innerHTML = partialExecutorInquisitorValueFEgroup;
    const partialExecutorInquisitorValueFEsize = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEsize').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEsize", partialExecutorInquisitorValueFEsize);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEsize').innerHTML = partialExecutorInquisitorValueFEsize;
    const partialExecutorInquisitorValueFEchange = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEchange').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEchange", partialExecutorInquisitorValueFEchange);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEchange').innerHTML = partialExecutorInquisitorValueFEchange;
    const partialExecutorInquisitorValueFEcreated = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEcreated').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEcreated", partialExecutorInquisitorValueFEcreated);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEcreated').innerHTML = partialExecutorInquisitorValueFEcreated;
    const partialExecutorInquisitorValueFEmismatch = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEmismatch').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEmismatch", partialExecutorInquisitorValueFEmismatch);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEmismatch').innerHTML = partialExecutorInquisitorValueFEmismatch;
    const partialExecutorInquisitorValueFEaccess = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEaccess').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEaccess", partialExecutorInquisitorValueFEaccess);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEaccess').innerHTML = partialExecutorInquisitorValueFEaccess;
    const partialExecutorInquisitorValueFEmodification = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEmodification').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEmodification", partialExecutorInquisitorValueFEmodification);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEmodification').innerHTML = partialExecutorInquisitorValueFEmodification;
    let partialExecutorInquisitorValueFEFIFO = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEFIFO').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEFIFO", partialExecutorInquisitorValueFEFIFO);
    if (partialExecutorInquisitorValueFEFIFO === cureMuted) {
      document.querySelector('#extraDataInstance .valueFEFs.valueFEFIFO').innerHTML = "false";
    } else {
      document.querySelector('#extraDataInstance .valueFEFs.valueFEFIFO').innerHTML = partialExecutorInquisitorValueFEFIFO;
    }
    let partialExecutorInquisitorValueFESOCKET = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFESOCKET').innerHTML;
    debuggingAJAXExecution();
    if (partialExecutorInquisitorValueFESOCKET === null) {
      document.querySelector('#extraDataInstance .valueFEFs.valueFESOCKET').innerHTML = "false";
    } else {
      document.querySelector('#extraDataInstance .valueFEFs.valueFESOCKET').innerHTML = partialExecutorInquisitorValueFESOCKET;
    }
    const partialExecutorInquisitorValueFESYMLINK = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFESYMLINK').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFESYMLINK", partialExecutorInquisitorValueFESYMLINK);
    document.querySelector('#extraDataInstance .valueFEFs.valueFESYMLINK').innerHTML = partialExecutorInquisitorValueFESYMLINK;
    const partialExecutorInquisitorValueFECHARACTER = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFECHARACTER').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFECHARACTER", partialExecutorInquisitorValueFECHARACTER);
    document.querySelector('#extraDataInstance .valueFEFs.valueFECHARACTER').innerHTML = partialExecutorInquisitorValueFECHARACTER;
    const partialExecutorInquisitorValueFEBLOCK = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEBLOCK').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEBLOCK", partialExecutorInquisitorValueFEBLOCK);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEBLOCK').innerHTML = partialExecutorInquisitorValueFEBLOCK;
    const partialExecutorInquisitorValueFEisDirectory = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEisDirectory').innerHTML;
    debuggingAJAXExecution("partialExecutorInquisitorValueFEisDirectory", partialExecutorInquisitorValueFEisDirectory);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEisDirectory').innerHTML = partialExecutorInquisitorValueFEisDirectory;
    const partialExecutorInquisitorValueFEisFile = INSTANCE.querySelector('#extraDataInstance .valueFEFs.valueFEisFile').innerHTML;
    debuggingAJAXExecution('partialExecutorInquisitorValueFEisFile', partialExecutorInquisitorValueFEisFile);
    document.querySelector('#extraDataInstance .valueFEFs.valueFEisFile').innerHTML = partialExecutorInquisitorValueFEisFile;
  } catch (error) {
    if (runtimeCyclesInquisitorAudit === 0) {} else {
      debuggingInquisitorOperationsStatus("-", "-", "Is inquisitor down? Error: " + error);
    }
    runtimeCyclesInquisitorAudit++;
  }
}
async function updateDomInstanceSideBar(EVENT, INSTANCE, NODE, SLUG) {
  debuggingInquisitorOperationsStatus("updateDomInstanceSideBar", "-", "taking place now");
  try {
    debuggingInquisitorOperationsStatus("INSTANCE.innerHTML", INSTANCE.innerHTML, "(HTML)");
    const partialExecutorInquisitorInstanceTreeExpanded = INSTANCE.querySelector('div#tree-expanded');
    if (partialExecutorInquisitorInstanceTreeExpanded === null) {
      debuggingInquisitorOperationsStatus("partialExecutorInquisitorInstanceTreeExpanded", "-", "null (A)");
    }
    document.querySelector('div#tree-expanded').innerHTML = partialExecutorInquisitorInstanceTreeExpanded.innerHTML;
    debuggingInquisitorOperationsStatus("partialExecutorInquisitorInstanceTreeExpanded", partialExecutorInquisitorInstanceTreeExpanded, "confirmation value (A)");
    let elementsTreeInstanceExpandedFO = document.querySelectorAll('.origin');
    debuggingInquisitorOperationsStatus("elementsTreeInstanceExpandedFO", elementsTreeInstanceExpandedFO, "confirmation value (A)");
    elementsTreeInstanceExpandedFO.forEach(item => {
      debuggingInquisitorExpansionUnpacking(item, "elementsTreeInstanceExpanded");
      let pathCurrentSlug = document.getElementById('pathCurrentSlug');
      item.setAttribute('anchor', pathCurrentSlug.innerHTML);
    });
    debuggingInquisitorOperationsStatus("NODE", NODE, "BASENODE is NODE");
    let getNodeInstance = document.querySelector('div.origin[node="${NODE}"]');
    if (getNodeInstance === null) {
      debuggingInquisitorOperationsStatus("getNodeInstacne", "null", "-");
    } else {
      let curedItem = getNodeInstance.innerHTML.trim();
      debuggingInquisitorOperationsStatus("curedItem", curedItem, "-");
      if (curedItem !== cureMuted) {
        getNodeInstance.appendChild(SLUG);
      }
    }
    elementsTreeInstanceExpandedFO.forEach(div => {
      debuggingInquisitorOperationsStatus("div", div, "nodeNow");
      div.addEventListener('click', function (event) {
        currentEventNode = event.target.innerHTML;
        debuggingInquisitorOperationsStatus("currentEventNode", currentEventNode, "was event.target.innerHTML");
        let nodeNow = div.getAttribute("node");
        let anchorNow = div.getAttribute("anchor");
        if (nodeNow === null) {
          nodeNow = null;
        }
        if (anchorNow === null) {
          anchorNow = null;
        }
        let valueNode = [];
        debuggingInquisitorNodeAnchor(anchorNow, nodeNow);
        let divTreeInstanceNow = cureMuted;
        divTreeInstanceNow = anchorNow + "/" + event.target.innerHTML;
        debuggingInquisitorOperationsStatus("divTreeInstanceNow", divTreeInstanceNow, "(A)");
        let stackAccendents = [];
        async function getParentHandler(EVENT) {
          let currentMovingEvent = EVENT.target.innerHTML;
          debuggingInquisitorOperationsStatus("currentMovingEvent", currentMovingEvent, "was event.target.innerHTML");
          debuggingInquisitorOperationsStatus("EVENT.target", EVENT.target, "was currentMovingEvent");
        }
        let parentHandler = getParentHandler(event);
        debuggingInquisitorOperationsStatus("nodeNow", nodeNow, "pre NodeSubmit");
        debuggingInquisitorOperationsStatus("TREE::: divTreeInstanceNow", divTreeInstanceNow, "now");
        directoryNodeSubmit(event, INSTANCE, PATH = divTreeInstanceNow, BASENODE = nodeNow);
      });
      div.addEventListener('dblclick', function (event) {
        let nodeNow = div.getAttribute("node");
        if (nodeNow === null) {
          nodeNow = "null";
        }
        debuggingInquisitorOperationsStatus("nodeNow", nodeNow, "(GG)");
        let valueNode = [];
        function extractNodes(NODE) {
          debuggingInquisitorOperationsStatus("NODE", NODE, "Extraction for");
          while (NODE) {
            if (NODE.nodeType === Node.ELEMENT_NODE) {
              debuggingInquisitorOperationsStatus("NODE", NODE, "Now");
              let textOfNode = Array.from(NODE.childNodes).filter(child => child.nodeType === Node.TEXT_NODE).map(child => child.textContent.trim()).join(' ');
              if (textOfNode) {
                debuggingInquisitorOperationsStatus("textOfNode", textOfNode, "pushing");
                valueNode.push(textOfNode);
              }
            }
            if (NODE.classList && NODE.classList.contains('overflow-tree')) {
              break;
            }
            NODE = NODE.parentNode;
          }
          return valueNode;
        }
      });
    });
  } catch (error) {
    if (runtimeCyclesInquisitorAudit === 0) {} else {
      debuggingInquisitorOperationsStatus("-", "-", "Is inquisitor down? Error (runtimeCycle): " + error);
    }
    runtimeCyclesInquisitorAudit++;
  }
}
async function updateDomInstance(INSTANCE, RUNTIME) {
  let partialExecutorSearch = cureMuted;
  if (isFileNow === 0) {
    try {
      const partialExecutorMain = INSTANCE.querySelector('main.enclave-home').innerHTML;
      document.querySelector('main.enclave-home').innerHTML = partialExecutorMain;
      debuggingAJAXExecution("partialExecutorMain", partialExecutorMain);
      const partialExecutorCurrentPath = INSTANCE.querySelector('div#pathCurrentSlug').innerHTML;
      document.querySelector('div#pathCurrentSlug').innerHTML = partialExecutorCurrentPath;
      debuggingAJAXExecution("partialExecutorCurrentPath", partialExecutorCurrentPath);
      partialExecutorSearch = INSTANCE.querySelector('input.search-input').innerHTML;
      document.querySelector('input.search-input').value = partialExecutorCurrentPath;
      debuggingAJAXExecution("partialExecutorSearch", partialExecutorSearch);
      const instanceUnitDirectory = INSTANCE.querySelector('#feed-inquisitor .instance-list-directory').innerHTML;
      document.querySelector('#feed-inquisitor .instance-list-directory').innerHTML = instanceUnitDirectory;
      debuggingAJAXExecution("instanceUnitDirectory", instanceUnitDirectory);
      const instanceUnitFile = INSTANCE.querySelector('#feed-inquisitor .instance-list-file').innerHTML;
      document.querySelector('#feed-inquisitor .instance-list-file').innerHTML = instanceUnitFile;
      debuggingAJAXExecution("instanceUnitFile", instanceUnitFile);
      const instanceUnitNotAvailable = INSTANCE.querySelector('#feed-inquisitor .instance-list-not-available').innerHTML;
      document.querySelector('#feed-inquisitor .instance-list-not-available').innerHTML = instanceUnitNotAvailable;
      debuggingAJAXExecution("instanceUnitNotAvailable", instanceUnitNotAvailable);
      const instanceItemsExcluded = INSTANCE.querySelector('b#itemsInquisitorExcluded').innerHTML;
      document.querySelector('b#itemsInquisitorExcluded').innerHTML = instanceItemsExcluded;
      debuggingAJAXExecution("instanceItemsExcluded", instanceItemsExcluded);
      const instanceItemsTotal = INSTANCE.querySelector('span.instanceTotal').innerHTML;
      document.querySelector('span.instanceTotal').innerHTML = instanceItemsTotal;
      debuggingAJAXExecution("instanceItemsTotal", instanceItemsTotal);
      const instanceItemsSize = INSTANCE.querySelector('span.instanceSize').innerHTML;
      document.querySelector('span.instanceSize').innerHTML = instanceItemsSize;
      debuggingAJAXExecution("instanceItemsSize", instanceItemsSize);
      const instanceItemsInquisitorTotal = INSTANCE.querySelector('b#itemInquisitorTotal').innerHTML;
      document.querySelector('b#itemInquisitorTotal').innerHTML = instanceItemsInquisitorTotal;
      debuggingAJAXExecution("instanceItemsInquisitorTotal", instanceItemsInquisitorTotal);
      const auditInstanceItemsDirectoryValue = INSTANCE.querySelector('b#auditItemsInquisitorDirectoryValue').innerHTML;
      document.querySelector('b#auditItemsInquisitorDirectoryValue').innerHTML = auditInstanceItemsDirectoryValue;
      document.querySelector('b#auditItemsInquisitorDirectory').innerHTML = auditInstanceItemsDirectoryValue;
      debuggingAJAXExecution("auditInstanceItemsDirectoryValue", auditInstanceItemsDirectoryValue);
      const auditInstanceItemsFileValue = INSTANCE.querySelector('b#auditItemsInquisitorFileValue').innerHTML;
      document.querySelector('b#auditItemsInquisitorFileValue').innerHTML = auditInstanceItemsFileValue;
      document.querySelector('b#auditItemsInquisitorFile').innerHTML = auditInstanceItemsFileValue;
      debuggingAJAXExecution("auditInstanceItemsFileValue", auditInstanceItemsFileValue);
      const auditInstanceItemsNotAvailableValue = INSTANCE.querySelector('b#auditItemsInquisitorNotAvailableValue').innerHTML;
      document.querySelector('b#auditItemsInquisitorNotAvailableValue').innerHTML = auditInstanceItemsNotAvailableValue;
      document.querySelector('b#auditItemsInquisitorNotAvailable').innerHTML = auditInstanceItemsNotAvailableValue;
      debuggingAJAXExecution("auditInstanceItemsNotAvailableValue", auditInstanceItemsNotAvailableValue);
      getInquisitorIconSourceDirectory();
    } catch (error) {
      debuggingAJAXExecution("ERROR", error);
    }
    var spanElement = document.getElementById("adminMorph");
    const preUnrestrainedPost = INSTANCE.querySelector('div.entitySectionContent-unrestrained');
    if (spanElement) {
      debuggingInquisitorOperationsStatus("instanceUnrestrainedPost", instanceUnrestrainedPost, "-");
      var menuAdmin = document.querySelector('div.entityNavigation');
      if (menuAdmin) {
        debuggingInquisitorOperationsStatus("adminValueSet", "-", "GET (X post value)");
        let localCheckNow = localStorage.getItem('menuAdminReduced');
        if (localCheckNow === "true") {
          localStorage.setItem('menuAdminReduced', true);
          toggleStateAdmin = true;
          spanElement.textContent = "<-";
          debuggingInquisitorOperationsStatus("toggleStateAdmin", toggleStateAdmin, "GET (X:A post value)");
          let DIVSTATE = document.getElementById('extraDataInstance');
          if (preUnrestrainedPost) {
            debuggingInquisitorOperationsStatus("toggleStateAdmin", "-", "GET (X:A1 post value)");
            setTimeout(() => {}, 600);
            preUnrestrainedPost.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
            toggleStateExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
            debuggingAuditState("Current", "toggleStateExtraDataInstanceAudit", toggleStateExtraDataInstanceAudit);
            if (toggleStateExtraDataInstanceAudit === false || toggleStateExtraDataInstanceAudit === null) {
              debuggingInterfaceOnOffState("false", "morph", "<-:");
            } else {
              debuggingInterfaceOnOffState("false", "morph", "was true or null <-");
            }
            debuggingInquisitorOperationsStatus("toggleStateAdmin", "-", "GET (X:A1 post value)");
            debuggingInquisitorOperationsStatus("preUnrestrainedPost.outerHTML", preUnrestrainedPost.outerHTML, "-");
            var instanceUnrestrainedPost = preUnrestrainedPost.outerHTML;
            debuggingInquisitorOperationsStatus("instanceUnrestrainedPost", instanceUnrestrainedPost, "-");
            document.querySelector('div.entitySectionContent-unrestrained').outerHTML = instanceUnrestrainedPost;
          }
        } else {
          debuggingInquisitorOperationsStatus("toggleStateAdmin", toggleStateAdmin, "SET (X:B post value)");
          let DIVSTATE = document.getElementById('extraDataInstance');
          if (preUnrestrainedPost) {
            spanElement.textContent = "->";
            debuggingInquisitorOperationsStatus("toggleStateAdmin", "-", "SET (X:B1 post value)");
            setTimeout(() => {}, 600);
            preUnrestrainedPost.style.cssText = "margin-left: " + marginAdminMenuBlock + ";";
            toggleStateExtraDataInstanceAudit = localStorage.getItem("extraDataInstanceAudit");
            debuggingAuditState("Current", "toggleStateExtraDataInstanceAudit", toggleStateExtraDataInstanceAudit);
            if (toggleStateExtraDataInstanceAudit === false || toggleStateExtraDataInstanceAudit === null) {
              debuggingInterfaceOnOffState("false", "morph", "<-:");
            } else {
              debuggingInterfaceOnOffState("false", "morph", "was true or null <-");
            }
            debuggingInquisitorOperationsStatus("preUnrestrainedPost.innerHTML", preUnrestrainedPost.innerHTML, "-");
            var instanceUnrestrainedPost = preUnrestrainedPost.outerHTML;
            debuggingInquisitorOperationsStatus("instanceUnrestrainedPost", instanceUnrestrainedPost, "-");
            document.querySelector('div.entitySectionContent-unrestrained').outerHTML = instanceUnrestrainedPost;
          }
        }
      }
    }
  } else {
    partialExecutorSearch = INSTANCE.querySelector('input.search-input').value;
    document.querySelector('input.search-input').value = partialExecutorSearch;
    debuggingAJAXExecution("partialExecutorSearch", partialExecutorSearch);
    const partialExecutorMain = INSTANCE.querySelector('main.enclave-home').innerHTML;
    document.querySelector('main.enclave-home').innerHTML = partialExecutorMain;
    debuggingAJAXExecution("partialExecutorMain", partialExecutorMain);
    getInquisitorIconSourceFile();
  }
  providesInquisitorDirectory();
  providesInquisitorFile();
  if (RUNTIME === "PES") {
    providesInquisitorFunctionality(partialExecutorSearch);
  } else if (RUNTIME === "STANDARD" || RUNTIME === undefined || RUNTIME === null) {
    providesInquisitorFunctionality('standard');
  } else if (RUNTIME === "NONE") {
    providesInquisitorFunctionality();
  } else {
    providesInquisitorFunctionality('standard');
  }
}
async function factoryBuildFilterDirectory(STATE) {
  localStorage.setItem("stateFilterGetDirectory", STATE);
  debuggingDataLocalValueSet("FilterGetDirectory (setting isFilterDirectory)", "STATE", STATE);
  isFilterDirectory = STATE;
}
async function factoryBuildFilterEntityScript(STATE) {
  localStorage.setItem("stateFilterGetEntityScript", STATE);
  debuggingDataLocalValueSet("FilterGetEntityScript (setting isFilterEntityScript)", "STATE", STATE);
  isFilterEntityScript = STATE;
}
async function factoryBuildFilterFile(STATE) {
  localStorage.setItem("stateFilterGetFile", STATE);
  debuggingDataLocalValueSet("FilterGetFile (setting isFilterFile)", "STATE", STATE);
  isFilterFile = STATE;
}
async function factoryBuildFilterNotAvailable(STATE) {
  localStorage.setItem("stateFilterGetNotAvailable", STATE);
  debuggingDataLocalValueSet("FilterNotAvailable (setting isFilterNotAvailable)", "STATE", STATE);
  isFilterNotAvailable = STATE;
}
async function logicDecideFilterDirectory(STATEVALUE) {
  let stateValueLocalCheckDirectory = localStorage.getItem("stateFilterGetDirectory");
  if (stateValueLocalCheckDirectory === null) {
    debuggingDataLocalValue("stateValueLocalCheckDirectory (null)", stateValueLocalCheckDirectory, typeof stateValueLocalCheckDirectory);
    factoryBuildFilterDirectory(filterDefaultValueDirectory);
    isFilterDirectory = filterDefaultValueDirectory;
  } else {
    debuggingDataLocalValue("stateValueLocalCheckDirectory (not null)", stateValueLocalCheckDirectory, typeof stateValueLocalCheckDirectory);
    let valueNow = STATEVALUE;
    if (valueNow !== stateValueLocalCheckDirectory) {
      isFilterDirectory = valueNow;
      debuggingDataInTransitValueSet("valueNow", "isFilterDirectory", isFilterDirectory);
      factoryBuildFilterDirectory(valueNow);
    }
  }
}
async function logicDecideFilterEntityScript(STATEVALUE) {
  let stateValueLocalCheckEntityScript = localStorage.getItem("stateFilterGetEntityScript");
  if (stateValueLocalCheckEntityScript === null) {
    debuggingDataLocalValue("stateValueLocalCheckEntityScript (null)", stateValueLocalCheckEntityScript, typeof stateValueLocalCheckEntityScript);
    factoryBuildFilterEntityScript(filterDefaultValueEntityScript);
    isFilterEntityScript = filterDefaultValueEntityScript;
  } else {
    debuggingDataLocalValue("stateValueLocalCheckEntityScript (not null)", stateValueLocalCheckEntityScript, typeof stateValueLocalCheckEntityScript);
    let valueNow = STATEVALUE;
    if (valueNow !== stateValueLocalCheckEntityScript) {
      isFilterEntityScript = valueNow;
      debuggingDataInTransitValueSet("valueNow", "isFilterEntityScript", isFilterEntityScript);
      factoryBuildFilterEntityScript(valueNow);
    }
  }
}
async function logicDecideFilterFile(STATEVALUE) {
  let stateValueLocalCheckFile = localStorage.getItem("stateFilterGetFile");
  if (stateValueLocalCheckFile === null) {
    debuggingDataLocalValue("stateValueLocalCheckFile (null)", stateValueLocalCheckFile, typeof stateValueLocalCheckFile);
    factoryBuildFilterFile(filterDefaultValueFile);
    isFilterFile = filterDefaultValueFile;
  } else {
    debuggingDataLocalValue("stateValueLocalCheckFile (not null)", stateValueLocalCheckFile, typeof stateValueLocalCheckFile);
    let valueNow = STATEVALUE;
    if (valueNow !== stateValueLocalCheckFile) {
      isFilterFile = valueNow;
      debuggingDataInTransitValueSet("valueNow", "isFilterFile", isFilterFile);
      factoryBuildFilterFile(valueNow);
    }
  }
}
async function logicDecideFilterNotAvailable(STATEVALUE) {
  let stateValueLocalCheckNotAvailable = localStorage.getItem("stateFilterGetNotAvailable");
  if (stateValueLocalCheckNotAvailable === null) {
    debuggingDataLocalValue("stateValueLocalCheckNotAvailable (null)", stateValueLocalCheckNotAvailable, typeof stateValueLocalCheckNotAvailable);
    factoryBuildFilterNotAvailable(filterDefaultValueNotAvailable);
    isFilterNotAvailable = filterDefaultValueNotAvailable;
  } else {
    debuggingDataLocalValue("stateValueLocalCheckNotAvailable (not null)", stateValueLocalCheckNotAvailable, typeof stateValueLocalCheckNotAvailable);
    let valueNow = STATEVALUE;
    if (valueNow !== stateValueLocalCheckNotAvailable) {
      isFilterNotAvailable = valueNow;
      localStorage.setItem("stateFilterGetNotAvailable", valueNow);
      debuggingDataLocalValueSet("stateFilterNotAvailable", "valueNow", valueNow);
      factoryBuildFilterNotAvailable(valueNow);
    }
  }
}
async function filterDecide() {
  var toggleStateFilter = localStorage.getItem('stateFilter');
  debuggingDataLocalValue("toggleStateFilter", toggleStateFilter, typeof toggleStateFilter);
  if (toggleStateFilter === null) {
    localStorage.setItem("stateFilter", true);
  } else {
    var filterDirectory = localStorage.getItem("stateFilterGetDirectory");
    debuggingDataLocalValue("filterDirectory (preliminary)", filterDirectory, typeof filterDirectory);
    let filterGetDirectoryChecked = localStorage.getItem("stateFilterGetDirectory");
    let filterGetDirectory = document.querySelector('input#checkboxInquisitorDirectory');
    debuggingDataLocalValue("filterGetDirectory (preliminary)", filterGetDirectory, typeof filterGetDirectory);
    if (filterGetDirectory) {
      filterGetDirectory.checked = filterGetDirectoryChecked;
      if (filterGetDirectoryChecked === "true" || filterGetDirectory === null) {
        debuggingDataLocalValue("filterGetDirectory.checked (true or filterGetDirectory is null)", filterGetDirectory.checked, typeof filterGetDirectory.checked);
        filterGetDirectory.addEventListener('click', () => {
          filterGetDirectory = document.querySelector('input#checkboxInquisitorDirectory');
          logicDecideFilterDirectory(filterGetDirectory.checked);
        });
        if (filterGetDirectory.checked === null) {
          debuggingDataLocalValue("filterGetDirectory.checked (null)", filterGetDirectory.checked, typeof filterGetDirectory.checked);
          localStorage.setItem("stateFilterGetDirectory", filterDefaultValueDirectory);
        } else {
          debuggingDataLocalValue("filterGetDirectory.checked (not null)", filterGetDirectory.checked, typeof filterGetDirectory.checked);
          logicDecideFilterDirectory(true);
          filterGetDirectory.checked = true;
        }
      } else {
        debuggingDataLocalValue("filterGetDirectory.checked (false)", filterGetDirectory.checked, typeof filterGetDirectory.checked);
        filterGetDirectory.checked = false;
        filterGetDirectory.addEventListener('click', () => {
          filterGetDirectory = document.querySelector('input#checkboxInquisitorDirectory');
          logicDecideFilterDirectory(filterGetDirectory.checked);
        });
      }
    }
    var filterEntityScript = localStorage.getItem("stateFilterGetEntityScript");
    debuggingDataLocalValue("filterEntityScript (preliminary)", filterEntityScript, typeof filterEntityScript);
    let filterGetEntityScript = document.querySelector('input#checkboxInquisitorEntityScript');
    let filterGetEntityScriptChecked = localStorage.getItem("stateFilterGetEntityScript");
    if (filterGetEntityScript) {
      filterGetEntityScript.checked = filterGetEntityScriptChecked;
      if (filterGetEntityScriptChecked === "true" || filterGetEntityScript === null) {
        debuggingDataLocalValue("filterGetEntityScript.checked (true or filterGetEntityScript is null)", filterGetEntityScript.checked, typeof filterGetEntityScript.checked);
        filterGetEntityScript.addEventListener('click', () => {
          filterGetEntityScript = document.querySelector('input#checkboxInquisitorEntityScript');
          logicDecideFilterEntityScript(filterGetEntityScript.checked);
        });
        if (filterGetEntityScript.checked === null) {
          debuggingDataLocalValue("filterGetEntityScript.checked (null)", filterGetEntityScript.checked, typeof filterGetEntityScript.checked);
          localStorage.setItem("stateFilterGetEntityScript", filterDefaultValueEntityScript);
        } else {
          debuggingDataLocalValue("filterGetEntityScript.checked (not null)", filterGetEntityScript.checked, typeof filterGetEntityScript.checked);
          logicDecideFilterEntityScript(true);
          filterGetEntityScript.checked = true;
        }
      } else {
        debuggingDataLocalValue("filterGetEntityScript.checked (false)", filterGetEntityScript.checked, typeof filterGetEntityScript.checked);
        filterGetEntityScript.checked = false;
        filterGetEntityScript.addEventListener('click', () => {
          filterGetEntityScript = document.querySelector('input#checkboxInquisitorEntityScript');
          logicDecideFilterEntityScript(filterGetEntityScript.checked);
        });
      }
    }
    var filterFile = localStorage.getItem("stateFilterGetFile");
    debuggingDataLocalValue("filterFile", filterFile, typeof filterFile);
    let filterGetFile = document.querySelector('input#checkboxInquisitorFile');
    let filterGetFileChecked = localStorage.getItem("stateFilterGetFile");
    if (filterGetFile) {
      filterGetFile.checked = filterGetFileChecked;
      if (filterGetFileChecked === "true" || filterGetFile === null) {
        debuggingDataLocalValue("filterGetFile.checked (true or filterGetFile is null)", filterGetFile.checked, typeof filterGetFile.checked);
        filterGetFile.addEventListener('click', () => {
          filterGetFile = document.querySelector('input#checkboxInquisitorFile');
          logicDecideFilterFile(filterGetFile.checked);
        });
        if (filterGetFile.checked === null) {
          debuggingDataLocalValue("filterGetFile.checked (null)", filterGetFile.checked, typeof filterGetFile.checked);
          localStorage.setItem("stateFilterGetFile", filterDefaultValueFile);
        } else {
          debuggingDataLocalValue("filterGetFile.checked (not null)", filterGetFile.checked, typeof filterGetFile.checked);
          logicDecideFilterFile(true);
          filterGetFile.checked = true;
        }
      } else {
        debuggingDataLocalValue("filterGetFile.checked (false)", filterGetFile.checked, typeof filterGetFile.checked);
        filterGetFile.checked = false;
        filterGetFile.addEventListener('click', () => {
          filterGetFile = document.querySelector('input#checkboxInquisitorFile');
          logicDecideFilterFile(filterGetFile.checked);
        });
      }
    }
    var filterNotAvailable = localStorage.getItem("stateFilterGetNotAvailable");
    debuggingDataLocalValue("filterNotAvailable", filterNotAvailable, typeof filterNotAvailable);
    let filterGetNotAvailable = document.querySelector('input#checkboxInquisitorNotAvailable');
    let filterGetNotAvailableChecked = localStorage.getItem("stateFilterGetNotAvailable");
    if (filterGetNotAvailable) {
      filterGetNotAvailable.checked = filterGetNotAvailable;
      if (filterGetNotAvailableChecked === "true" || filterGetNotAvailable === null) {
        debuggingDataLocalValue("filterGetNotAvailable.checked (true or filterGetNotAvailable is null)", filterGetNotAvailable.checked, typeof filterGetNotAvailable.checked);
        filterGetNotAvailable.addEventListener('click', () => {
          filterGetNotAvailable = document.querySelector('input#checkboxInquisitorNotAvailable');
          logicDecideFilterNotAvailable(filterGetNotAvailable.checked);
        });
        if (filterGetNotAvailable.checked === null) {
          debuggingDataLocalValue("filterGetNotAvailable.checked (null)", filterGetNotAvailable.checked, typeof filterGetNotAvailable.checked);
          localStorage.setItem("stateFilterGetNotAvailable", filterDefaultValueNotAvailable);
        } else {
          debuggingDataLocalValue("filterGetNotAvailable.checked (not null)", filterGetNotAvailable.checked, typeof filterGetNotAvailable.checked);
          logicDecideFilterNotAvailable(true);
          filterGetNotAvailable.checked = true;
        }
      } else {
        debuggingDataLocalValue("filterGetNotAvailable.checked (false)", filterGetNotAvailable.checked, typeof filterGetNotAvailable.checked);
        filterGetNotAvailable.checked = false;
        filterGetNotAvailable.addEventListener('click', () => {
          filterGetNotAvailable = document.querySelector('input#checkboxInquisitorNotAvailable');
          logicDecideFilterNotAvailable(filterGetNotAvailable.checked);
        });
      }
    }
  }
}
function buildFsInterfaceListeners() {
  document.querySelectorAll('.slug-fs-directory').forEach(element => {
    element.addEventListener('mouseover', providesInstanceHoverDirectory);
    element.addEventListener('mouseout', destroysInstanceHoverDirectory);
  });
  document.querySelectorAll('.slug-fs-file').forEach(element => {
    element.addEventListener('mouseover', providesInstanceHoverFile);
    element.addEventListener('mouseout', destroysInstanceHoverFile);
  });
  document.querySelectorAll('.slug-directory').forEach(element => {
    element.addEventListener('mouseover', providesInstanceHoverDirectoryTitle);
    element.addEventListener('mouseout', destroysInstanceHoverDirectoryTitle);
  });
  document.querySelectorAll('.slug-file').forEach(element => {
    element.addEventListener('mouseover', providesInstanceHoverFileTitle);
    element.addEventListener('mouseout', destroysInstanceHoverFileTitle);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  providesInquisitorDirectory();
  providesInquisitorFile();
});
window.addEventListener('scroll', function () {
  var scrolledToBottom = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight - window.scrollY <= 1;
  var scrolledToTop = window.scrollY === 0;
  if (scrolledToBottom) {
    isNestedScrolling = 'down';
  } else if (scrolledToTop) {
    resetScrollingState();
  }
});
const commandStackExternal = {
  "-------------------------------------": "",
  "-**": "command=> stack: external",
  "-------------------------------------": "",
  "EXTERNAL=> isActiveMap": isActiveMap
};
const commandStackFunction = {
  "-------------------------------------": "",
  "-**": "command=> stack: function",
  "-------------------------------------": "",
  "EXPORTED=> function: exportedResponseNavigationEvent": exportedResponseNavigationEvent,
  "EXPORTED=> function: exportedResponseNavigationKey": exportedResponseNavigationKey
};
const commandStackHost = {
  "-------------------------------------": "",
  "-**": "command=> stack: host",
  "-------------------------------------": "",
  "HOST=> ANCHOR-> Url (presetAnchorUrl)": presetAnchorUrl,
  "HOST=> ANCHOR-> Domain (presetAnchorLocalDomain": presetAnchorLocalDomain,
  "HOST=> CDN_NOW": CDN_NOW,
  "HOST=> statusLastWas": statusLastWas,
  "HOST=> statusNetwork": statusNetwork,
  "HOST=> stateIsNowOff": stateIsNowOff,
  "HOST=> SPA_ORIGIN": SPA_ORIGIN,
  "HOST=> SPA_ORIGIN_COMPILED": SPA_ORIGIN_COMPILED,
  "HOST=> SPA_ORIGIN_PORT": SPA_ORIGIN_PORT,
  "HOST=> defaultSrc: ": defaultSrc,
  "HOST=> hrefUpdated: ": hrefUpdated,
  "HOST=> inTransitURL: ": inTransitURL,
  "HOST=> lastActivePath: ": lastActivePath,
  "HOST=> originalHref: ": originalHref,
  "HOST=> originalSrc: ": originalSrc,
  "HOST=> pathNow: ": pathNow,
  "HOST=> srcUpdated: ": srcUpdated
};
const commandStackSettings = {
  "-------------------------------------": "",
  "-**": "command=> stack: settings",
  "-------------------------------------": "",
  "adminMorph": adminMorph,
  "assetInformation": assetInformation,
  "auditPanelInquisitorInstance": auditPanelInquisitorInstance,
  "blinkerEmulator": blinkerEmulator,
  "blockLocation": blockLocation,
  "body": body,
  "booleanTrue": booleanTrue,
  "booleanFalse": booleanFalse,
  "buttonContact": buttonContact,
  "buttonHQAsset": buttonHQAsset,
  "buttonOptimizeAsset": buttonOptimizeAsset,
  "buttonOptimizeImage": buttonOptimizeImage,
  "classifierQueueLookup": classifierQueueLookup,
  "clickCountSmoke": clickCountSmoke,
  "collectionRightsHolder": collectionRightsHolder,
  "collectionDefault": collectionDefault,
  "contextInstanceActionFailure": contextInstanceActionFailure,
  "contextInstanceCalled": contextInstanceCalled,
  "contextInstanceNotAvailable": contextInstanceNotAvailable,
  "contextInstanceProtectedCalled": contextInstanceProtectedCalled,
  "contextInstanceRan": contextInstanceRan,
  "counterTimeNow": counterTimeNow,
  "cureLinebreak": cureLinebreak,
  "cureMuted": cureMuted,
  "defaultMetaSearchName": defaultMetaSearchName,
  "defaultVanityMapObject": defaultVanityMapObject,
  "defaultVanityMapString": defaultVanityMapString,
  "delayActionExtraInstanceAudit": delayActionExtraInstanceAudit,
  "delayActionMacro": delayActionMacro,
  "depthZNow": depthZNow,
  "destroyModeFrame": destroyModeFrame,
  "deliveryPoint": deliveryPoint,
  "descriptiveTitle": descriptiveTitle,
  "divTreeInstanceNow": divTreeInstanceNow,
  "endpointAssets": endpointAssets,
  "enforceHTTPS": enforceHTTPS,
  "enter": enter,
  "entityImage": entityImage,
  "eventMouse": eventMouse,
  "eventMouseOver": eventMouseOver,
  "eventOperatorKey": eventOperatorKey,
  "extraDataInstance": extraDataInstance,
  "favoritePoint": favoritePoint,
  "filtersStateDirectory": filtersStateDirectory,
  "filtersStateEntityScript": filtersStateEntityScript,
  "filtersStateFile": filtersStateFile,
  "filtersStateNotAvailable": filtersStateNotAvailable,
  "FRAME_MACRO_WIDTH_A": FRAME_MACRO_WIDTH_A,
  "FRAME_MACRO_HEIGHT_A": FRAME_MACRO_HEIGHT_A,
  "fullPathIs": fullPathIs,
  "fullscreenAsset": fullscreenAsset,
  "fullscreenAssetBackground": fullscreenAssetBackground,
  "fullscreenDock": fullscreenDock,
  "fullscreenEnter": fullscreenEnter,
  "fullscreenExit": fullscreenExit,
  "fullyQualifiedSource": fullyQualifiedSource,
  "fullyQualifiedSourceIf": fullyQualifiedSourceIf,
  "fullyQualifiedSourceId": fullyQualifiedSourceId,
  "fullyQualifiedSourceNa": fullyQualifiedSourceNa,
  "globalTempIllusionValue": globalTempIllusionValue,
  "handMorph": handMorph,
  "hasProtectedRegionalState": hasProtectedRegionalState,
  "HOST_NOW": HOST_NOW,
  "HOST_NOW_ENDPOINT": HOST_NOW_ENDPOINT,
  "HOST_NOW_ENDPOINT_API": HOST_NOW_ENDPOINT_API,
  "HOST_NOW_ENDPOINT_INSPECTION": HOST_NOW_ENDPOINT_INSPECTION,
  "HOST_NOW_ENDPOINT_PATH": HOST_NOW_ENDPOINT_PATH,
  "HOST_NOW_OPERATIONS_PORT_API": HOST_NOW_OPERATIONS_PORT_API,
  "HOST_NOW_OPERATIONS_PORT": HOST_NOW_OPERATIONS_PORT,
  "HOST_NOW_RESOLVED_API": HOST_NOW_RESOLVED_API,
  "HOST_NOW_RESOLVED_INSPECTION": HOST_NOW_RESOLVED_INSPECTION,
  "HOST_NOW_RESOLVED_PATH": HOST_NOW_RESOLVED_PATH,
  "HOST_NOW_RESOLVED_SPA": HOST_NOW_RESOLVED_SPA,
  "HOST_OPERATIONS_PORT_LOCATION": HOST_OPERATIONS_PORT_LOCATION,
  "html": html,
  "HTML_DEFAULT_FILE_NOT_FOUND": HTML_DEFAULT_FILE_NOT_FOUND,
  "idInstance": idInstance,
  "imageFormat": imageFormat,
  "indexEmulator": indexEmulator,
  "inTransitNewEntityHostedAsset": inTransitNewEntityHostedAsset,
  "isActiveTree": isActiveTree,
  "isAsc": isAsc,
  "isDynamicHandWindowVisible": isDynamicHandWindowVisible,
  "isDynamicWindowVisible": isDynamicWindowVisible,
  "isNestedScrolling": isNestedScrolling,
  "isScrollingInsideNestedDiv": isScrollingInsideNestedDiv,
  "isFileNow": isFileNow,
  "isFirstEnterSmoke": isFirstEnterSmoke,
  "lastTouchY": lastTouchY,
  "levelVisionRenderMax": levelVisionRenderMax,
  "levelVisionRenderMin1": levelVisionRenderMin1,
  "levelVisionRenderMin2": levelVisionRenderMin2,
  "levelVisionRenderMin3": levelVisionRenderMin3,
  "levelVisionRenderMin4": levelVisionRenderMin4,
  "levelVisionRenderMin": levelVisionRenderMin,
  "listCurred": listCurred,
  "locationGatekeeper": locationGatekeeper,
  "locationMock": locationMock,
  "locationSiteMap": locationSiteMap,
  "lookupFactories": lookupFactories,
  "lookupStorageImageRoot": localStorageImageRoot,
  "lookupStorageImageVanity": localStorageImageVanity,
  "mainImageHQ": mainImageHQ,
  "mapTemplate": mapTemplate,
  "marginAdminMenuBlock": marginAdminMenuBlock,
  "marginAdminMenuHidden": marginAdminMenuHidden,
  "marginAuditPanelInquisitorBlock": marginAuditPanelInquisitorBlock,
  "marginAuditPanelInquisitorHidden": marginAuditPanelInquisitorHidden,
  "marginExtraDataInstanceBlock": marginExtraDataInstanceBlock,
  "marginExtraDataInstanceHidden": marginExtraDataInstanceHidden,
  "metaFeatures": metaFeatures,
  "modifierConstruct": modifierConstruct,
  "morphHandState": morphHandState,
  "morphState": morphState,
  "nestedDiv": nestedDiv,
  "nestedDivUnrestrained": nestedDivUnrestrained,
  "NEWENTITY": NEWENTITY,
  "NEWENTITY_NOW": NEWENTITY_NOW,
  "newentity": newentity,
  "newentity_enter": newentity_enter,
  "newentityPoint": newentityPoint,
  "newentityUnrestrained": newentityUnrestrained,
  "objectRequestGET": objectRequestGET,
  "openModeFrame": openModeFrame,
  "optimizeImage": optimizeImage,
  "originPoint": originPoint,
  "ownerCopyright": ownerCopyright,
  "pageCurrent": pageCurrent,
  "pauseDurationsEmulator": pauseDurationsEmulator,
  "pauseIndexEmulator": pauseIndexEmulator,
  "pauseTimesEmulator": pauseTimesEmulator,
  "pixelBase": pixelBase,
  "POSel": POSel,
  "preferredModeFalse": preferredModeFalse,
  "preferredModeTrue": preferredModeTrue,
  "preferredLegacyFalse": preferredLegacyFalse,
  "preferredLegacyTrue": preferredLegacyTrue,
  "preferredTimeAlert": preferredTimeAlert,
  "preferredTAbase": preferredTAbase,
  "preferredTAa": preferredTAa,
  "preferredTAb": preferredTAb,
  "preferredTAc": preferredTAc,
  "preferredTAunit": preferredTAunit,
  "preferredNetworkImplosion": preferredNetworkImplosion,
  "preferredTrackerInterval": preferredTrackerInterval,
  "preferredWindowMax": preferredWindowMax,
  "preferredTimeAlert": preferredTimeAlert,
  "priorityAlpha": priorityAlpha,
  "priorityBeta": priorityBeta,
  "priorityGamma": priorityGamma,
  "queryTableUrl": queryTableUrl,
  "propertyHandState": propertyHandState,
  "propertyState": propertyState,
  "queNowSurvivalNoneState": queNowSurvivalNoneState,
  "recordCreationDate": recordCreationDate,
  "refreshButton": refreshButton,
  "regionX": regionX,
  "regionY": regionY,
  "regionZ": regionZ,
  "rootDomain": rootDomain,
  "safetyRating": safetyRating,
  "screenX": screenX,
  "screenY": screenY,
  "screenZ": screenZ,
  "screenRendX": screenRendX,
  "screenRendY": screenRendY,
  "screenRendZ": screenRendZ,
  "screenXtext": screenXtext,
  "screenYtext": screenYtext,
  "screenZtext": screenZtext,
  "sectionAbout": sectionAbout,
  "sectionAPI": sectionAPI,
  "sectionContent": sectionContent,
  "sectionEnclave": sectionEnclave,
  "sectionGatekeeper": sectionGatekeeper,
  "sectionLegal": sectionLegal,
  "sectionMail": sectionMail,
  "sectionPhotos": sectionPhotos,
  "sectionPlaylist": sectionPlaylist,
  "sectionSkills": sectionSkills,
  "sectionTextpage": sectionTextpage,
  "sectionWriting": sectionWriting,
  "slugTextpageAssets": slugTextpageAssets,
  "slugTextpageTerminal": slugTextpageTerminal,
  "smoke": smoke,
  "smokesHome": smokesHome,
  "sockINOUT": sockINOUT,
  "startingPointPresentation": startingPointPresentation,
  "startPresentationPath": startPresentationPath,
  "stateActive=> ": stateActive,
  "stateDirectory=> ": stateDirectory,
  "stateFile=> ": stateFile,
  "stateExtraInstance=> ": stateExtraInstance,
  "stateExtraInstanceNow=> ": stateExtraInstanceNow,
  "stateExtraInstanceNowNested=> ": stateExtraInstanceNowNested,
  "stateExtraInstanceNowPinLeft=> ": stateExtraInstanceNowPinLeft,
  "stateInputNow": stateInputNow,
  "stateTextareaNow": stateTextareaNow,
  "staticPathimage": staticPathimage,
  "staticPathimage": staticPathimage,
  "staticPaththumb": staticPaththumb,
  "staticPaththumb": staticPaththumb,
  "staticPaths": staticPaths,
  "styleStatusTypeDisplayOptionOne=> ": styleStatusTypeDisplayOptionOne,
  "styleStatusTypeDisplayOptionTwo=> ": styleStatusTypeDisplayOptionTwo,
  "styleMenuConstantContainerHidden": styleMenuConstantContainerHidden,
  "styleMenuConstantContainerVisible": styleMenuConstantContainerVisible,
  "styleMenuConstantContainerVisibleLoaded": styleMenuConstantContainerVisibleLoaded,
  "styleMenuHandHidden": styleMenuHandHidden,
  "styleMenuHandVisible": styleMenuHandVisible,
  "symbolComma": symbolComma,
  "symbolCommnet": symbolComment,
  "symbolPipe": symbolPipe,
  "symbolPound": symbolPound,
  "symbolQuoteTrippleDouble": symbolQuoteTrippleDouble,
  "symbolQuoteTrippleSingle": symbolQuoteTrippleSingle,
  "terminalInputText": terminalInputText,
  "textElement": textElement,
  "textOptions": textOptions,
  "themeDark": themeDark,
  "themeFallback": themeFallback,
  "themeLight": themeLight,
  "themePreferred": themePreferred,
  "touchScrollSpeedFactor": touchScrollSpeedFactor,
  "toggleLockerlink": toggleLockerlink,
  "toggleViewExpand": toggleViewExpand,
  "toggleState": toggleState,
  "toggleStateAdmin": toggleStateAdmin,
  "toggleStateExtraDataInstanceAudit=> ": toggleStateExtraDataInstanceAudit,
  "toggleStateHand": toggleStateHand,
  "toggleStateVanity": toggleStateVanity,
  "toggleStateViewExpand": toggleStateViewExpand,
  "toggleStateViewExpandNow": toggleStateViewExpandNow,
  "TOTALORIGINS": TOTALORIGINS,
  "transitionAdminMenu": transitionAdminMenu,
  "transitionVanityMenu": transitionVanityMenu,
  "typingSpeed": typingSpeed,
  "typingTimeout": typingTimeout,
  "uploadForm": uploadForm,
  "urlAbout": urlAbout,
  "urlAPI": urlAPI,
  "urlContent": urlContent,
  "urlEnclave": urlEnclave,
  "urlFullPathAIREP": urlFullPathAIREP,
  "urlFullPathMock": urlFullPathMock,
  "urlGatekeeper": urlGatekeeper,
  "urlLegal": urlLegal,
  "urlMail": urlMail,
  "urlPhotos": urlPhotos,
  "urlPlaylist": urlPlaylist,
  "urlSkills": urlSkills,
  "urlWriting": urlWriting,
  "vanityMorph": vanityMorph,
  "viewCollapse": viewCollapse,
  "viewExpanded": viewExpanded,
  "weightVectorProcessorHDR": weightVectorProcessorHDR,
  "weightVectorProcessorMinimal3": weightVectorProcessorMinimal3,
  "weightVectorProcessorMinimal4": weightVectorProcessorMinimal4,
  "weightVectorProcessorMinimal5": weightVectorProcessorMinimal5,
  "weightVectorProcessorMinimal6": weightVectorProcessorMinimal6,
  "weightVectorProcessorMinimal": weightVectorProcessorMinimal,
  "wheelScrollSpeedFactor": wheelScrollSpeedFactor,
  "windowX": windowX,
  "windowY": windowY,
  "windowZ": windowZ
};
const commandStackInternal = {
  "-------------------------------------": "",
  "-**": "command=> $: Z* stack: internal Z* commands (any)",
  "-------------------------------------": "",
  "mapTemplate=> ": `${mapTemplate}`,
  "mapTemplate=> length: ": `${mapTemplate.length}`
};
const commandStackDebuggingSpecial = {
  "-------------------------------------": "",
  "-**": "command=> stack: debugging",
  "-------------------------------------": "",
  "DEBUGGING": DEBUGGING,
  " * SPECIAL ATTRIBUTES": "",
  " * * DEBUGGING_MEDIA": DEBUGGING_MEDIA,
  " * * skipVerboseEvents": skipVerboseEvents,
  " * * SIMULATION_FORCE_ALT_EVENTS": SIMULATION_FORCE_ALT_EVENTS
};
if (DEBUGGING === true || DEBUGGING_MEDIA === true) {
  debuggingMediaImageTypesAvailable();
}
debuggingConfigUnpack("DEBUGGINGfe", DEBUGGINGfe);
function benchmarkTerminateRuntime() {
  timeLoadedEnd = new Date().getTime();
  let timeMilliseconds = timeLoadedEnd - timeLoadedStart;
  debuggingPerformanceLoadTime(timeMilliseconds, "timeMilliseconds");
}
async function setupTabNavigationForLinks() {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      var linkElements = Array.from(document.querySelectorAll('a[href]'));
      var currentIndex = linkElements.indexOf(document.activeElement);
      var nextIndex = (currentIndex + 1) % linkElements.length;
      linkElements[nextIndex].focus();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement.tagName === 'A') {
      document.activeElement.click();
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const timeoutAIS = 2000;
  if (inTransitNewEntityHostedAsset) {
    inTransitNewEntityHostedAsset.style.cssText = "color:black;";
  }
  const accessibleImagesStack = document.querySelectorAll('img');
  const timeoutAISinTransit = setTimeout(() => {
    if (accessibleImagesStack.length > 0) {
      debuggingMediaNonEmptyArray();
      if (accessibleImagesStack) {
        debuggingMediaAccessibleImages(accessibleImagesStack.length);
        accessibleImagesStack.forEach(AIS => {
          if (AIS.alt === "") {
            debuggingMediaStateAIS("alt", "empty", "no property");
          } else {
            AIS.addEventListener('error', () => {
              debuggingMediaStateAIS("alt", AIS.alt, "curing now");
              AIS.style.visibility = "visible";
              AIS.style.color = "black";
            });
            AIS.addEventListener('load', () => {
              debuggingMediaStateAIS("alt", AIS.alt, "curing now");
              AIS.style.color = "black";
            });
          }
        });
      }
    }
  }, timeoutAIS);
  factoryUpdateTheme();
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', factoryUpdateTheme);
  function preloadAssetConditional(callback) {
    if (callback) {
      callback();
    }
  }
  preloadAssetConditional(function () {
    debuggingStatePreloaded("stylesheet");
    var spanElement = document.getElementById("handMorph");
    var divElement = document.querySelector(".magic-hand");
    if (spanElement !== null && divElement !== null) {
      toggleHandMenuAuto();
    } else {
      if (spanElement === null) {
        debuggingInterfaceFrameHandMorphStatus("Does not exist");
      }
    }
    var tableDynamic = document.getElementById("ToggleTable");
    if (tableDynamic && queryTableUrl.includes(window.location.pathname)) {
      checkLocationStatus("EXTERNAL");
      highlightCells("EXTERNAL");
    } else if (tableDynamic && internalTranslatorUrl.includes(window.location.pathname)) {
      highlightCells("INTERNAL");
    } else {}
    function armCounterMeasures() {
      var disableElements = document.querySelectorAll('input, .responsive-index, select, textarea');
      disableElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
          event.stopPropagation();
        });
        element.addEventListener('keydown', function (event) {
          event.stopPropagation();
        });
        element.addEventListener('keypress', function (event) {
          event.stopPropagation();
        });
        element.addEventListener('mouseover', function (event) {
          event.stopPropagation();
        });
      });
    }
    function preventDefaultsMail() {
      if (window.location.pathname.endsWith('/mail/')) {
        var keyPublicInput = document.querySelector('#formContactInstance #name');
        if (keyPublicInput) {
          keyPublicInput.focus();
        }
        var lastElement = document.querySelector('#formContactInstance #buttonContact');
        function isElementInForm(element) {
          return element.closest('#formContactInstance') !== null;
        }
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Tab') {
            if (!isElementInForm(document.activeElement) || document.activeElement === lastElement) {
              event.preventDefault();
              if (keyPublicInput) {
                keyPublicInput.focus();
              }
            }
          }
        });
        if (lastElement) {
          lastElement.addEventListener('keydown', function (event) {
            if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              if (keyPublicInput) {
                keyPublicInput.focus();
              }
            }
          });
        }
      }
    }
    function preventDefaultsGatekeeperEnter() {
      if (window.location.pathname.endsWith('/gatekeeper/enter')) {
        var keyPublicInput = document.querySelector('.form-VCNKEY #key_public');
        if (keyPublicInput) {
          keyPublicInput.focus();
        }
        var lastElement = document.querySelector('.form-VCNKEY .button-enter');
        function isElementInForm(element) {
          return element.closest('.form-VCNKEY') !== null;
        }
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Tab') {
            if (!isElementInForm(document.activeElement) || document.activeElement === lastElement) {
              event.preventDefault();
              if (keyPublicInput) {
                keyPublicInput.focus();
              }
            }
          }
        });
        if (lastElement) {
          lastElement.addEventListener('keydown', function (event) {
            if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              if (keyPublicInput) {
                keyPublicInput.focus();
              }
            }
          });
        }
      }
    }
    function provideEntityImageLoader() {
      var mainEntity = document.querySelector('.entityImage');
      let providedImg = null;
      try {
        providedImg = document.getElementById('mainImageBackground');
      } catch (error) {
        try {
          providedImg = document.getElementById('mainImageDefault');
        } catch (error) {}
      }
      function makeMagicMediaWindow() {
        var aspectOrganicRatio = providedImg.naturalWidth / providedImg.naturalHeight;
        var aspectProvidedRatio = providedImg.width / providedImg.height;
        if (aspectOrganicRatio !== aspectProvidedRatio) {
          var wizardHeight = providedImg.width / aspectOrganicRatio;
          debuggingMediaNaturalProperties(providedImg.naturalWidth, 'providedImg.naturalWidth', providedImg.width, 'providedImg.width');
          debuggingMediaNaturalProperties(providedImg.naturalHeight, 'providedImg.naturalHeight', wizardHeight, 'wizardHeight');
        } else {
          providedImg.style.height = cureMuted;
        }
      }
      function checkSegmentMedia() {
        var segmentMatched = segmentMedia.some(mediaQuery => mediaQuery.matches);
        if (segmentMatched) {
          makeMagicMediaWindow();
        } else {
          debuggingMediaUnmatchedSegmentOnDCL();
        }
      }
      if (providedImg !== null) {
        if (providedImg) {
          providedImg.onload = makeMagicMediaWindow.bind(providedImg);
          if (providedImg.complete) {
            makeMagicMediaWindow.call(providedImg);
          }
          var segmentMedia = [window.matchMedia('(max-width: 399px)'), window.matchMedia('(max-width: 499px)'), window.matchMedia('(max-width: 633px)'), window.matchMedia('(max-width: 986px)'), window.matchMedia('(max-width: 1199px)'), window.matchMedia('(max-width: 1613px)'), window.matchMedia('(max-width: 1999px)'), window.matchMedia('(max-width: 2299px)'), window.matchMedia('(max-width: 2583px)'), window.matchMedia('(max-width: 5000px)'), window.matchMedia('(max-width: 10000px)'), window.matchMedia('(max-width: 20000px)'), window.matchMedia('(max-width: 40000px)'), window.matchMedia('(max-width: 80000px)'), window.matchMedia('(max-width: 160000px)')];
          window.addEventListener('resize', checkSegmentMedia);
          checkSegmentMedia();
        } else {
          debuggingMediaMainImageDefaultNA();
        }
      } else {
        debuggingMediaNonInteractivePage();
      }
    }
    armCounterMeasures();
    preventDefaultsMail();
    preventDefaultsGatekeeperEnter();
    provideEntityImageLoader();
    if (document.addEventListener, legacy = ON) {
      document.addEventListener("mousemove", event => {
        xyEventIntersection(event);
        xyEventResponse();
        debuggingEventLegacyKeypress(event, legacy);
      });
      document.addEventListener("keydown", event => {
        exportedResponseNavigationEvent(event);
        debuggingEventLegacyKeypress(event, legacy);
      });
      document.addEventListener("keypress", event => {
        responseOperatorKey(event);
        debuggingEventLegacyKeypress(event, legacy);
      });
      try {
        optimizeAsset.addEventListener('click', function () {
          console.clear();
          debuggingOperationsInterfaceOptimization("You've optimized the image to the maximium allowed format for that screen size.");
          windowProperties();
        });
      } catch (error) {
        debuggingOperationsInterfaceOptimizationError("You're viewing a page without picture optimization available: " + error);
      }
      try {
        HQAsset.addEventListener('click', function () {
          console.clear();
          debuggingOperationsInterfaceOptimization("You've delivered a HQ Asset");
          windowProperties(defaultValue = "MAX");
        });
      } catch (error) {
        debuggingOperationsInterfaceOptimization("You're viewing a page without picture optimization available.");
      }
      debuggingOperationsInterfaceOptimization("Extend lookup routines: Chosen->Default (PlainText)");
      buildCodePre("python");
      runWindowRoutine(legacy);
    } else if (document.attachEvent, legacy = ON) {
      debuggingOperationsModernMode("Extend lookup routines: Legacy::: Chosen->Default (PlainText)");
      debuggingOperationsModernMode("XY Mode Supports Legacy?: " + legacy + " dated browser engine, slowing...!");
      document.attachEvent("DOMContentLoaded", buildCodePre('python'));
      debuggingOperationsModernMode("Legacy support enabled?: " + legacy + " ->Consider upgrading browsers for a higher definition display!");
      document.attachEvent("DOMContentLoaded", runWindowRoutine);
      document.attachEvent("keydown", exportedResponseNavigationEvent);
      document.attachEvent("keypress", exportedResponseOperatorKey);
      document.attachEvent("mousemove", xyEventResponse);
      HQAsset.attachEvent("click", windowProperties(defaultValue = "MAX"));
      optimizeAsset.addEventListener('click', windowProperties);
    } else {
      debuggingOperationsModernMode("XY");
    }
    function operationLocateSPACorrection() {
      debuggingOriginCorrection("SPA");
      const spaLoc = document.querySelector('.magic-hand');
      if (spaLoc !== null) {
        spaLoc.addEventListener('click', function (event) {
          if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            debuggingNetworkSPACorrectionHref(href);
            let reviveShadowDomCurrent = document.querySelector('#shadowDomCurrent');
            let revivedShadow = "";
            let curedShadow = "";
            if (reviveShadowDomCurrent !== null) {
              revivedShadow = reviveShadowDomCurrent.innerHTML;
            }
            debuggingSPAShadowInstanceStatus("revivedShadow (a)", revivedShadow);
            debuggingSPAShadowInstanceStatus("href (a)", href);
            curedShadow = href;
            if (revivedShadow.endsWith("/") && href.startsWith("/")) {
              debuggingSPAShadowInstanceStatus("curing revived shadow that ended with / and href collision on starting /", "-");
              curedShadow = href.slice(1);
              debuggingSPAShadowInstanceStatus("curedShadow", curedShadow);
            }
            if (NEWENTITY_NOW === HOST_NOW) {
              debuggingSPAShadowInstance("A");
              debuggingSPAShadowInstance("AA");
              debuggingNetworkShadowRevival(revivedShadow);
              navigateTo(curedShadow);
            } else {
              debuggingNetworkShadowRevival(revivedShadow);
              debuggingSPAShadowInstance("AB");
              if (href === SPA_ORIGIN_COMPILED + "/") {
                debuggingSPAShadowInstance("ABA");
                navigateTo(curedShadow);
              } else {
                debuggingSPAShadowInstance("ABB");
                navigateTo(curedShadow);
              }
            }
          } else {
            debuggingSPAShadowInstance("B");
            debuggingNetworkShadowRevival(revivedShadow);
            navigateTo(revivedShadow + curedShadow);
          }
        });
      }
    }
    if (NEWENTITY_NOW === HOST_NOW) {
      debuggingOriginLoadedSequence("AAOP");
      if (window.location.href === HOST_NOW_RESOLVED_SPA) {
        operationAJAXInjestEndpoint(HOST_OPERATIONS_PORT_LOCATION);
      } else {
        operationAJAXInjestEndpoint(SPA_ORIGIN);
      }
    } else {
      debuggingOriginLoadedSequence("AAOO");
      operationAJAXInjestEndpoint(NEWENTITY_NOW);
    }
    function operationsInjectFrame() {
      var skillsSection = document.querySelector('.skills-section');
      var entityInjectedFrame = document.querySelector('.entityInjectedFrame');
      if (skillsSection && entityInjectedFrame) {
        var triggerPointWindow = 500;
        function updateEntityInjectedFrameWidth() {
          var skillsSectionRect = skillsSection.getBoundingClientRect();
          entityInjectedFrame.style.width = skillsSection.offsetWidth + 'px';
          entityInjectedFrame.style.left = skillsSectionRect.left + window.scrollX + 14 + 'px';
        }
        function updateEntityInjectedFrameVisibility() {
          var scrollPosition = window.scrollY || document.documentElement.scrollTop;
          var skillsSectionTop = skillsSection.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= skillsSectionTop + triggerPointWindow) {
            entityInjectedFrame.style.display = 'flex';
          } else {
            entityInjectedFrame.style.display = 'none';
          }
        }
        if (window) {
          window.addEventListener('resize', updateEntityInjectedFrameWidth);
          window.addEventListener('scroll', updateEntityInjectedFrameVisibility);
        }
        updateEntityInjectedFrameWidth();
        updateEntityInjectedFrameVisibility();
      }
    }
    operationLocateSPACorrection();
    if (NEWENTITY_NOW === HOST_NOW) {
      if (window.location.href === HOST_NOW_RESOLVED_SPA) {
        operationAJAXInjestEndpoint(HOST_OPERATIONS_PORT_LOCATION);
      } else {
        operationAJAXInjestEndpoint(SPA_ORIGIN_COMPILED);
      }
    } else {
      operationAJAXInjestEndpoint(NEWENTITY_NOW);
    }
    operationsInjectFrame();
    makeNetworkCheck();
    octavianFacilitateTimedAction('m');
    addConditionalListener();
    xyEventIntercept();
    buildFEextraDataInstanceListeners();
    buildFsInterfaceListeners();
    setupTabNavigationForLinks();
    frameMacroWindowWidth();
    providesInquisitorFunctionality();
    treeInit();
    toggleAdminMenu(1);
    toggleVanityMenu(1);
    toggleViewExpandAuto("pass");
    filterDecide();
  });
});
window.addEventListener('load', () => {
  if (MAINTENANCE !== false) {
    function runtimeGeneral() {
      function getKeysSettings() {
        Object.keys(commandStackSettings).forEach(key => {
          debuggingConfigStandard(key, commandStackSettings[key]);
        });
      }
      function getKeysExternal() {
        Object.keys(commandStackExternal).forEach(key => {
          debuggingConfigStandard(key, commandStackExternal[key]);
        });
      }
      function getKeysInternal() {
        Object.keys(commandStackInternal).forEach(key => {
          debuggingConfigStandard(key, commandStackInternal[key]);
        });
      }
      function getKeysDebuggingSpecial() {
        Object.keys(commandStackDebuggingSpecial).forEach(key => {
          debuggingConfigStandard(key, commandStackDebuggingSpecial[key]);
        });
      }
      getKeysSettings();
      getKeysExternal();
      getKeysInternal();
      getKeysDebuggingSpecial();
    }
    runtimeGeneral();
  }
  exportedResponseNavigationEvent = function responseNavigationEvent(event) {
    var getEventInformation = event.key;
    debuggingPerformanceInputKey('event', getEventInformation);
    if (getEventInformation === "ArrowRight") {
      try {
        debuggingPerformanceInputKey('ArrayRight', "navigation modifier");
        navigation_modifier = document.getElementsByClassName("next")[0].getAttribute("href");
        window.location = navigation_modifier;
      } catch (err) {
        debuggingPerformanceInputKey('ArrayRight', "navigation modifier: Nowhere to go with this modifier on this page");
      }
    } else if (getEventInformation === "=") {
      debuggingPerformanceInputKey('=', "open fullscreen mode");
      openFullscreen();
    } else if (getEventInformation === "-") {
      debuggingPerformanceInputKey('-', "destroy fullscreen mode");
      destroyFullscreen();
    } else if (getEventInformation === "1") {
      debuggingPerformanceInputKey('1', "get a low-res version of an image");
      windowProperties();
    } else if (getEventInformation === "0") {
      debuggingPerformanceInputKey('0', "get a high-res version of an image");
      windowProperties(defaultValue = "MAX");
    } else {
      debuggingPerformanceInputKey('z', getEventInformation);
    }
  };
  exportedResponseNavigationKey = function responseOperatorKey(event) {
    protectedPage = originPoint + "/protected";
    let killRing = "";
    if (document.URL === protectedPage) {
      killRing = 1;
      debuggingSecurityKillRingStatus(1);
    } else {
      killRing = 0;
      debuggingSecurityKillRingStatus(0);
    }
    if (killRing === 0) {
      var getEventInformation = event.key;
      if (hasProtectedRegionalState === 0) {
        if (getEventInformation === "i") {
          debuggingPerformanceInputKey('Operator Key Activated, get information', getEventInformation);
          factoryGetInformationAsset();
        } else if (getEventInformation === "r") {
          debuggingPerformanceInputKey('Operator Key Activated, reload page', getEventInformation);
          location.reload();
        } else {}
      } else if (hasProtectedRegionalState === 1) {
        debuggingSecurityKillRingStatusProtected();
      } else {
        debuggingSecurityKillRingStatusNoStateDetermination();
      }
    } else {
      debuggingSecurityKillRingStatusNotClear();
    }
  };
  debuggingNetworkIPCStatus(STATUS_IPC);
  function placeholderRuntime() {}
  function constantRuntime() {
    if (adminMorph) {
      adminMorph.addEventListener('click', toggleAdminMenu);
    }
    if (assetInformation) {
      assetInformation.addEventListener('click', factoryGetInformationAsset);
    }
    if (buttonHQAsset) {
      buttonHQAsset.addEventListener('click', placeholderRuntime);
    }
    if (buttonOptimizeAsset) {
      buttonOptimizeAsset.addEventListener('click', placeholderRuntime);
    }
    if (buttonOptimizeImage) {
      buttonOptimizeImage.addEventListener('click', windowProperties);
    }
    if (fullscreenEnter) {
      fullscreenEnter.addEventListener('click', destroyFullscreen);
    }
    if (fullscreenExit) {
      fullscreenExit.addEventListener('click', destroyFullscreen);
    }
    if (handMorph) {
      handMorph.addEventListener('click', toggleHandMenu);
    }
    if (inTransitNewEntityHostedAsset) {
      inTransitNewEntityHostedAsset.addEventListener('click', debuggingMediaChangeImage("default image"));
    }
    if (mainImageHQ) {
      mainImageHQ.addEventListener('click', openFullscreen);
      mainImageHQ.addEventListener('load', reduceAnimationDots);
      mainImageHQ.addEventListener('error', () => imageError(this));
      mainImageHQ.style.display = 'block';
    }
    if (optimizeImage) {
      debuggingOperationsInterfaceOptimization("Optimize Image");
      optimizeImage.addEventListener('click', windowProperties);
    }
    if (refreshButton) {
      refreshButton.addEventListener('click', startAnimation);
    }
    if (smoke) {
      smoke.addEventListener('mouseenter', moveSmoke);
      smoke.addEventListener('click', handleClick);
    }
    if (vanityMorph) {
      vanityMorph.addEventListener('click', toggleVanityMenu);
    }
  }
  constantRuntime();
  benchmarkTerminateRuntime();
});
