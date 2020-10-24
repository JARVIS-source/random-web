var options = [];
var To_Do = false;
var a = true;

function add_option() {
    rotateAnimation("logo");
    var option = document.getElementById("input_box").value;
    if (option != "" && option != " " && option != "  " && option != "   " && option != "    " && option != "     ") {
        options.push(option);
        document.getElementById("input_box").value = "";
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
    var mode = document.getElementById("display").value;
    if (mode != "To-Do") {
        document.getElementById("display").value = "To-Do";
        document.getElementById("display").innerHTML = "To-Do";
        document.getElementById("display").style.background = '#9f05c575';
        document.getElementById("display").style.color = '#ffffff';
        return To_Do = true;
    } else if (mode == "To-Do") {
        document.getElementById("display").value = "Random_Decission";
        document.getElementById("display").innerHTML = "Random_Decission";
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

function info() {
    rotateAnimation("logo");
    alert("This is the Infosite\n\nThe intesion of this site is to automate making trivial decission\n\nHow to use:\nPut in your options (enter or ⚡) and click the R@ŊðØm button\nto get an answer or switch the toogle button so you will see a To-Do order\nClick the 📑 emoji to see again what you have entered\nClick the 🤯 to delete the given input\n\nFor color changing use the toogle button in the info bar\n\n\ncontact: j_a_r_v_i_s@mail.de")
}

function black_out() {
    rotateAnimation("logo");
    if (a == true) {
        for (i = 0; i < 2; i++) {
            var color = document.body.style.backgroundColor;
            if (color == "rgba(17, 31, 41, 0.965)") {
                document.body.style.backgroundColor = "#ffffff";
                document.getElementById("logo").src = "%PUBLIC_URL%/button-rand.png";
            } else {
                document.body.style.backgroundColor = "rgba(17, 31, 41, 0.965)";
                document.getElementById("logo").src = "%PUBLIC_URL%/silverbutton-rand.png";
            };
        } return a = false;
    } else {
        var color = document.body.style.backgroundColor;
        if (color == "rgba(17, 31, 41, 0.965)") {
            document.body.style.backgroundColor = "#ffffff";
            document.getElementById("logo").src = "%PUBLIC_URL%/button-rand.png";
        } else {
            document.body.style.backgroundColor = "rgba(17, 31, 41, 0.965)";
            document.getElementById("logo").src = "%PUBLIC_URL%/silverbutton-rand.png";
        };
    }
}