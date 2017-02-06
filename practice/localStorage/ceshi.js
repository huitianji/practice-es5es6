
var m={};

$("#save").on("click", function () {

    $("#box").find("input,select").each(function () {
        m[$(this).attr("name")] = $(this).val();
    });
     //fs= JSON.stringify(friends);
     //localStorage.setItem("friends",fs);
     //
     //friends_zhan= localStorage.getItem("friends");//取回friends变量
     //friends_new= JSON.parse(friends_zhan);//把字符串转换成JSON对象
    localStorage.setItem('test',JSON.stringify(m));
    newb = JSON.parse(localStorage.getItem('test'));

});
localStorage.clear();

//localStorage.setItem('test',JSON.stringify(a));
//var b = JSON.parse(localStorage.getItem('test'));