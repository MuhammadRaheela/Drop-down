const selectfeild = document.getElementById("selectfeild")
const selectText = document.getElementById("selectText")
const selectoption = document.getElementsByClassName("options")
const list = document.getElementById("list")
const arrow = document.getElementById("arrowicon")


selectfeild.onclick = function () {
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")
}


for (Option of selectoption) {
    Option.onclick = function () {
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide")
        arrow.classList.toggle("rotate")


    }
}