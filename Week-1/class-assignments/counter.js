let counter = 30;
function print() {
    if (counter < 0) {
        return;
    }
    console.log(counter--);
}
setInterval(print, 100);

function print2() {
    if(counter < 0) return;
    console.log(counter--);
    setTimeout(print2, 100);
}
// setTimeout(print2, 100);
// print2();

/*
* for(let i = 0; i < 30; i++){
*     setTimeout(print, (i+1)*100);
*    }
*/