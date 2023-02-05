
let t1, t2, t3, svar

function startSpill(){

    t1 = Math.floor(Math.random()*10);
    t2 = Math.floor(Math.random()*10);
    document.getElementById('sporsmal').innerHTML = t1 + ' * ' + t2;
    document.getElementById('spill').style.display='block';
    document.getElementById('start').style.display='none';
    //document.getElementById('input').innerHTML = '';

    t3 = t1 * t2
}

function nesteSpill(){

    t1 = Math.floor(Math.random()*10);
    t2 = Math.floor(Math.random()*10);
    document.getElementById('sporsmal').innerHTML = t1 + ' * ' + t2;
    //document.getElementById('input').innerHTML = '';

    t3 = t1 * t2
}

function svarGitt(svar){
    let tall = Number(svar);
    if (tall===t3){
        document.getElementById('resultat').innerHTML='Riktig!'

    }else {
        document.getElementById('resultat').innerHTML='Feil!'
    }
    //nesteSpill()

}
