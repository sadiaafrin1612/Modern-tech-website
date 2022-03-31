$(document).ready(function () {

    // sticky menu
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else {
            $("nav").addClass("sticky");

        }
    });

    //MIXIT UP(Portfolio section)
    var mixer = mixitup('.container');
})