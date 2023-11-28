const api = {
    root: "http://api.openweathermap.org/data/2.5/",
    key: "c5f91eb9fbdcb59a73cdd5411bb6dac8"
}

const input = document.querySelector("#input"); 
input.addEventListener("keydown", enter);

function enter(e) {
if (e.keycode === 13) {
    getInfo();
}
}