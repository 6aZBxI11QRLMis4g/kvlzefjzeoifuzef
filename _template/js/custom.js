$(document).ready(function(){
    $("#inijut_right_coloumn a").append("<span></span>");
    $("#inijut_right_coloumn a").hover(function(){
        $(this).children("span").fadeIn(600);
    },function(){
        $(this).children("span").fadeOut(100);
    });
});

$(document).ready(function(){
    $("#ruqiyucip_left_coloumn_latest_projects a").append("<span></span>");
    $("#ruqiyucip_left_coloumn_latest_projects a").hover(function(){
        $(this).children("span").fadeIn(600);
    },function(){
        $(this).children("span").fadeOut(100);
    });
}); 

$(document).ready(function(){
    $("#inijut_portfolio a.zoom").append("<span></span>");
    $("#inijut_portfolio a.zoom").hover(function(){
        $(this).children("span").fadeIn(600);
    },function(){
        $(this).children("span").fadeOut(100);
    });
});