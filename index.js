function add(event){
    event.preventDefault();
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = parseFloat(a) + parseFloat(b);
    document.getElementById("Equals").innerText = c;
}


function sub(event){
    event.preventDefault();
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = parseFloat(a) - parseFloat(b);
    // alert(c);
    document.getElementById("Equals").innerText = c;
}

function mul(event){
    event.preventDefault();
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = parseFloat(a) * parseFloat(b);
    // alert(c);
    document.getElementById("Equals").innerText = c;
}

function div(event){
    event.preventDefault();
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = parseFloat(a) / parseFloat(b);
    document.getElementById("Equals").innerText = c;
    // alert(c);
}

function clear(event){
    document.getElementById("clear").onclick = function(){
        document.getElementById("Equals").innerHTML = "";
    }
}