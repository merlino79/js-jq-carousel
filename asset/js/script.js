$(document).ready(function() {
    //console.log('DOM');


    $('.next').click(nextImage);

    $('.prev').click(prevImage);




    function nextImage() {
        //console.log("next");
        var activeImg = $('.box-img img.visible');
        console.log(activeImg);

        var activeCircle = $('.slider_control ul li.active');
        console.log(activeCircle);
        // activeCircle.removeClass('active');

        if (activeImg.hasClass('last')) {
            //aggiungo active a first
            $('.box-img img.first').addClass('visible');
            $(' li.first').addClass('active');

        } else {
            activeImg.next('img').addClass('visible')
            activeCircle.next('.ul li').addClass('active')
        }
        activeImg.removeClass('visible');
        //console.log(activeImg.next());

        activeImg.next('img').addClass('visible');


    }


    function prevImage() {
        console.log("prev");
    }






















});
//console.log("uno")