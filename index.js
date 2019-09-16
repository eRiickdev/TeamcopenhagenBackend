let attempt = 5;

function validate(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let error = document.getElementById('error');
	let text;
	error.style.padding ="10px";
	
	if(username == ""){
		text = "Username cannot be empty";
		error.innerHTML = text;
		return false;
	}

	if(password == ""){
		text = "password cannot be empty";
		error.innerHTML = text;
		return false;
	}

	if(username == "copenhagen" && password == "copenhagen123"){
		alert ("Login Succesfully");
		window.location = "index.html";
		return true;
	}
	else{
		attempt--;
		text = "Incorrect Login details...You have"+ attempt +" attempt(s)";
		error.innerHTML = text;
		return false;

		if(attempt == 0){
			attempt = "";
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		text = "Hacker detected";
		error.innerHTML = text;

		return false;
	}
	
	}

	

}