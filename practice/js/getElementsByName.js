/**
 * 根据标签的name值获取标签数组元素
 * @param tag 标签
 * @param name 标签的name值
 */
function getElementsByName(tag, name) {
    var returns = document.getElementsByName(name);
    if (returns.length > 0)
        return returns;
    returns = new Array();
    var e = document.getElementsByTagName(tag);
    for (var i = 0; i < e.length; i++) {
        if (e[i].getAttribute("name") == name) {
            returns[returns.length] = e[i];
        }
    }
    return returns;
}