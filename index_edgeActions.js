/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${nextBtn}", "click", function(sym, e) {
         sym.$("nextBtn").fadeOut(200).fadeIn(200);
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${prevBtn}", "click", function(sym, e) {
         sym.$("prevBtn").fadeOut(200).fadeIn(200);
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plyHome}", "click", function(sym, e) {
         sym.$("plyHome").fadeOut(200).fadeIn(200);
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              
         
         
         if(isDevice) {
         
           interactionUp = "touchend";
           interactionDown = "touchstart";
           interactionOver = interactionDown;
           interactionMove = 'touchmove';
         
         } else {
         
           interactionUp = "click";
           interactionDown = "mousedown";
           interactionOver = "mouseover";
           interactionMove = 'mousemove';
         
         };
         
         //main content
         //@symbolName - the name of the symbol
         //@topText - the text (if any) for the top title (in purple)
         //@indexImage - the thumbnail image used in the index list
         //@indexTitle - the title for the index item
         //@indexBody - the bosy for the index item
         
         var pagesArray = [
         {symbolName:"Slide_00", indexImage:"index_pic_00.png", indexTitle:"Clara", indexBody:"Cover"},
         {symbolName:"Slide_01", indexImage:"index_pic_01.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_02", indexImage:"index_pic_02.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_03", indexImage:"index_pic_03.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_04", indexImage:"index_pic_04.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_05", indexImage:"index_pic_05.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_06", indexImage:"index_pic_06.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_07", indexImage:"index_pic_07.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_08", indexImage:"index_pic_08.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_09", indexImage:"index_pic_09.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_10", indexImage:"index_pic_10.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_11", indexImage:"index_pic_11.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_12", indexImage:"index_pic_12.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_13", indexImage:"index_pic_13.png", indexTitle:"Clara", indexBody:"Slide"},
         {symbolName:"Slide_14", indexImage:"index_pic_14.png", indexTitle:"Clara", indexBody:"Slide"}
         
         ];
         
         //number of pages
         var numPages = pagesArray.length;
         //ref to stage
         var stage = $('#Stage');
         //ref to the container that holds the pages
         var pageContainer = sym.$('pageContainer');
         //ref to the index slide out symbol
         var indexSymbol = sym.getSymbol('index');
         //..and its element
         var indexElement = indexSymbol.getSymbolElement();
         //ref to the container that holds the index items
         var indexListContainer = indexSymbol.$('indexListContainer');
         //the top purple text
         //refs to next and prev buttons
         var nextBtn = 		sym.$('nextBtn');
         var prevBtn = 		sym.$('prevBtn');
         //your original button refs
         var plyIndex = 	sym.$('plyIndex');
         var plyHome = 		sym.$('plyHome');
         var btn_S1 = 		sym.getSymbol("Sections_Bar").$('btn_S1');
         var btn_S2 = 		sym.getSymbol("Sections_Bar").$('btn_S2');
         var btn_S3 = 		sym.getSymbol("Sections_Bar").$('btn_S3');
         var btn_S4 = 		sym.getSymbol("Sections_Bar").$('btn_S4');
         var btn_S5 = 		sym.getSymbol("Sections_Bar").$('btn_S5');
         var btn_S12 = 		sym.getSymbol("Sections_Bar").$('btn_S6');
         var btn_S13 = 		sym.getSymbol("Sections_Bar").$('btn_S7');
         var btn_S14 = 		sym.getSymbol("Sections_Bar").$('btn_S8');
         var profile_06 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_01");
         var profile_07 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_02");
         var profile_08 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_03");
         var profile_09 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_04");
         var profile_10 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_05");
         var profile_11 =	sym.getSymbol("Sections_Bar").$("navBarBackProfile_06");
         
         
         
         
         //various refs to variables
         var isDevice;
         var stageWidth = stage.width();
         var stageHeight = stage.height();
         var touchPos = {initPosX:0, threshold:5};
         var pageTweenDuration = 0.6;
         var isAnimating = false;
         
         var currentPageId = 0;
         var currentPageSymbol, currentPageElement, oldPageSymbol, oldPageElement, indexDragger;
         
         
         function init(){
         
            //build the index menu
            buildIndexMenu();
         
            //build the top nav
            buildNav();
         }
         
         function buildNav(){
         
         
            nextBtn.bind(interactionUp, {dir:'next'} ,clickArrow);
            prevBtn.bind(interactionUp, {dir:'prev'},clickArrow);
            plyHome.bind(interactionUp, clickHome);
         
            btn_S1.bind(interactionUp, clickbtn_S1);
            btn_S2.bind(interactionUp, clickbtn_S2);
            btn_S3.bind(interactionUp, clickbtn_S3);
            btn_S4.bind(interactionUp, clickbtn_S4);
            btn_S5.bind(interactionUp, clickbtn_S5);
            btn_S12.bind(interactionUp, clickbtn_S12);
            btn_S13.bind(interactionUp, clickbtn_S13);
            btn_S14.bind(interactionUp, clickbtn_S14);
            profile_06.bind(interactionUp, clickProfile_06);
            profile_07.bind(interactionUp, clickProfile_07);
            profile_08.bind(interactionUp, clickProfile_08);
            profile_09.bind(interactionUp, clickProfile_09);
            profile_10.bind(interactionUp, clickProfile_10);
            profile_11.bind(interactionUp, clickProfile_11);
         
         
         }
         
         function clickHome(e){ 
         
         			var dest = 0;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec0();
         glowButton(e);
         }
         
         function clickbtn_S1(e){ 
         			var dest = 1;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec1();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S2(e){ 
         			var dest = 2;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec2();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S3(e){ 
         			var dest = 3;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec3();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S4(e){ 
         			var dest = 4;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec4();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S5(e){ 
         			var dest = 5;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec5();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_06(e){ 
         			var dest = 6;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         
         pointToSec5();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_07(e){ 
         			var dest = 7;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         pointToSec7();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_08(e){ 
         			var dest = 8;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         
         pointToSec8();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_09(e){ 
         			var dest = 9;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         
         pointToSec9();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_10(e){ 
         			var dest = 10;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         
         pointToSec10();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickProfile_11(e){ 
         			var dest = 11;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }	
         
         pointToSec11();
         glowButton(e);
             audio02.play(0);
         }
         
         
         function clickbtn_S12(e){ 
         			var dest = 12;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec12();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S13(e){ 
         			var dest = 13;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec13();
         glowButton(e);
             audio02.play(0);
         }
         
         function clickbtn_S14(e){ 
         			var dest = 14;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         
         pointToSec14();
         glowButton(e);
             audio02.play(0);
         }
         
         
         function clickArrow(e){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            var dir = e.data.dir;
              currentPageId = checkPageId(dir);
              addPage(dir);
         
         }
         
         function buildIndexMenu(){
         
            var indexItemSymbol, indexItemElement;
         
            for(var i = 0; i < numPages; i++){
         
               indexItemSymbol = sym.createChildSymbol('IndexItemSymbol', indexListContainer);
               indexItemElement = indexItemSymbol.getSymbolElement();
         
               TweenMax.set(indexItemElement, {
                  position:'absolute',
                  y:(i * indexItemElement.height()),
                  cursor:'pointer'
               });
         
               //indexItemSymbol.$('imageHolder').attr('src', 'images/index_default.jpg');
               TweenMax.set(indexItemSymbol.$('imageHolder'), {
                  backgroundImage:'url(images/' + pagesArray[i].indexImage + ')' 
               });
         
         
               indexItemSymbol.$('titleText').html(pagesArray[i].indexTitle)
               indexItemSymbol.$('bodyText').html(pagesArray[i].indexBody + '<br>' + i)
         
         
               indexItemElement.bind(interactionUp, {itemId:i}, clickIndexItem);
         
               //console.log(indexItemSymbol.$('imageHolder'))
         
            }
         
            //indexListContainer[0].style.height = numPages * indexItemElement.height() + 'px';
         
            pageContainer.bind('swipeleft', function(){
         audio04.play(0);
         	var dest14 = 14; 
               if (currentPageId !==dest14) {currentPageId = checkPageId('next');      addPage('next');
               }
         
               else if (currentPageId = dest14) {currentPageId = checkPageId('next'); pointToSec14();
         
               }
         		 });
         
         
            pageContainer.bind('swiperight', function(){
         audio04.play(0);
         		var dest = 0;
               if (currentPageId !==dest) {currentPageId = checkPageId('prev');      addPage('prev');
               }
               else if (currentPageId = dest) {currentPageId = checkPageId('prev');
         		}
         
            });
         
            initIndex();
         
            initPages();
         
            checkArrows();
         
         }
         
         function initPages(){
         
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            currentPageSymbol.play(0);
         
         
         
         }
         
         function addPage(dir){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            oldPageSymbol = currentPageSymbol;
            oldPageElement = currentPageElement;
            oldPageSymbol.stopAll();
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            //set the old and new one to absolute
            TweenMax.set([oldPageElement, currentPageElement], {
               position:'absolute',
            })
         
           TweenMax.set(oldPageElement, {
              zIndex:14
            });
            //avoids a flash as the new one comes on to the stage
            TweenMax.set(currentPageElement, {
              zIndex:-14,
              autoAlpha:0
            })
         
            //if we hit next then slide the old page to the left
            TweenMax.to(oldPageElement, pageTweenDuration, {
               x:(dir == 'next') ? -stageWidth : stageWidth,
               onStart:function(){
               		isAnimating = true;
               },
               ease:Power2.easeInOut,
               onComplete:removePage,
               onCompleteParams:[oldPageSymbol]
         
            })
         
         
            //if we hit next then slide the new page from the right
            TweenMax.fromTo(currentPageElement, pageTweenDuration, {
               x:(dir == 'next') ? stageWidth : -stageWidth,
               autoAlpha:0
            },{
         
            	x:0,
            	autoAlpha:1,
               force3D:'auto',
               ease:Power2.easeInOut,
               onComplete:function(){
         
                  currentPageSymbol.play(0);
             //     setTopText();
                  isAnimating = false;
                  checkArrows();
         
               }
            })
         
         
         
         }
         
         function removePage(s){
         
            s.deleteSymbol();
         }
         
         /*function setTopText(){
         
            topText.html(pagesArray[currentPageId].topText);
         
         }
         */
         
         function initIndex() {
         function plySound03() {
             audio03.play(0);
         }
            plyIndex.bind(interactionUp, toggleIndex);
            indexElement.bind('swipeleft', toggleIndex);
            indexElement.bind(interactionDown, setInteractionDownPos)
            indexSymbol.$('closeBtn').bind(interactionDown, toggleIndex);
             indexSymbol.$('closeBtn').bind(interactionDown, plySound03);
             
            TweenMax.set(indexElement, {
               position:'absolute',
               alpha:1,
               x:-indexElement.width()
            })
         
            //set the webkit scrolling on a touch device only
            if(isDevice){
         
               TweenMax.set('.scroll', {
                     'overflow-y': 'scroll',
                     'overflow-x': 'hidden',
                     webkitOverflowScrolling: 'touch'
               })
            } else {
         
              TweenMax.set('.scroll', {
                 'overflow-x': 'hidden',
                  overflow: 'scroll'
         
            })
         
            }
         
         
         }
         
         function setInteractionDownPos(e){
         
            touchPos.initPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX ;
            touchPos.initPosY = (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         }
         
         
         
         function clickIndexItem(e){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         audio02.play(0);
            var itemId = e.data.itemId, dir;
         
            touchPos.endPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX;
            touchPos.endPosY =  (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         
            //if you tapped and moved your finger too much then it's probably a swipe
            if((Math.abs(touchPos.initPosX - touchPos.endPosX) > touchPos.threshold) || (Math.abs(touchPos.initPosY - touchPos.endPosY) > touchPos.threshold)) {
         
               return;
            }
         
         
            if(itemId > currentPageId){
         
               currentPageId = itemId;
               addPage('next');
         
            } else if(itemId < currentPageId){
         
               currentPageId = itemId;
               addPage('prev');
         
            } else {
         
               //do nothing as it's the same page
            }
         
         
         }
         
         
         function toggleIndex(e){
         
            //avoids the index button glowing when the index list is swiped
         	if(e.type === 'click'){
         
         	}
         
            if(indexElement[0]._gsTransform.x < 0){
         
               TweenMax.to(indexElement, 0.4, {
                  x:0,
                  ease:Power3.easeOut
               })
            } else {
               TweenMax.to(indexElement, 0.4, {
                  x:-367,
                  ease:Power3.easeOut
               })
         
            }
         
         
         }
         
         function checkPageId(dir){
         
            var id;
         
            switch(dir){
         
               case 'next':
         
                  id = ((currentPageId + 1) < numPages) ? currentPageId + 1 : currentPageId;
         
               break;
               case 'prev':
         
                  id = ((currentPageId - 1) > -1) ? currentPageId - 1 : 0;
         
               break;
         
         
         		}
         
         
            return id;
         
         
         }
         
         function checkArrows(){
         
            TweenMax.to(nextBtn, 0.3, {
            	autoAlpha:(currentPageId == numPages-1) ? 0 : 1
            })
            TweenMax.to(prevBtn, 0.3, {
            	autoAlpha:(currentPageId == 0) ? 0 : 1
            })
         
         
         }
         
         function pointToSec0() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec1() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec2() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec3() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec4() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         
         function pointToSec5() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         
         }
         
         function pointToSec7() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         
         }
         
         function pointToSec8() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         
         }
         
         function pointToSec9() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         
         }
         
         function pointToSec10() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         
         }
         
         function pointToSec11() {
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:1});
         
         }
         
         function pointToSec12() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec13() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:1});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function pointToSec14() {
         
         sym.getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getSymbol("Sections_Bar").$("btn_S8").animate({opacity:1});
         
         sym.getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();
         
         }
         
         function glowButton(e){
         
            TweenMax.fromTo(e.target, 0.3, {
         
               alpha:0
            }, 
            {
               alpha:1,
               repeat:0,
               yoyo:true
            })
         
         }
         init();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plyIndex}", "click", function(sym, e) {
         sym.$("plyIndex").fadeOut(200).fadeIn(200);
          audio03.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({load:['js/buzz.js'], complete: init}); function init(){
                  audio01 = new buzz.sound("sounds/Sliding", {formats: ["mp3"]});
                  audio02 = new buzz.sound("sounds/Next_Previous_mainButtons_ref", {formats: ["mp3"]});
                  audio03 = new buzz.sound("sounds/Index", {formats: ["mp3"]});
                  audio04 = new buzz.sound("sounds/Graph_Zoom", {formats: ["mp3"]});
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Slide_00'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

      

   })("Slide_00");
   //Edge symbol end:'Slide_00'

   //=========================================================
   
   //Edge symbol: 'Slide_01'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_info}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S2_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_01");
   //Edge symbol end:'Slide_01'

   //=========================================================
   
   //Edge symbol: 'Slide_02'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S2_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_02");
   //Edge symbol end:'Slide_02'

   //=========================================================
   
   //Edge symbol: 'Slide_03'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S3_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_03");
   //Edge symbol end:'Slide_03'

   //=========================================================
   
   //Edge symbol: 'Slide_04'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${play_re}", "click", function(sym, e) {
         sym.$("S4_re").animate({left:0}, 500);
          audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_reCopy}", "click", function(sym, e) {
         sym.$("S4_re").animate({left:0}, 500);
         audio02.play(0);
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S4_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_04");
   //Edge symbol end:'Slide_04'

   //=========================================================
   
   //Edge symbol: 'Slide_05'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S5_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});

      });
      //Edge binding end

   })("Slide_05");
   //Edge symbol end:'Slide_05'

   //=========================================================
   
   //Edge symbol: 'Slide_06'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S6_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         

      });
      //Edge binding end

   })("Slide_06");
   //Edge symbol end:'Slide_06'

   //=========================================================
   
   //Edge symbol: 'Slide_07'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy6}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S7_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         

      });
      //Edge binding end

   })("Slide_07");
   //Edge symbol end:'Slide_07'

   //=========================================================
   
   //Edge symbol: 'Slide_08'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S8_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         

      });
      //Edge binding end

   })("Slide_08");
   //Edge symbol end:'Slide_08'

   //=========================================================
   
   //Edge symbol: 'Slide_09'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_infoCopy8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S9_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         

      });
      //Edge binding end

   })("Slide_09");
   //Edge symbol end:'Slide_09'

   //=========================================================
   
   //Edge symbol: 'Slide_10'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:0});
         

      });
      //Edge binding end

   })("Slide_10");
   //Edge symbol end:'Slide_10'

   //=========================================================
   
   //Edge symbol: 'Slide_11'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").show("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").show().animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").show().animate({opacity:11});
         

      });
      //Edge binding end

   })("Slide_11");
   //Edge symbol end:'Slide_11'

   //=========================================================
   
   //Edge symbol: 'Slide_12'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_12");
   //Edge symbol end:'Slide_12'

   //=========================================================
   
   //Edge symbol: 'Slide_13'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:1});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:0});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_13");
   //Edge symbol end:'Slide_13'

   //=========================================================
   
   //Edge symbol: 'Slide_14'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S1").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S2").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S3").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S4").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S5").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S6").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S7").animate({opacity:0});
         sym.getParentSymbol().getSymbol("Sections_Bar").$("btn_S8").animate({opacity:1});
         
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile").hide("");
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_01").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_02").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_03").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_04").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_05").hide();
         sym.getParentSymbol().getSymbol("Sections_Bar").$("navBarBackProfile_06").hide();

      });
      //Edge binding end

   })("Slide_14");
   //Edge symbol end:'Slide_14'

   //=========================================================
   
   //Edge symbol: 'G'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group2}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
          audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

   })("G");
   //Edge symbol end:'G'

   //=========================================================
   
   //Edge symbol: 'G2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group3}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         

      });
      //Edge binding end

   })("G2");
   //Edge symbol end:'G2'

   //=========================================================
   
   //Edge symbol: 'G3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S3_04}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);

      });
      //Edge binding end

   })("G3");
   //Edge symbol end:'G3'

   //=========================================================
   
   //Edge symbol: 'G4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group4}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);

      });
      //Edge binding end

   })("G4");
   //Edge symbol end:'G4'

   //=========================================================
   
   //Edge symbol: 'G5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group5}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text5}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

   })("G5");
   //Edge symbol end:'G5'

   //=========================================================
   
   //Edge symbol: 'S2_re'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S2_10_re}", "click", function(sym, e) {
         sym.getParentSymbol().$("S2_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.getParentSymbol().$("S2_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S2_re");
   //Edge symbol end:'S2_re'

   //=========================================================
   
   //Edge symbol: 'S3_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S3_07_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S3_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S3_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S3_re");
   //Edge symbol end:'S3_re'

   //=========================================================
   
   //Edge symbol: 'S4_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S4_08_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S4_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S4_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S4_re");
   //Edge symbol end:'S4_re'

   //=========================================================
   
   //Edge symbol: 'S5_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S5_10_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S5_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy2}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S5_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S5_re");
   //Edge symbol end:'S5_re'

   //=========================================================
   
   //Edge symbol: 'S6_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S6_06_re}", "click", function(sym, e) {
         sym.getParentSymbol().$("S6_re").slideToggle("");
         
         audio02.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy3}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S6_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S6_re");
   //Edge symbol end:'S6_re'

   //=========================================================
   
   //Edge symbol: 'S7_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S7_14_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S7_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy4}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S7_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S7_re");
   //Edge symbol end:'S7_re'

   //=========================================================
   
   //Edge symbol: 'S8_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S8_06_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S8_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy5}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S8_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S8_re");
   //Edge symbol end:'S8_re'

   //=========================================================
   
   //Edge symbol: 'S9_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${S9_07_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S9_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy6}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S9_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S9_re");
   //Edge symbol end:'S9_re'

   //=========================================================
   
   //Edge symbol: 'BottomBar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              
         
         
         if(isDevice) {
         
           interactionUp = "touchend";
           interactionDown = "touchstart";
           interactionOver = interactionDown;
         
         } else {
         
           interactionUp = "click";
           interactionDown = "mousedown";
           interactionOver = "mouseover";
         
         };
         
         var S0 = sym.getParentSymbol().getLabelPosition("S0");
         var S1 = sym.getParentSymbol().getLabelPosition("S1");
         var S2 = sym.getParentSymbol().getLabelPosition("S2");
         var S3 = sym.getParentSymbol().getLabelPosition("S3");
         var S4 = sym.getParentSymbol().getLabelPosition("S4");
         var S5 = sym.getParentSymbol().getLabelPosition("S5");
         var S6 = sym.getParentSymbol().getLabelPosition("S6");
         var S7 = sym.getParentSymbol().getLabelPosition("S7");
         var S8 = sym.getParentSymbol().getLabelPosition("S8");
         var S9 = sym.getParentSymbol().getLabelPosition("S9");
         var S10 = sym.getParentSymbol().getLabelPosition("S10");
         var S11 = sym.getParentSymbol().getLabelPosition("S11");
         var S12 = sym.getParentSymbol().getLabelPosition("S12");
         var S13 = sym.getParentSymbol().getLabelPosition("S13");
         var S14 = sym.getParentSymbol().getLabelPosition("S14");
         
         // bind S0
         sym.$("S0").bind(interactionDown, function(){
         								sym.$("S0").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S0) {sym.getParentSymbol().playReverse("S1", false); sym.playReverse("S1", false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S1
         sym.$("S1").bind(interactionDown, function(){
         
         								sym.$("S1").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S1) {sym.getParentSymbol().playReverse("S2",false); sym.playReverse("S2",false);}
         else if (sym.getParentSymbol().getPosition()<S1) {sym.getParentSymbol().play("S0",false);	sym.play("S0",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S2
         sym.$("S2").bind(interactionDown, function(){
         								sym.$("S2").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S2) {sym.getParentSymbol().playReverse("S3",false); sym.playReverse("S3",false);}
         else if (sym.getParentSymbol().getPosition()<S2) {sym.getParentSymbol().play("S1",false);	sym.play("S1",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S3
         sym.$("S3").bind(interactionDown, function(){
         								sym.$("S3").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S3) {sym.getParentSymbol().playReverse("S4",false); sym.playReverse("S4",false);}
         else if (sym.getParentSymbol().getPosition()<S3) {sym.getParentSymbol().play("S2",false);	sym.play("S2",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S4
         sym.$("S4").bind(interactionDown, function(){
         								sym.$("S4").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S4) {sym.getParentSymbol().playReverse("S5",false); sym.playReverse("S5",false);}
         else if (sym.getParentSymbol().getPosition()<S4) {sym.getParentSymbol().play("S3",false);	sym.play("S3",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S5
         sym.$("S5").bind(interactionDown, function(){
         								sym.$("S5").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S5) {sym.getParentSymbol().playReverse("S6",false); sym.playReverse("S6",false);}
         else if (sym.getParentSymbol().getPosition()<S5) {sym.getParentSymbol().play("S4",false);	sym.play("S4",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S6
         sym.$("S6").bind(interactionDown, function(){
         								sym.$("S6").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S6) {sym.getParentSymbol().playReverse("S7",false); sym.playReverse("S7",false);}
         else if (sym.getParentSymbol().getPosition()<S6) {sym.getParentSymbol().play("S5",false);	sym.play("S5",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S7
         sym.$("S7").bind(interactionDown, function(){
         								sym.$("S7").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S7) {sym.getParentSymbol().playReverse("S8",false); sym.playReverse("S8",false);}
         else if (sym.getParentSymbol().getPosition()<S7) {sym.getParentSymbol().play("S6",false);	sym.play("S6",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S8
         sym.$("S8").bind(interactionDown, function(){
         								sym.$("S8").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S8) {sym.getParentSymbol().playReverse("S9",false); sym.playReverse("S9",false);}
         else if (sym.getParentSymbol().getPosition()<S8) {sym.getParentSymbol().play("S7",false);	sym.play("S7",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S9
         sym.$("S9").bind(interactionDown, function(){
         								sym.$("S9").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S9) {sym.getParentSymbol().playReverse("S10",false); sym.playReverse("S10",false);}
         else if (sym.getParentSymbol().getPosition()<S9) {sym.getParentSymbol().play("S8",false);	sym.play("S8",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S10
         sym.$("S10").bind(interactionDown, function(){
         								sym.$("S10").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S10) {sym.getParentSymbol().playReverse("S11",false); sym.playReverse("S11",false);}
         else if (sym.getParentSymbol().getPosition()<S10) {sym.getParentSymbol().play("S9",false);	sym.play("S9",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S11
         sym.$("S11").bind(interactionDown, function(){
         								sym.$("S11").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S11) {sym.getParentSymbol().playReverse("S12",false); sym.playReverse("S12",false);}
         else if (sym.getParentSymbol().getPosition()<S11) {sym.getParentSymbol().play("S10",false);	sym.play("S10",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S12
         sym.$("S12").bind(interactionDown, function(){
         								sym.$("S12").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S12) {sym.getParentSymbol().playReverse("S13",false); sym.playReverse("S13",false);}
         else if (sym.getParentSymbol().getPosition()<S12) {sym.getParentSymbol().play("S11",false);	sym.play("S11",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S13
         sym.$("S13").bind(interactionDown, function(){
         								sym.$("S13").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S13) {sym.getParentSymbol().playReverse("S14",false); sym.playReverse("S14",false);}
         else if (sym.getParentSymbol().getPosition()<S13) {sym.getParentSymbol().play("S12",false);	sym.play("S12",false);}else{
         			sym.getParentSymbol().stop();}
         });
         
         // bind S14
         sym.$("S14").bind(interactionDown, function(){
         								sym.$("S14").fadeOut(300).fadeIn(300);
         if (sym.getParentSymbol().getPosition()>S14) {sym.getParentSymbol().playReverse("S15",false); sym.playReverse("S15",false);}
         else if (sym.getParentSymbol().getPosition()<S14) {sym.getParentSymbol().play("S13",false);	sym.play("S13",false);}else{
         			sym.getParentSymbol().stop();}
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("BottomBar");
   //Edge symbol end:'BottomBar'

   //=========================================================
   
   //Edge symbol: 'Sections_Bar'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

   })("Sections_Bar");
   //Edge symbol end:'Sections_Bar'

   //=========================================================
   
   //Edge symbol: 'index'
   (function(symbolName) {   
   
   })("index");
   //Edge symbol end:'index'

   //=========================================================
   
   //Edge symbol: 'IndexItemSymbol'
   (function(symbolName) {   
   
   })("IndexItemSymbol");
   //Edge symbol end:'IndexItemSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-867178188");