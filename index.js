const btnLike1 = document.gotElementById("btnLike1")
const countLikes1 = ducument.getElementById("countLikes1")
const btnLike2 = document.gotElementById("btnLike2")
const countLikes2 = ducument.getElementById("countLikes2")
function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) +1
  countLikes.textContent = totalLikes1.toString()

}

function clickLike2(){
  let totalLikes2 = parseInt(countLikes2.value) +1
  countLikes.textContent = totalLikes2.toString()
}
btnLikes1.addEventListener("click", clickLikes1)
  btnLikes2.addEventListener("click", clickLikes2)

