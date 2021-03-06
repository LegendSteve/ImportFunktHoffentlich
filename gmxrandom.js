var lsg = function(name) {return localStorage.getItem(name)};
var tagn = function(name) {return document.getElementsByTagName(name)};

if (document.readyState === "complete") {
    randomausfüllen();
}

//Die Daten aus localStorage nehmen und in die Textfelder einfüllen
function randomausfüllen(){
    
    var inputs = tagn("input");
    var selects = tagn("select");

    console.log(inputs);

    if(lsg("geschlecht")=="mann"){
        inputs[1].checked = false;
        inputs[2].checked = true;
    }
    else{
        inputs[1].checked = true;
        inputs[2].checked = true;
    }

    inputs[0].value = lsg("vorname").toLowerCase()+"."+lsg("nachname").toLowerCase();
    //1 und 2 sind Geschlecht (oben) und 3 ist unnötig.
    inputs[4].value = lsg("vorname");
    inputs[5].value = lsg("nachname");
    inputs[6].value = lsg("plz");
    inputs[7].value = lsg("ort");
    inputs[8].value = lsg("straße")+" "+lsg("hausnummer");
    inputs[9].value = lsg("tt");
    inputs[10].value = lsg("mm");
    inputs[11].value = lsg("jj");
    inputs[13].value = lsg("passwort");
    inputs[14].value = lsg("passwort");

    inputs[17].checked = true;

    inputs[19].focus();
    inputs[19].scrollIntoView();

    selects[0].value = lsg("land");
    selects[1].value = lsg("shortland").toUpperCase();
}