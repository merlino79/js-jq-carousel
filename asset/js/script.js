$(document).ready(function() {
    //console.log('DOM');


    $('.next').click(nextImage);

    $('.prev').click(prevImage);




    function nextImage() {
        //console.log("next");
        var activeImg = $('.box-img img.visible');
        console.log(activeImg);

        activeImg.removeClass('visible');
        //console.log(activeImg.next());
        activeImg.next().addClass('visible');


    }


    function prevImage() {
        console.log("prev");
    }






















});
//console.log("uno")