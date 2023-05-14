let services = [];
let button = document.querySelector('#calc_cost');
let modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
let h2 = document.querySelector("#h2");
let fio = document.getElementById('fio');
let main_text = document.querySelector("#main_text");
let promocode = document.getElementById('promocode');
var market_analysis, loyalty_program, site_promo, brandbook, pr_company, chat_bot;
services[0]={
    name:document.getElementById('market_analysis'),
    price:100
}
services[1]={
    name:document.getElementById('loyalty_program'),
    price:170
}
services[2]={
    name:document.getElementById('site_promo'),
    price:150
}
services[3]={
    name:document.getElementById('brandbook'),
    price:150
}
services[4]={
    name:document.getElementById('pr_company'),
    price:200
}
services[5]={
   name:document.getElementById('chat_bot'),
   price:100
}

function sum_price () {
    let s = 0;
    for (let i=0; i<services.length; i++){
        if (services[i].name.checked) {
            s+=services[i].price;
            console.log(services[i].name + ' обрано');
        }
        else {
            console.log(services[i].name + ' не обрано');
        }
    }
    if (promocode.value=="promo2023") s=s*0.9;
    return s;
}

button.onclick = function() {
    modal.style.display = "block";
    let s = Number(sum_price());
    h2.innerHTML = 'Welcome, '+ fio.value
    main_text.innerHTML = "We will contact you shortly to discuss your order." + "<br>" + " Estimated cost of selected services: " +  s + "$"
};

//закриття при кліці на хрестик
span.onclick = function() {
    modal.style.display = "none";
}

// закриття при кліці поза вікном
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }