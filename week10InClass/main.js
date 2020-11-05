let selection = 10

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	let title = document.querySelector('h1')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
		title.innerHTML= "I am feeling " + selection
	})
    document.getElementById("happy").innerHTML = "happy?"
     console.log(happy);
    //line 16 is the new code console
     document.getElementById("neutral").innerHTML = "neutral?"
     console.log(neutral);
      document.getElementById("sad").innerHTML = "sad?"
     console.log(sad);
}
update();