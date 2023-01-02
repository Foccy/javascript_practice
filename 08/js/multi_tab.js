/* 
.tab-wrapper 버튼과 패널의 부모
.tab-menu 버튼그룹 >a 요소
.tab-content 패널그룹>div 요소
*/
var tabWrapper = $(".tab-wrapper")
    tabWrapper.each(function(){
        var currentEl=$(this);
        var menus= currentEl.find(".tab-menu a");
        var panels= currentEl.find(".tab-content>div");

        menus.click(function(e){
        e.preventDefault();
        let tg=$(this);
        let currentLink=tg.attr("href");
        menus.removeClass("active")
        tg.addClass("active")
        panels.hide();
        $(currentLink).show();
});
})