var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var previewPlayerTempData="";function newAnimation(){window.location="/studio"}function savePreviewData(A){previewPlayerTempData=A}function retrievePreviewPlayerData(){var A=previewPlayerTempData;previewPlayerTempData="";return A}var sceneNum;function getSceneNum(A){sceneNum=A}function scenePreview(){$("Player").onExternalPreviewScenePreview(sceneNum)}function callSceneNum(){$("Player").onExternalPreviewCallSceneNum(sceneNum)}var STUDIO_MIN_WIDTH=960;var STUDIO_MIN_HEIGHT=640;var resize_studio=true;var show_cc_ad=false;function ajust_studio(){if(!resize_studio){return }var B=(show_cc_ad?135:0);var C=Math.max(jQuery(window).width(),STUDIO_MIN_WIDTH+B);jQuery("#studio_container").width(C);jQuery("#studio_holder").width(C-B);var A=jQuery(window).height()-(jQuery("div.header").length>0?80:0);A=Math.max(A,STUDIO_MIN_HEIGHT);jQuery("#studio_container").height(A);jQuery(window).trigger("studio_resized")}function previewSceen(){if(!resize_studio){return false}resize_studio=false;jQuery("#studio_container").width(1).height(1);jQuery("body").removeClass("full_screen_studio").addClass("preview_player")}function showCCBrowser(){previewSceen();jQuery("body").addClass("ccbrowser");jQuery("#ccbrowserdiv").css("visibility","visible");if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ccbrowser/open")}Gallery.fetchModel("*");return false}function hideCCBrowser(){jQuery("body").removeClass("ccbrowser");jQuery("#ccbrowserdiv").css("visibility","hidden");if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ccbrowser/close")}restoreStudio();return false}function restoreStudio(){resize_studio=true;jQuery("body").removeClass("preview_player").addClass("full_screen_studio");ajust_studio()};

}
/*
     FILE ARCHIVED ON 20:42:30 Aug 08, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:08:21 Feb 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 248.241
  exclusion.robots: 119.805
  exclusion.robots.policy: 119.791
  xauthn.identify: 76.408
  xauthn.chkprivs: 42.936
  RedisCDXSource: 5.641
  esindex: 0.012
  LoadShardBlock: 97.269 (3)
  PetaboxLoader3.datanode: 356.673 (4)
  CDXLines.iter: 22.916 (3)
  load_resource: 345.913
  PetaboxLoader3.resolve: 30.999
*/
