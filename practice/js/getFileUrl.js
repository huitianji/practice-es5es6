/**
 *
 * @type {string}  获取上传文件的地址
 */

var imgurl = "";
function getPhoto(node) {
    var imgURL = "";
    try{
        var file = null;
        if(node.files && node.files[0] ){
            file = node.files[0];
        }else if(node.files && node.files.item(0)) {
            file = node.files.item(0);
        }
        //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
        try{
            imgURL =  file.getAsDataURL();
        }catch(e){
            imgRUL = window.URL.createObjectURL(file);
        }
    }catch(e){
        if (node.files && node.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                imgURL = e.target.result;
            };
            reader.readAsDataURL(node.files[0]);
        }
    }
    creatImg(imgRUL);
    return imgURL;
}

function creatImg(imgRUL){
    var textHtml = "<img src='"+imgRUL+"'width='414px' height='600px'/>";
    $(".ge_pic_icon_Infor").html(textHtml);
}
//图片上传显示
$("#file").on("change", function () {
//        console.log(this, $(this));
    getPhoto(this);
});
/*
* 页面结构
*
* */
/*
 <div class="ge_pic_icon_Infor">
 <img src="images/moren.jpg"/>
 </div>
 <div class="Infor_file">
 <input type="file" name="uploadPicture" id="file" value="" title="上传照片" />
 <!--<input type="file" name="uploadPicture" id="file" value="点击" title="上传照片" onchange="oFun()"/>-->
 </div>
 */
