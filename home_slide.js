
        var sliderNum = 0, sliderMove=0;
        var slideWidth = 1000;
        var sliderArray = ['slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg'];
        var sliderText = ['SWISS Beatbox','World Beatbox Battle','ASIA Beatbox','Grand Beatbox']
        var slideCount = sliderArray.length;
        var slideWrapWidth = slideWidth*slideCount;
        $('.slider-wrap').css('width',slideWrapWidth); 
        
        // for(let $i=0;$i<slideCount;$i++){
        //     //  $('#slider').append("<li><img src=\"images/"+sliderArray[$i]+" \" alt=\"\"></li>");
        //     $('#slider').append(`<li><img src="images/${sliderArray[$i]}" alt=""></li>`);
        //     $('#paging').append("<li></li>");
        // }
        $('h2.slider-text').text(sliderText[sliderNum]);
        function slideTo(sliderNum){
            sliderMove = 0 - sliderNum*slideWidth;
            $('#slider').css("left",sliderMove);
            $('#paging li').eq(sliderNum).css('background','grey').siblings().css('background','transparent');
            $('h2.slider-text').text(sliderText[sliderNum]);
            
        }
        $('#paging li').hover(function(){
            // console.log("hover");
            sliderNum = $(this).index();
            // console.log(sliderNum);
            // var sliderMove = 0 - sliderNum*800;
            // $('#slider').css("left",sliderMove);
            // $(this).css('background','white').siblings().css('background','transparent');
            slideTo(sliderNum);
        });
        $('#left').click(function(){
            console.log('prev');
            // console.log(sliderNum);
            sliderNum = (sliderNum<=0)? slideCount-1: sliderNum-1 ;
            slideTo(sliderNum);
        });
        $('#right').click(function(){
            console.log('next');
            sliderNum = (sliderNum >= slideCount-1)? 0: sliderNum+1 ;
            // console.log(sliderNum);
            slideTo(sliderNum);
        });
         //timer
    // var autoSlide = setInterval(slideTimer, 3000);

    // function slideTimer() {
    //     sliderNum= sliderNum>= (slideCount-1) ? 0 : sliderNum+1;
    //     slideTo(sliderNum);
    // }
    // $("#slider").hover(function(){
    //     clearInterval(autoSlide);
    // }, function(){
    //     autoSlide = setInterval(slideTimer, 3000);
    // })

        
        



