const btnLike1 = document.gotElementById("btnLike1")
const countLikes1 = ducument.getElementById("countLikes1")

function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) +1
  countLikes.textContent = totalLikes1.toString()

}
btnLikes1.addEventListener("click", clickLikes1)
