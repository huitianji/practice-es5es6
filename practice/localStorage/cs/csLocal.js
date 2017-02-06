var localJ = {};
var newLocalJ = "";
$("#save").on("click", function () {

    $("#box").find("input,select").each(function () {
        localJ[$(this).attr("name")] = $(this).val();
    });
    //fs= JSON.stringify(friends);
    //localStorage.setItem("friends",fs);
    //
    //friends_zhan= localStorage.getItem("friends");//取回friends变量
    //friends_new= JSON.parse(friends_zhan);//把字符串转换成JSON对象
    /*
    localStorage.setItem('localStorageName',JSON.stringify(localJ));
    */
    //关闭浏览器自动清空
    sessionStorage.setItem('localStorageName',JSON.stringify(localJ));
    //newLocalJ = JSON.parse(localStorage.getItem('localStorageName'));
});
//
/*
console.log(JSON.parse(localStorage.getItem('localStorageName')));
*/
//localStorage.clear();
//var obj = {"name":"ff"};
//alert(JSON.stringify(obj))
console.log(JSON.parse(sessionStorage.getItem('localStorageName')));