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

if(!Array.prototype.some){Array.prototype.some=function(B){var A=this.length;if(typeof B!="function"){throw new TypeError()}var D=arguments[1];for(var C=0;C<A;C++){if(C in this&&B.call(D,this[C],C,this)){return true}}return false}}var Picker={AUTH_SCOPE:"https://web.archive.org/web/20110808204233/http://www.google.com/m8/feeds/",CONTACTS_URL:"https://web.archive.org/web/20110808204233/http://www.google.com/m8/feeds/contacts/default/full",GROUPS_URL:"https://web.archive.org/web/20110808204233/http://www.google.com/m8/feeds/groups/default/full",GROUPS_PANE_ID:"picker_groups_pane",CONTACTS_PANE_ID:"picker_contacts_pane",INFO_PANEL_ID:"picker_info_pane",INFO_CONTAINER_ID:"picker_info_container",GROUPS_LIST_ID:"picker_groups",CONTACT_LIST_ID:"picker_contacts",GROUP_SELECTED_CLASS:"picker_selected",GROUP_END_SPECIAL_CLASS:"picker_endspecial",CONTACT_SELECTED_CLASS:"picker_selected",CONTACT_INFO_BLOCK_CLASS:"picker_info_block",CONTACT_INFO_TITLE_CLASS:"picker_info_title",CONTACT_INFO_META_CLASS:"picker_info_meta",GOOGLE_MAPS_QUERY_URL:"https://web.archive.org/web/20110808204233/http://maps.google.com/?q=",serviceName:0,contactsService:0,container:0,groupSelector:0,userAddCallback:0,userRemoveCallback:0,errorCallback:0,selectedGroup:0,selectedUser:0,selectedUsers:[],processGroupFeed:function(I){var H=I.feed.entry;var F=document.createElement("ul");F.id=Picker.GROUPS_LIST_ID;var K=document.createElement("li");K.id="picker-group-all";K.className=Picker.GROUP_END_SPECIAL_CLASS;var C=document.createElement("a");C.setAttribute("href","javascript:Picker.displayContactGroup('"+Picker.CONTACTS_URL+"', '"+K.id+"')");C.appendChild(document.createTextNode("All Contacts"));K.appendChild(C);F.appendChild(K);for(var G=0;G<H.length;G++){var J=H[G];var D=document.createElement("li");D.id="picker-group-"+G;var E=document.createElement("a");E.setAttribute("href","javascript:Picker.displayContactGroup('"+J.getId().getValue()+"', '"+D.id+"')");var B=J.getTitle().getText();E.appendChild(document.createTextNode(B));D.appendChild(E);F.appendChild(D)}var A=document.getElementById(Picker.GROUPS_PANE_ID);var L=document.getElementById(Picker.GROUPS_LIST_ID);A.replaceChild(F,L);Picker.displayContactGroup(Picker.CONTACTS_URL,K.id)},processContactFeed:function(J){var G=J.feed.entry;var C=document.createElement("ul");C.id=Picker.CONTACT_LIST_ID;for(var E=0;E<G.length;E++){var L=G[E];var B=L.getId().getValue();var H=document.createElement("li");H.id="picker_contact_"+E;var M=document.createElement("a");M.setAttribute("href","javascript:Picker.showContactDetails('"+B+"', '"+H.id+"')");var F=document.createElement("input");F.type="checkbox";F.name="contact_emails[]";F.id="contact_selector_"+E;var I=Picker.selectedUsers.some(function(O){return(O==F.value)});if(I){F.checked=true}F.onclick=function(){Picker.updateStatus(this.id)};var A=0;if(L.getTitle()&&L.getTitle().getText()){A=L.getTitle().getText()}else{if(L.getEmailAddresses()){A=L.getEmailAddresses()[0].getAddress()}else{A="Untitled Contact"}}F.value=A+";"+L.getEmailAddresses()[0].getAddress();var K=document.createTextNode(A);M.appendChild(K);H.appendChild(F);H.appendChild(M);C.appendChild(H)}var D=document.getElementById(Picker.CONTACTS_PANE_ID);var N=document.getElementById(Picker.CONTACT_LIST_ID);D.replaceChild(C,N)},processContactDetails:function(A){var f=A.entry;var U=document.createElement("div");U.id=Picker.INFO_PANEL_ID;var S=document.createElement("div");S.className=Picker.CONTACT_INFO_BLOCK_CLASS;var Q=f.getTitle();if(Q&&Q.getText()){var R=document.createElement("p");R.className=Picker.CONTACT_INFO_TITLE_CLASS;R.appendChild(document.createTextNode(Q.getText()));S.appendChild(R)}var a=f.getEmailAddresses();for(var r=0;r<a.length;r++){var Y=a[r];if(Y.getAddress()){var q=document.createElement("p");var B=document.createElement("a");var m=Y.getAddress();B.setAttribute("href","mailto:"+m);B.appendChild(document.createTextNode(m)),q.appendChild(B);S.appendChild(q)}}var N=f.getOrganizations();if(N[0]){var g=N[0].getOrgTitle();if(g&&g.getValue()){var X=document.createElement("p");X.appendChild(document.createTextNode(g.getValue()));S.appendChild(X)}var j=N[0].getOrgName();if(j&&j.getValue()){var e=document.createElement("p");e.appendChild(document.createTextNode(j.getValue()));S.appendChild(e)}}U.appendChild(S);var s=document.createElement("div");s.className=Picker.CONTACT_INFO_BLOCK_CLASS;var u=f.getPhoneNumbers();for(var r=0;r<u.length;r++){var O=u[r];if(O.getValue()){var T=document.createElement("p");var d=O.getValue();T.appendChild(document.createTextNode(d+" "));var c=document.createElement("span");c.className=Picker.CONTACT_INFO_META_CLASS;var G=0;if(O.getLabel()){G=O.getLabel()}else{if(O.getRel()){G=O.getRel();G=G.substring(33,G.length)}}if(G){c.appendChild(document.createTextNode(G));T.appendChild(c)}s.appendChild(T)}}U.appendChild(s);var H=document.createElement("div");H.className=Picker.CONTACT_INFO_BLOCK_CLASS;var L=f.getImAddresses();for(var r=0;r<L.length;r++){var C=L[r];if(C.getAddress()){var n=document.createElement("p");var I=C.getAddress();n.appendChild(document.createTextNode(I+" "));var W=document.createElement("span");W.className=Picker.CONTACT_INFO_META_CLASS;if(C.getProtocol()){var b=C.getProtocol();b=b.substring(33,b.length).toLowerCase();W.appendChild(document.createTextNode(b));n.appendChild(W);H.appendChild(n)}}}U.appendChild(H);var F=document.createElement("div");F.className=Picker.CONTACT_INFO_BLOCK_CLASS;var D=f.getPostalAddresses();for(var r=0;r<D.length;r++){var J=D[r];if(J.getValue()){var o=document.createElement("p");var E=J.getValue();var k=Picker.GOOGLE_MAPS_QUERY_URL+E;while(k.match("\n")){k=k.replace("\n",", ")}var V=document.createElement("a");V.setAttribute("href",k);V.appendChild(document.createTextNode("map"));while(E.match("\n")){E=E.replace("\n","<br />")}o.innerHTML=E+"<br />";var K=document.createElement("span");K.className=Picker.CONTACT_INFO_META_CLASS;var l=J.getRel();l=l.substring(33,l.length).toLowerCase();K.appendChild(document.createTextNode(l));o.appendChild(K);o.appendChild(document.createTextNode(" - "));o.appendChild(V);F.appendChild(o)}}U.appendChild(F);var P=document.createElement("div");P.className=Picker.CONTACT_INFO_BLOCK_CLASS;var p=f.getContent();if(p&&p.getText()){var t=document.createElement("p");var M=p.getText();t.appendChild(document.createTextNode(M));P.appendChild(t)}U.appendChild(P);var Z=document.getElementById(Picker.INFO_CONTAINER_ID);var h=document.getElementById(Picker.INFO_PANEL_ID);Z.replaceChild(U,h)},callUserAddCallback:function(B){var C=B.entry;var D=C.getId().getValue();var A=Picker.selectedUsers.some(function(E){return(E==D)});if(!A){Picker.selectedUsers.push(D)}else{Picker.error("Attempt to add a contact which has already been added.")}if(Picker.userAddCallback!=0&&typeof (Picker.userAddCallback)!="undefined"){Picker.userAddCallback(C)}else{Picker.error("User callback function undefined: userAddCallback")}},callUserRemoveCallback:function(C){var D=C.entry;var E=D.getId().getValue();var A=false;for(var B=0;B<Picker.selectedUsers.length;B++){if(Picker.selectedUsers[B]==E){A=true;break}}if(A){Picker.selectedUsers.splice(B,1)}else{Picker.error("Attempt to remove a contact which has not been added.")}if(Picker.userRemoveCallback!=0&&typeof (Picker.userRemoveCallback)!="undefined"){Picker.userRemoveCallback(D)}else{Picker.error("User callback function undefined: userRemoveCallback")}},login:function(A){if(this.serviceName!=0&&typeof (this.serviceName)!="undefined"){if(A==null||A==undefined){set_cookie("gmaillogin","1")}google.accounts.user.login(this.AUTH_SCOPE);this.contactsService=new google.gdata.contacts.ContactsService(this.serviceName)}else{this.error("Service name undefined, call setServiceName()")}},logout:function(){google.accounts.user.logout();this.container.innerHTML='<br/><br/><br/><br/><br/><br/><h3 align=\'center\'>Please sign in to Google to use this feature.<br/>You will be redirected to Google to sign in.</h3><br/><p align=\'center\'><input style="margin-right:20px;" class="btn_sty" type=\'button\' value=\'Sign In\' onclick=\'Picker.login()\' /><input class="btn_sty" type="button" value="Cancel" onclick="showContact()" /></p>'},error:function(A){if(this.errorCallback!=0&&typeof (this.errorCallback)!="undefined"){this.errorCallback(A)}else{alert(A)}},setServiceName:function(A){this.serviceName=A},setErrorCallback:function(A){this.errorCallback=A},setUserAddCallback:function(A){this.userAddCallback=A},setUserRemoveCallback:function(A){this.userRemoveCallback=A},showContactDetails:function(C,A){this.contactsService.getContactEntry(C,this.processContactDetails,this.error);if(this.selectedContact!=0&&typeof (this.selectedContact)!="undefined"){this.selectedContact.className=""}var B=document.getElementById(A);B.className=this.CONTACT_SELECTED_CLASS;this.selectedContact=B},updateStatus:function(B){var A=document.getElementById(B);var D=A.value;var C=A.checked;if(C==true){this.contactsService.getContactEntry(D,this.callUserAddCallback,this.error)}else{this.contactsService.getContactEntry(D,this.callUserRemoveCallback,this.error)}},populateGroups:function(){var A=new google.gdata.contacts.ContactQuery(this.GROUPS_URL);A.setParam("max-results",1000);this.contactsService.getContactGroupFeed(A,this.processGroupFeed,this.error)},displayContactGroup:function(C,B){var A=document.getElementById(B);if(this.selectedGroup!=0&&typeof (this.selectedGroup)!="undefined"){if(this.selectedGroup.className==this.GROUP_SELECTED_CLASS+" "+this.GROUP_END_SPECIAL_CLASS){this.selectedGroup.className=this.GROUP_END_SPECIAL_CLASS}else{this.selectedGroup.className=""}}if(A.className==this.GROUP_END_SPECIAL_CLASS||A.className==this.GROUP_SELECTED_CLASS+" "+this.GROUP_END_SPECIAL_CLASS){A.className=this.GROUP_SELECTED_CLASS+" "+this.GROUP_END_SPECIAL_CLASS}else{A.className=this.GROUP_SELECTED_CLASS}this.selectedGroup=A;var D=new google.gdata.contacts.ContactQuery(this.CONTACTS_URL);D.setParam("max-results",1000);if(C!=Picker.CONTACTS_URL){D.setParam("group",C)}this.contactsService.getContactFeed(D,this.processContactFeed,this.error)},render:function(B){var C=document.createElement("style");C.setAttribute("type","text/css");var E="      #"+B+" {        font: 100% Arial, sans-serif;        -moz-border-radius: 3px;        -webkit-border-radius: 3px;        position: relative;        top: 0.5em;      }            #"+B+" div {        height: 100%;        float: left;        margin: 0;        padding: 0;      }            #"+B+" div#picker_header_pane {        height: 32px;        background: transparent url(/static/go/img/v2/nav_bg.gif) repeat-x scroll 0 0;        vertical-align: middle;        width: 100%;      }            #"+B+" div#picker_groups_container {        width: 25%;        height: 200px;        position: relative;        border-right: 2px solid #c3d9ff;      }            #"+B+" div#picker_contacts_container {        width: 40%;        height: 200px;        position: relative;        border-right: 2px solid #c3d9ff;      }            #"+B+" div#picker_info_container {        width: 33%;        height: 200px;        position: relative;      }            #"+B+" div.picker_column {        width: 100%;      }            #"+B+" div#picker_groups_pane {        position: static;        overflow: auto;      }            #"+B+" div#picker_groups_pane li {        overflow: hidden;      }            #"+B+" div#picker_groups_pane li a {        width: 9999%;      }            #"+B+" div#picker_contacts_pane {        position: static;        overflow: auto;      }            #"+B+" div#picker_contacts_pane li {        overflow: hidden;      }            #"+B+" div#picker_contacts_pane li a {        width: 9999%;      }            #"+B+" div#picker_info_pane {        width: 100%;        position: relative;        overflow: auto;      }            #"+B+" div#picker_footer_pane {        height: 32px;        background-color: #ACCBE0;        vertical-align: middle;        width: 100%;        clear: both;        /*float: none;*/      }            #"+B+" #picker_title {        font-weight: bold;        margin: 0;        padding: 0.4em;        height: 100%;        vertical-align: middle;        font-size: 125%;      }            #"+B+" ul {        list-style-type: none;        padding: 0;        margin: 0;      }            #"+B+" li {        margin: 0;        padding: 2px 5px;        height: 1.3em;        line-height: 1.3em;      }            #"+B+" li input {        margin: 0 3px;      }            #"+B+" li.picker_endspecial {        border-bottom: 1px solid #c3d9ff;      }            #"+B+" li a {        color: #000;        text-decoration: none;      }            #"+B+" li.picker_selected, #"+B+" li.picker_selected:hover {        background-color: #c3d9ff;        color: #0000cc;        font-weight: bold;      }            #"+B+" li.picker_selected a, #"+B+" li.picker_selected:hover a {        color: #0000cc;      }            #"+B+" li:hover {        background-color:  #ffffcc;      }            #"+B+" ."+Picker.CONTACT_INFO_BLOCK_CLASS+" {        float: none;        width: 95%;        position: static;        padding: 0.5em;        height: auto;      }            #"+B+" #picker_info_pane p {        margin: 0;        padding: 0;      }            #"+B+" ."+Picker.CONTACT_INFO_TITLE_CLASS+" {        font-weight: bold;        font-size: 1.1em;      }            #"+B+" ."+Picker.CONTACT_INFO_META_CLASS+" {        color: #777;      }            #"+B+" #picker_logout {        margin: 0 1em;        line-height: 32px;      }            #"+B+" #picker_logout a {        text-decoration: none;      }";if(C.styleSheet){C.styleSheet.cssText=E}else{var F=document.createTextNode(E);C.appendChild(F)}document.getElementsByTagName("head")[0].appendChild(C);this.container=document.getElementById(B);google.gdata.client.init(this.error);if(google.accounts.user.checkLogin(this.AUTH_SCOPE)){delete_cookie("gmaillogin");this.login(false);var D='<div id="picker_header_pane"><p id="picker_title">Import GMAIL Contacts</p></div>';D+='<div id="picker_groups_container"><div id="picker_groups_pane" class="picker_column"><ul id="picker_groups"></ul></div></div>';D+='<div id="picker_contacts_container"><div id="picker_contacts_pane" class="picker_column"><ul id="picker_contacts"></ul></div></div>';D+='<div id="picker_info_container"><div id="picker_info_pane" class="picker_column"></div></div>';D+='<div id="picker_footer_pane"><div style="width:100px;display:inline;"><input class="btn_sty" style="float:right;margin-top:5px;" type="button" name="import" value="Import" onclick="importEmailContacts(\'addgmail\', \'Gmail\')"/></div><div style="width:100px;display:inline;"><input class="btn_sty" style="float:right;margin-top:5px;" type="button" value="Cancel" onclick="showContact()" /></div><p align="right" id="picker_logout"><a href="javascript:Picker.logout()">&raquo; Logout</a></p></div>';this.container.innerHTML=D;var A=this.populateGroups()}else{this.container.innerHTML='<br/><br/><br/><br/><br/><br/><h3 align=\'center\'>Please sign in to Google to use this feature.<br/>You will be redirected to Google to sign in.</h3><br/>          <p align=\'center\'><input style="margin-right:20px;" class="btn_sty" type=\'button\' value=\'Sign In\'          onclick=\'Picker.login()\' /><input class="btn_sty" type="button" value="Cancel" onclick="showContact()" /></p>'}}};

}
/*
     FILE ARCHIVED ON 20:42:33 Aug 08, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:57:58 Feb 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 313.042
  exclusion.robots: 148.287
  exclusion.robots.policy: 148.278
  xauthn.identify: 82.561
  xauthn.chkprivs: 65.448
  RedisCDXSource: 5.792
  esindex: 0.008
  LoadShardBlock: 132.21 (3)
  PetaboxLoader3.datanode: 84.029 (4)
  CDXLines.iter: 23.971 (3)
  PetaboxLoader3.resolve: 125.88 (2)
  load_resource: 168.615
*/