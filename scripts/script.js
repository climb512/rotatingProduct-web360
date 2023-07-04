window.onload = prepareButton;

function prepareButton() {

    let fanBtn = document.getElementById('fan-btn');
    let umbBtn = document.getElementById('umb-btn');
    let dis = document.getElementById('disclaimer');
    let con = document.getElementById('content');

    fanBtn.onclick = function () {
        fanBtn.style.display = "none";
        umbBtn.style.display = "none";
        dis.style.display = "none";
        con.style.display = "block";
        make360('fan');
    }
    
    umbBtn.onclick = function () {
        fanBtn.style.display = "none";
        umbBtn.style.display = "none";
        dis.style.display = "none";
        con.style.display = "block";
        make360('umbrella');
    }
}