var banner = document.getElementById("banner")

setTimeout(function(){
	banner.style.display = "inline"
},3000)

closebutton.addEventListener("click",function(){
	banner.style.display = "none"
})

submitbutton.addEventListener("click",function(){
	banner.style.display = "none";
	alert("thank you!")
})