var plus = document.getElementsByClassName ('btnP');

console.log(plus);

var mines = document.getElementsByClassName ('btnM');


//incrementation




for (let btnPlus of plus) {
    btnPlus.addEventListener('click',function()
    {btnPlus.previousElementSibling.innerText++;
        totalPrice();
    }

    )
    }


for (let btnMoin of mines) {

    btnMoin.addEventListener('click',function()
    {
        if(btnMoin.nextElementSibling.innerText >0 )
        {
        btnMoin.nextElementSibling.innerText--;
          totalPrice();
        }
    })
}

var btnLike = document.getElementsByClassName ('like');
console.log(btnLike);


var btnRm = document.getElementsByClassName('btnRM');
for (i=0; i<btnRm.length; i++){
    button.addEventListener('click', function(event){
        let buttonclicked = event.target;
    buttonclicked.parentElement.parentElement.parentElement.remove;

    })
}

var total = document.getElementById('price_total');
console.log(total);
var prix_unitaire = document.getElementsByClassName('uni_price');
console.log(prix_unitaire);

var quantity = document.getElementById('Quantity');
console.log(Q)

function totalPrice(){
    var sum = 0;

for(i=0; i < prix_unitaire.length; i++){

    var prix = prix_unitaire[i];

    sum = sum + (prix.innerText * quantity[i].innerText)
    total.innerText = sum;


}
}