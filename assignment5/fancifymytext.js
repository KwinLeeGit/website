const textarea = document.getElementById("textbox");

const bigger = document.getElementById("Bigger");
bigger.onclick = function() {
    textarea.style.fontSize = "24pt";
};

const moo = document.getElementById("Moo");
moo.onclick = function() {
    textarea.value = textarea.value.toUpperCase();
    textarea.value = textarea.value.split(".").join("-Moo.");

};

const radFancy = document.getElementById("FancyShmancy");
radFancy.onchange = function() {
    textarea.style.fontWeight = "bold"
    textarea.style.color = "blue"
    textarea.style.textDecoration = "underline"
};

const radBoring = document.getElementById("BoringBetty");
radBoring.onchange = function() {
    textarea.style.fontWeight = "normal"
    textarea.style.color = "black"
    textarea.style.textDecoration = "none"
};


