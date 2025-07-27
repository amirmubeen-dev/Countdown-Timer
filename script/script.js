const enddate="27 July 2035 1:00 PM"

document.getElementById("enddate").innerHTML=enddate;
const inputs= document.querySelectorAll("input")

function clock(){
    const end = new Date(enddate);
    const now = new Date()

    const diff= (end-now)/1000 //seconds
    if (diff<0) {
        return;
    }
    inputs[0].value=Math.floor(diff / 3600 / 24);
    inputs[1].value=Math.floor(diff / 3600) % 24;
    inputs[2].value=Math.floor(diff / 60 % 60);
    inputs[3].value=Math.floor(diff) % 60;
}
setInterval(() => {
    clock()
}, 1000);
