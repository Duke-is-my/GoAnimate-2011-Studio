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


(function(){var f=null;function k(a){this.t={};this.tick=function(a,c,e){e=e?e:(new Date).getTime();this.t[a]=[e,c]};this.tick("start",f,a)}var l=new k;window.GA_jstiming={Timer:k,load:l};if(window.GA_jstiming){window.GA_jstiming.d={};window.GA_jstiming.i=1;var m=function(a,b,c){var e=a.t[b],d=a.t.start;if(e&&(d||c))return e=a.t[b][0],d=c!=void 0?c:d[0],e-d};window.GA_jstiming.report=function(a,b,c){var e="";a.h&&(e+="&"+a.h);var d=a.t,h=d.start,q=[],o=[],g;for(g in d)if(g!="start"&&g.indexOf("_")!=0){var i=d[g][1];i?d[i]&&o.push(g+"."+m(a,g,d[i][0])):h&&q.push(g+"."+m(a,g))}delete d.start;if(b)for(var j in b)e+="&"+j+"="+b[j];var a=[c?c:"https://web.archive.org/web/20110810115321/http://csi.gstatic.com/csi","?v=3","&s="+(window.GA_jstiming.sn||
"gam")+"&action=",a.name,o.length?"&it="+o.join(","):"","",e,"&rt=",q.join(",")].join(""),b=new Image,r=window.GA_jstiming.i++;window.GA_jstiming.d[r]=b;b.onload=b.onerror=function(){delete window.GA_jstiming.d[r]};b.src=a;b=f;return a}};var n=this,p=function(a,b){var c,e=b,d=a.split(".");c=c||n;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var h;d.length&&(h=d.shift());)!d.length&&e!==void 0?c[h]=e:c=c[h]?c[h]:c[h]={}},t=function(a){var b=s;function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c};var u=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,v=function(a,b){if(!a)return b;var c=a.match(u);return c?c[0]:b};var w,x="false",y=!1,z=w=x=="true"?!0:x=="false"?!1:y;var A=function(){return v("","pubads.g.doubleclick.net")};var D=function(a){for(var b=B,c=0,b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,a.length),d=0;c==0&&d<e;d++){var h=b[d]||"",q=a[d]||"",o=RegExp("(\\d*)(\\D*)","g"),g=RegExp("(\\d*)(\\D*)","g");do{var i=o.exec(h)||["","",""],j=g.exec(q)||["","",""];if(i[0].length==0&&j[0].length==0)break;var c=i[1].length==0?0:parseInt(i[1],10),r=j[1].length==0?0:parseInt(j[1],10),c=C(c,r)||C(i[2].length==0,j[2].length==0)||
C(i[2],j[2])}while(c==0)}return c},C=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var E,F,G,H,I=function(){return n.navigator?n.navigator.userAgent:f};H=G=F=E=!1;var J;if(J=I()){var aa=n.navigator;E=J.indexOf("Opera")==0;F=!E&&J.indexOf("MSIE")!=-1;G=!E&&J.indexOf("WebKit")!=-1;H=!E&&!G&&aa.product=="Gecko"}var ba=E,K=F,L=H,ca=G,M;
a:{var N="",O;if(ba&&n.opera)var P=n.opera.version,N=typeof P=="function"?P():P;else if(L?O=/rv\:([^\);]+)(\)|;)/:K?O=/MSIE\s+([^\);]+)(\)|;)/:ca&&(O=/WebKit\/(\S+)/),O)var Q=O.exec(I()),N=Q?Q[1]:"";if(K){var R,S=n.document;R=S?S.documentMode:void 0;if(R>parseFloat(N)){M=String(R);break a}}M=N}var B=M,T={},U={},V=function(){var a=9;return U[a]||(U[a]=K&&document.documentMode&&document.documentMode>=a)};!K||V();if(L||K)if((!K||!V())&&L){var W="1.9.1";T[W]||(T[W]=D(W)>=0)}K&&(T["9"]||(T["9"]=D("9")>=0));v("","pagead2.googlesyndication.com");var da=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(f,a[c],c,a)};var X=function(a){this.c=[];this.b={};for(var b=0,c=arguments.length;b<c;++b)this.b[arguments[b]]=""};X.prototype.j=function(a){return this.b.hasOwnProperty(a)?this.b[a]:""};X.prototype.geil=X.prototype.j;var ea=function(a){var b=[],c=function(a){a!=""&&b.push(a)};da(a.b,c);return a.c.length>0&&b.length>0?a.c.join(",")+","+b.join(","):a.c.join(",")+b.join(",")};function fa(a){var b="adsense";if(a&&typeof a=="string"&&a.length>0)if(b==f)a=f;else{var c=window.GS_googleServiceIds_[b];c==f&&(c=b=="adsense"?new Y:new Z,window.GS_googleServiceIds_[b]=c);b:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break b;c.a[c.a.length]=a}a=c}else a=f;return a}p("GS_googleAddAdSenseService",fa);function ga(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];typeof b!="function"&&b.enable()}}p("GS_googleEnableAllServices",ga);
function ha(){window.GS_googleServiceIds_={}}p("GS_googleResetAllServices",ha);function ia(){var a="adsense",a=a==f?f:window.GS_googleServiceIds_[a];return a=a==f?"":a.a.join()}p("GS_googleGetIdsForAdSenseService",ia);function ja(a){return $(a)}p("GS_googleFindService",ja);function ka(){var a=$("adsense");return a?ea(a.g):""}p("GS_googleGetExpIdsForAdSense",ka);function s(a){this.f=a;this.a=[];this.g=new X}
s.prototype.toString=function(){for(var a="["+this.f+" ids: ",b=0;b<this.a.length;b++)b>0&&(a+=","),a+=this.a[b];a+="]";return a};var $=function(a){return a=a==f?f:window.GS_googleServiceIds_[a]};function Z(){s.call(this,"unknown")}t(Z);Z.prototype.enable=function(){};function Y(){s.call(this,"adsense");this.e=!1}t(Y);
Y.prototype.enable=function(){if(!this.e){var a;a=(a=document.URL)&&(a.indexOf("?google_debug")>0||a.indexOf("&google_debug")>0)?"google_ads_dbg.js":"google_ads.js";var b="http://"+v("","partner.googleadservices.com");z&&(b="https://"+v("","securepubads.g.doubleclick.net"));var c="",e;e=A();(e=e=="pubads.g.doubleclick.net")||(c="?prodhost="+A());a=b+"/gampad/"+a+c;b="script";document.write("<"+b+' src="'+a+'"><\/script>');this.e=!0;if(window.GA_jstiming&&
window.GA_jstiming.Timer)window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start")}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()


}
/*
     FILE ARCHIVED ON 11:53:21 Aug 10, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:10:16 Feb 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  xauthn.identify: 246.257
  exclusion.robots.policy: 691.004
  CDXLines.iter: 154.316 (3)
  load_resource: 1106.693
  xauthn.chkprivs: 444.4
  exclusion.robots: 691.022
  LoadShardBlock: 5259.016 (6)
  PetaboxLoader3.resolve: 939.178
  PetaboxLoader3.datanode: 3912.67 (7)
  esindex: 0.019
  RedisCDXSource: 92.165
*/