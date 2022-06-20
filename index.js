
let count = 0;
//console.log(countEl)

function increase(){
 let  count_score = document.getElementById("count_Score")
  count += 1
  count_score.innerHTML=count
}

function reset(){
  let count_score = document.getElementById("count_Score")
  count = 0
  count_score.innerHTML=count
}

//count=document.getElementById("count_Score")
function decrease(){
 let  count_score = document.getElementById("count_Score")
  count -= 1
  count_score.innerHTML = count
}

function save(){
  let savelEl = document.getElementById("save-el")
  let save = count + " - "
  savelEl.innerHTML += save

}


