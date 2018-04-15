var xmlDoc;
var numQuest = 0;
var totalPoints = 0;
var isAlreadyCorrect = false;

window.onload = function () {
    loadDoc();
};

function loadDoc() {
        
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            xmlDoc = this.responseXML;
            numQuest = xmlDoc.getElementsByTagName('quest').length;
            imprimirPreguntas();
          
          } else {
          }
        }
        xhttp.open('GET', 'Formul.xml', true)
        xhttp.send()
};

function imprimirPreguntas() {

    for (var i = 0; i < numQuest; i++) {

        var tipo = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('type')[0].innerHTML;

        switch (tipo) {
            case "rad":
                crearRad(i);
                break;
            case "mult":
                crearMult(i);
                break;
            case "text":
                crearText(i);
                break;
            case "single":
                crearSingle(i);
                break;
            case "range":
                crearRange(i);
                break;
            default:
                console.log("default");
        }
    }
}

function crearRad(i) {

    var numSol = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "quest");
    element.appendChild(div);

    //Enun
    var Enun = document.createElement("label");
    Enun.setAttribute('for', i);
    Enun.innerHTML = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Enun')[0].innerHTML + "<br>";
    div.appendChild(Enun);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}

function crearMult(i) {
    var numSol = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "quest");
    element.appendChild(div);

    //Enun
    var Enun = document.createElement("label");
    Enun.setAttribute('for', i);
    Enun.innerHTML = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Enun')[0].innerHTML + "<br>";
    div.appendChild(Enun);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer')[k].innerHTML;
        var check = document.createElement("input");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name", i);
        check.setAttribute("value", k);
        check.setAttribute('id', "div" + i + k + "check");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "check");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

function crearText(i) {
    var numSol = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "quest");
    element.appendChild(div);

    //Enun
    var Enun = document.createElement("label");
    Enun.setAttribute('for', i);
    Enun.innerHTML = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Enun')[0].innerHTML + "<br>";
    div.appendChild(Enun);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer')[k].innerHTML;
        var text = document.createElement("input");

        text.setAttribute("type", "text");
        text.setAttribute("name", i);
        text.setAttribute('id', i + "text");
        div.appendChild(text);

        //TODO esta parte sirve
        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}

function crearSingle(i) {
    var numSol = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "quest");
    element.appendChild(div);

    //Enun
    var Enun = document.createElement("label");
    Enun.setAttribute('for', i);
    Enun.innerHTML = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Enun')[0].innerHTML + "<br>";
    div.appendChild(Enun);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

    //Option inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Answer')[k].innerHTML;
        var option = document.createElement("option");

        option.setAttribute("name", i);
        option.setAttribute("value", k);
        option.setAttribute('id', k + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }
    label.innerHTML = "<br>";

    div.appendChild(label);
}

function crearRange(i) {

    var element = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "quest");
    element.appendChild(div);

    //Enun
    var Enun = document.createElement("label");
    Enun.setAttribute('for', i);
    Enun.innerHTML = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName('Enun')[0].innerHTML + "<br>";
    div.appendChild(Enun);

    var range = document.createElement("input");

    range.setAttribute("type", "range");
    range.setAttribute("min", 0);
    range.setAttribute("max", 150);
    range.setAttribute("name", i);
    range.setAttribute("value", 25);
    range.setAttribute('id', i + "range");
    div.appendChild(range);

    var label = document.createElement('label');
    label.setAttribute('for', i);
    label.innerHTML = "<br>";

    div.appendChild(label);
}

function crearPuntuacion() {
    var element = document.getElementById("cajaForm");

    var div = document.createElement("div");
    div.setAttribute("id", "puntuacion");
    element.appendChild(div);

    var label = document.createElement('label');
    label.innerHTML = "Puntuacion total:" + totalPoints;
    div.appendChild(label);
}

function checkPreguntas() {

    if (!isAlreadyCorrect) {
        var numPreg = xmlDoc.getElementsByTagName('quest').length;
        totalPoints = 0;

        for (var i = 0; i < numPreg; i++) {
            var tipo = xmlDoc.getElementsByTagName('quest')[i].getElementsByTagName("type")[0].innerHTML;

            if (tipo === "rad") {
                checkRad(i);
            }
            else if (tipo === "check") {
                checkMult(i);
            }
            else if (tipo === "single") {
                checkSingle(i);
            }
            else if (tipo === "text") {
                checkText(i);
            }
            else if (tipo === "range") {
                checkRange(i);
            }
        }
        crearPuntuacion();
        document.getElementById("boton").setAttribute("style", "background-color: grey !important");
        document.getElementById("boton").innerText = totalPoints + "/" + numPreg + " preguntas correctas";
        isAlreadyCorrect = true;
    }
    else {
        alert("Examen ya corregido. Recarga la página para volver a intentarlo.")
    }
}

function checkRad(x) {

    var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {
        if (radios[z].checked) //Selecciona la Answer seleccionada
        {
            //Comprueba si tiene el atributo correct=true, y si es así, suma 1 a los puntos
            var preguntaSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[preguntaSel].getAttribute("correct");
            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.color = "green";
            }
            else {
                document.getElementById("div" + x).style.color = "red";
            }
            var isNull = false;
            break;
        }
        
    }
    if (isNull) {
            document.getElementById("div" + x).style.color = "red";
        }
}

function checkMult(x) {

    var contCorrectas = 0;
    var contSeleccionadas = 0;
    var contSelecCorrectas = 0;
    var radios = document.getElementsByName(x);
    //Cuenta cuantas respuestas tienen que ser seleccionadas
    document.getElementById("div" + x).style.color = "red";
    for (var z = 0, length = radios.length; z < length; z++) {
        var preguntaSel = radios[z].getAttribute("value");
        if (xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[preguntaSel].getAttribute("correct")) {
            contCorrectas += 1;
        }
    }
    //Comprobamos cuantas respuestas correctas ha seleccionado el usuario
    for (var z = 0, length = radios.length; z < length; z++) {
        if (radios[z].checked) //Selecciona la Answer seleccionada
        {
            var preguntaSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[preguntaSel].getAttribute("correct");
            if (resp) {
                contSelecCorrectas++;
                contSeleccionadas++;
            }
            else {
                contSeleccionadas++;
            }
            // break;
        }
    }
    //Comprobacion final
    if (contSelecCorrectas === contCorrectas && contCorrectas === contSeleccionadas) {
        totalPoints++;
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";
    }
}

function checkText(x) {
    try {
        var userAns = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var resp = xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[0].innerHTML;
    if (resp === userAns) {
        totalPoints++;
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";
    }
}

function checkSingle(x) {
    var option = document.getElementsByName(x);
    // var Answer = document.getElementById(x+"select").value;
    for (var z = 0, length = option.length; z < length; z++) {
        if (option[z].selected) //Selecciona la Answer seleccionada
        {
            //Comprueba si tiene el atributo correct=true, y si es así, suma 1 a los puntos
            var preguntaSel = document.getElementById(x + "select").value;
            var resp = xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[preguntaSel].getAttribute("correct");
            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.color = "green";
            }
            else {
                document.getElementById("div" + x).style.color = "red";
            }
            break;
        }
    }
}

function checkRange(x) {
    var points = document.getElementById(x + "range").value;
    var resp = xmlDoc.getElementsByTagName("quest")[x].getElementsByTagName("Answer")[0].innerHTML;
    if (points === resp) {
        totalPoints++;
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";
    }
}
