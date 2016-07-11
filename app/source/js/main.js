
$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        items:1,
        singleItem:true,
        itemsTabletSmall:false,
        navigation: true,
        navigationText: false,
        slideSpeed: 400,
        autoPlay: 4000
    });
    
    $('.reviews__link').on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        
        var item = $(this).closest('.reviews-avatar__item'),
            contentItem = $('.reviews__item'),
            itemPosition = item.index();
        
        contentItem.eq(itemPosition)
        .addClass('reviews_active')
        .siblings().removeClass('reviews_active');
        item.addClass('reviews_active')
        .siblings().removeClass('reviews_active');
    });
    
    $('.mobile-navigation').on("click", function(e){
        e.stopPropagation();
        var menu = $('.navigation__list');
        
        if(menu.is(":hidden")){
            menu.slideDown(400);
        }else{
            menu.slideUp(400);
        }
    });
    
});






