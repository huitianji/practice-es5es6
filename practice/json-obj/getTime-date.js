function dateTime (str) {
    var date = new Date(Number(str));
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    //D = date.getDate() + ' ';
    D = (date.getDate() < 10 ? '0'+date.getDate(): date.getDate()) + " ";

    //H = date.getHours() + ":";
    H = (date.getHours() < 10 ? '0'+date.getHours(): date.getHours()) + ":";

    //MI = date.getMinutes() + ":";
    MI = (date.getMinutes() < 10 ? '0'+date.getMinutes(): date.getMinutes()) + ":";

    //S = date.getSeconds() + " ";
    S = (date.getSeconds() < 10 ? '0'+date.getSeconds(): date.getSeconds()) + " ";

    return Y + M + D + H + MI + S;
}