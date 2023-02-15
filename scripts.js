
   const list= document.querySelectorAll('.fa-heart');
   list.forEach((item )=> {item.addEventListener('click',function(){item.classList.toggle('myStyle')})})
   const plus= document.querySelectorAll('.fa-plus');
   const moins= document.querySelectorAll('.fa-minus');
   const remou= document.querySelectorAll('.fa-trash');

   plus.forEach((item )=> {item.addEventListener("click",function(event)
   {
    if(event.target.parentElement.classList.contains("bout-plus"))
    {
        event.target.parentElement.parentElement.parentElement.children[0].innerText++;
        total();
    }
}
)}) 

moins.forEach((item )=> {item.addEventListener("click",function(event)
{

 if(event.target.parentElement.classList.contains("bout-moins") && event.target.parentElement.parentElement.parentElement.children[0].innerText>0)
 {
     
    event.target.parentElement.parentElement.parentElement.children[0].innerText--;
    total();
 }

}
)}) 

remou.forEach((item )=> {item.addEventListener("click",function(event)
{
 if(event.target.parentElement.classList.contains("bout-remo"))
 {
     
     event.target.parentElement.parentElement.parentElement.remove();
     total();
 }
}
)}) 
function total()
{
let prix=document.querySelectorAll('.cart-item-price');
let cont=document.querySelectorAll('.number');
let total=0;
for (i = 0; i < cont.length; i++) {
  total += prix[i].innerText * cont[i].innerText;
}
document.getElementById('totale-prix').innerHTML=total;
}