var tmpl1 = "<li class=\"cats-list-item\" id=\"ID\">"+
           "NAME"+
           "</li>"
var tmpl2 = "<div class=\"cat\">"+
           "<h3 class=\"counter\">0</h3>"+
           "<img class=\"catimage\" id=\"ID-img\" src=\"IMG\">"+
           "</div>"

$(document).ready(function(){
    
    for(var i=0; i< data.length; i++){
        var item = tmpl1.replace("ID",data[i].id);
        item = item.replace("NAME",data[i].id);
        $(".cats-list").append(item);
        
        var item = tmpl2.replace("ID",data[i].id);
        item = item.replace("IMG",data[i].img);
        $(".cats").append(item);
    }
    $(".cat").hide();
    $(".catimage").on("click", function (event) {
        var el = $(this).parent(".cat").find("h3");
        var c = el.html();
        c++;
        el.html(c);
    });
    $(".cats-list-item").on("click", function (event) {
        $(".cat").hide();
        var identifier = $(this).attr('id');
        console.log(identifier);
        $('#'+identifier+"-img").parent(".cat").show();
    });
});







