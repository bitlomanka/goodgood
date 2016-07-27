var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.976521, lng: 31.972284},
    zoom: 16,
    scrollwheel: false,
    disableDefaultUI: true,
    scaleControl: true,
    });
    var marker = new google.maps.Marker({
    position: {lat: 46.976521, lng: 31.972284},
    map: map,
    title: 'Hello World!'
  });
}

$(document).ready(function(){
    
    // слайдер
    $('.owl-carousel').owlCarousel({
        items:1,
        singleItem:true,
        itemsTabletSmall:false,
        navigation: true,
        navigationText: false,
        slideSpeed: 400,
        autoPlay: 4000
    });
    
    // табы
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
    
    // мобильная навигация
    $('.mobile-navigation').on("click", function(e){
        e.stopPropagation();
        var menu = $('.navigation__list');
        
        if(menu.is(":hidden")){
            menu.slideDown(400);
        }else{
            menu.slideUp(400);
        }
    });
    
    // portfolio hover
    $('.portfolio__link').hover(function(e){
        var hoverBlock = $(this).find('.portfolio__hover')
        
        if(hoverBlock.is(":hidden")){
            hoverBlock.fadeIn('1000');
        }else{
            hoverBlock.fadeOut('1000');
        }
    });
    
    // выпадающий список
    $('.category__container').on("click", function(e){
        e.stopPropagation();
        var listMenu = $(this).find('.category__list');
        
        if(listMenu.is(":hidden")){
            listMenu.slideDown(400);
        }else{
            listMenu.slideUp(400);
        }
    });
    
    // валидация
    $('.contact-form').validate({
        rules: {
            name:{
                required: true,
                minlength: 2
            },
            email:{
                required:true,
                email: true
            },
            subject:{
                required: true,
                minlength: 5
            },
            message:'required',
            captcha: 'required'
        },
        messages:{
            first_user_name:{
                required: 'Enter your name',
                minlength: 'Name must be at least 2 characters'
            },
            email_user:{
                required:'Enter your e-mail address',
                email: 'Please enter a valid e-mail address'
            },
            last_user_name:{
                required: 'Enter subject message',
                minlength: 'Subject message must be at least 5 characters'
            },
            message:'Enter your message',
            captcha: 'Enter captcha'
        },
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url: 'php/index.php',
                data: $(form).serialize(),
                cache: false,
                success: function(data){
                    alert(data);
                }
            })
        }
    });
    
});






