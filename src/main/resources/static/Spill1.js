
function testfunk(){
    window.alert("5 + 6 != " + 5 + 6);
}

function startSpill(){
    let t1, t2;
    t1 = Math.floor(Math.random()*10);
    t2 = Math.floor(Math.random()*10);
    document.getElementById('sporsmal').innerHTML = t1 + ' * ' + t2;
    document.getElementById('spill').style.display='block';
    document.getElementById('start').style.display='none';
    return t1 * t2;
}

function svarGitt(svar, t3){
    let tall = Number(svar);
    if (tall===t3){
        alert("Riktig");
        startSpill();
    }else {
        alert("Feil!");
        startSpill();
        document.write(t3)

    }
}
