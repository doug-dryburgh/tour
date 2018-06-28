//Map
function mapLoc() {
    var meet = {
        lat: 48.421958,
        lng: -123.359723
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: meet
    });
    var marker = new google.maps.Marker({
        position: meet,
        map: map
    });
}

//image rotation
var j = 1;

function backgroundRotation() {
    $(".backgroundImages li:nth-child(" + j + ")").animate({
        opacity: "1",
    }, 1000);
    setTimeout(function () {
        $(".backgroundImages li:nth-child(" + j + ")").animate({
            opacity: "0",
        }, 1000);
        if (j === 3) {
            j = 1;
        } else {
            j++;
        }
    }, 10000);
}
backgroundRotation();
setInterval(backgroundRotation, 11000);


//scroll
$(document).on('click', 'a', function (event) {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}); 