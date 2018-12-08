HTTP/1.1 200 OK
Server: Apache/2.2.15 (CentOS)
Last-Modified: Wed, 03 Oct 2018 04:25:39 GMT
Content-Type: text/javascript
X-dynaTrace: PT=159564089;PA=-804681770;SP=IRP;PS=1160330215
X-XSS-Protection: 1
Cache-Control: max-age=86400
Expires: Fri, 07 Dec 2018 05:02:49 GMT
Date: Thu, 06 Dec 2018 05:02:49 GMT
Content-Length: 6168
Connection: keep-alive
s-srvr: ;akamai_cache

$(document).one(shcWidgets.EVENTS.dataSYWR,function(){var a=false;
window.certona={pagetype:shc.getPageType().toUpperCase(),categoryid:bt.levelIds.split("_")[[(bt.levelIds.split("_").length)-1]]||"",customerid:shcWidgets.Factory.get("customerInfo").get().globalID||"",segment:"15097",recommendations:true,recsshow:"true"};
certonaRecommendations=function(g){var n="Customers Who Viewed This Also Liked",d="",o=5,j="",h,m,k,b,f;
if(!!g&&!!g.resonance&&!!g.resonance.schemes[0]){s.linkTrackVars="list1,events,products,prop14,pageName,channel,prop1,prop2,prop3,prop27, prop28, prop35,eVar39,prop54";
s.linkTrackEvents="event77,event79";
s.events="event77,event79";
if(window.certona.pagetype==="MYRECS"){s.prop27="MYRECS"
}for(m=0,k=g.resonance.schemes.length;
m<k;
m++){d=g.resonance.schemes[m];
f=checkForCarouselExceptions(d.scheme);
b="#"+f;
var l=$(b).attr("data-linkEnabled");
console.log("showMoreLike ",l);
if(!!d.explanation){n=d.explanation
}if(d.display==="no"){$(b).parent().addClass("hide")
}else{if(d.items.length){var q=0;
if($(b).hasClass("historyItem")){var p=d.items[0],e="";
$(b).prepend('<div class="intro"><div class="introText"><h2>'+n+'</h2><p>Because you viewed the <a href="'+p.url+'">'+p.title+'</a></p></div><div class="slides staticSlide"><hr>'+e+"</div></div>");
for(h=1;
h<d.items.length;
h++){$(b+" .slides:not(.staticSlide)").append(buildSlide(d.items[h],"data-lazy",l))
}}else{$(b+"title").append(n);
for(h=q;
h<d.items.length;
h++){$(b+" .slides").append(buildSlide(d.items[h],"data-lazy",l))
}}o=$(b).hasClass("tiny")?10:5;
$(b+" .slides:not(.staticSlide)").slick({dots:true,arrows:true,lazyLoad:"ondemand",draggable:false,slidesToShow:o,infinite:false,slidesToScroll:o,prevArrow:'<button class="prev-slick">i</button>',nextArrow:'<button class="next-slick">j</button>'});
$(b).addClass("certona").on("click",".card",sendOmnitureClick).on("click",".slick-arrow",sendArrowOmnitureClick)
}}a=true;
j+="CRTNA:ProductRecommendationEngine"+f+":"+s.prop27+":"+s.channel+(m===g.resonance.schemes.length-1?"":"|")
}s.list1=j;
s.tl(true,"o","AOV Impression",null,"navigate")
}};
certonaMLTHomeRecommendations=function(e){if(!!e&&!!e.resonance&&!!e.resonance.schemes[0]){var f=5,b=e.resonance.schemes[0],d=checkForCarouselExceptions(b.scheme),c="#more-home1a_rr";
$(c).show();
$(".slides .slick-dots").hide();
if($(c+" .more-slides").hasClass("slick-initialized")){$(c+" .more-slides").slick("unslick");
$(c+" .more-slides").empty();
$(c).removeClass("certona")
}for(i=0;
i<b.items.length;
i++){$(c+" .more-slides").append(buildSlide(b.items[i],"data-lazy"))
}$(c+" .more-slides").slick({dots:true,arrows:true,lazyLoad:"ondemand",draggable:false,slidesToShow:f,infinite:false,slidesToScroll:f,prevArrow:'<button class="slick-p">i</button>',nextArrow:'<button class="slick-n">j</button>'});
$(c).addClass("certona").on("click",".card",sendOmnitureClick);
$(c+" .layer-close").on("click",function(){$(c+" .more-slides").slick("unslick");
$(c+" .more-slides").empty();
$(c).hide();
$(c).removeClass("certona");
$(".slides .slick-dots").show()
});
a=true
}};
expandSlides=function(c){var b=$(c+" .showHide");
$(c+" .slides:not(.staticSlide)").toggleClass("show hide");
b.toggleClass("open closed");
b.find("span").text(b.text()=="more"?"less":"more")
};
checkForCarouselExceptions=function(b){var c="certonaCarousel";
if(b==="home1RV_rr"){c="certonaCarouselrv"
}else{if(b==="home1_rr"){c="certonaCarousel"
}else{if(b==="home1a_rr"){c="certonaCarouselrr"
}else{if(b.indexOf("myrecs")!==-1){c=b
}}}}return c
};
buildSlide=function(l,c,j){var f="",d=!!l?l.rating:0,b="",g=Number(l.reviews),k=!!l?l.title.replace('"',"in"):"",e=l.image.replace("s7.sears.com","s.shld.net").replace("http://","https://");
l.url=l.url.replace("http:","");
f+=String.format('<div class="card"><a class="card-link certonaCarLink" href="{0}"><div class="" title="{1}"><div class="image-box"><img class="image" {2}="{3}" height="210" width="210" alt="{1}" /></div><p class="prices title-3">',l.url,k,c,e+(e.indexOf("?")>-1?"&":"?")+"hei=210&wid=210&op_sharpen=1&qlt=8");
if(l.strike_price){b="savings";
f+='<span class="struck-price secondary">$'+l.strike_price+"</span><br/>"
}else{f+="<br />"
}f+=String.format('<span class="current-price {0}">${1}</span></p><p class="description title-5">{2}</p><div class="ratings-review"><div class="star-rating stars-{3}" aria-label="user rating of {4} out of 5 stars"></div>',b,l.price,k.length>94?k.substring(0,94)+"...":k,d*10,d);
if(g!=="undefined"&&g>0){f+='<span class="secondary reviews">('+g+")</span>"
}f+="</div></div></a>";
if(j==="true"){var h=l.id.toString();
f+='<div class="more-like"><a href="javascript:;" class="secondary-more" onclick="buildMoreLikeDropdown(this,event);" data-id='+l.id+">more like this</a></div></div>"
}else{f+="</div>"
}return f
};
buildMoreLikeDropdown=function(c,e){e.stopPropagation();
e.preventDefault();
var f=$(c).attr("data-id");
window.certona.itemid=f;
window.certonaMLTHome();
var d=c.getBoundingClientRect();
var b=d.left+d.width/2;
$("#more-pointer").css("left",b)
};
sendOmnitureClick=function(){var g=new Date(),f=$(this),d=f.find("a").attr("href"),c=f.attr("data-slick-index"),b=f.parents(".certona").attr("id");
s.linkTrackVars="list1,events,prop14,eVar40,eVar32,products";
s.linkTrackEvents="event78,event79";
s.prop14=c+1;
s.eVar32=s.list1;
s.eVar40="AOV Widgets";
if(!$.cookie("productnum")){s.productNum=1
}else{s.products=";productmerch"+s.productNum
}s.products=";productmerch"+s.productNum;
g.setTime(g.getTime()+(30*86400000));
$.cookie("productnum",s.productNum,{expires:g});
s.events="event78,event79";
if(b.indexOf("myrecs")!==-1){s.list1=s.eVar32="CRTNA:ProductRecommendation"+b+":"+s.prop27+":"+s.channel;
s.eVar40="AOV Widgets"
}s.tl(true,"o","AOV ClickThrough",null,"navigate");
location.href=d
};
sendArrowOmnitureClick=function(){s.linkTrackVars="channel,prop1,prop2,prop3,prop10,prop12,prop27,eVar17,eVar45";
try{var b=($(this).attr("class").indexOf("prev-slick")!==-1)?"Left Arrow Clicked":"Right Arrow Clicked";
s.prop12="PDP > Certona >"+b;
s.tl(this,"o",s.prop12)
}catch(c){console.log("Error getting click data",c)
}};
FED.Util.addJsFile(shc.URLs.certona)
});