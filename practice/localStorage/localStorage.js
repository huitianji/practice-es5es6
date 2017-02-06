var friends=
{
    wanglichuan:{name:"wanglichuan",age:30},
    xiaonai:{name:"xiaonai",age:23},
    heyichen:{name:"heyichen",age:28}
}//要存储的JSON对象
fs= JSON.stringify(friends);//将JSON对象转化成字符串
localStorage.setItem("friends",fs);//用localStorage保存转化好的的字符串


///将存储好的变量取回
var friends_zhan= localStorage.getItem("friends");//取回friends变量
var friends_new= JSON.parse(friends_zhan);//把字符串转换成JSON对象
//清空方法
//localStorage.clear()