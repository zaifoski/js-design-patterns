var tmpl = "<div class=\"cat\">"+
           "<h3 class=\"counter\">0</h3>"+
           "<img class=\"catimage\" id=\"ID\" src=\"IMG\">"+
           "</div>"

$(document).ready(function(){
    
    for(var i=0; i< data.length; i++){
        var item = tmpl.replace("ID",data[i].id);
        item = item.replace("IMG",data[i].img);
        $(".cats").append(item);
    }
    $(".catimage").on("click", function (event) {
        var el = $(this).parent(".cat").find("h3");
        var c = el.html();
        c++;
        el.html(c);
    });
});







