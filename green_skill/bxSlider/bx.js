$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode:'horizontal',
    speed:500,
    captions:true,
    controls:true,
    nextText:'😍<i class="fa-solid fa-arrow-right"></i>',
    prevText:'😍<i class="fa-solid fa-arrow-left"></i>',
    auto:true,//autoplay 가 안되면 autoControls도 안됨
    autoControls:true,
    startText:'◼',
    stopText:'▶',
  });
  $('.videoSlider').bxSlider({
    auto:true,
    video:true,
    onSliderLoad:function(currentIndex){
      $('.videoSlider div').eq(currentIndex+1).find('video').get(0).play();
    },
    onSlideAfter:function($slideElement){
      $slideElement.siblings().find('video').get(0).pause();
      $slideElement.find('video').get(0).play();
    } 
  });

  $('.active').bxSlider({
    auto:true,
    //열자마자최초
    onSliderLoad:function(currentIndex){
      $('.active li').eq(currentIndex+1).addClass('active');
    },
    onSlideAfter:function($slideElement){
      $slideElement.addClass('active').siblings().removeClass('active');
    } 
  })
});