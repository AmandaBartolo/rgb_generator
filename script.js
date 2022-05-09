function color(){
    const red = document.querySelector("#red").value
    const green = document.querySelector("#green").value
    const blue = document.querySelector("#blue").value
    const color = document.querySelector("#color-result")

	color.style.backgroundColor = `rgb(${red},${green},${blue})`

	document.querySelector("#result").textContent = `RGB (${red},${green},${blue})`
}