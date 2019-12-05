function multithumber_expand(img, src) {
  if(img.src != src) {
    img.oldsrc = img.src;
    img.src = src;
  }
  else {
    img.src = img.oldsrc;
  }
  img.style.width = "";
  img.style.height = "";

  return false;

}

function thumbWindow(mypage, myname, w, h,fit_to_screen, imgtoolbar) {
	var props = '';
	var orig_w = w;
	var scroll = '';
	var winl = (screen.availWidth - w) / 2;
	var wint = (screen.availHeight - h) / 2;
	if (winl < 0) { winl = 0; w = screen.availWidth -6; scroll = 1;}
	if (wint < 0) { wint = 0; h = screen.availHeight - 32; scroll = 1;}
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable=no'
	win = window.open('', 'myThumb', winprops)
	win.document.open();
	win.document.write('<html><head>');
	if (imgtoolbar==0) { win.document.write('<meta http-equiv="imagetoolbar" content="false" />'); }
	win.document.write('<scr' + 'ipt type="text/javascr' + 'ipt" language="JavaScr' + 'ipt">');
  	win.document.write("function click() { window.close(); } ");  // bei click  schliessen
  	win.document.write("document.onmousedown=click ");
  	win.document.write('</scr' + 'ipt>');
	win.document.write('<title>'+myname+'</title><!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setCookieDomain", "*.kroatie-vakantie.eu"]);
  _paq.push(["setDomains", ["*.kroatie-vakantie.eu","*.kroatie-vakantie.eu"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://adsrv.innocraft.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '46']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.innocraft.cloud/adsrv.innocraft.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="https://adsrv.innocraft.cloud/matomo.php?idsite=46&amp;rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code --></head>');
	win.document.write('<body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0" onBlur="window.close()">');

if (fit_to_screen) {

var ns6 = (!document.all && document.getElementById);
var ie4 = (document.all);
var ns4 = (document.layers);

if(ns6||ns4) {
sbreite = innerWidth - 23;

}
else if(ie4) {
sbreite = document.body.clientWidth - 6;
}

	if (orig_w>sbreite) { rw = 'width='+sbreite;} else {rw = '';}
	win.document.write('<img src="'+mypage+'" alt="'+myname+'" title="'+myname+'" border="0" '+rw+'\></body></html>');
} else {

	win.document.write('<img src="'+mypage+'" alt="'+myname+'" title="'+myname+'" border="0" ></body></html>');
	}

	win.document.close();
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }

}