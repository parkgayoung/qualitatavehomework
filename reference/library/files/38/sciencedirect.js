var s_tc_sciencedirect=new TagContainer('sciencedirect');

function TagContainer(n){var t=this,w=t.w=window;t.d=w.document;t._c='s_t';if(!w.s_c_il){w.s_c_il=[];w.s_c_in=0}t._il=w.s_c_il;t._in=w.s_c_in;t._il[t._in]=t;w.s_c_in++;t.tcn=t.l=0;t.stc=function(n){
var t=this,l=t.w.s_c_il,i,x;t.tcn=n;if(l)for(i=0;i<l.length;i++){x=l[i];if(x&&x._c=='s_l'&&x.tagContainerName==n)t.l=x}};t.stc(n);t.xd=function(s){var t=this,x=0;if(
t.d.implementation&&t.d.implementation.createDocument)x=(new DOMParser).parseFromString(s,'text/xml');else if(t.w.ActiveXObject){x=new ActiveXObject('Microsoft.XMLDOM');x.async='false';x.loadXML(s)}
return x};t.xe=function(x,t){var a,b=[],i,j;for(i=0;i<2;i++){if(i>0)t=t.toLowerCase();a=x.getElementsByTagName(t);if(a)for(j=0;j<a.length;j++)b[b.length]=a[j]}return b};t.xt=function(x){var t=this,b=
"",l,i;l=x.childNodes;if(l)for(i=0;i<l.length;i++)b+=t.xt(l[i]);if(x.data)b+=x.data;return b};t.cp=function(x){var t=this,tn=Math.floor((new Date).getTime()/1000),ts=x.s,te=x.e,tp=1,l=t.d.location,h=
l.hostname,hm=x.h,hp=1,p=l.pathname,pm=x.p,pp=1,q=l.search,qm=x.q,qp=1,qi,qv,c=t.d.cookie,cm=x.c,cp=1,ci,cv,i;if(ts)tp=(tn>=ts&&(!te||tn<=te));if(hm){hp=0;if(h){i=0;while(!hp&&i<hm.length){if(
h.indexOf(hm[i])>=0)hp=1;i++}}}if(pm){pp=0;if(p){i=0;while(!pp&&i<pm.length){if(p.indexOf(pm[i])>=0)pp=1;i++}}}if(qm){qp=0;if(q){if(q.substring(0,1)=='?')q=q.substring(1);q='&'+q+'&';i=0;while(
!qp&&i<qm.length){qi=q.indexOf('&'+qm[i].k+'=');if(!qm[i].v&&qi<0)qi=q.indexOf('&'+qm[i].k+'&');if(qi>=0)if(qm[i].v){qv=q.substring(qi+qm[i].k.length+2);qi=qv.indexOf('&');if(qi>=0){qv=unescape(
qv.substring(0,qi));if(qv==qm[i].v)qp=1}}else qp=1;i++}}}if(cm){cp=0;if(c){c=';'+c+';';c=c.split('; ').join(';');i=0;while(!cp&&i<cm.length){ci=c.indexOf(';'+cm[i].k+'=');if(!cm[i].v&&ci<0)ci=
c.indexOf(';'+cm[i].k+';');if(ci>=0)if(cm[i].v){cv=c.substring(ci+cm[i].k.length+2);ci=cv.indexOf(';');if(ci>=0){cv=unescape(cv.substring(0,ci));if(cv==cm[i].v)cp=1}}else cp=1;i++}}}return(
tp&&hp&&pp&&qp&&cp)};t.cl=[];t.cn=t.cpn=0;t.crt=0;t.bl=[];t.crl=function(cn,cpn){var t=this;if(cn==t.cn&&cpn==t.cpn)t.cr()};t.cr=function(){var t=this,d=t.d,b,c,p,n=1,o,u,x,y,l,i;if(t.cl.length>0){if(
!d.body){if(!t.crt)t.crt=setTimeout(function(){t.crt=0;t.cr()},13)}else{b=d.body;while(n&&t.cn<t.cl.length){c=t.cl[t.cn];if(t.cdwb){u=t.cdwb;t.cdwb=0;u='<div>'+u.replace(/&/g,'&amp;').replace(
/<img /gi,'<IMG ').replace(/<\/img>/gi,'</IMG>').replace(/<script /gi,'<SCRIPT ').replace(/<script>/gi,'<SCRIPT>').replace(/<\/script>/gi,'</SCRIPT>').replace(/<iframe /gi,'<IFRAME ').replace(
/<\/iframe>/gi,'</IFRAME>')+'</div>';x=t.xd(u);l=t.xe(x,'IMG');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'i',u:u})}l=t.xe(x,'SCRIPT');for(i=0;i<l.length;i++){u=l[i]
.getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'s',u:u});else{u=t.xt(l[i]);if(u)c.p.splice(t.cpn,0,{t:'c',c:u})}}l=t.xe(x,'IFRAME');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(
t.cpn,0,{t:'f',u:u})}}if((t.cpn>0||!c.x||t.cp(c.x))&&c.p&&t.cpn<c.p.length){p=c.p[t.cpn];if(p.t=='b'&&p.u){u=p.u;o=new Image;t.bl[t.bl.length]=o;o.onload=function(){var i;for(i=0;i<t.bl.length;i++)if(
t.bl[i]&&t.bl[i].src==u){t.bl.splice(i,1);return}};o.src=u}if((p.t=='s'&&p.u)||(p.t=='c'&&p.c)){n=0;t.cpn++;u=p.u;o=d.createElement('script');o.type='text/javascript';o.setAttribute('async','async')
x='s_c_il['+t._in+']';y=x+'.crl('+t.cn+','+t.cpn+')';if(p.t=='s'){o.n=new Function(y);o.t=0;o.i=setInterval(function(){if(o.readyState=='loaded')o.t++;if(o.readyState=='complete'||o.t>2){o.c();o.n()}}
,50);o.c=function(){if(o.i){clearInterval(o.i);o.i=0}};o.onreadystatechange=function(){if(o.readyState=='complete'){o.c();o.n()}};o.onload=function(){o.c();o.n()};o.src=u}else o.text=x+'.cdw='+x+
'.d.write;'+x+'.cdwb="";'+x+'.d.write=function(m){'+x+'.cdwb+=m};'+"\n"+p.c+"\n"+x+'.d.write='+x+'.cdw;'+y;x=b;l=d.getElementsByTagName('HEAD');if(l&&l[0])x=l[0];if(x.firstChild)x.insertBefore(o,
x.firstChild);else x.appendChild(o)}if(p.t=='f'&&p.u){u=p.u;o=d.createElement('IFRAME');o.setAttribute('style','display:none');o.setAttribute('width','0');o.setAttribute('height','0');o.setAttribute(
'src',u);b.appendChild(o)}if(n)t.cpn++}else{t.cn++;t.cpn=0}}if(n&&t.l){for(x in t.l.wl)if(!Object.prototype[x]){u=t.w[x];x=t.l.wl[x];if(u&&x)for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!=
'function'||(''+x[i]).indexOf('s_c_il')<0)u[i]=x[i]}}for(i=0;i<t.l.wq.length;i++){c=t.l.wq[i];u=c.f;if(u)if(c.o)x=t.w[c.o];else x=t.w;if(x[u]&&typeof(x[u])=='function'&&(''+x[u]).indexOf('s_c_il')<0){
if(c.a)x[u].apply(x,c.a);else x[u].apply(x)}}}}}};}

jQuery.fn.on2=function(eventType,filter,data,handler) {
	var elements=$(this);
	if(filter) elements=elements.find(filter);
	elements.on(eventType,null,data,handler);

	if(filter) {
		$(this).on(eventType,filter,data,function(e) {
			if(!$(e.currentTarget).is(elements)) handler(e);
		});
	}
}

function searchPageName() {
    s.channel = "search";
    s.prop1 = "search";
    s.prop2 = s.prop1;
    s.prop4 = "search";
    s.pageName = "all sources - advanced";
    s.eVar40 = "Search";
	var tab='All Sources';
    var template = s.getQueryParam("_temp");
    if(!template) template =$('input[name="_temp"]').val();
    var refWorkTemplate = s.getQueryParam("_refWorkTemplateType");
    if(!refWorkTemplate) refWorkTemplate=$('input[name="_refWorkTemplateType"]').val();
    if (refWorkTemplate != "" || template != "") {
        if (template == "all_search.tmpl") {
        	s.pageName = "search all sources - advanced";
        	s.eVar66 = "All-advanced";
        } else if (template == "all_boolSearch.tmpl") {
        	s.pageName = "search all sources - expert";
       		s.eVar66 = "All-expert";
        } else if (template == "boolSearch.tmpl") {
        	s.pageName = "search journals - expert";
        	s.eVar66 = "Journals-expert";
        	tab = 'Journals';
        } else if (template == "search.tmpl") {
        	s.pageName = "search journals - advanced";
        	tab = 'Journals';
        	s.eVar66 = "Journals-advanced";
        } else if (template == "bookBasic.tmpl") {
        	s.pageName = "search book - advanced";
        	tab = 'Books';
        	s.eVar66 = "Books-advanced";
        } else if (template == "bookAdvance.tmpl") {
        	s.pageName = "search book - expert";
        	tab = 'Books';
        	s.eVar66 = "Books-expert";
        } else if (template == "image_boolSearch.tmpl") {
        	s.pageName = "search image - expert";
        	tab = 'Images';
        	s.eVar66 = "Images-expert";
        } else if (template == "image_search.tmpl") {
        	s.pageName = "search image - advanced";
        	tab = 'Images';
        	s.eVar66 = "Images-advanced";
        } else if (template == "mrwAllBasic.tmpl" || template == "mrwAllAdvance.tmpl") {			           
            if (refWorkTemplate == "A") {
                s.pageName = "search all reference works - expert";
				tab='Reference Works';				
	        	s.eVar66 = "RefMods-expert";
            } else if (refWorkTemplate == "B") {
                s.pageName = "search all reference works - advanced";
				tab='Reference Works';
	        	s.eVar66 = "RefMods-advanced";
           }           
        }else if (template == "mrwEncAdvance.tmpl" || template == "mrwEncBasic.tmpl") {           
            if (refWorkTemplate == "A") {
                s.pageName = "search specific reference works - expert";
				tab='Reference Works';
	        	s.eVar66 = "RefMods-expert";
            } else if (refWorkTemplate == "B") {
                s.pageName = "search specific reference works - advanced";
				tab='Reference Works';
	        	s.eVar66 = "RefMods-advanced";
            }           
        }else if (template == "") {
           template = $('input[name="_temp"]').val();
           if (template != "" && (template == "mrwAllBasic.tmpl" || "mrwAllAdvance.tmpl")) {
               if (refWorkTemplate == "A") {
                   s.pageName = "search all reference works - expert";
                   tab='Reference Works';
                   s.eVar66 = "RefMods-expert";
               } else if (refWorkTemplate == "B") {
                   s.pageName = "search all reference works - advanced";
				   tab='Reference Works';
                   s.eVar66 = "RefMods-advanced";
               }
           }else{
				if (refWorkTemplate == "A") {
                   s.pageName = "search specific reference works - expert";
				   tab='Reference Works';
                   s.eVar66 = "RefMods-expert";
               } else if (refWorkTemplate == "B") {
                   s.pageName = "search specific reference works - advanced";
				   tab='Reference Works';
                   s.eVar66 = "RefMods-advanced";
               }
		   }
        } 
    }
    var errCheck = s.getQueryParam("_err");
    if(errCheck != "") {
       if (errCheck.indexOf("No results") != -1) {
           s.events = "event3,event4";
		   s.eVar3="No Results";
		   s.eVar1=getSearchTermsForAdvanceSearch(tab);
       }
    }

	var advSearchForm=jQuery("form[name^=Form]");
	advSearchForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});
	advSearchForm.on("submit",s_eventHandlers.advancedSearchSubmit);

}

function getSearchTermsForAdvanceSearch (tab){
	var searchFull='';
	var searchText=$('input[name="SearchText"]').val();
	if(!searchText) searchText=$('textarea').text();
	var addSearchText=$('input[name="addSearchText"]').val();
	var keywordOpt=$("select[name='keywordOpt'] option:selected" ).text();
	var addkeywordOpt=$("select[name='addkeywordOpt'] option:selected" ).text();
	var subject = "";
	$( "select[name='srcSel'] option:selected" ).each(function() {
    if(subject !="") subject+=",";
	  subject += $( this ).text();
    });
	var fromDate=$("select[name='fromDate'] option:selected" ).text();
	var toDate=$("select[name='toDate'] option:selected" ).text();
	var dateOption=$("input[name='DateOpt']:checked" ).val();
	var volume=$('input[name="Volume"]').val();
	var issue=$('input[name="Issue"]').val();
	var page=$('input[name="Page"]').val();
	var addTerm=$('select[name="addTerm"] option:selected').text();
	var addAnd=false;
	if(dateOption =='0'){
		searchFull+='pub-date > '+fromDate;
		if(toDate != 'Present') searchFull+=' and pub-date < '+toDate;
		addAnd=true;
	}
	if(volume){
		if(addAnd) searchFull+=' and ';
		searchFull+='VOL-ISSUE(Volume '+volume+')';
		addAnd=true;
	}
	if(issue){
		if(addAnd) searchFull+=' and ';
		searchFull+='VOL-ISSUE(Issue '+issue+')';
		addAnd=true;
	}
	if(page){
		if(addAnd) searchFull+=' and ';
		searchFull+='PAGES('+page+')';
		addAnd=true;
	}
	if(searchText){	
		if(addAnd) searchFull+=' and ';
		if(keywordOpt != '' && keywordOpt!= 'ALL'){
			if(keywordOpt.indexOf('Title') !=-1) keywordOpt='TITLE-ABSTR-KEY';
			if(keywordOpt == 'All Fields') keywordOpt='All';
			searchFull+=keywordOpt+'('+searchText+')';
		}else{
		searchFull+=searchText;
		}
		addAnd=true;
	}

	if(addSearchText){	
		if(addAnd) searchFull+=' and ';
		if(addkeywordOpt != '' && addkeywordOpt!= 'ALL'){
			if(addkeywordOpt.indexOf('Title') !=-1) addkeywordOpt='TITLE-ABSTR-KEY';
			else if(addkeywordOpt == 'All Fields') addkeywordOpt='All';
			searchFull+=addkeywordOpt+'('+addSearchText+')';
		}else{
			searchFull+=addSearchText;
	}
		addAnd=true;
	}
	if(subject && subject !=' - All Sciences -'){
		if(addAnd) searchFull+=' and ';
		searchFull+='['+tab+'('+subject+')]';
		addAnd=true;
	}
	return searchFull;
}


this.s_eventHandlers=new function() {
	var resultfirstClick=true;

	var getZone=function(href) {
		var re = /zone=([\w]+)(?=[&])/;
		var zone = re.exec(href);
		return zone?zone[1]:null;
	}

	this.publicGetZone=function(href) {
		return getZone(href);
	}

	var getPii=function(href) {
		var re = /pii[=|\/]([\w]+)(?=[&|\/pdf])/;
		var pii = re.exec(href);
		return pii?pii[1]:null;
	}

	var getClickSection=function(e) {
		var section=[s.pageName];
		var t=$(e.target);
		var pi=t.parents("[id]");
		
		$.fn.getClassMatch=function(re) {
			var c=this.attr('class');
			if(!c) return null;
			var classList=c.split(/\s+/);
			for(i=0;i<classList.length;i++) {
				if(classList[i].match(re)) return classList[i];
			}
		}

		
		section.push(pi.eq(pi.length-2).attr('id')||pi.last().attr('id')||"unknown");
		section.push(pi.first().attr('id')||"unknown");
		section.push(t.attr('id')||t.getClassMatch("^S_C_")||t.parent().closest('[class]').attr('class')||"unknown");
		
		return section.join(":");
	}

	this.publicGetClickSection=function(e) {
		return getClickSection(e);
	}

	this.basicClick=function(e) {	

		if( e.target.name == 'remote' ) {
		//  Remote Access link clicked
			remoteAccessClickHandler( e );
		}
		else if ( s.pageName == 'sign in to activate remote access' && e.target.value == 'Sign in') {
			remoteAccessSignInClickHandler( e );
		}
		else {
			defaultClickHandler( e );
		}

	}

	var tlActionSubmitForm=function() {
		var f=s_eventHandlers.form;
		var i=document.createElement("input");
		i.setAttribute("type","hidden");
		i.setAttribute("name",s_eventHandlers.clickTarget.getAttribute("name"));
		i.setAttribute("value",s_eventHandlers.clickTarget.getAttribute("value"));
		f.appendChild(i);
		f.submit();
	}


	this.customClick=function(e) {
		if( e.target.text == 'Remote access'){
			remoteAccessClickHandler( e );
		}
		else {
			var navigation =false;				
			 s.eVar52=getZone(e.target.href);  
			 s.eVar53=getClickSection(e);   
	       		 s.eVar54='+1';
	       		 s.eVar55='+1';
	        	 s.eVar56=s.pageName; 		
			if ((s.pageName == "search results") && $(this).closest('li.detail').hasClass('detail')){
				navigation = s_eventHandlers.resultsListClick(e);
			}		                         
	       	 	s.events=s.apl(s.events,"event28",",",2);
	       		s.linkTrackVars=s.apl(s.linkTrackVars,"events,eVar52,eVar53,eVar54,eVar55,eVar56",",",2);
	       		s.linkTrackEvents=s.apl(s.linkTrackEvents,"event28",",",2);
			if(navigation){
				s.tl(true, 'o' ,"customClickEvent",null,navigateAfterReturn(e.currentTarget.href));
				e.preventDefault();
			}else{
				s.tl(true,'o',"customClickEvent");
			}
				
		}
		s.eVar52=null;
		s.eVar53=null;
		s.eVar54=null
		s.eVar55=null;
		s.eVar56=null;
		s.events=null;
		s.linkTrackVars=null;
		s.linkTrackEvents=null;
	}

	var defaultClickHandler = function(e) {
		s.eVar52=getZone(e.target.href);
		s.eVar53=getClickSection(e);
		s.eVar54='+1';
		s.eVar55='+1';
		s.eVar56=s.pageName;
			
		s.events="event28";
		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";
		s.linkTrackEvents="event28";
		s.tl(e.currentTarget,'o',"basicClickEvent");
		
		s.eVar52=null;
		s.eVar53=null;
		s.eVar54=null
		s.eVar55=null;
		s.eVar56=null;
		s.events=null;
		s.linkTrackVars=null;
		s.linkTrackEvents=null;
	}


	var remoteAccessClickHandler=function(e) {	
		s.eVar52=getZone(e.target.href);
		s.eVar53=getClickSection(e) + ":remoteAccessLink";
		s.eVar54='+1';
		s.eVar55='+1';
		s.eVar56=s.pageName;
			
		s.events="event28";
		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";
		s.linkTrackEvents="event28";
		s.tl(true,'o',"remoteAccessClickEvent", null , navigateAfterReturn(e.target.href) );
		e.preventDefault();
	}

	this.publicNavigateAfterReturn=function(url) {
		navigateAfterReturn(url);
	}

	var navigateAfterReturn=function(url) {		
		window.location.href=url;
	}

	var remoteAccessSignInClickHandler = function( e ) {

		s.eVar52="";
		s.eVar53="remote access:sdBody:pageContent:signInToApplyForRemoteAccessSubmit";
		s.eVar54='+1';
		s.eVar55='+1';
		s.eVar56=s.pageName;
				
		s.events="event28";
		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";
		s.linkTrackEvents="event28";
		s.tl( true,'o',"signInToActivateRemoteAccessClickEvent", null , submitSignInToActivateForm);
		e.preventDefault();
	}

	
	function submitSignInToActivateForm() {
		$( "form[name='Form1']" ).submit();
	}

	this.contentViewClick=function(e) {
		var overrides = new Object();

		overrides.pageURL=e.target.href;
		overrides.channel="publications";
		overrides.pageName="article";
		overrides.products=";"+getPii(e.target.href);
		overrides.eVar17=e.data;
		overrides.events="prodView,event5,event27";
		overrides.prop1="";
		overrides.prop2=overrides.prop1;
		overrides.prop4="article";
		overrides.eVar52=getZone(e.target.href);
		s.t(overrides);
	}


	this.refineResultsSearchSubmit=function(e) {
		if(e.isDefaultPrevented() || !s_eventHandlers.clickTarget) return true;
		var getNav=function() {
			var su=[];
			jQuery("#navigators fieldset[id]:has(input:checked)").each(function(i,e) {
				su.push(e.getAttribute("id").replace(/^navBox_/i,''));
			});
			return su.join(';');
		}
	
		s.eVar12="Refine filters";
		s.list1=getNav();
		s.linkTrackVars="events,eVar12,list1";

		s.getPreviousValue('Implicit','gpv_e2','');
		s.events="event6";
		s.linkTrackEvents="event6";
	
		s_eventHandlers.form=this;
		s.tl(true,'o','refineResultsSearchSubmit',null,tlActionSubmitForm);
		e.preventDefault();
		return true;
	}
	
	this.advancedSearchSubmit=function(e) {
		var searchType=$.trim($("div.advExpertLink b").text());
		
		var checkbox=[];
		$("form[name=Form1] input:checkbox:checked").each(function(i,e) {
			checkbox.push(e.getAttribute("id"));
		});
		
		var flds=[]
		var searchTxt=$("input:text[name$=SearchText]").filter(function(){return $(this).val()});
		searchTxt.siblings("select[name$=keywordOpt]").find("option:selected").each(function(i,e) {
			flds.push(e.text);
		});
		
		var subject=[];
		$("select[name=srcSel] option:selected").each(function(i,e) {
			subject.push(e.text);
		});
		
		var dtRng=(function(d) {
			switch(d) {
			case "allDateRadio": return "All Years";
			case "dateSelectRadio":
				return"Selected Date Range" + ":" +
				$("select[name=fromDate] option:selected").attr("value") + " - " +
				$("select[name=toDate] option:selected").attr("value");
			default: return "";
			}
		}($("input[name=DateOpt]:checked").attr("id")));
		
		var source=$("div.searchFormBg label").filter(":contains(Source),:contains(Reference Work)").siblings("select").find("option:selected");
		
		s.getPreviousValue('Explicit','gpv_e2','');
		s.linkTrackVars="events,eVar21,eVar22,eVar23,eVar24,eVar25,list2";
		s.eVar21=$.trim($("#searchTabs li.selected a").text());
		s.eVar22=dtRng;
		s.eVar23=$.trim(source.text());
		s.eVar24=checkbox.join(";");
		s.eVar25=subject.join(";");
		s.list2=flds.join(";");
	
		switch(searchType) {
		case "Advanced search":
			s.events="event8";
			s.linkTrackEvents="event8";
			break;
		case "Expert search":
			s.events="event9";
			s.linkTrackEvents="event9";
			break;
		}
		
		s_eventHandlers.form=this;
		s.tl(true,'o','advancedSearchSubmit',null,tlActionSubmitForm);
		e.preventDefault();
		return true;
	}
	
	this.quickSearchSubmit=function(e) {
		s.linkTrackVars="events";
		s.linkTrackEvents="event7";
		s.events="event7";
		s.getPreviousValue('Explicit','gpv_e2','');
		
		s_eventHandlers.form=this;
		s.tl(true,'o','quickSearchSubmit',null,tlActionSubmitForm);
		e.preventDefault();
		return true;
	
	}
	this.refWorkHomeSearchSubmit=function(e) {
		s.linkTrackVars="events";
		s.linkTrackEvents="event34";
		s.events="event34";
		
		s_eventHandlers.form=this;
		s.tl(this,'o','refWorkHomeSearchSubmit');
	}
	this.refWorkConceptSearchSubmit=function(e) {
		s.linkTrackVars="events";
		s.linkTrackEvents="event35";
		s.events="event35";
		
		s_eventHandlers.form=this;
		s.tl(this,'o','refWorkConceptSearchSubmit');
	}
	this.articleTocSearchSubmit=function(e) {
		s.linkTrackVars="events";
		s.linkTrackEvents="event36";
		s.events="event36";

		s_eventHandlers.form=this;
		s.tl(this,'o','articleTocSearchSubmit');
	}
	this.scPaymentInfoSubmit=function(e) {
		s.linkTrackVars="events,eVar64";
		s.linkTrackEvents="event15,event16";
		s.events="event15,event16";
		s.zip = $("input[name=ccPostalCode]").attr("value");
		s.getPreviousValue(s.zip,'gpv_z','');
		s.eVar64 = $("input[name=ccType][checked=checked]").attr("id");
		s.getPreviousValue(s.eVar64,'gpv_e64','');

		s_eventHandlers.form=this;
		s.tl(true,'o','scPaymentInfoSubmit',null,tlActionSubmitForm);
		e.preventDefault();
		return true;
	}

	//Function to trigger an event for results list click and store the rank of result clicked
	this.resultsListClick=function(e){	
		var ss = $(e.currentTarget).closest('li.detail').next().attr('id');
		var page=$("form[name$=Tag]").find("input[name=_chunk]").attr('value');		
		if(isNaN(page)){
			page=0;
		}
		var rank='';	
		page=(page*1)+1;
		var resultsPerPage=$("form[name$=Tag]").find("input[name=chunkSize]").attr('value');	
		if(typeof(resultsPerPage)!= 'undefined'){
			rank='page:'+page+''+'_resultspp:'+resultsPerPage;
		}else{
			rank='page:'+page;
		}
		if(ss.indexOf('resultsView_') > -1){
			rank +='_rank:'+ss.split('resultsView_')[1];		
		}					
		if($(e.currentTarget).hasClass("absLink")){
			if($(e.currentTarget).children().hasClass("arrowSide")){
				s.eVar63=rank;				
				s.events="event37";
				if(resultfirstClick){
					s.events=s.apl(s.events,"event38",",",2);
					s.linkTrackEvents="event38";
					resultfirstClick=false;
				}
				s.linkTrackVars="events,eVar63";
				s.linkTrackEvents=s.apl(s.linkTrackEvents,"event37",",",2);
			}
		}else{
			s.eVar63=rank;			
			s.events="event37";
			if(resultfirstClick){
				s.events=s.apl(s.events,"event38",",",2);
				s.linkTrackEvents="event38";
				resultfirstClick=false;
			}
			s.linkTrackVars="events,eVar63";
			s.linkTrackEvents=s.apl(s.linkTrackEvents,"event37",",",2);
		}
	}

	//Method to track Alert Creation
	this.saveAlertSubmit = function(e){
		var alertType=e.data.alertType;	
		var frequency='';
		if(alertType == 'Search Alert'){
			if($('#alertNameId').val() ==''){				
				return true;
			}else{
				frequency = $.trim($('select[name="Frequency"] option:selected').text());				
			}
		}else if(alertType == 'Journal Alert'){
			if($('input:checked').length == 0) {				
				return true;
			}else if(($('input:checked').length ==1) && ($('input:checked').val() =='AIP')){
				frequency=$.trim($('.frequency option:selected').text());
			}else{			
				frequency = $.trim($('div.notEditable').text());
			}
		}else if(alertType == 'Topic Alert'){
			var numTopics=$('input:checked').length;
			if(numTopics == 0){				
				return true;
			}else{
				s.eVar47=numTopics;
			}
		}
		s.eVar26=alertType;
		s.eVar42=$.trim(frequency);
		s.linkTrackVars="events,eVar26,eVar42,eVar47";
		s.events="event12";
		s.linkTrackEvents="event12";		
		s_eventHandlers.form=this;
		s.tl(true,'o','saveAlertSubmit',null,tlActionSubmitForm);
		e.preventDefault();
		return true;
	}
	this.userProfileSubmit=function(e) {
		
		s.eVar52=getZone(e.target.href);
		var clickSection=getClickSection(e);

		s.eVar53=clickSection + ":" + e.data.eventName;
		s.eVar54='+1';
		s.eVar55='+1';
		s.eVar56=s.pageName;
		
		if(e.data.eventName == 'ModifyProfileClickEvent') {
			s.events = 'event17';
			s.linkTrackEvents="event17";
		} else if(e.data.eventName == 'ChangePasswordClickEvent') {
			s.events = 'event40';
			s.linkTrackEvents="event40";
		}
		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";
		s_eventHandlers.form=this;
		s.tl(true,'o',e.data.eventName,null,tlActionSubmitForm);
		e.preventDefault();
		return false;

	}
}

var SCCodeVersion="TM25.4.2.28.2013"

var s_account="elsevier-sciencedirect-prod"
var s=s_gi(s_account)
s.debugTracking=false
s.charSet = "UTF-8"
s.currencyCode = "USD"

/* Link and ClickMap tracking */
s.trackDownloadLinks=false
s.trackExternalLinks=false
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,www.sciencedirect.com,elsevier.com,sciencedirect.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "elsevier"
s.trackingServer = "elsevier.d1.sc.omtrdc.net"

// Check user info
if (typeof SDM != 'undefined') {
  if (typeof SDM.ud != 'undefined') {
    var ud = SDM.ud.split('|');
    if (ud.length == 5) {
        s.eVar29 = ud[0];
        s.eVar16 = $(ud[1]).find("SANum").text();
        s.eVar15 = ud[2];
        s.eVar34 = ud[3];
        s.eVar33 = ud[4];
    }
  }
}

// Check if error page
var errorCheck = $("div.errMsgText").text();
if (errorCheck != null && errorCheck != "") {
  var errorCode = errorCheck.match("SD-[0-9]+");
  if (errorCode != null && errorCode != "") {
      s.eVar43 = errorCode;
  }
}

//Set pageName if home page or browse
for(var i=0;i<document.styleSheets.length;i++) {
	if(document.styleSheets[i].href) {
		if(document.styleSheets[i].href.indexOf("css_home") !=-1) {
                        s.channel="home";
			s.pageName="home";
                        s.prop1="home";
                        s.prop2=s.prop1;
                        s.prop4="home";                       
			break;
		}
		if(document.styleSheets[i].href.indexOf("css_browse")!=-1) {
                        s.channel="publications";
			s.pageName="browse";
                        s.prop1="browse";
                        s.prop2=s.prop1;
                        s.prop4="browse";
			s.eVar40="Browse";
			// Get browse type
			var path=window.location.pathname.split('/');
			if(path.length >= 2) {
				switch(path[2]) {
				case 'journals':
					s.eVar66='Journals';
					break;
				case 'jrnlallbooks':
					s.eVar66='All';
					break;
				case 'bookbshsrw':
					s.eVar66='AllBooks';
					break;
				case 'books':
					s.eVar66='Books';
					break;
				case 'bookseries':
					s.eVar66='BookSeries';
					break;
				case 'handbooks':
					s.eVar66='Handbooks';
					break;
				case 'referenceworks':
					s.eVar66='RefModules';
					break;
				}
			}
			if(path.length >= 5) {
				if(path[3] == 'sub') {
					s.eVar66 += ('-Subject: ' + path[4]);
				}
			}
			break;
		}
	}
}

s.usePlugins=true
function s_doPlugins(s) {
	
if(s.pageName && s.pageName!=""){
		/* Returns page name as lowercase */
		s.pageName=s.pageName.toLowerCase();
		// Sets hierarchy to be equal to the pageName
		s.hier1=s.channel;
                if(s.channel!=s.prop1){
                  s.hier1=s.hier1+":"+s.prop1;
                }
                if(s.prop1!=s.prop2){
                  s.hier1=s.hier1+":"+s.prop2;
                }
                if(s.pageName!=s.prop1){
                  s.hier1=s.hier1+":"+s.pageName;
                }
	}	
	
	/* Timestamp Transfer for EPFL */
	s.eVar50="D=t";

	/*Track External Campaign*/
	if(!s.campaign) {
		s.campaign=s.getQueryParam('utm_term');
		s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
	}

	/* Site Section (First Level) */
	if(s.channel) s.channel=s.channel.toLowerCase();
	if(s.channel&&!s.eVar9) s.eVar9="D=ch";

	/* Site Section (Second Level) */
	if(s.prop1) s.prop1=s.prop1.toLowerCase();
	if(s.prop1&&!s.eVar10) s.eVar10="D=c1";
	
	/* Site Section (Third Level) */
	if(s.prop2) s.prop2=s.prop2.toLowerCase();
	if(s.prop2&&!s.eVar11) s.eVar11="D=c2";
	
	/* Page Type ID */
	if(s.prop4) s.prop4=s.prop4.toLowerCase();
	if(s.prop4&&!s.eVar13) s.eVar13="D=c4";
		
	/* Content Source ID */
	if(s.eVar28) s.eVar28=s.eVar28.toLowerCase();
	if(s.eVar28&&!s.prop11) s.prop11="D=v28";
	
	/* Entitling ID */
	if(s.eVar29) s.eVar29=s.eVar29.toLowerCase();
	if(s.eVar29&&!s.prop12) s.prop12="D=v29";
	
	/* Search within Search Term */
	if(s.eVar39) s.eVar39=s.eVar39.toLowerCase();
	if(s.eVar39&&!s.prop10) s.prop10="D=v39";
			
	/*
	JS Version Control
	*/
	s.prop9=SCCodeVersion;
	
	/*
	* Populate Time Parting
	*/
	var currentDate = new Date()
	var year = currentDate.getFullYear()
	s.eVar5=s.getTimeParting('h','-5',year)+":"+s.getTimeParting('d','-5',year)+":"+s.getTimeParting('w','-5',year);
	s.prop5="D=v5";
	
	/*
	* New-Returning Visit
	*/
	s.prop6=s.getNewRepeat();
	s.eVar6="D=c6";
	
	/*
	* Get Visit number for duration of the month
	*/
	s.prop7=s.getVisitNum('m');	
	s.eVar7="D=c7";
	
	
	/* 
	Days since last visit
	*/
	s.prop8=s.getDaysSinceLastVisit('s_lv');
	s.eVar8="D=c8";
	
	/*
	Previous Page scAdd 
	if(s.eVar32)
		s.events=s.apl(s.events,"scAdd",",",2);
		s.eVar32=s.getPreviousValue(s.pageName,'gpv_p32',''); 
	*/
		

	/* Page Views - do not touch; used by Previous Page*/
   		 s.events = s.apl(s.events, "event27", ",", 2);	

	/*
	Previous Page
	*/
	if(s.prop19)
		s.events=s.apl(s.events,"event27",",",2);
		s.prop19=s.getPreviousValue(s.pageName,'gpv_p19',''); 
	 
	 	 
	/* Order Number: populate s.eVar65 with s.purchaseID */
	if(s.purchaseID&&!s.eVar65) s.eVar65=s.purchaseID;
	s.eVar65=s.getValOnce(s.eVar65,'ev65',0); 

	/* Previous page value and getPercentPageViewed */
	s.prop17=s.getPercentPageViewed();
	
	// First Click Time
	if(/event6/i.test(s.events)) s.eVar36='start';
 
	if(/event7/i.test(s.events)) s.eVar36='stop';

	s.eVar36=s.getTimeToComplete(s.eVar36,'ttc',0);
	
	
	// First Content Time
	if(/event6/i.test(s.events)) s.eVar38='start';
 
	if(/event8/i.test(s.events)) s.Var38='stop';

	s.Var38=s.getTimeToComplete(s.Var38,'ttc',0);
	

	// Page URL excluding Query Strings
	s.prop18=location.protocol + "//" + location.host + location.pathname;
        s.eVar51="D=c18";

        // Article Status
	if(s.products && s.eVar17) {
		var prev_products;
		var prev_time=0;
		var now=$.now();
		var prev_time=now;
		var min_time_diff=10000;
		
		switch (s.eVar17) {
			case "article_full":
				s.events=s.apl(s.events,'event29',',',0);
				prev_products=s.getPreviousValue(s.products,'gpv_art_full_prd','event29');
				prev_time=parseInt(s.getPreviousValue(now,'gpv_art_full_dt','event29'));
				break;
			case "article_abs":
				s.events=s.apl(s.events,'event33',',',0);
				prev_products=s.getPreviousValue(s.products,'gpv_art_abs_prd','event33');
				prev_time=parseInt(s.getPreviousValue(now,'gpv_art_abs_dt','event33'));
				break;
			case "pdf":
				s.events=s.apl(s.events,'event30',',',0);
				prev_products=s.getPreviousValue(s.products,'gpv_pdf_prd','event30');
				prev_time=parseInt(s.getPreviousValue(now,'gpv_pdf_dt','event30'));
				min_time_diff=30000;
				break;
			case "epub":
				s.events=s.apl(s.events,'event31',',',0);
				prev_products=s.getPreviousValue(s.products,'gpv_epub_prd','event31');
				prev_time=parseInt(s.getPreviousValue(now,'gpv_epub_dt','event31'));
				break;
			case "mobi":
				s.events=s.apl(s.events,'event32',',',0);
				prev_products=s.getPreviousValue(s.products,'gpv_mobi_prd','event32');
				prev_time=parseInt(s.getPreviousValue(now,'gpv_mobi_dt','event32'));
				break;
		}
		
		if(prev_products && prev_products==s.products && now-prev_time<=min_time_diff) s.eVar57='Duplicate';
		else s.eVar57='Unique';
	}
	
	/*Get Cart Open*/
	s.events=s.getCartOpen("s_scOpen");	
	
	/*Reset Get Cart Open*/
	s.events=s.resetGetCartOpen(); 

s.plugins = "";
}
s.doPlugins=s_doPlugins
	
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
Utility Functions: apl, p_c, p_gh, split, replace, join
*/ 
//append list
s.apl=new Function("L","v","d","u","var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");

// split v1.5
s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

// ver. 1.0 - s.join(v,p)| v - Array | p - formatting parameters (front,back,delim,wrap)
s.join=new Function("v","p","var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

// getTimeParting ver. 2.0
s.getTimeParting=new Function("t","z","y","l", "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=String(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U.substring(2,4);X='090801|101407|111306|121104|131003|140902|150801|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substring(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.getTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.getHours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A}}else{return Z+', '+W}}}");

/*
 * Plugin: getNewRepeat 1.1 - Return whether user is new or repeat
 */
s.getNewRepeat=new Function("d",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();e.setTime(ct+d*24*"
+"60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct+'"
+"-New',e);return 'New';}sval=cval.split('-');if(ct-sval[0]<30*60*100"
+"0&&sval[1]=='New'){s.c_w('s_nr',ct+'-New',e);return 'New';}else {s."
+"c_w('s_nr',ct+'-Repeat',e);return 'Repeat';}");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/*                                                                  
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");
 
/*
 * Plugin: getPercentPageViewed v1.5
 */
s.handlePPVevents=new Function("",""
+"var s=s_c_il["+s._in+"];if(!s.getPPVid)return;var dh=Math.max(Math."
+"max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.ma"
+"x(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max("
+"s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=s.wd.i"
+"nnerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeigh"
+"t),st=s.wd.pageYOffset||(s.wd.document.documentElement.scrollTop||s"
+".wd.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh"
+"*100),100),c=s.c_r('s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[]"
+",id=(a.length>0)?(a[0]):escape(s.getPPVid),cv=(a.length>1)?parseInt"
+"(a[1]):(0),p0=(a.length>2)?parseInt(a[2]):(pv),cy=(a.length>3)?pars"
+"eInt(a[3]):(0),cn=(pv>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy"
+")?vh:cy)):'';s.c_w('s_ppv',cn);");
s.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
+"inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'"
+"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+"a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid"
+"=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('"
+"s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL"
+"istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro"
+"ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl"
+"ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo"
+"ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent"
+"s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'"
+")?(a):(a[1]);");

/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
 
 
  /*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
 * Plugin: getCartOpen
 */
s.getCartOpen=new Function("c",""
+"var s=this,t=new Date,e=s.events?s.events:'',i=0;t.setTime(t.getTim"
+"e()+1800000);if(s.c_r(c)||e.indexOf('scOpen')>-1){if(!s.c_w(c,1,t))"
+"{s.c_w(c,1,0)}}else{if(e.indexOf('scAdd')>-1){if(s.c_w(c,1,t)){i=1}"
+"else if(s.c_w(c,1,0)){i=1}}}if(i){e=e+',scOpen'}return e");

/*
 * Plugin: resetGetCartOpen
 */
s.resetGetCartOpen=new Function("" 
+"var s=this,t=new Date,e=s.events?s.events:'';t.setTime(t.getTime()+"
+"10000);if(e.indexOf('purchase')>-1){if(s.c_r('s_scOpen')||e.indexOf"
+"('scOpen')>-1){if(!s.c_w('s_scOpen','',t)){s.c_w('s_scOpen','',0);}"
+"}}return e");



s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m){
$.expr[':'].pdf = function(e) {
	if(e.href && e.href.match(/main\.pdf(?=[\s]*)$/))
		return true;
	return false;
}

$("#epubLink").on("click",null,"epub",s_eventHandlers.contentViewClick);
$("#mobiLink").on("click",null,"mobi",s_eventHandlers.contentViewClick);
$(document).on2("click","a:pdf","pdf",s_eventHandlers.contentViewClick);
$(document).on2("click","a[href],[onclick],input,button",null,s_eventHandlers.customClick);

var qsForm=$("form#quickSearch");
qsForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});
qsForm.on("submit",s_eventHandlers.quickSearchSubmit);

s.prop22='D=pageName';

//HomeAcc detection - want a customLink and an event
if($('#homeAccPopupBox').is(':visible') === true ){
	$('#homeAccPopupBox').unbind( 'click');	
	$('#homeAccPopupBox').bind( 'click' , function( e ) {
	
		s.eVar52='';
		s.eVar53=s_eventHandlers.publicGetClickSection(e) + ":homeAccPopupMessageBox";
		s.eVar54='+1';
		s.eVar55='+1';
		s.eVar56=s.pageName;
		var save_prop22=s.prop22;
		s.prop22='HomeAccMsg';
				
		s.events="event41";
		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56,prop22";
		s.linkTrackEvents="event41";
		s.tl( true,'o',"homeAccPopupDialogClickEvent");
		s.prop22=save_prop22;
	} );
	
}

function adClickEventHandler( event ) {
	
	if( event.target != null && event.target.href != null ) {
		s.eVar52=s_eventHandlers.publicGetZone(event.target.href);
	}
	else {
		s.eVar52="";
	}
	var clickSection = s_eventHandlers.publicGetClickSection(event);

	s.eVar53=clickSection + ":" + event.data.eventName;
	s.eVar54='+1';
	s.eVar55='+1';
	s.eVar56=s.pageName;
	s.prop21=event.data.eventName;
	var sc_saveEvents = s.events;
	s.events = 'event22';
	s.linkTrackEvents='event22';
			
	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56,prop21";
	s.tl(true,'o',event.data.eventName);
	s.events = sc_saveEvents;
}

//Detect ad impressions
var sc_topAd = $('#leaderboard2 .adText').filter(':visible').length;
var sc_rightAd = $('#skyscraper2 .adText').filter(':visible').length;
s.prop20 = '';
if( sc_topAd || sc_rightAd ) {
	s.events=s.apl(s.events,"event21",",",1);
	if( sc_topAd ) {
		s.prop20 = 'top';
		//Install click handler
		$("#leaderboard2 > a").unbind("click");
		$("#leaderboard2 > a").on( "click",{eventName:"TopAdClickEvent"}, adClickEventHandler );

	}
	if( sc_rightAd ){
		if(s.prop20) {
			s.prop20 += '|';
		}
		s.prop20 += 'right';
		//Install click handler
		$("#skyscraper2 > a").unbind("click");
		$("#skyscraper2 > a").on( "click",{eventName:"RightAdClickEvent"}, adClickEventHandler );

	}
}

//Detect start of user registration
if(document.URL.indexOf('register-new-user') != -1) { // means we are on reg page
	s.events=s.apl(s.events,"event1",",",1);
}





}

s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}"
+"}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay"
+"=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&"
+"&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m"
+"=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s"
+"cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");


s.setTagContainer("sciencedirect")
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.26.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLow"
+"erCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.vers"
+"ion+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if"
+"(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]"
+"=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd["
+"imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!"
+"s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window"
+".s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e"
+".getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'"
+"+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,"
+"l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='ht"
+"tps://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l="
+"',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'"
+"+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextDat"
+"a\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(n"
+"fn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){n"
+"k=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLi"
+"ghtData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(s"
+"p=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return "
+"qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe"
+"=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if"
+"(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv|"
+"|fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>25"
+"5){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if("
+"k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){"
+"q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';e"
+"lse if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else"
+" if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';el"
+"se if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextDa"
+"ta'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProf"
+"ileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if"
+"(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return "
+"qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substr"
+"ing(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.li"
+"nkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.tra"
+"ckExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new F"
+"unction('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if"
+"(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,"
+"a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;retu"
+"rn}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.t"
+"agName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.targ"
+"et.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEv"
+"ent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e"
+".altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preven"
+"tDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>"
+"k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.subst"
+"ring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t=''"
+";if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.pr"
+"otocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');"
+"x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s"
+"_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un."
+"indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','r"
+"q',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;"
+"return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object."
+"prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'"
+"='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.oncl"
+"ick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.i"
+"smac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('F"
+"irefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function"
+"(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))ret"
+"urn 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring"
+"(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCas"
+"e();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa"
+"=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.s"
+"ubstring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd"
+".s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r"
+"=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_i"
+"l['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m"
+"=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_"
+"'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m"
+"[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var "
+"s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){"
+"i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'ht"
+"tp:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e"
+"?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','va"
+"r e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i"
+"=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]="
+"o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData"
+"\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il"
+"['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s."
+"dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dl"
+"l.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;"
+"i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e)"
+")fid=0;return fid};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+se"
+"d,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,"
+"q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y"
+"':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach"
+"){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8."
+"2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth"
+";bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeig"
+"ht;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var "
+"e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexO"
+"f(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}i"
+"f(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l"
+";if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!"
+"n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('"
+".s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h)"
+";if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.da"
+"taset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking"
+"){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(o"
+"cb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt("
+"oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('obje"
+"ctID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if"
+"(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles="
+"''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkNam"
+"e=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lig"
+"htProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t"
+".tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]"
+"){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y"
+"[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLower"
+"Case().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape"
+"6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscap"
+"e');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.n"
+"s6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4"
+"%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet"
+",visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfile"
+"s,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';"
+"s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;"
+"s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,jav"
+"aEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingS"
+"erverBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLi"
+"nks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.v"
+"l_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functi"
+"on(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


s_tc_sciencedirect.cl=[{x:{h:["sciencedirect.com"],p:["/article"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="article";\nif (typeof (SDM) != \'undefined\') {\n  if (typeof(SDM.pageType) != \'undefined\' &&\n      typeof(SDM.pm) != \'undefined\' &&\n      typeof(SDM.pm.pii) != \'undefined\' &&\n      typeof(SDM.pm.issnisbn) != \'undefined\' &&\n      typeof(SDM.pm.contentType) != \'undefined\') {\n      var ct=SDM.pm.contentType.toLowerCase();\n      if (ct=="jl") {\n        s.prop1="journal";\n      } else if (ct=="bk") {\n         s.prop1="book";\n      } else if (ct=="rw") {\n          s.prop1="refwork";\n      } else if (ct=="bs") {\n          s.prop1="bookseries";\n      } else if (ct=="hb") {\n           s.prop1="handbook";\n      }\n      s.eVar17=SDM.pageType.toLowerCase();\n      s.eVar14=SDM.pm.issnisbn; \n      s.eVar28=SDM.pm.issnisbn;\n      s.products=";"+SDM.pm.pii;\n    }\n}\n\nvar referrerURL=document.referrer;\nif(referrerURL ){\n	referrerURL.toLowerCase();\n	var fromSD=referrerURL.match("sciencedirect.com");\n	if(fromSD == null) {\n		var path=referrerURL.split(\'/\');	\n		if(path[2]){\n			if(path[2].match("linkinghub.elsevier.com")){\n				s.eVar40="Alert"\n			} else {\n				s.eVar40=path[2];\n			}\n		} else {\n			s.eVar40=\'External\';\n		}\n	}\n} else {\n	s.eVar40=\'Typed/Bookmark\';\n}\n\ns.events="prodView,event5";\n\ns.prop2=s.prop1;\ns.prop4="article";\n\n//For TOC search in books\nvar scTocPanelWaitCounter=60;\nvar scTocPanelWaitTimer=setInterval(scSetupTocSrchEvents, 1000);\nvar tocSrchObj=null;\n\n//For Ad Impressions-left pane\nvar scAdImpressWaitCounter=10;\nvar scAdImpressWaitTimer=setInterval(scCaptureAdImpress, 2000);\n\n//  The following are written in such a way that the events can be handled by links not yet created\n\n// Toggle opening and closing 5 main sections\n$( "#rightPane div#ref_mod_articles" ).on( "click" , "h2 > a.toggle" , { eventName: "RefModArticleToggleClickEvent" , nav: false } , articleLinkEvent );  // RefMod articles\n$( "#rightPane div#recommend_related_articles" ).on( "click" , "h2 > a.toggle" , { eventName: "RecommendedArticleToggleClickEvent" , nav: false } , articleLinkEvent );  // Recommended articles \n$( "#rightPane div#cited_by_articles" ).on( "click" , "h2 > a.toggle" , { eventName: "CitingArticleToggleClickEvent" , nav: false } , articleLinkEvent );  // Cited By articles\n$( "#rightPane div#related_book_content" ).on( "click" , "h2 > a.toggle" , { eventName: "RelatedBookContentToggleClickEvent" , nav: false } , articleLinkEvent );  // Related Book Content\n\n//  Link to Full text article\n$( "#rightPane div#ref_mod_articles" ).on( "click" , "li.artTitle > a" , { eventName: "RefModArticleFTAClickEvent" , nav: true } , articleLinkEvent );  // RefMod articles\n$( "#rightPane div#recommend_related_articles" ).on( "click" , "li.artTitle > a" , { eventName: "RecommendedArticleFTAClickEvent" , nav: true } , articleLinkEvent );  // Recommended articles \n$( "#rightPane div#cited_by_articles" ).on( "click" , "li.artTitle > a" , { eventName: "CitingArticleFTAClickEvent" , nav: false } , articleLinkEvent );  // Cited By articles\n$( "#rightPane div#related_book_content" ).on( "click" , "li.artTitle > a" , { eventName: "RelatedBookContentFTAClickEvent" , nav: true } , articleLinkEvent );  // Related Book Content\n\n//  Link to PDF download\n$( "#rightPane div#ref_mod_articles" ).on( "click" , "li.showMore a" , { eventName: "RefModArticlePDFClickEvent" , nav: false } , articleLinkEvent );  // RefMod articles\n$( "#rightPane div#recommend_related_articles" ).on( "click" , "li.showMore a" , { eventName: "RecommendedArticlePDFClickEvent" , nav: false } , articleLinkEvent );  // Recommended articles\n$( "#rightPane div#cited_by_articles" ).on( "click" , "li.showMore a" , { eventName: "CitingArticlePDFClickEvent" , nav: false } , articleLinkEvent );  // Cited By articles\n$( "#rightPane div#related_book_content" ).on( "click" , "li.showMore a" , { eventName: "RelatedBookContentPDFClickEvent" , nav: false } , articleLinkEvent );  // Related Book Content\n \n//  Link to more articles\n$( "#rightPane div#ref_mod_articles" ).on( "click" , "a:contains(\'View more\')" , { eventName: "RefModArticleViewMoreClickEvent" , nav: true } , articleLinkEvent );  // RefMod articles\n$( "#rightPane div#recommend_related_articles" ).on( "click" , "a:contains(\'View more\')" , { eventName: "RecommendedArticleViewMoreClickEvent" , nav: true } , articleLinkEvent );  // Recommended articles\n$( "#rightPane div#cited_by_articles" ).on( "click" , "a:contains(\'View more\')" , { eventName: "CitingArticleViewMoreClickEvent" , nav: false } , articleLinkEvent );  // Cited By articles\n$( "#rightPane div#related_book_content" ).on( "click" , "a:contains(\'View more\')" , { eventName: "RelatedBookContentViewMoreClickEvent" , nav: true } , articleLinkEvent );  // Related Book Content\n\n//Capture Links to Bibliography on center pane\n$("#centerPane ul.authorGroup a.authorName").on( "click",{eventName:"AuthorBibClickEvent",nav:false}, articleLinkEvent ) ;//Author link\n$("#centerPane ul.authorGroup a.intra_ref.auth_aff").on( "click",{eventName:"AuthorBibAffiliationClickEvent",nav:false}, articleLinkEvent ) ;//Affiliation link\n$("#centerPane ul.authorGroup a.intra_ref.auth_corr").on( "click",{eventName:"CorrespondingAuthorContactClickEvent",nav:false}, articleLinkEvent ) ;//Corresponding Author link\n$("#centerPane ul.authorGroup a.auth_mail").on( "click",{eventName:"AuthorBibEmailClickEvent",nav:false}, articleLinkEvent ) ;//Author Email link\n\n//  Capture Get rights and content link\n$( "#centerPane dd.rightsLink a.S_C_outLinks" ).on( "click" , { eventName: "RightsAndContentClickEvent" , nav: false } , articleLinkEvent );  // View in Workspace image click\n\n//  Capture How to cite or link using DOI\n$( "#centerPane a.icon_doiLink" ).on( "click" , { eventName: "HowToCiteOrLinkUsingDOIClickEvent" , nav: false } , articleLinkEvent );  // How to cite or link using DOI click\n\nvar scFragmentWaitTimer=setInterval(scWaitForFragmentsLoading, 2000);\n\nvar scWaitRPaneRecommendTimer;\nvar scRecommendArticlesLoaded = false;\nfunction waitRPaneRecommend() {\n	if($("#rightPane div#recommend_related_articles div.moreInfo a.toggleMoreInfo").length) {\n		$("#rightPane div#recommend_related_articles div.moreInfo a.toggleMoreInfo").on("click", { eventName: "RecommendedArticleMoreInfoClickEvent", nav: false } , articleLinkEvent);\n		clearInterval(scWaitRPaneRecommendTimer);\n		scRecommendArticlesLoaded = true;\n	}\n	else {return;}\n}\n\nvar scWaitRPaneRefModTimer;\nfunction waitRPaneRefMod() {\n	if($("#rightPane div#ref_mod_articles div.moreInfo a.toggleMoreInfo").length) {\n		$("#rightPane div#ref_mod_articles div.moreInfo a.toggleMoreInfo").on("click", { eventName: "RefModArticleMoreInfoClickEvent", nav: false }, articleLinkEvent);  // Special articles\n		clearInterval(scWaitRPaneRefModTimer);\n	}\n	else {return;}\n}\n\nvar scWaitRPaneSpecialTimer;\nfunction waitRPaneSpecial() {\n	if($("#rightPane div#special_articles div.moreInfo a.toggleMoreInfo").length) {\n		$("#rightPane div#special_articles div.moreInfo a.toggleMoreInfo").on("click", { eventName: "SpecialArticleMoreInfoClickEvent", nav: false }, articleLinkEvent);  // Special articles\n		clearInterval(scWaitRPaneSpecialTimer);\n	}\n	else {return;}\n}\n\nvar scWaitRPaneCitingTimer;\nvar scCitingArticlesAttempts = 0;\nvar scCitingArticlesLoaded = false;\nfunction waitRPaneCiting() {\n	if($("#rightPane div#cited_by_articles div.moreInfo a.toggleMoreInfo").length) {\n		$("#rightPane div#cited_by_articles div.moreInfo a.toggleMoreInfo").on("click", { eventName: "CitingArticleMoreInfoClickEvent", nav: false } , articleLinkEvent);\n		clearInterval(scWaitRPaneCitingTimer);\n		scCitingArticlesLoaded = true;\n	}\n	else if($( scCitingArticlesAttempts > 10 && $("#citedByList > li > p").text().search(/This article has not been cited/) != -1)) {\n		clearInterval(scWaitRPaneCitingTimer);\n		scCitingArticlesLoaded = true;\n	}\n	scCitingArticlesAttempts++;\n}\n\nvar scFirstBlkWaitCounter=10;\nvar scFirstBlkWaitTimer=setInterval(scFirstBlockWait, 1000);\n\nfunction scFirstBlockWait() {\n	var firstBlkID = $("#rightPane .firstBlk").attr("id");\n	if(firstBlkID == null) {\n		scFirstBlkWaitCounter--;\n		if(scFirstBlkWaitCounter == 0) {\n			clearInterval(scFirstBlkWaitTimer);\n			return;\n		}\n		else {\n			return;\n		}\n	}\n	clearInterval(scFirstBlkWaitTimer);\n	if( firstBlkID == "recommend_related_articles") {\n		scWaitRPaneRecommendTimer = setInterval(waitRPaneRecommend, 1000);\n	} else if(firstBlkID == "special_articles") {\n		$( "#rightPane div#special_articles" ).on( "click" , "h2 > a.toggle" , { eventName: "SpecialArticleToggleClickEvent" , nav: false } , articleLinkEvent );  // Special articles\n		$( "#rightPane div#special_articles" ).on( "click" , "li.specIssTitle > a" , { eventName: "SpecialArticleFTAClickEvent" , nav: true } , articleLinkEvent );  // Special articles\n		$( "#rightPane div#special_articles" ).on( "click" , "li.artTitle > a" , { eventName: "OtherSpecialArticleFTAClickEvent" , nav: true } , articleLinkEvent );  // Other Special articles\n		$( "#rightPane div#special_articles" ).on( "click" , "li.showMore a" , { eventName: "SpecialArticlePDFClickEvent" , nav: false } , articleLinkEvent );  // Special articles\n		$( "#rightPane div#special_articles" ).on( "click" , "a:contains(\'View more\')" , { eventName: "SpecialArticleViewMoreClickEvent" , nav: true } , articleLinkEvent );  // Special articles\n		scWaitRPaneSpecialTimer = setInterval(waitRPaneSpecial, 1000);	\n	} else if(firstBlkID == "ref_mod_articles") {\n		scWaitRPaneRefModTimer = setInterval(waitRPaneRefMod, 1000);\n	}\n}\n\nvar scBookContentWaitTimer;\nvar scBookContentAttempts = 0;\nvar bookContentHandlersAdded = false;\n\nfunction addBookContentHandlers() {\n	if($("#rightPane div#related_book_content #relBkList .toggleMoreInfo").length ) {		\n		$("#rightPane div#related_book_content #relBkList .toggleMoreInfo").on("click", { eventName: "RelatedBookContentMoreInfoClickEvent", nav: false }, articleLinkEvent);\n		clearInterval(scBookContentWaitTimer);\n		bookContentHandlersAdded = true;\n	}\n	else if(scBookContentAttempts > 10 && $( $("#relBkList > li > p").text().search(/No articles found/) != -1)) {\n		clearInterval(scBookContentWaitTimer);\n		bookContentHandlersAdded = true;\n	}\n	scBookContentAttempts++;\n}\n\nfunction articleLinkEvent( event ) {\n	\n	if( event.target != null && event.target.href != null ) {\n		s.eVar52=s_eventHandlers.publicGetZone(event.target.href);\n	}\n	else {\n		s.eVar52="";\n	}\n	var clickSection = s_eventHandlers.publicGetClickSection(event);\n\n	if( !bookContentHandlersAdded && clickSection.search(/article:rightPane:related_book_content/) != -1) {\n		scBookContentWaitTimer = setInterval(addBookContentHandlers, 1000);\n	}\n	if( !scCitingArticlesLoaded && clickSection.search(/article:rightPane:cited_by_articles/) != -1) {\n		scWaitRPaneCitingTimer = setInterval(waitRPaneCiting, 1000);\n	}\n	if( !scRecommendArticlesLoaded && clickSection.search(/article:rightPane:recommend_related_articles/) != -1) {\n		scWaitRPaneRecommendTimer = setTimeout(waitRPaneRecommend, 1000);\n	}\n\n	s.eVar53=clickSection + ":" + event.data.eventName;\n	s.eVar54=\'+1\';\n	s.eVar55=\'+1\';\n	s.eVar56=s.pageName;\n			\n	s.events="event28";\n	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n	s.linkTrackEvents="event28";\n	s.tl(true,\'o\',event.data.eventName);\n	\n}\n\n\n/* function to wait and check for toc panel to load */\nfunction scSetupTocSrchEvents() {\n	scTocPanelWaitCounter--;\n	tocSrchObj=$("div#searchWithin");\n	if(tocSrchObj == []) {\n		if(scTocPanelWaitCounter == 0) {clearInterval(scTocPanelWaitTimer);}\n		return;\n	}\n	else {\n		clearInterval(scTocPanelWaitTimer);\n		tocSrchObj.find("button.submit").on("click",function(e) {s_eventHandlers.clickTarget=this;s_eventHandlers.articleTocSearchSubmit();});\n		tocSrchObj.find("form[name=searchWithinForm]").on("submit",s_eventHandlers.articleTocSearchSubmit);\n	}\n}\n\nfunction scLeftAdClick( event ) {\n	\n	if( event.target != null && event.target.href != null ) {\n		s.eVar52=s_eventHandlers.publicGetZone(event.target.href);\n	}\n	else {\n		s.eVar52="";\n	}\n\n	s.eVar53=\'article:leftPane:articleLeftAd:LeftAdClickEvent\';\n	s.eVar54=\'+1\';\n	s.eVar55=\'+1\';\n	s.eVar56=s.pageName;\n	s.prop21=\'LeftAdClickEvent\';\n	var sc_saveEvents = s.events;\n	s.events = \'event22\';\n	s.linkTrackEvents=\'event22\';\n			\n	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56,prop21";\n	s.tl(true,\'o\',\'LeftAdClickEvent\');\n	s.events = sc_saveEvents;\n}\n\n\nfunction scCaptureAdImpress() {\n	scAdImpressWaitCounter--;\n	if(scAdImpressWaitCounter == 0) {clearInterval(scAdImpressWaitTimer);}\n	var adFrame=document.getElementsByTagName(\'iframe\')[0];\n	if(adFrame) {\n		if(adFrame.src.search(\'sciencedirect.com/science/advertisement\') == -1 ) {\n			if(scAdImpressWaitCounter == 0) {clearInterval(scAdImpressWaitTimer);}\n			return;\n		}\n		var adDoc=adFrame.contentWindow || adFrame.contentDocument;\n	}\n	if( adDoc == null ||\n			adDoc.document == null) { //not yet\n		if(scAdImpressWaitCounter == 0) {clearInterval(scAdImpressWaitTimer);}\n		return;\n	}\n	else { // capture ad impress, setup click\n		clearInterval(scAdImpressWaitTimer);\n		s.prop20=\'left\';\n		var sc_saveEvents = s.events;\n		s.events = \'event21\';\n		s.linkTrackEvents=\'event21\';\n		s.linkTrackVars="events,prop20";\n		s.tl(true,\'o\',\'LeftAdImpress\');\n		s.events = sc_saveEvents;\n		\n		adDoc = adDoc.document;\n		adDoc.body.addEventListener(\'click\', scLeftAdClick);\n	}\n}\nvar scFragmentsList = [];\nvar paginationOff = s.getQueryParam("np") == "y" ? true : false;\n\n\n/* function to wait for tables & figures to load */\nfunction scWaitForFragmentsLoading() {\n	if (paginationOff || typeof Fragment === \'undefined\') {\n		//no fragments, just install all handlers\n		$("#centerInner [id^=table] .menuButtonLinks .btnHolder .menuTitle").on( "click" , {eventName: "TableOptionsButtonClickEvent", nav: false} , articleLinkEvent);\n		$("#centerInner [id^=table] .menuButtonLinks .menuButton .viewWS.S_C_table_view_WS").on("click", {eventName: "ViewTableInWorkspaceClickEvent", nav: false} , articleLinkEvent);\n		$("#centerInner [id^=table] .menuButtonLinks .menuButton .downloadCsv .S_C_csv_download").on("click", {eventName: "DownloadTableAsCSVClickEvent", nav: false} , articleLinkEvent);\n		$("#centerInner [id^=figure] .menuButtonLinks .btnHolder .menuTitle").on( "click", {eventName: "FigureOptionsButtonClickEvent", nav: false} , articleLinkEvent);\n		$("#centerInner [id^=figure] a.figureLink").on( "click", { eventName: "ViewInWorkspaceImgClickEvent" , nav: false } , articleLinkEvent );\n		$("#centerInner [id^=figure] .menuButtonLinks .menuButton .ppt.S_C_ppt").on( "click", { eventName: "DownloadAsPowerPointClickEvent" , nav: false } , articleLinkEvent );\n		$("#centerInner [id^=figure] .menuButtonLinks .menuButton .S_C_full_size").on("click", { eventName: "DownloadFullSizeImageClickEvent" , nav: false } , articleLinkEvent );\n		$("#centerInner [id^=figure] .menuButtonLinks .menuButton .S_C_high_quality").on("click", { eventName: "ViewHighQualityImageClickEvent" , nav: false } , articleLinkEvent );				\n		clearInterval(scFragmentWaitTimer);\n		return;\n	}\n	if(Fragment.isFragmentMapLoaded() != true) {\n		return;		\n	}\n	if( Fragment.mapTables == [] && Fragment.mapFigures == []) { // no tables or figures\n		clearInterval(scFragmentWaitTimer);\n		return;\n	}\n	if(!scFragmentsList.length) {\n		scFragmentsList = Fragment.fragmentMap.concat();\n	}\n	for (var i=0; i<scFragmentsList.length; i++) {\n		if( scFragmentsList[i] == undefined ) { continue;}\n		var fragID = scFragmentsList[i];\n		if( $("#" + fragID).length) {\n			delete scFragmentsList[i];\n			if( $("#"+ fragID + " [id^=table]").length ) {\n				$("#" + fragID + " [id^=table] .menuButtonLinks .btnHolder .menuTitle").on( "click" , {eventName: "TableOptionsButtonClickEvent", nav: false} , articleLinkEvent);\n				$("#" + fragID + " [id^=table] .menuButtonLinks .menuButton .viewWS.S_C_table_view_WS").on("click", {eventName: "ViewTableInWorkspaceClickEvent", nav: false} , articleLinkEvent);\n				$("#" + fragID + " [id^=table] .menuButtonLinks .menuButton .downloadCsv .S_C_csv_download").on("click", {eventName: "DownloadTableAsCSVClickEvent", nav: false} , articleLinkEvent);\n			}\n			if( $("#"+ fragID + " [id^=figure]").length) {\n				$("#" + fragID + " [id^=figure] .menuButtonLinks .btnHolder .menuTitle").on( "click", {eventName: "FigureOptionsButtonClickEvent", nav: false} , articleLinkEvent);\n				$("#" + fragID + " [id^=figure] a.figureLink").on( "click", { eventName: "ViewInWorkspaceImgClickEvent" , nav: false } , articleLinkEvent );\n				$("#" + fragID + " [id^=figure] .menuButtonLinks .menuButton .ppt.S_C_ppt").on( "click", { eventName: "DownloadAsPowerPointClickEvent" , nav: false } , articleLinkEvent );\n				$("#" + fragID + " [id^=figure] .menuButtonLinks .menuButton .S_C_full_size").on("click", { eventName: "DownloadFullSizeImageClickEvent" , nav: false } , articleLinkEvent );\n				$("#" + fragID + " [id^=figure] .menuButtonLinks .menuButton .S_C_high_quality").on("click", { eventName: "ViewHighQualityImageClickEvent" , nav: false } , articleLinkEvent );				\n			}\n		}\n		else {\n			return;\n		}\n	}\n	if(Fragment.isAllLoaded() == true) {\n		clearInterval(scFragmentWaitTimer);\n	}\n}'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"ArticleListURL"}]},
p:[{t:'c',c:'var alertCheck = s.getQueryParam("alertSearch");\nif(alertCheck != "") {\n	s.channel = "my alerts";\n	s.pageName = "alert results";\n	s.prop1 = "my alerts";\n	s.prop2 = s.prop1;\n	s.prop4 = "search list";\n} else {\n	s.channel = "search";\n	s.pageName = "search results";\n	s.prop1 = "search";\n	s.prop2 = s.prop1;\n	s.prop4 = "search list";\n	s.eVar40 = "Search";\n	s.eVar2 = s.getPreviousValue(\'Implicit\',\'gpv_e2\',\'\');\n	var expSearch = true;\n	if( s.eVar2 != "Explicit") {\n		s.eVar2 = "Implicit";\n		expSearch = false;\n	}\n	var searchType = s.getQueryParam("searchtype");\n	if(searchType != "i") {\n		searchType = "a";\n	}\n	s.eVar2 += "-" + searchType;\n	s.eVar58 = s.getQueryParam("_sort")||s.getQueryParam("sort")||"r";\n	\n	var nextCheck = s.getQueryParam("NEXT_LIST");\n    if (nextCheck == "") {\n		var refineForm=$("form[name$=Tag]");\n		refineForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\n		refineForm.on("submit",s_eventHandlers.refineResultsSearchSubmit);\n        var originCheck = s.getQueryParam("_origin");\n		\n        if(expSearch == true) {\n		s.events = s.apl(s.events, "event3", ",", 2);\n        	var results = ($("div.iconLinks:first").text()).match(/([0-9\\,]+).*found([\\s\\S][^.]*)/);\n        	if(results && results.length > 0) {   \n            	s.eVar3=(results[1].replace(/,/g,\'\'));\n            	if(document.title.indexOf(\' - \') >-1){\n            		s.eVar1=$.trim(document.title.split(\' - \')[1]);\n            	}\n            }\n        	if(!s.eVar1) {\n        		s.eVar1=\'Not Available\';			\n        	}\n        	var errorCheck = $("div.errMsgText").text();\n        	if (errorCheck != null && errorCheck != "") {		\n        		if($("div.msgText").text()){\n        			s.eVar1=($("div.msgText").text()).match(/(\\w+).*/)[0].split(\':\')[1];\n        		}else{\n        			s.eVar1=\'Not Available\';\n        		}\n        		s.eVar3="No Results";\n        		s.events = s.apl(s.events, "event4", ",", 2);		\n        	}	\n        }		\n    }\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/journal/"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="journal";\ns.prop1="journal";\ns.prop2=s.prop1;\ns.prop4="publication list";\ns.eVar40="Browse";\ns.eVar66="Journals";\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n  var path=window.location.pathname.split(\'/\');\n  if (path.length>=4) {\n	s.eVar14=path[3];\n	s.eVar28=path[3];\n	s.eVar67=s.eVar28;\n  }\n}\n\n$("a:contains(About this Journal)").unbind(\'click\'); //remove default click handler\n$( "a:contains(About this Journal)" ).bind( \'click\' , function( e ) {\n\n	s.eVar52="";\n	s.eVar53="journal:sdHeader:main_content:about this journal";\n	s.eVar54=\'+1\';\n	s.eVar55=\'+1\';\n	s.eVar56=s.pageName;\n			\n	s.events="event28";\n	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n	s.linkTrackEvents="event28";\n	s.tl( true,\'o\',"aboutThisJournalClickEvent");\n} );\n\n$("a:contains(Submit your Article)").unbind(\'click\'); //remove default click handler\n$( "a:contains(Submit your Article)" ).bind( \'click\' , function( e ) {\n\n	s.eVar52="";\n	s.eVar53="journal:sdHeader:main_content:submit your article";\n	s.eVar54=\'+1\';\n	s.eVar55=\'+1\';\n	s.eVar56=s.pageName;\n			\n	s.events="event28";\n	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n	s.linkTrackEvents="event28";\n	s.tl( true,\'o\',"submitYourArticleClickEvent");\n} );'}]},
{x:{h:["sciencedirect.com"],p:["/activateaccess"]},
p:[{t:'c',c:'s.channel="remote access";\ns.pageName="apply for remote access";\ns.prop1="apply";\ns.prop2=s.prop1;\ns.prop4="authentication";\n\n$( "form[name=\'REMOTEACCESSFORM\'] input[name=\'Submit\']" ).bind( \'click\' , function( e ) {\n\n	s.eVar52="";\n	s.eVar53="remote access:sdBody:sdHeader:applyForRemoteAccessSubmit";\n	s.eVar54=\'+1\';\n	s.eVar55=\'+1\';\n	s.eVar56=s.pageName;\n			\n	s.events="event28";\n	s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n	s.linkTrackEvents="event28";\n	s.tl( true,\'o\',"applyForRemoteAccessClickEvent", null , submitApplyForRemoteAccessForm );\n	e.preventDefault();\n} );\n\nfunction submitApplyForRemoteAccessForm() {\n	$( "form[name=\'REMOTEACCESSFORM\']" ).submit();\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/referenceworks"]},
p:[{t:'c',c:'//Note: need to prevent clash of /referenceworks browse vs homepage\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n	var path=window.location.pathname.split(\'/\');\n	if (path.length>=4 && path[3].length > 1) {\n\n		s.channel="publications";\n		s.pageName="refwork";\n		s.prop1="refwork";\n		s.prop2=s.prop1;\n		s.prop4="publication list";\n		s.eVar40="Browse";\n		s.eVar66="RefModules";\n\n		s.eVar14=path[3];\n		s.eVar28=path[3];\n		s.eVar67=s.eVar28;\n\n		var rwhForm=$("form.modulesearch");\n		rwhForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\n		rwhForm.on("submit",s_eventHandlers.refWorkHomeSearchSubmit);\n	}\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/handbooks"]},
p:[{t:'c',c:'//Note: need to prevent clash of /handbooks browse vs homepage\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n	var path=window.location.pathname.split(\'/\');\n	if (path.length>=4 && path[3].length > 1) {\n		s.channel="publications";\n		s.pageName="handbook";\n		s.prop1="handbook";\n		s.prop2=s.prop1;\n		s.prop4="publication list";\n		s.eVar40="Browse";\n		s.eVar66="Handbooks";\n		s.eVar14=path[3];\n		s.eVar28=path[3];\n		s.eVar67=s.eVar28;\n	}\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/book/"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="book";\ns.prop1="book";\ns.prop2=s.prop1;\ns.prop4="publication list";\ns.eVar40="Browse";\ns.eVar66="Books";\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n  var path=window.location.pathname.split(\'/\');\n  if (path.length>=4) {\n	s.eVar14=path[3];\n	s.eVar28=path[3];\n	s.eVar67=s.eVar28;\n  }\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/bookseries"]},
p:[{t:'c',c:'//Note: need to prevent clash of /bookseries browse vs homepage\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n	var path=window.location.pathname.split(\'/\');\n	if (path.length>=4 && path[3].length > 1) {\n		s.channel="publications";\n		s.pageName="bookseries";\n		s.prop1="bookseries";\n		s.prop2=s.prop1;\n		s.prop4="publication list";\n		s.eVar40="Browse";\n		s.eVar66="BookSeries"\n		s.eVar14=path[3];\n		s.eVar28=path[3];\n		s.eVar67=s.eVar28;\n	}\n}'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"MiamiSearchURL"}]},
p:[{t:'c',c:'searchPageName();'}]},
{x:{h:["www.sciencedirect.com"],p:["/search"]},
p:[{t:'c',c:'searchPageName();'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"RefWorkIndexURL"}]},
p:[{t:'c',c:'s.channel = "publications";\ns.pageName="reference works";\ns.prop1="reference works";\ns.prop2=s.prop1;\ns.prop4="publication list";\ns.eVar40="Browse";\ns.eVar66="RefModules";\nvar cid=s.getQueryParam("_cid");\nif(cid){\n	s.eVar67=cid;\n}\n// DETERMINE TYPE OF VIEW?\n/*\nvar method = s.getQueryParam("_idxType");\nif (method == "GI") {\n   s.pageName = "publications:referenceworks:general information";\n} else if (method == "AU") {\n   s.pageName = "publications:referenceworks:authors";\n} else if (method == "AR") {\n   s.pageName = "publications:referenceworks:article titles";\n} else if (method == "GG") {\n    s.pageName = "publications:referenceworks:glossary";\n} else if (method == "SI") {\n    s.pageName = "publications:referenceworks:subject index";\n}\n*/'}]},
{x:{h:["www.sciencedirect.com"],p:["/tomb"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="tombstone";\ns.prop1="journal";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencedirect.com"],p:["/journal/aip"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="aip";\ns.prop1="journal";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencedirect.com"],p:["/journal/latest"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="latest vi";\ns.prop1="journal";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"ShoppingCartURL"}]},
p:[{t:'c',c:'s.channel = "shopping cart";\ns.pageName="shopping cart";\ns.prop1="shopping cart";\ns.prop2=s.prop1;\ns.prop4="shopping cart";\ns.events = "scView";\n\nvar artList = $(".cartRsltRow td.cartRsltCitation h2 a");\nvar delim = "";\ns.products = "";\n\nfor (var i = 0; i < artList.length; i++) {\n	var rslt1 = $(artList[i]).attr("id").match(/title_(\\w*)/);\n	s.products = s.products + delim + ";" + rslt1[1];\n	delim = ","\n}\n\nvar scAdd = $("#sdHeader span.errMsg").text().match(/added to your shopping cart/);\nif( scAdd != null) {\n	s.events = "scAdd," + s.events;\n}'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"MiamiSDIURL"}]},
p:[{t:'c',c:'s.channel="my alerts";\nvar method=s.getQueryParam("_method");\nif (method=="listAlerts") {\n    s.prop1="my alerts";\n    s.pageName="my alerts list";\n} else if (method=="alertDateResult") {\n    s.prop1="search alerts";\n    s.pageName="search alert archive";\n} else if (method=="modifyAlert") {\n    s.prop1="search alerts";\n    s.pageName="modify search alert";\n}else if (method == "saveAlertPage" || method == "saveAlert") {\n	s.prop1="search alerts";\n	s.pageName="save search alert";\n}\n\ns.prop2=s.prop1;\ns.prop4="alert list";\n\nvar saveAlertForm=$("div.pageContent").find("form");\nsaveAlertForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nsaveAlertForm.on("submit",{alertType:\'Search Alert\'},s_eventHandlers.saveAlertSubmit);'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"TopicAlertURL"}]},
p:[{t:'c',c:'s.channel="my alerts";\ns.prop1="topic alerts";\ns.prop2=s.prop1;\ns.prop4="alert list";\nvar method=s.getQueryParam("_method");\nif (method=="topicAlertList") {\n    s.pageName="topic alerts list";\n} else if (method=="TopicCategories") {\n    s.pageName="topic alerts category";\n} else if (method=="topicAlertDateResult") {\n    s.pageName="topic alerts archive";\n} else if (method=="topicAlertResult") {\n    s.pageName="topic alerts latest results";\n}\n\nvar saveAlertForm=$("form[name=\'TopicList\']");\nsaveAlertForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nsaveAlertForm.on("submit",{alertType:\'Topic Alert\'},s_eventHandlers.saveAlertSubmit);'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"UserSubscriptionURL"}]},
p:[{t:'c',c:'s.channel="home";\ns.prop1="my settings";\ns.prop2=s.prop1;\ns.prop4="account";\ns.channel = "my settings";\nvar method=s.getQueryParam("_method");\nvar pgContent=$(\'div.pageContent\');\nif (method=="begin") {\n    s.pageName="my settings overview";\n} else if (method=="viewProfile") {\n    s.pageName="modify profile";\n	pgContent.find(\'input.button\').on(\'click\',function(e) {s_eventHandlers.clickTarget=this;});\n	pgContent.find("form[name=personalProfile]").on("submit",{eventName: \'ModifyProfileClickEvent\'}, s_eventHandlers.userProfileSubmit);\n} else if (method=="changePassword") {\n    s.pageName="change password";\n    pgContent.find(\'input.button\').on(\'click\',function(e) {s_eventHandlers.clickTarget=this;});\n    pgContent.find(\'form\').on(\'submit\',{eventName: \'ChangePasswordClickEvent\'},s_eventHandlers.userProfileSubmit);\n}'}]},
{x:{h:["www.sciencedirect.com"],p:["/contactus"]},
p:[{t:'c',c:'s.channel="home";\ns.pageName="contact us";\ns.prop1="home";\ns.prop2=s.prop1;\ns.prop4="contact us";'}]},
{x:{h:["www.sciencedirect.com"],q:[{k:"_ob",v:"EmailFriendURL"}]},
p:[{t:'c',c:'s.channel="email";\ns.pageName="email";\ns.prop1="email";\ns.prop2=s.prop1;\ns.prop4="email";'}]},
{x:{h:["www.sciencediret.com"],q:[{k:"_ob",v:"DownloadURL"}]},
p:[{t:'c',c:'s.channel="export";\ns.pageName="export";\ns.prop1="export";\ns.prop2=s.prop1;\ns.prop4="export";'}]},
{x:{h:["www.sciencdirect.com"],p:["/bookseries/latest"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="latest vi";\ns.prop1="bookseries";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencedirect.com"],p:["/handbooks/latest"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="latest vi";\ns.prop1="handbooks";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencdirect.com"],q:[{k:"_ob",v:"TitleSrchURL"}]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="title search";\ns.prop1="search";\ns.prop2=s.prop1;\ns.prop4="publication list";'}]},
{x:{h:["www.sciencedirect.com"],p:["/error"]},
p:[{t:'c',c:'s.channel="error";\ns.pageName="404: http://www.sciencedirect.com/404";\ns.prop1="error";\ns.prop2=s.prop1;\ns.prop4="error page";\ns.pageType="errorPage";'}]},
{x:{h:["sdpts.sciencedirect.com"],p:["/prepsdcartparms.do"]},
p:[{t:'c',c:'s.channel="Home";\ns.pageName="SDPTS AddressInfo";\ns.prop1="Home";\ns.prop2=s.prop1;\ns.prop4="Shopping Cart";\n\ns.events="event15,event16";\n\nvar scpForm=$("form[name=paymentDataForm]");\nscpForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nscpForm.on("submit",s_eventHandlers.scPaymentInfoSubmit);'}]},
{x:{h:["www.sciencedirect.com"],p:["science/alerts"]},
p:[{t:'c',c:'s.channel="my alerts";\ns.prop1="my alerts";\ns.pageName="my alerts list";\ns.prop2=s.prop1;\ns.prop4="alert list";\n \n//My alerts page - delete alert\n$(\'a.deleteAlert\').on(\'click\',function(e){\n	var href=$(this).attr(\'href\');\n	if(href){\n		if(href.indexOf(\'serial-alerts\') >-1){\n			s.eVar26=\'Journal Alert\';\n		}else if (href.indexOf(\'TopicAlertURL\') >-1){\n			s.eVar26=\'Topic Alert\';\n		}else if(href.indexOf(\'MiamiSDIURL\') >-1){\n			s.eVar26=\'Search Alert\';\n		}\n	}\n	s.linkTrackVars="events,eVar26";\n	s.events="event13";\n	s.linkTrackEvents="event13";		\n	s.tl(true,\'o\',\'deleteAlertClick\');\n	s.eVar26=null;\n        s.events=null;\n        s.linkTrackVars=null;\n        s.linkTrackEvents=null;\n});\n	\n//My alerts edit alert click\n$(\'a.editAlert,a.editEmail\').on(\'click\',function(e){\n	var href=$(this).attr(\'data-url\');\n	if(href){\n		if(href.indexOf(\'serial-alerts\') >-1){\n			s.eVar26=\'Journal Alert\';\n		}else if (href.indexOf(\'TopicAlertURL\') >-1){\n			s.eVar26=\'Topic Alert\';\n		}else if(href.indexOf(\'MiamiSDIURL\') >-1){\n			s.eVar26=\'Search Alert\';\n		}\n	}\n	s.linkTrackVars="events,eVar26";\n	s.events="event39";\n	s.linkTrackEvents="event39";		\n	s.tl(true,\'o\',\'editAlertClick\');\n	s.eVar26=null;\n        s.events=null;\n        s.linkTrackVars=null;\n        s.linkTrackEvents=null;\n});\n	\n//My alerts edit alert save\n$(\'ul.extLinkBlock\').find(\'input.button\').on(\'click\',function(e){\n	var alertCategory=myAlert.currentRow.parents(\'table\') .attr(\'data-type\');\n	var frequency,nonEditfrequency,actualFreq;\n	if (alertCategory == \'journal\') {\n		s.eVar26=\'Journal Alert\';		            \n        nonEditfrequency = myAlert.container.find(\'.notEditable\') .text();\n        frequency = myAlert.container.find(\'.frequency\') .val();\n		if (!myAlert.container.find(\'#lblTOC\') .prop(\'checked\') && myAlert.container.find(\'#lblAIP\') .prop(\'checked\')) {\n           nonEditfrequency =\'\';\n        }\n		actualFreq=(nonEditfrequency?nonEditfrequency:frequency);\n		s.eVar42=actualFreq;	\n	}\n	else if(alertCategory == \'search\'){\n		if(!myAlert.container.hasClass(\'email\')){\n			frequency = myAlert.container.find(\'.frequency option:selected\') .text();\n		}else{\n			frequency = myAlert.currentRow.find(\'td\') .eq(0) .text();\n		}\n		s.eVar26=\'Search Alert\';\n		s.eVar42=$.trim(frequency);\n	}\n	s.linkTrackVars="events,eVar26,eVar42";\n	s.events="event14";\n	s.linkTrackEvents="event14";		\n	s.tl(true,\'o\',\'editAlertSave\');\n	s.eVar26=null;\n	s.eVar42=null;\n        s.events=null;\n        s.linkTrackVars=null;\n        s.linkTrackEvents=null;\n	});'}]},
{x:{h:["sdpts.sciencedirect.com"],p:["/paymentData.do"]},
p:[{t:'c',c:'s.channel="Home";\ns.pageName="SDPTS Confirm";\ns.prop1="Home";\ns.prop2=s.prop1;\ns.prop4="Shopping Cart";\n\ns.events="scCheckout";\n\nvar artList = $("#form table tbody table tbody td strong h2 a");\nvar delim = "";\ns.products = "";\n\ns.zip = s.getPreviousValue(s.zip,\'gpv_z\',\'\');\ns.getPreviousValue(s.zip,\'gpv_z\',\'\');\ns.eVar64 = s.getPreviousValue(s.eVar64,\'gpv_e64\',\'\');\ns.getPreviousValue(s.eVar64,\'gpv_e64\',\'\');\n\nfor (var i = 0; i < artList.length; i++) {\n	var rslt1 = $(artList[i]).attr("id").match(/title_(\\w*)/);\n	s.products = s.products + delim + ";" + rslt1[1];\n	delim = ","\n}'}]},
{x:{h:["sdpts.sciencedirect.com"],p:["/cartConfirm.do"]},
p:[{t:'c',c:'s.channel="Home";\ns.pageName="SDPTS Receipt";\ns.prop1="Home";\ns.prop2=s.prop1;\ns.prop4="Shopping Cart";\n\ns.events="purchase";\n\ns.purchaseID = $("#sdBody > table.tableBottomReceipt > tbody > tr:nth-child(1) > td > b").text();\ns.eVar65 = s.purchaseID;\n\nvar artList = $("#sdBody > table:nth-child(1) > tbody > tr > td:nth-child(1) > table > tbody strong > h2 > a");\nvar priceList = $("#sdBody > table:nth-child(1) > tbody > tr > td:nth-child(1) > table > tbody td[align=right] b");\nvar delim = "";\ns.products = "";\n\ns.zip = s.getPreviousValue(s.zip,\'gpv_z\',\'\');\ns.eVar64 = s.getPreviousValue(s.eVar64,\'gpv_e64\',\'\');\n\nfor (var i = 0; i < artList.length; i++) {\n	var rslt1 = $(artList[i]).attr("id").match(/title_(\\w*)/);\n	var rslt2 = $(priceList[i]).text().match(/\\$([\\w\\.]*)/);\n	s.products = s.products + delim + ";" + rslt1[1] + ";1;" + rslt2[1];\n	delim = ","\n}'}]},
{x:{h:["sdpts.sciencedirect.com"],p:["/paymentData.jsp"]},
p:[{t:'c',c:'s.channel="Home";\ns.pageName="SDPTS AddressInfo Reload";\ns.prop1="Home";\ns.prop2=s.prop1;\ns.prop4="Shopping Cart";\n\ns.events="event15,event16";\n\nvar scpForm=$("form[name=paymentDataForm]");\nscpForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nscpForm.on("submit",s_eventHandlers.scPaymentInfoSubmit);'}]},
{x:{h:["www.sciencedirect.com"],p:["science/serial-alerts/"]},
p:[{t:'c',c:'s.channel="my alerts";\ns.prop1="my alerts";\ns.pageName="save journal or book-series alert";\ns.prop2=s.prop1;\ns.prop4="alert list";\n\nvar saveAlertForm=$("form.serialAlertForm");\nsaveAlertForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nsaveAlertForm.on("submit",{alertType:\'Journal Alert\'},s_eventHandlers.saveAlertSubmit);'}]},
{x:{h:["www.sciencedirect.com"],p:["/module/topic"]},
p:[{t:'c',c:'s.channel="publications";\ns.pageName="refwork";\ns.prop1="refwork";\ns.prop2="topic";\ns.prop4="publication list";\nif (typeof(window)!=undefined&&\n    typeof(window.location)!=undefined&&\n    typeof(window.location.pathname)!=undefined) {\n  var path=window.location.pathname.split(\'/\');\n  if (path.length>=5) {\n	s.eVar14=path[4];\n	s.eVar28=path[4];\n	s.eVar59=path[5];\n	s.eVar60= $.trim($("div.module_title1").text());\n	\n  }\n}\n\nvar rwcForm=$("form.modulesearch");\nrwcForm.find("input[type=submit]").on("click",function(e) {s_eventHandlers.clickTarget=this;});\nrwcForm.on("submit",s_eventHandlers.refWorkConceptSearchSubmit);'}]},
{x:{h:["sciencedirect.com"],p:["activateaccess/activate"]},
p:[{t:'c',c:'//First check if going directly to sign on page\n//If not, then fall through to Choose Org\nvar isRASignOn=$(\'div#sdBody.pageText div.pageHeading\').text().match(\'Sign in to activate remote\');\n\n\nif(isRASignOn) {\n	s.channel="remote access";\n	s.pageName="sign in to activate remote access";\n	s.prop1="sign in";\n	s.prop2=s.prop1;\n	s.prop4="authentication";\n	\n	var remoteAccess = {\n	\n		submitSignInToActivateForm : function() {\n			$( "form[name=\'Form1\']" ).submit();\n		} ,\n	\n		remoteAccessClickEvent : function( event ) { \n			s.eVar52="";\n			s.eVar53="remote access:sdBody:pageContent:" + event.data.action;\n			s.eVar54=\'+1\';\n			s.eVar55=\'+1\';\n			s.eVar56=s.pageName;\n					\n			s.events="event28";\n			s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n			s.linkTrackEvents="event28";\n	\n			if ( event.data.navAfterReturn ) {\n				s.tl( true , \'o\' , event.data.eventName , null , remoteAccess.navigateAfterReturn( event.target.href ) );\n				event.preventDefault();\n			}\n			else {\n				s.tl( true , \'o\' , event.data.eventName );\n			}\n		} ,\n	\n		navigateAfterReturn : function(url) {		\n			window.location.href=url;\n		}\n	};\n\n	$( "form[name=\'Form1\'] input[value=\'Sign in\']" ).unbind( \'click\');	\n	$( "form[name=\'Form1\'] input[value=\'Sign in\']" ).bind( \'click\' , function( e ) {\n	\n		s.eVar52="";\n		s.eVar53="remote access:sdBody:pageContent:submitSignInToActivateForm";\n		s.eVar54=\'+1\';\n		s.eVar55=\'+1\';\n		s.eVar56=s.pageName;\n				\n		s.events="event28";\n		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n		s.linkTrackEvents="event28";\n		s.tl( true,\'o\',"signInToActivateRemoteAccessClickEvent", null , remoteAccess.submitSignInToActivateForm);\n		e.preventDefault();\n	} );\n	\n	$( "form[name=\'Form1\'] a:contains(\'Register Now\')" ).bind( \'click\' , { action: \'registerNowLink\' , eventName: \'registerNowRemoteAccessClickEvent\' , navAfterReturn: true } , remoteAccess.remoteAccessClickEvent );\n	$( "form[name=\'Form1\'] a:contains(\'Forgotten username\')" ).bind( \'click\' , { action: \'forgottenUserNameLink\' , eventName: \'forgottenNameRemoteAccessClickEvent\' , navAfterReturn: false } , remoteAccess.remoteAccessClickEvent );\n	$( "form[name=\'Form1\'] a:contains(\'Cancel\')" ).bind( \'click\' , { action: \'cancelLink\' , eventName: \'cancelRemoteAccessClickEvent\' , navAfterReturn: true } , remoteAccess.remoteAccessClickEvent );\n}\nelse {\n	s.channel="remote access";\n	s.pageName="choose organization for remote access";\n	s.prop1="choose organization";\n	s.prop2=s.prop1;\n	s.prop4="authentication";\n	\n	$( "form[name=\'REMOTE_ACCESS_CHOOSEORG_FORM\'] input[value=\'Continue\']" ).unbind(\'click\');\n	$( "form[name=\'REMOTE_ACCESS_CHOOSEORG_FORM\'] input[value=\'Continue\']" ).bind( \'click\' , function( e ) {\n	\n		s.eVar52="";\n		s.eVar53="remote access:sdBody:pageContent:chooseRemoteAccessOrganizationSubmit";\n		s.eVar54=\'+1\';\n		s.eVar55=\'+1\';\n		s.eVar56=s.pageName;\n				\n		s.events="event28";\n		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n		s.linkTrackEvents="event28";\n		s.tl( true,\'o\',"chooseRemoteAccessOrganizationClickEvent", null , submitChooseOrganizationForm);\n		e.preventDefault();\n	} );\n	\n	\n	function submitChooseOrganizationForm() {\n		$( "form[name=\'REMOTE_ACCESS_CHOOSEORG_FORM\']" ).submit();\n	}\n}'}]},
{x:{h:["sciencedirect.com"],p:["/login"]},
p:[{t:'c',c:'//First make sure we are coming from activateaccess\n//If not, then don\'t record as Remote Access\nvar referrerURL=document.referrer;\nvar isRASignOn=$(\'div#sdBody.pageText div.pageHeading\').text().match(\'Sign in to activate remote\');\nif(referrerURL) {\n	referrerURL.toLowerCase();\n	var fromAA=referrerURL.match("activateaccess");\n}\n\nif(fromAA && isRASignOn && isRASignOn.length > 0) {\n	s.channel="remote access";\n	s.pageName="sign in to activate remote access";\n	s.prop1="sign in";\n	s.prop2=s.prop1;\n	s.prop4="authentication";\n	\n	var remoteAccess = {\n	\n		submitSignInToActivateForm : function() {\n			$( "form[name=\'Form1\']" ).submit();\n		} ,\n	\n		remoteAccessClickEvent : function( event ) { \n			s.eVar52="";\n			s.eVar53="remote access:sdBody:pageContent:" + event.data.action;\n			s.eVar54=\'+1\';\n			s.eVar55=\'+1\';\n			s.eVar56=s.pageName;\n					\n			s.events="event28";\n			s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n			s.linkTrackEvents="event28";\n	\n			if ( event.data.navAfterReturn ) {\n				s.tl( true , \'o\' , event.data.eventName , null , remoteAccess.navigateAfterReturn( event.target.href ) );\n				event.preventDefault();\n			}\n			else {\n				s.tl( true , \'o\' , event.data.eventName );\n			}\n		} ,\n	\n		navigateAfterReturn : function(url) {		\n			window.location.href=url;\n		}\n	};\n\n	$( "form[name=\'Form1\'] input[value=\'Sign in\']" ).unbind( \'click\');	\n	$( "form[name=\'Form1\'] input[value=\'Sign in\']" ).bind( \'click\' , function( e ) {\n	\n		s.eVar52="";\n		s.eVar53="remote access:sdBody:pageContent:submitSignInToActivateForm";\n		s.eVar54=\'+1\';\n		s.eVar55=\'+1\';\n		s.eVar56=s.pageName;\n				\n		s.events="event28";\n		s.linkTrackVars="events,eVar52,eVar53,eVar54,eVar55,eVar56";\n		s.linkTrackEvents="event28";\n		s.tl( true,\'o\',"signInToActivateRemoteAccessClickEvent", null , remoteAccess.submitSignInToActivateForm);\n		e.preventDefault();\n	} );\n	\n	$( "form[name=\'Form1\'] a:contains(\'Register Now\')" ).bind( \'click\' , { action: \'registerNowLink\' , eventName: \'registerNowRemoteAccessClickEvent\' , navAfterReturn: true } , remoteAccess.remoteAccessClickEvent );\n	$( "form[name=\'Form1\'] a:contains(\'Forgotten username\')" ).bind( \'click\' , { action: \'forgottenUserNameLink\' , eventName: \'forgottenNameRemoteAccessClickEvent\' , navAfterReturn: false } , remoteAccess.remoteAccessClickEvent );\n	$( "form[name=\'Form1\'] a:contains(\'Cancel\')" ).bind( \'click\' , { action: \'cancelLink\' , eventName: \'cancelRemoteAccessClickEvent\' , navAfterReturn: true } , remoteAccess.remoteAccessClickEvent );\n} else {\n	s.channel="authentication";\n	s.pageName="choose organization";\n	s.prop1="choose org";\n	s.prop2=s.prop1;\n	s.prop4="authentication";\n}'}]}];
s_tc_sciencedirect.cr();