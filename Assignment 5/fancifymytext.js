function helloAlert(){
    alert("Hello,World!");
}
function enlargeText(){
    var textarea = document.getElementById("textArea")
    textarea.style.fontSize = "24px";
}
function giveStyles(){
    var textarea = document.getElementById("textArea")
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";

}
function removeStyles(){
    var textarea = document.getElementById("textArea")
    textarea.style.fontWeight = "";
    textarea.style.color = "";
    textarea.style.textDecoration = "";
}
function makeUppercase(){
    var textarea = document.getElementById("textArea")
    inputText = textarea.value;
    upperText = inputText.toUpperCase();
    modifiedText = upperText.split(".");
    finalText = modifiedText.join(". -Moo");
    textarea.value = finalText;
}
