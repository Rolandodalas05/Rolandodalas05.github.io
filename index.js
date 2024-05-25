const btnLikes1 = document.gotElementById("btnLike1")
const countLikes1 = ducument.getElementById("contLikes1")

function clickLike1(){
  let totalLike1 = parseInt(countLikes1.value) +1
  countLikes.textContent = totalLikes1.toString()

}
btnLike1.addEventListener("click", clickLike1)
