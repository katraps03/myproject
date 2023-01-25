function getallvalue(){
    var service = document.getElementById('serv').value;
    var price;
    var nm;
    var opprice1;
    var opprice2;
    var opprice3;
    var allopprice;
    var nm1;
    var nm2;
    var nm3;
    if(service == 1){
        price = 20000;
        nm = "Лечение зубов";
    } else if(service == 2){
        price = 10000;
        nm = "Общий анализ";
    } else if(service == 3){
        price = 15000;
        nm = "Рентген-диагностика";
    }

    if(op1.checked){
        opprice1 = 20000;
        nm1 = ", Лечение зубов";
    }else {
        opprice1 = 0;
        nm1 = "";
    }
    if(op2.checked){
        opprice2 = 10000;
        nm2 = ", Общий анализ";
    }else {
        opprice2 = 0;
        nm2 = "";
    }
    if(op3.checked){
        opprice3 = 15000;
        nm3 = ", Рентген-диагностика";
    }else {
        opprice3 = 0;
        nm3 = "";
    }

    allopprice = opprice1 + opprice2 + opprice3;
    document.getElementById('prc').value = price + allopprice;
    document.getElementById('name').value = nm + nm1 + nm2 + nm3;
}
