<!--
/*
// 뉴 윈도우  - 사진
function viewImage(name,url,width,height,caption)
{

	if (caption == null) {
		caption = " ";
	}
	width_str = width + 40;
	height_str = height + 100;
  	newWindow = window.open('',name,'left=0,top=0,width='+width_str+',height='+height_str+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
	if (newWindow != null && newWindow.opener == null)
		newWindow.opener = window;
		newWindow.document.write("<html><head><title>Image View</title>\n");
		//newWindow.document.write("</head><body>\n");
		newWindow.document.write("</head><body background='/kr/imgs/popup_bg_2.gif' onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);moveTo((screen.width - (document.images[0].width + 40)) / 2, (screen.height - (document.images[0].height + 130)) / 2)'>\n");
		//newWindow.document.write("</head><body onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);'>\n");
		newWindow.document.write("<div align=center><Table border=0 cellpadding=0  cellspacing=0>\n");
		newWindow.document.write("<tr height='40' style='color:#6E684C;font-size:15px;font-weight:bold;' align='center'><td>⊙ "+caption+"</td></tr>\n");
		newWindow.document.write("<tr><td height='2' bgcolor='#6B6549'></td></tr><tr><td height='2'></td></tr>");
		newWindow.document.write("<tr><td align=center>");
		newWindow.document.write("<img src='/kr/L_image/"+url+"' border=0 style='border:1px solid #948D6C;' onfocus='blur();' onClick='javascript:self.close()'>");
		newWindow.document.write("</td></tr><tr><td align=right style=padding-right:5px;'><a href='#' onfocus='blur();'onClick='javascript:self.close()'><img src='/kr/imgs/popup_close2.gif' border='0'></a>");
		newWindow.document.write("</td></tr><tr><td height=3></td></tr>");
		newWindow.document.write("<tr><td align=center><img src='/kr/imgs/popup_copyright1_2.gif' border='0'></td></tr>");
		newWindow.document.write("</table></div></body></html>");
		//newWindow.document.close();
}
*/
// 뉴 윈도우  - 사진
function viewImage(name,url,width,height,caption)
{

	if (caption == null) {
		caption = " ";
	}
	width_str = width + 40;
	height_str = height + 100;
  	newWindow = window.open('',name,'left=0,top=0,width='+width_str+',height='+height_str+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
	if (newWindow != null && newWindow.opener == null)
		newWindow.opener = window;
		newWindow.document.write("<html><head><title>Image View</title>\n");
		newWindow.document.write("<BODY bgcolor='#EEECEA' onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);moveTo((screen.width - (document.images[0].width + 40)) / 2, (screen.height - (document.images[0].height + 130)) / 2)'>\n");
        newWindow.document.write("<TABLE width='100%' border='0'>");
        newWindow.document.write("<TR><TD height='20' align='center'><font style='font-family:굴림;font-size:12px;color:#666666;font-weight:bold;'>"+caption+"</font></TD></TR>");
        newWindow.document.write("<TR><TD><TABLE width='100%'>");
        newWindow.document.write("<TR><TD width='20'></TD>");
        newWindow.document.write("<TD align='center'><img src='/kr/L_image/"+url+"' border=0 style='border:1px solid #C6C2BD;' onfocus='blur();' onClick='javascript:self.close()'></TD>");
        newWindow.document.write("<TD width='20'></TD></TR></TABLE></TD></TR>");
        newWindow.document.write("<TR><TD><TABLE width='100%' border='0'><TR>");
        newWindow.document.write("<TD width='57'></TD><TD align='center'><img src='/kr/preserv/tools/img/copyright2.gif'  border='0'></TD>");
        newWindow.document.write("<TD align='right' width='57'><a href='#' onClick='javascript:self.close()'><img src='/kr/preserv/tools/img/btn_close.gif'  border='0'></a></TD>");
        newWindow.document.write("</TR></TABLE></TD></TR></TABLE>");
        newWindow.document.write("</BODY></HTML>");
		//newWindow.document.close();
}

// 뉴 윈도우
function viewImage2(name,url,width,height,caption)
{
	if (caption == null) {
		caption = " ";
	}
		//newWindow = window.open(str,"ViewImage","status=yes,resialble=no,menubar=no,scrollbars=yes,width=1010,height=720");

	width_str = width + 40;
	height_str = height + 110;
  	newWindow = window.open("/kr/newWin/image_view.jsp?caption="+caption+"&url="+url,"ViewImage","left=0,top=0,width="+width_str+",height="+height_str+",toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no");
}


// 뉴 윈도우  - 고고학사전
function viewImage3(name,url,width,height,caption)
{

	if (caption == null) {
		caption = " ";
	}
	width_str = width + 40;
	height_str = height + 100;
  	newWindow = window.open('',name,'left=0,top=0,width='+width_str+',height='+height_str+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
	if (newWindow != null && newWindow.opener == null)
		newWindow.opener = window;
		newWindow.document.write("<html><head><title>Image View</title>\n");
		//newWindow.document.write("</head><body>\n");
		newWindow.document.write("</head><body background='/kr/imgs/popup_bg_2.gif' onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);moveTo((screen.width - (document.images[0].width + 40)) / 2, (screen.height - (document.images[0].height + 130)) / 2)'>\n");
		//newWindow.document.write("</head><body onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);'>\n");
		newWindow.document.write("<div align='center'><Table border='0' cellpadding='0'  cellspacing='0'>\n");
		newWindow.document.write("<tr height='40' style='color:#6E684C;font-size:15px;font-weight:bold;' align='center'><td>⊙ "+caption+"</td></tr>\n");
		newWindow.document.write("<tr><td height='2' bgcolor='#6B6549'></td></tr><tr><td height='2'></td></tr>");
		newWindow.document.write("<tr><td align='left'>");
		newWindow.document.write("<img src='./pic/"+url+"' border=0 style='border:1px solid #948D6C;' onfocus='blur();' onClick='javascript:self.close()'>");
		newWindow.document.write("</td></tr><tr><td align=right style=padding-right:55px;'><a href='#' onfocus='blur();' onClick='javascript:self.close()'><img src='/kr/imgs/popup_close2.gif' border='0'></a>");
		newWindow.document.write("</td></tr><tr><td height=3></td></tr>");
		newWindow.document.write("<tr><td align=center><img src='/kr/imgs/popup_copyright1_2.gif' border='0'></td></tr>");
		newWindow.document.write("</table></div></body></html>");
		//newWindow.document.close();
}

// 프리로드
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

// 점프메뉴
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}



function resize_iframe(ifrmName, ifrmHeight){
	document.all(""+ifrmName).style.height = ifrmHeight;
//높이는 스크롤 등을 봐서 적당히 조절
}

// 뉴 윈도우  - 내용
/*
function viewPopup(name,url,width,height,caption)
{

	if (caption == null) {
		caption = " ";
	}
	width_str = width + 40;
	height_str = height + 100;
  	newWindow = window.open('',name,'left=0,top=0,width='+width_str+',height=600,toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes');
	if (newWindow != null && newWindow.opener == null)
		newWindow.opener = window;
		newWindow.document.write("<html><head><title>"+caption+"</title>\n");
		newWindow.document.write("</head><body background='/kr/imgs/popup_bg2_2.gif' onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);moveTo((screen.width - (document.images[0].width + 40)) / 2, (screen.height - (document.images[0].height + 130)) / 2)'>\n");
		newWindow.document.write("<div align=center><Table border=0 cellpadding=0  cellspacing=0>\n");
		newWindow.document.write("<tr height='40' style='color:#3B3B3B;font-size:15px;font-weight:bold;' align='center'><td><a name='top'>⊙ "+caption+"</td></tr>\n");
		newWindow.document.write("<tr><td height='2' bgcolor='#333333'></td></tr><tr><td height='2'></td></tr>");
		newWindow.document.write("<tr><td valign=top><TABLE Border=0 Cellpadding=0 cellspacing=1 width=100% bgcolor=#333333><TR bgcolor='#FFFFFF'><TD align=center>");
		newWindow.document.write("<iframe src='/kr/"+url+"' style='border:0;' frameborder='0' width='"+width+"' height='"+height+ "' scrolling='no' id='popFrame' name='popFrame'></iframe>");
		newWindow.document.write("</TD></TR></TABLE></td></tr><tr><td align=right style='padding-right:5px;'><a href='#top' onfocus='blur();'><img src='/kr/imgs/popup_top2.gif' border='0'></a>");
		newWindow.document.write("</td></tr><tr><td height=3></td></tr>");
		newWindow.document.write("<tr><td align=center><img src='/kr/imgs/popup_copyright2_2.gif' border='0'></td></tr>");
		newWindow.document.write("</table></div></body></html>");
		//newWindow.document.close();
}
*/

// 뉴 윈도우  - 내용
function viewPopup(name,url,width,height,caption)
{

	if (caption == null) {
		caption = " ";
	}
	width_str = width + 60;
	height_str = height + 100;
  	newWindow = window.open('',name,'left=0,top=0,width='+width_str+',height=600,toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes');
	if (newWindow != null && newWindow.opener == null)
		newWindow.opener = window;
		newWindow.document.write("<HTML><HEAD><title>"+caption+"</title></HEAD>\n");
		newWindow.document.write("<BODY bgcolor='#DDDAD6' onload='resizeTo(document.images[0].width + 40,document.images[0].height + 130);moveTo((screen.width - (document.images[0].width + 40)) / 2, (screen.height - (document.images[0].height + 130)) / 2)'>\n");
		newWindow.document.write("<TABLE width='100%' cellspacing='0' cellpadding='0' border='0'>\n");
		newWindow.document.write("<TR><TD width='10' height='10'><img src='/kr/preserv/tools/img/bg_top_left.gif' border='0'></TD>\n");
		newWindow.document.write("<TD background='/kr/preserv/tools/img/bg_top_middle.gif'></TD>\n");
		newWindow.document.write("<TD width='10'><img src='/kr/preserv/tools/img/bg_top_right.gif' border='0'></TD></TR><TR>\n");
		newWindow.document.write("<TD background='/kr/preserv/tools/img/bg_left.gif'></TD>\n");
		newWindow.document.write("<TD bgcolor='#ffffff' align='center'>\n");
		newWindow.document.write("<TABLE width='100%' height='40' cellspacing='0' cellpadding='0' border='0'>\n");
		newWindow.document.write("<TR><TD width='14'><img src='/kr/preserv/tools/img/bigtitle_left.gif' border='0'></TD>\n");
		newWindow.document.write("<TD width='15' bgcolor='#A69D8C'><img src='/kr/preserv/tools/img/icon_bigtitle.gif' border='0'></TD>\n");
		newWindow.document.write("<TD bgcolor='#A69D8C'><font style='font-family:굴림;font-size:14px;color:#ffffff;font-weight:bold;'>"+caption+"</font></TD>\n");
		newWindow.document.write("<TD width='14'><img src='/kr/preserv/tools/img/bigtitle_right.gif' border='0'></TD></TR></TABLE>\n");
		newWindow.document.write("<TABLE width='100%' cellspacing='0' cellpadding='0' border='0'>\n");
		newWindow.document.write("<TR><TD height='10'></TD></TR></TABLE>\n");
		newWindow.document.write("<iframe src='/kr/"+url+"' style='border:0;' frameborder='0' width='"+width+"' height='"+height+"' scrolling='no' id='popFrame' name='popFrame'></iframe>\n");
		newWindow.document.write("</TD><TD background='/kr/preserv/tools/img/bg_right.gif'></TD></TR>\n");
		newWindow.document.write("<TR><TD height='10'><img src='/kr/preserv/tools/img/bg_bottom_left.gif' border='0'></TD>\n");
		newWindow.document.write("<TD background='/kr/preserv/tools/img/bg_bottom_middle.gif'></TD>\n");
		newWindow.document.write("<TD height='10'><img src='/kr/preserv/tools/img/bg_bottom_right.gif' border='0'></TD></TR></TABLE>\n");
		newWindow.document.write("<TABLE width='100%' height='40' cellspacing='0' cellpadding='0' border='0'>\n");
		newWindow.document.write("<TR><TD align='center'><img src='/kr/preserv/tools/img/copyright.gif' border='0'></TD>\n");
		newWindow.document.write("<TD width='40'><a href='javascript:self.close();'><img src='/kr/imgs/btn_close.gif' border='0'></a></TD></TR>\n");
		newWindow.document.write("</TABLE></BODY></HTML>\n");
		//newWindow.document.close();
}

//보유기기 오픈
function na_open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';

  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);

}

function keywordCheck()
{
  if(document.frmFind.keyword.value=="")
  {
    alert("검색어를 입력해주세요");
    document.frmFind.keyword.focus();
    return false;
  }
  return true;
}

function goFind()
{
	if (keywordCheck())
		document.frmFind.submit()
}

//동영상보기
function showMovie(media_url) {
	var left = (screen.width - 526) / 2
	var top = (screen.height - 473) / 2
	var url= "/kr/vod/wm.jsp?media_url=" + media_url
	open(url, '', "left=" + left + ",top=" + top +",width=350,height=348,toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no")
}

//참여마당-과제제안
function OpenWin_0218(){
   window.open('http://www.nrich.go.kr/culture_web/','web','width=1024,height=768,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=150,top=100');
}

//국민참여마당
function OpenWin_1119(){
   window.open('http://221.145.178.209/ppc/','ppc','width=1070,height=668,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=150,top=100');
}

//홍보창-한가위 민속놀이
function OpenWin_0911(){
   window.open('http://www.nrich.go.kr/kr/hanga/','hanga','width=716,height=770,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=150,top=100');
}

//-->
