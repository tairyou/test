



function taichan2() {
 var a =document.getElementById("kato").textContent;
a = a+"(^_^)"
document.getElementById("kato").textContent = a;


}

function taichan(){
  alert("実行してもよろしいですか?(スマホが壊れても知らんよ)")
  setInterval(taichan2,10)
}


var test = document.getElementById("test");

test.addEventListener('click',taichan);

