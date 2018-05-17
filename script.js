document.getElementById("magicButton").addEventListener("click", function(e) {
  console.log(e); 
  document.getElementById("magicButton").className = "summary-text"
  document.getElementById("myElement").style.backgroundColor = "green"
  document.getElementById("myElement").innerHTML = "green"
})
