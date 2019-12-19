//generate random password
function generate(){
    let complexity = document.getElementById("slider").value;
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

    let password = "";

for (var i = 1; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

document.getElementById("display").value = password;

}


document.getElementById("length").innerHTML = "Length: 64";

document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 9 ){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
    
}

function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}