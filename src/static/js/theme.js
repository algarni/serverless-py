!function(e){FLTheme={init:function(){this._bind()},_bind:function(){var a=this;e(".navbar-toggle").on("click",this.navbarToggleClick),0!=e(".fl-page-bar-nav ul.sub-menu").length&&(this._setupDropDowns(),this._enableTopNavDropDowns()),0!=e(".fl-page-nav ul.sub-menu").length&&(e(window).on("resize.fl-page-nav-sub-menu",e.throttle(500,this._enablePageNavDropDowns)),this._setupDropDowns(),this._enablePageNavDropDowns()),0!=e(".fl-page-nav ul.menu").length&&(e(".fl-page-nav ul.menu").find(".menu-item").on("click",'> a[href*="#"]:not([href="#"])',this._setupCurrentNavItem),this._setupCurrentNavItem()),0!=e(".fl-page-nav-search").length&&e(".fl-page-nav-search a.fa-search").on("click",this._toggleNavSearch),0!=e(".fl-nav-vertical").length&&(e(window).on("resize",e.throttle(500,this._navVertical)),this._navVertical()),0!=e(".fl-fixed-width.fl-nav-vertical-right").length&&(e(window).on("resize",e.throttle(500,this._updateVerticalRightPos)),this._updateVerticalRightPos()),0!=e(".fl-page-nav-centered-inline-logo").length&&(e(window).on("resize",e.throttle(500,this._centeredInlineLogo)),this._centeredInlineLogo()),0!=e("body.fl-nav-left").length&&(e(window).on("resize",e.throttle(500,this._navLeft)),this._navLeft()),0!=e("body.fl-shrink").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._shrinkHeaderEnable)),this._shrinkHeaderInit(),this._shrinkHeaderEnable()),0!=e(".fl-page-header-fixed").length&&(e(window).on("resize.fl-page-header-fixed",e.throttle(500,this._enableFixedHeader)),this._enableFixedHeader()),0!=e("body.fl-fixed-header").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._fixedHeader)),this._fixedHeader()),0!=e("body.fl-scroll-header").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._scrollHeader)),this._scrollHeader()),0!=e(".fl-page-header-primary").find("li.mega-menu").length&&(e(window).on("resize",e.throttle(500,this._megaMenu)),this._megaMenu()),0!=e(".fl-page-header-fixed").length&&(e(window).on("scroll.fl-mega-menu-on-scroll",e.throttle(500,this._megaMenuOnScroll)),e(window).on("resize.fl-mega-menu-on-scroll",e.throttle(500,this._megaMenuOnScroll))),0!=e("html.fl-builder-edit").length&&this._fixedHeadersWhenBuilderActive(),0!=e("body.fl-nav-mobile-offcanvas").length&&0!=!e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._setupMobileNavLayout)),this._setupMobileNavLayout(),this._toggleMobileNavLayout()),e("body").on("click",this.closeMenu),e(".fl-theme-menu > li:last-child").on("focusout",function(l){void 0!==e(l.relatedTarget)[0]&&"nav-link"===e(l.relatedTarget)[0].className||a.closeMenu(l)}),0!=e(".fl-full-width.fl-footer-effect").length&&(e(window).on("resize",e.throttle(500,this._footerEffect)),this._footerEffect()),0!=e("body.fl-scroll-to-top").length&&this._toTop(),"undefined"!=typeof e("body").magnificPopup&&this._enableLightbox(),"undefined"==typeof e.fn.fitVids||e("body").hasClass("fl-builder")||this._enableFitVids(),FLTheme._navBackiosFix(),this._initSmoothScroll()},_isMobile:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initRetinaImages:function(){var a=window.devicePixelRatio?window.devicePixelRatio:1;a>1&&e("img[data-retina]").each(FLTheme._convertImageToRetina)},_convertImageToRetina:function(){var a=e(this),l=new Image,n=a.attr("src"),o=a.data("retina");if("undefined"==typeof n&&(n=a.data("cfsrc")),"undefined"==typeof n)return!1;var t=n.split(".").pop();""!=o&&(l.onload=function(){var e=l.width,n=l.height;"svg"==t&&(e=a.width(),n=a.height()),a.width(e),a.attr("src",o)},l.src=n)},_initMobileHeaderLogo:function(){this._enableMobileLogo(),e(window).on("resize",e.proxy(this._enableMobileLogo,this))},_enableMobileLogo:function(){var a=e(window),l=e(".fl-page-header-logo"),n=l.find("img[data-mobile]"),o=null,t=null,i=null;0!==n.length&&e(n).each(function(){i=new Image,o=e(this),src=o.attr("src"),t=o.data("mobile"),o.attr("src",""),o.attr("data-src",src),a.width()<window.themeopts.mobile_breakpoint?""!=t&&(i.onload=function(){o.attr("src",t)},i.src=src,o.show()):"undefined"!=typeof o.data("src")&&(o.attr("src",o.data("src")),o.css("width",""))})},navbarToggleClick:function(a){var l=e("body").hasClass("fl-nav-mobile-offcanvas")?"flyout":"dropdown";if("dropdown"===l){var n=e(a.target).closest(".fl-page-nav"),o=n.find(".fl-page-nav-collapse");o.toggleClass("collapse"),o.toggleClass("in")}else"flyout"===l&&e(".fl-page").toggleClass("fl-nav-offcanvas-active");a.stopPropagation()},closeMenu:function(a){var l,n=e("body").hasClass("fl-nav-mobile-offcanvas")?"flyout":"dropdown",o=e(".fl-page-nav-collapse").hasClass("in"),t=e(".fl-page").hasClass("fl-nav-offcanvas-active");void 0!==a&&void 0!==a.target&&("dropdown"===n&&o?(l=e(".navbar-collapse.in").closest(".fl-page-nav"),l.find(".navbar-toggle").trigger("click")):"flyout"===n&&t&&e(".fl-offcanvas-close").trigger("click"))},_setupDropDowns:function(){e("ul.sub-menu").each(function(){e(this).closest("li").attr("aria-haspopup","true")})},_enableTopNavDropDowns:function(){var a=e(".fl-page-bar-nav"),l=a.find(" > li"),n=a.find("> li").has("> ul.sub-menu").find(".fl-submenu-toggle-icon");FLTheme._isMobile()?!1!==/iPhone|iPad/i.test(navigator.userAgent)?l.hover(FLTheme._navItemMouseover,FLTheme._navItemMouseout):(l.hover(function(){},FLTheme._navItemMouseout),n.on("click",FLTheme._navSubMenuToggleClick)):l.hover(FLTheme._navItemMouseover,FLTheme._navItemMouseout)},_navBackiosFix:function(){ipad=null!==navigator.userAgent.match("iPhone|iPad")&&e(".menu-item-has-children").length>0,!1!==ipad&&(window.onpageshow=function(e){e.persisted&&window.location.reload()})},_initSmoothScroll:function(){"undefined"!=typeof FLBuilderLayout&&("undefined"!=typeof window.themeopts.smooth&&"disabled"===window.themeopts.smooth||location.hash&&e(location.hash).length&&setTimeout(function(){window.scrollTo(0,0),FLBuilderLayout._scrollToElement(e(location.hash))},1))},_enablePageNavDropDowns:function(){var a=e(".fl-page-header");a.each(FLTheme._enablePageNavDropDown)},_enablePageNavDropDown:function(){var a=e(this),l=a.find(".fl-page-nav .fl-page-nav-collapse"),n=l.find("ul li"),o=l.find("li").has("> ul.sub-menu").find("> a"),t=(l.find("li").has("> ul.sub-menu").find(".fl-submenu-toggle-icon"),l.find("> ul > li").has("ul.sub-menu"));e(".fl-page-nav .navbar-toggle").is(":visible")?(n.off("mouseenter mouseleave"),e("body").hasClass("fl-submenu-toggle")&&(t=l.find("> ul li").has("ul.sub-menu")),t.find("> a").off().on("click",FLTheme._navItemClickMobile),t.find(".fl-submenu-toggle-icon").off().on("click",FLTheme._navItemClickMobile),l.find(".menu").on("click",'.menu-item > a[href*="#"]',FLTheme._toggleForMobile),o.off("click",FLTheme._navSubMenuToggleClick)):(l.find("a").off("click",FLTheme._navItemClickMobile),l.find("a").off("click",FLTheme._toggleForMobile),l.find(".fl-submenu-toggle-icon").off("click",FLTheme._navItemClickMobile),l.removeClass("in").addClass("collapse"),n.removeClass("fl-mobile-sub-menu-open"),n.find("a").width(0).width("auto"),FLTheme._isMobile()?(n.hover(function(){},FLTheme._navItemMouseout),o.on("click",FLTheme._navSubMenuToggleClick)):(n.keydown(function(a){9===a.keyCode&&(el=e(this),focused=el.find(":focus"),focused.parent().is(":last-child")&&(sub=focused.parent().find("ul.sub-menu").first(),mega=focused.parent().parent().parent().parent().parent().hasClass("mega-menu"),mega_last=focused.parent().parent().parent().is(":last-child"),sub.length>0?sub.trigger("mouseenter"):mega&&!mega_last||el.trigger("mouseleave")),parent=focused.closest("ul.sub-menu").parent(),parent.hasClass("fl-sub-menu-open")||focused.trigger("mouseenter"))}),n.hover(FLTheme._navItemMouseover,FLTheme._navItemMouseout)))},_navItemClickMobile:function(a){var l=e(this).closest(".fl-page-nav-collapse"),n=e(this).closest("li"),o=e(this).attr("href"),t=n.find("ul.sub-menu"),i=e(a.target).hasClass("fl-submenu-toggle-icon"),s=null;if(o&&"#"!==o){var r=o.split("#")[1];e("body").find("#"+r).length>0&&n.hasClass("fl-mobile-sub-menu-open")&&(el=e(this).parent().closest("nav").find(".navbar-toggle"),el.trigger("click"),"undefined"!=typeof FLBuilderLayout&&"undefined"==typeof window.themeopts.smooth&&"disabled"!==window.themeopts.smooth&&setTimeout(function(){window.scrollTo(0,0),FLBuilderLayout._scrollToElement(e("#"+r))},1))}("#"==o||i)&&n.hasClass("fl-mobile-sub-menu-open")?(a.preventDefault(),n.removeClass("fl-mobile-sub-menu-open"),t.hide()):n.hasClass("fl-mobile-sub-menu-open")||(a.preventDefault(),n.addClass("fl-mobile-sub-menu-open"),i&&0===e(".fl-submenu-toggle").length&&(s=t.find("li.menu-item-has-children"),s.addClass("fl-mobile-sub-menu-open")),t.fadeIn(200)),0!=e(".fl-nav-collapse-menu").length&&l.find("li.fl-mobile-sub-menu-open").not(e(this).parents(".fl-mobile-sub-menu-open")).not(s).removeClass("fl-mobile-sub-menu-open").find("ul.sub-menu").hide(),a.stopPropagation()},_setupCurrentNavItem:function(a){var l=e(".fl-page-nav .navbar-nav"),n="undefined"!=typeof a?e(a.target).prop("hash"):window.location.hash,n=n.replace(/(:|\.|\[|\]|,|=|@|\/)/g,"\\$1"),o=n.length?l.find("a[href*=\\"+n+"]:not([href=\\#])"):null,t=l.closest(".fl-page-nav").find(".fl-offcanvas-close");null!=o&&e("body").find(n).length>0&&(e(".current-menu-item").removeClass("current-menu-item"),o.parent().addClass("current-menu-item"),t&&t.trigger("click"))},_navItemMouseover:function(){if(0!==e(this).find("ul.sub-menu").length){var a=e(this),l=a.parent(),n=a.find("ul.sub-menu"),o=n.width(),t=0,i=e(window).width(),s=0,r=0;if(0!==a.closest(".fl-sub-menu-right").length?a.addClass("fl-sub-menu-right"):e("body").hasClass("rtl")?(t=l.is("ul.sub-menu")?l.offset().left-o:a.offset().left-o,t<=0&&a.addClass("fl-sub-menu-right")):(t=l.is("ul.sub-menu")?l.offset().left+2*o:a.offset().left+o,t>i&&a.addClass("fl-sub-menu-right")),a.addClass("fl-sub-menu-open"),a.hasClass("hide-heading")||(n.hide(),n.stop().fadeIn(200)),FLTheme._hideNavSearch(),0!==a.closest(".fl-page-nav-collapse").length&&a.hasClass("mega-menu")){if(a.find(".mega-menu-spacer").length>0)return;n.first().before('<div class="mega-menu-spacer"></div>'),s=a.find(".mega-menu-spacer").offset().top,r=n.first().offset().top,a.find(".mega-menu-spacer").css("padding-top",Math.floor(parseInt(r-s))+"px")}}},_navItemMouseout:function(){var a=e(this),l=a.find("ul.sub-menu");a.hasClass("hide-heading")?FLTheme._navItemMouseoutComplete():l.stop().fadeOut({duration:200,done:FLTheme._navItemMouseoutComplete})},_navItemMouseoutComplete:function(){var a=e(this).parent();a.removeClass("fl-sub-menu-open"),a.removeClass("fl-sub-menu-right"),a.find(".mega-menu-spacer").length>0&&a.find(".mega-menu-spacer").remove(),e(this).show()},_navSubMenuToggleClick:function(a){var l=e(this).closest("li").eq(0);l.hasClass("fl-sub-menu-open")||(FLTheme._navItemMouseover.apply(l[0]),a.preventDefault())},_toggleForMobile:function(a){var l=e(".fl-page-nav .fl-page-nav-collapse"),n=e(this).attr("href"),o=e(this).closest("li").hasClass("menu-item-has-children");if("#"!==n){var t=n.split("#")[1];e("body").find("#"+t).length>0&&!o&&(e.isFunction(l.collapse)?l.collapse("hide"):(el=e(this).parent().closest("nav").find(".navbar-toggle"),el.trigger("click")))}},_toggleNavSearch:function(a){var l=e(".fl-page-nav-search form");a.preventDefault(),l.is(":visible")?l.stop().fadeOut(200):(l.stop().fadeIn(200),e("body").on("click.fl-page-nav-search",FLTheme._hideNavSearch),e(".fl-page-nav-search .fl-search-input").focus())},_hideNavSearch:function(a){var l=e(".fl-page-nav-search form");void 0!==a&&e(a.target).closest(".fl-page-nav-search").length>0||(l.stop().fadeOut(200),e("body").off("click.fl-page-nav-search"))},_navVertical:function(){var a=e(window);a.width()>=window.themeopts.medium_breakpoint&&e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&(e("body").toggleClass("fl-nav-vertical"),e("body").hasClass("fl-nav-vertical-left")&&e("body").toggleClass("fl-nav-vertical-left"),e("body").hasClass("fl-nav-vertical-right")&&e("body").toggleClass("fl-nav-vertical-right"))},_updateVerticalRightPos:function(){var a=e(window).width(),l=e(".fl-page").width(),n=(a-l)/2;e(".fl-page-header-vertical").css("right",n)},_navLeft:function(){var a=e(window);(a.width()<window.themeopts.medium_breakpoint||e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always"))&&e(".fl-page-header-primary .fl-page-logo-wrap").insertBefore(".fl-page-header-primary .fl-page-nav-col"),a.width()>=window.themeopts.medium_breakpoint&&!e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&e(".fl-page-header-primary .fl-page-nav-col").insertBefore(".fl-page-header-primary .fl-page-logo-wrap"),0==e(".fl-page-header-fixed").length||e(".fl-page-header-fixed").hasClass("fl-page-nav-toggle-visible-always")||e(".fl-page-header-fixed .fl-page-fixed-nav-wrap").insertBefore(".fl-page-header-fixed .fl-page-logo-wrap")},_shrinkHeaderInit:function(){var a=e(window).scrollTop(),l=250,n=e(".fl-page-header");e("body").addClass("fl-shrink-header-enabled"),"scrollRestoration"in history&&(history.scrollRestoration="manual"),e(".fl-page-header-logo").imagesLoaded(function(){var o=e(".fl-logo-img"),t=o.height();"undefined"!=typeof o.data("origHeight")&&(t=parseInt(o.data("origHeight"))),o.css("max-height",t),setTimeout(function(){e(".fl-page-header").addClass("fl-shrink-header-transition"),a>l?n.addClass("fl-shrink-header"):n.removeClass("fl-shrink-header")},100)})},_shrinkHeaderEnable:function(){var a=e(window);if(a.width()>=window.themeopts.medium_breakpoint){var l=e(".fl-page-header"),n=l.outerHeight(),o=e(".fl-page-bar"),t=0,i=0;0!=o.length?(t+=o.outerHeight(),i=t+n,0!=e("body.admin-bar").length&&(t+=32),l.css("top",t)):i=n,l.prevAll(".fl-builder-content").length>0&&(FLTheme._initThemerLayoutFix(),i=o.outerHeight()),0===e(".fl-header-padding-top-custom").length&&e(".fl-page").css("padding-top",i),e(a).on("scroll.fl-shrink-header",FLTheme._shrinkHeader)}else e(".fl-page-header").css("top",0),e(".fl-page").css("padding-top",0),e(a).off("scroll.fl-shrink-header")},_shrinkHeader:function(){var a=e(this).scrollTop(),l=250,n=e(".fl-page-header"),o=null;e(".fl-page-header-logo").imagesLoaded(function(){o=e(".fl-logo-img"),"undefined"==typeof o.data("origHeight")&&o.data("origHeight",o.height()),a>l?n.addClass("fl-shrink-header"):n.removeClass("fl-shrink-header"),"undefined"!=typeof n.data("original-top")&&FLTheme._fixThemerLayoutOnScroll()})},_fixedHeader:function(){var a=e(window),l=e(".fl-page-header"),n=0,o=0,t=e(".fl-page-bar"),i=0;if(a.width()>=window.themeopts.medium_breakpoint){if(n=l.outerHeight(),0!=t.length){if(i=t.outerHeight(),o=i+n,0!=e("body.admin-bar").length&&(i+=32),0!=e("html.fl-builder-edit").length);l.css("top",i)}else o=n;l.prevAll(".fl-builder-content").length>0&&(FLTheme._initThemerLayoutFix(),o=t.outerHeight(),e(a).on("scroll.fl-fixed-header",FLTheme._fixThemerLayoutOnScroll)),0===e("body.fl-scroll-header").length&&0===e(".fl-header-padding-top-custom").length&&e(".fl-page").css("padding-top",o),e(a).trigger("scroll")}else e(".fl-page-header").css("top",0),e(".fl-page").css("padding-top",0),e(a).off("scroll.fl-fixed-header")},_enableFixedHeader:function(){var a=e(window);a.width()<window.themeopts.medium_breakpoint?(a.off("scroll.fl-page-header-fixed"),e(".fl-page-header-fixed").hide()):a.on("scroll.fl-page-header-fixed",FLTheme._toggleFixedHeader)},_initThemerLayoutFix:function(){var a=e(".fl-page-header"),l=a.prevAll(".fl-builder-content"),n=0;l.length&&(a.css("position","initial"),e.each(l,function(){n+=e(this).outerHeight()}),a.data("original-top",n))},_fixThemerLayoutOnScroll:function(){var a=e(window).scrollTop(),l=e(".fl-page-header"),n=l.data("original-top");"undefined"!=typeof n&&(a>=n?l.css("position","fixed"):l.css("position","initial"),"undefined"!=typeof Waypoint&&Waypoint.refreshAll())},_toggleFixedHeader:function(){var a=e(window),l=e(".fl-page-header-fixed"),n=l.is(":visible"),o=e(".fl-page-header-primary"),t=!1;t=0===o.length?a.scrollTop()>200:a.scrollTop()>o.height()+o.offset().top,t&&!n?l.stop().fadeIn(200):!t&&n&&l.stop().hide()},_centeredInlineLogo:function(){var a=e(window),l=e(".fl-page-nav-centered-inline-logo .fl-page-header-logo"),n=e(".fl-logo-centered-inline > .fl-page-header-logo"),o=e(".fl-page-nav-centered-inline-logo .fl-page-nav .navbar-nav"),t=o.children("li").length,i=Math.round(t/2)-1;a.width()>=window.themeopts.medium_breakpoint&&n.length<1&&!e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&(l.hasClass("fl-inline-logo-left")&&t%2!=0?o.children("li:nth( "+i+" )").before('<li class="fl-logo-centered-inline"></li>'):o.children("li:nth( "+i+" )").after('<li class="fl-logo-centered-inline"></li>'),o.children(".fl-logo-centered-inline").append(l)),a.width()<window.themeopts.medium_breakpoint&&(e(".fl-page-nav-centered-inline-logo .fl-page-header-row").prepend(n),e(".fl-logo-centered-inline").remove())},_scrollHeader:function(){var a=e(window),l=null,n=e(".fl-page-header-primary").data("fl-distance"),o=0;l=e(0!=e(".fl-page-bar").length?".fl-page-header-primary, .fl-page-bar":".fl-page-header-primary"),a.width()>=window.themeopts.medium_breakpoint?a.on("scroll.fl-show-header-on-scroll",function(){e(this).scrollTop()>n?l.addClass("fl-show"):(l.removeClass("fl-show"),e(".fl-responsive-nav-enabled").length&&(o=2*e(".fl-page-header-primary").height(),0!=e(".fl-page-bar").length&&(o+=e(".fl-page-bar").height()),"undefined"!=typeof e(".fl-nav-offcanvas-collapse").css("top")&&(o+=parseInt(e(".fl-nav-offcanvas-collapse").css("top")))),e(".fl-nav-offcanvas-active").length&&o>0&&e(".fl-nav-offcanvas-collapse").css({transform:"translateY("+o+"px)","-ms-transform":"translateY("+o+"px)","-webkit-transform":"translateY("+o+"px)"}))}):(a.off("scroll.fl-show-header-on-scroll"),e(".fl-nav-offcanvas-collapse").css("transform",""))},_megaMenu:function(){var a=(e(window),e(".fl-page-header")),l=a.find(".fl-page-header-container"),n=l.outerWidth(),o=null,t=0;a.find("li.mega-menu, li.mega-menu-disabled").each(function(){o=e(this),t=o.find("> ul.sub-menu").outerWidth(),"undefined"!=typeof o.data("megamenu-width")&&(t=o.data("megamenu-width")),o.hasClass("mega-menu")&&n<t||FLTheme._isResponsiveNavEnabled()?(o.data("megamenu-width",t),FLTheme._isResponsiveNavEnabled()&&o.find("> ul.sub-menu").css("display","block"),o.removeClass("mega-menu"),o.hasClass("mega-menu-disabled")||o.addClass("mega-menu-disabled")):o.hasClass("mega-menu-disabled")&&n>=t&&(o.find("> ul.sub-menu").css("display",""),o.removeClass("mega-menu-disabled"),o.hasClass("mega-menu")||o.addClass("mega-menu"),o.addClass("mega-menu-items-"+o.children("ul").children("li").length))})},_megaMenuOnScroll:function(){var a=e(window),l=e(".fl-page-header-fixed"),n=l.find(".fl-page-header-container"),o=l.is(":visible"),t=null,i=null;o&&(l.find("li.mega-menu").each(function(){t=e(this),i=t.find("> ul.sub-menu"),n.outerWidth()<i.outerWidth()?(t.removeClass("mega-menu"),t.hasClass("mega-menu-disabled")||t.addClass("mega-menu-disabled")):(t.removeClass("mega-menu-disabled"),t.hasClass("mega-menu")||t.addClass("mega-menu"),t.addClass("mega-menu-items-"+t.children("ul").children("li").length))}),a.off("scroll.fl-mega-menu-on-scroll"),a.off("resize.fl-mega-menu-on-scroll"))},_fixedHeadersWhenBuilderActive:function(){0!=e("body.fl-shrink").length&&e("body").removeClass("fl-shrink"),0!=e("body.fl-fixed-header").length&&e("body").removeClass("fl-fixed-header"),0!=e("body.fl-scroll-header").length&&e("body").removeClass("fl-scroll-header")},_setupMobileNavLayout:function(){var a=e(window),l=e("button.navbar-toggle"),n=e(".fl-page-header:not(.fl-page-header-fixed)"),o=n.find(".fl-page-nav-collapse"),t=e(".fl-page"),i=0,s=a.height(),r=e("body").hasClass("fl-offcanvas-push-opacity-left")||e("body").hasClass("fl-offcanvas-push-opacity-right");n.find(".fl-page-header-logo").offset();FLTheme._isResponsiveNavEnabled()&&l.is(":visible")?(e("body").addClass("fl-responsive-nav-enabled"),l.attr("data-toggle","offcanvas"),o.addClass("fl-nav-offcanvas-collapse"),0===o.find(".fl-button-close").length&&o.prepend('<div class="fl-button-close"><button class="fl-offcanvas-close" aria-label="Close Menu"><i class="fas fa-times"></i></button></div>'),r&&0===e(".fl-offcanvas-opacity").length&&t.append('<div class="fl-offcanvas-opacity"></div>'),t.height()>a.height()&&(s=e(document).height(),0!=e("body.fl-shrink").length&&(s-=n.height())),0!=e("body.admin-bar").length&&(i=e("#wpadminbar").height(),s-=i),0==e(".fl-page-bar").length||e(".fl-page-header").hasClass("fl-page-nav-toggle-button")||(i+=e(".fl-page-bar").height()+1),e(".fl-scroll-header").length&&a.width()>=window.themeopts.medium_breakpoint?o.css("top",t.offset().top-i+"px"):o.css("top","")):(l.attr("data-toggle","collapse"),o.removeClass("fl-nav-offcanvas-collapse"),o.find(".fl-button-close").remove(),o.css("height",""),o.css("top",""),t.removeClass("fl-nav-offcanvas-active"),e("body").find(".fl-offcanvas-opacity").remove(),e("body").removeClass("fl-responsive-nav-enabled"))},_toggleMobileNavLayout:function(){e(".fl-page-nav").on("click",".fl-offcanvas-close",function(a){e(".fl-page").toggleClass("fl-nav-offcanvas-active"),a.stopPropagation()})},_footerEffect:function(){e(window).width()>=window.themeopts.mobile_breakpoint?e(".fl-page").css("margin-bottom",e(".fl-page-footer-wrap").height()):e(".fl-page").css("margin-bottom",0)},_toTop:function(){var a=e("#fl-to-top");a.each(function(){e(this).click(function(){return e("html,body").animate({scrollTop:0},"linear"),!1})}),e(window).scroll(function(){e(this).scrollTop()>800?a.fadeIn():a.fadeOut()})},_enableLightbox:function(){var a=e("body");a.hasClass("fl-builder")||a.hasClass("woocommerce")||e(".fl-content a").filter(function(){return/\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href)}).magnificPopup({closeBtnInside:!1,type:"image",gallery:{enabled:!0}}),!a.hasClass("fl-builder")&&!a.hasClass("fl-theme-builder-singular")||a.hasClass("woocommerce")||e(".fl-rich-text a, .fl-module-fl-post-content a").filter(function(){return/\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href)}).magnificPopup({closeBtnInside:!1,type:"image",gallery:{enabled:!0}})},_enableFitVids:function(){e(".fl-post-content").fitVids()},_isResponsiveNavEnabled:function(){var a=e(window);return enabled=!1,(e(".fl-page-nav-toggle-visible-always").length>0||e(".fl-page-nav-toggle-visible-medium-mobile").length>0&&a.width()<window.themeopts.medium_breakpoint||e(".fl-page-nav-toggle-visible-mobile").length>0&&a.width()<window.themeopts.mobile_breakpoint)&&(enabled=!0),enabled}},e(function(){FLTheme.init()}),0===e("html.fl-builder-edit").length&&FLTheme._initMobileHeaderLogo(),FLTheme._initRetinaImages()}(jQuery);