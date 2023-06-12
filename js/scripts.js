$(document).ready(function(){
    $("#banners ul").bxSlider({
        auto:true,
        mode: 'horizontal',
        speed: 600,
        page: true,
    });
    $("#banners-quem-somos ul").bxSlider({
        auto:true,
        mode: 'horizontal',
        speed: 900,
        page: true,
    });
    $('#fotos .container').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});