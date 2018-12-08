HTTP/1.1 200 OK
Server: Apache/2.2.15 (CentOS)
Last-Modified: Fri, 30 Mar 2018 03:12:54 GMT
Content-Type: text/javascript
X-dynaTrace: PT=364730830;PA=447239394;SP=IRP;PS=1160330215
X-XSS-Protection: 1
Cache-Control: max-age=86400
Expires: Fri, 07 Dec 2018 05:02:49 GMT
Date: Thu, 06 Dec 2018 05:02:49 GMT
Content-Length: 276
Connection: keep-alive
s-srvr: ;akamai_cache

$(window).load(function(){if(typeof shc.chat!=="undefined"){var a=$("#spinDispPath").data("path");
shc.chat=$.extend(true,shc.chat,{navigationPath:a.replace(/\|/g,"_"),});
shc.chat.send(shc.chat.SCOPE.page,"navigationPath",shc.chat.navigationPath,shc.chat.EVENT.pageLoad)
}});