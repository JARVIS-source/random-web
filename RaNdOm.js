var options = [];
var To_Do = false;

function add_option() {
    rotateAnimation("logo");
    var option = document.getElementById("input_box").value;
    if (option != "" && option != " " && option != "  " && option != "   " && option != "    " && option != "     ") {
        options.push(option);
        document.getElementById("input_box").value = "";
        // var para = document.createElement("P");
        // para.innerHTML = option;
        // document.getElementById("myDIV").appendChild(para);
    }
}

function opt_ls() {
    rotateAnimation("logo");
    var text = "";
    var i;
    for (i = 0; i < options.length; i++) {
        text += i + 1 + ". " + options[i] + "<br>";
    }
    val = document.getElementById("list").value
    if (val = "") {
        var para = document.createElement("P");
        para.innerHTML = text;
        document.getElementById("list").appendChild(para);
    } else { document.getElementById("list").innerHTML = text; }
}

function process() {
    rotateAnimation("logo");
    if (To_Do == false) {
        var r = Math.floor(Math.random() * options.length);
        document.getElementById("outrand").innerHTML = options[r];
    } else if (options.length != 0 && options.length != 1) {
        var paral = document.createElement("P");
        paral.innerHTML = "<br>";
        document.getElementById("outtodo").appendChild(paral);
        var numb = [];
        var z = 0;
        var out = "";
        while (z < options.length) {
            var r = Math.floor(Math.random() * options.length);
            if (numb.includes(r)) { }
            else {
                out += z + 1 + ". " + options[r] + "<br>";
                numb.push(r);
                z = z + 1;
            }

        }
        v = document.getElementById("list").value
        if (v = "") {
            var paral = document.createElement("P");
            paral.innerHTML = out;
            document.getElementById("outtodo").appendChild(paral);
        } else { document.getElementById("outtodo").innerHTML = out; }
    }
}

function choose() {
    rotateAnimation("logo");
    var mode = document.getElementById("mode").value;
    if (mode != "To-Do") {
        document.getElementById("mode").value = "To-Do";
        document.getElementById("mode").innerHTML = "To-Do";
        document.getElementById("display").style.background = '#9f05c575';
        document.getElementById("display").style.color = '#cccccc';
        return To_Do = true;
    } else if (mode == "To-Do") {
        document.getElementById("mode").value = "Random_Decission";
        document.getElementById("mode").innerHTML = "Random_Decission";
        document.getElementById("display").style.background = '';
        document.getElementById("display").style.color = '#812697e7';
        return To_Do = false;
    }

}

var input = document.getElementById("input_box");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("input_button").click();
    }
});

var current_rotation = 0;

function rotateAnimation() {
    current_rotation += 360;
    document.querySelector("#logo").style.transform = 'rotate(' + current_rotation + 'deg)';
}

function del() {
    rotateAnimation("logo");
    options = [];
}