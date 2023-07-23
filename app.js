function convertToText() {
    const htmlInput = document.getElementById("htmlInput").value;
    const textOutput = document.getElementById("textOutput");
    textOutput.innerHTML = htmlInput;
}

function resetInput() {
    const htmlInput = document.getElementById("htmlInput");
    const textOutput = document.getElementById("textOutput");
    htmlInput.value = "";
    textOutput.innerHTML = "";
}
