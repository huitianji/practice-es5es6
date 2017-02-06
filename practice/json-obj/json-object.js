//--1
function getOptionsData1(obj, codeObj, flag){
    obj.each(function () {
        var obj = $(this);
        obj.empty();//清空原来的
        if (!flag) {
            obj.append($("<option/>").text("请选择").attr("value",""));
        };
        for (var key in codeObj) {
            var defaultCode = obj.attr("defatul");
            var o = "";
            if (key == defaultCode) {
                o = new Option(codeObj[key], key, true, true);
            }else {
                o = new Option(codeObj[key],key);
            }

            obj.append(o);
        }
    });

};
//



//var am = {value: "2", text: "等额本息2"};
var am = {"data":[
    {
        "value": "24",
        "text": "24期",
        "periodsUnit": "1"
    },
    {
        "value": "36",
        "text": "36期",
        "periodsUnit": "2"
    },
    {
        "value": "48",
        "text": "48期",
        "periodsUnit": "3"
    }
]};

for (var i = 0, len = am.data.length; i< len; i++) {
    var listData = am.data[i];
    var newKey, newValue;

    for (var key in listData) {

        if (key == "value") {
            //console.log(key, am[key]);
            newKey = listData[key];
        }
        else if (key == "text") {
            //console.log(key, am[key]);
            newValue = listData[key];
        }
        o = new Option(newValue,newKey);
    };
    console.log(o);
    //append

}
//闭包
for (var i = 0; i < 2; i++) {
    (function (i) {
        window.setTimeout(function () {
            console.log(i);
        },500);
    })(i);
}

//for (var key in am) {
//    var newKey, newValue;
//    if (key == "value") {
//        //console.log(key, am[key]);
//        newKey = am[key];
//    }
//    else if (key == "text") {
//        //console.log(key, am[key]);
//        newValue = am[key];
//    }
//    o = new Option(newValue,newKey);
//};
function getOptionsData(obj, codeObj, flag){

    obj.each(function () {
        var obj = $(this);
        obj.empty();//清空原来的
        if (!flag) {
            obj.append($("<option/>").text("请选择").attr("value",""));
        };
        for (var i = 0, len = codeObj.length; i< len; i++) {//am.data.length
            var listData = codeObj[i];//单例 {"":""}
            var newKey, newValue;
            for (var key in listData) {
                var defaultCode = obj.attr("defatul");

                if (key == "value") {
                    //console.log(key, am[key]);
                    newKey = listData[key];
                }
                else if (key == "text") {
                    //console.log(key, am[key]);
                    newValue = listData[key];
                }
                var o = "";
                if (key == defaultCode) {
                    o = new Option(newValue, newKey, true, true);
                } else {
                    o = new Option(newValue, newKey);
                }

                obj.append(o);
            }
        }

    });

};
///
function aFun (flag) {
    console.log(flag)
}



















