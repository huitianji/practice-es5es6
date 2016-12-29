//仅供学习参考

//jQuery判断checkbox是否选中的3种方法

//方法一：
if ($("#checkbox-id").get(0).checked) {
    // do something
}

//方法二：
if($('#checkbox-id').is(':checked')) {
    // do something
}

//方法三：
if ($('#checkbox-id').attr('checked')) {
    // do something
}

function checkInfo(){
    $("input[name='org3.otherValues']").each(
        function(){
            if($(this).get(0).checked){
                return true;
            }
        });
    var org3_ids=$("#org3_ids").val();
    if(org3_ids!=''){
        return true;
    }

    alertMsg.warn("请选择接收人！");
    return false;
}

//【jquery如何判断checkbox（复选框）是否被选中】

/*
谁都知道 在html 如果一个复选框被选中 是 checked="checked"。

但是我们如果用jquery alert($("#id").attr("checked")) 会提示您是true而不是checked

所以很多朋友判断  if($("#id").attr("checked")=="true") 这个是错误的，其实应该是 if($("#id").attr("checked")==true)
    例子里面包括了一下几个功能。

<input type="button" id="btn1" value="全选">
    <input type="button" id="btn2" value="取消全选">
    <input type="button" id="btn3" value="选中所有奇数">
    <input type="button" id="btn4" value="反选">
    <input type="button" id="btn5" value="获得选中的所有值">

    代码
*/


//<!--


    $("#btn1").click(function(){

        $("[name='checkbox']").attr("checked",'true');//全选

    })
    $("#btn2").click(function(){

        $("[name='checkbox']").removeAttr("checked");//取消全选

    })
    $("#btn3").click(function(){

        $("[name='checkbox']:even").attr("checked",'true');//选中所有奇数

    })
    $("#btn4").click(function(){

        $("[name='checkbox']").each(function(){


            if($(this).attr("checked"))
            {
                $(this).removeAttr("checked");

            }
            else
            {
                $(this).attr("checked",'true');

            }

        })

    });
    $("#btn5").click(function(){
        var str="";
        $("[name='checkbox'][checked]").each(function(){
            str+=$(this).val()+"rn";
            //alert($(this).val());
        })
        alert(str);
    });

//-->
/*
    <form name="form1" method="post" action="">
    <input type="button" id="btn1" value="全选">
    <input type="button" id="btn2" value="取消全选">
    <input type="button" id="btn3" value="选中所有奇数">
    <input type="button" id="btn4" value="反选">
    <input type="button" id="btn5" value="获得选中的所有值">
    <br>
    <input type="checkbox" name="checkbox" value="checkbox1">
    checkbox1
    <input type="checkbox" name="checkbox" value="checkbox2">
    checkbox2
    <input type="checkbox" name="checkbox" value="checkbox3">
    checkbox3
    <input type="checkbox" name="checkbox" value="checkbox4">
    checkbox4
    <input type="checkbox" name="checkbox" value="checkbox5">
    checkbox5
    <input type="checkbox" name="checkbox" value="checkbox6">
    checkbox6
    <input type="checkbox" name="checkbox" value="checkbox7">
    checkbox7
    <input type="checkbox" name="checkbox" value="checkbox8">
    checkbox8
    </form>
*/


//【JQuery判断radio是否选中，获取选中值】

/*------判断radio是否有选中，获取选中的值--------*/
$(function(){
    $("#btnSubmit").click(function(){
        var val=$('input:radio[name="sex"]:checked').val();
        if(val==null){
            alert("什么也没选中!");
            return false;
        }
        else{
            alert(val);
        }
        var list= $('input:radio[name="list"]:checked').val();
        if(list==null){
            alert("请选中一个!");
            return false;
        }
        else{
            alert(list);
        }
    });
});
/*
*
* <form id="form1" >
 <input type="radio"  name="sex" value="男" />男
 <input type="radio" name="sex" value="女" />女
 <br />
 <input type="radio"  name="list" value="十分满意" />十分满意
 <input type="radio" name="list" value="满意" />满意
 <input type="radio" name="list" value="不满意" />不满意
 <input type="radio" name="list" value="非常差" />非常差
 <br />
 <input type="submit" value="submit"  id="btnSubmit" />
 </form>
* */