$(document).ready(function() {
    //console.log('DOM');


    $('.next').click(nextImage);

    $('.prev').click(prevImage);




    function nextImage() {
        //console.log("next");
        var activeImg = $('.box-img img.visible');
        console.log(activeImg);

        var activeCircle = $(' li.active');
        console.log(activeCircle);
        // activeCircle.removeClass('active');

        activeImg.removeClass('visible');
        activeCircle.removeClass('active')
            //console.log(activeImg.next());

        if (activeImg.hasClass('last')) {
            //aggiungo active a first
            $('.box-img img.first').addClass('visible');
            $('li.first').addClass('active');

        } else {
            activeImg.next('').addClass('visible')
            activeCircle.next('').addClass('active')
        }


        activeImg.next('img').addClass('visible');


    }


    function prevImage() {
        console.log("prev");
    }






















});
//console.log("uno")