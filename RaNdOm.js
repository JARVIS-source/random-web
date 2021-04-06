var options = [];
var To_Do = false;
var a = true;
var elem = ["everything", "display", "switch", "input_box", "input_button", "engine_button", "outrand", "outtodo", "list", "date"]

function add_option() {
    rotateAnimation();
    var option = document.getElementById("input_box").value;
    if (option != "" && option != " " && option != "  " && option != "   " && option != "    " && option != "     ") {
        options.push(option);
        document.getElementById("input_box").value = "";
    }
}

function opt_ls() {
    rotateAnimation();
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
    } else {
        document.getElementById("list").innerHTML = text;
    }
}

function process() {
    rotateAnimation();
    if (To_Do == false && options.length > 1) {
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
            if (numb.includes(r)) {} else {
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
        } else {
            document.getElementById("outtodo").innerHTML = out;
        }
    }
}

function choose() {
    rotateAnimation();
    var mode = document.getElementById("display").value;
    if (mode != "To-Do") {
        document.getElementById("display").value = "To-Do";
        document.getElementById("display").innerHTML = "To-Do";
        document.getElementById("display").style.background = '#9f05c575';
        document.getElementById("display").style.color = '#ffffff';
        return To_Do = true;
    } else if (mode == "To-Do") {
        document.getElementById("display").value = "Random";
        document.getElementById("display").innerHTML = "Random";
        document.getElementById("display").style.background = '';
        document.getElementById("display").style.color = '#812697e7';
        return To_Do = false;
    }

}

var input = document.getElementById("input_box");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("input_button").click();
    }
});

var current_rotation = 0;

function rotateAnimation() {
    current_rotation += 360;
    document.querySelector("#logo2").style.transform = 'rotate(' + current_rotation + 'deg)';
    document.querySelector("#logo1").style.transform = 'rotate(' + current_rotation + 'deg)';
}

function del() {
    rotateAnimation();
    options = [];
    document.getElementById("outrand").innerHTML = "";
    document.getElementById("outtodo").innerHTML = "";
    document.getElementById("list").innerHTML = "";

}

function info() {
    rotateAnimation();
    alert("The intention is to automate making trivial decissions.\n\nHow to use:\nPut in your options (enter or ⚡), click 'R@ŊðØm' to get an answer, switch the toogle button to receive a To-Do order.\nClick 📑 for a list of the entered options.\nClick 🤯 to delete the given input.\n\n(light/dark mode switch is in the info bar.)\n\ncontact:  j_a_r_v_i_s@mail.de")
}

function black_out() {
    if (a == true) {
        for (i = 0; i < 2; i++) {
            var color = document.body.style.backgroundColor;
            if (color == "rgb(32, 34, 36)") {
                document.body.style.backgroundColor = "#ffffff";
                document.getElementById("logo1").style.display = "none";
                document.getElementById("logo2").style.display = "inline";
                reset(1);
            } else {
                document.body.style.backgroundColor = "rgb(32, 34, 36)";
                document.getElementById("logo1").style.display = "inline";
                document.getElementById("logo2").style.display = "none";
                reset(0);
            };
        }
        return a = false;
    } else {
        var color = document.body.style.backgroundColor;
        if (color == "rgb(32, 34, 36)") {
            document.body.style.backgroundColor = "#ffffff";
            document.getElementById("logo1").style.display = "none";
            document.getElementById("logo2").style.display = "inline";
            reset(1);
        } else {
            document.body.style.backgroundColor = "rgb(32, 34, 36)";
            document.getElementById("logo1").style.display = "inline";
            document.getElementById("logo2").style.display = "none";
            reset(0);
        };
    }
}

function reset(number) {
    var d = 0;
    for (d = 0; d < elem.length; d++) {
        var paint = elem[d];
        if (number == 1) {
            if (paint != "display" && paint != "engine_button") {
                document.getElementById(paint).style.color = "#293e6b";
            }
            if (paint == "switch") {
                document.getElementById(paint).style.color = "rgb(167, 35, 35)";
            }
            document.getElementById(paint).style.borderColor = "rgb(167, 35, 35)";
        } else {
            if (paint != "display" && paint != "engine_button") {
                document.getElementById(paint).style.color = "#ffffff";
            }
            document.getElementById(paint).style.borderColor = "white";
        }
    }
}