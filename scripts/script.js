var select = document.getElementById("opcoes");
var confirmarBtn = document.getElementById("button");

confirmarBtn.addEventListener("click", function() {
var selectedOption = select.value;

if (selectedOption !== "") {
    window.location.href = selectedOption;
}
});