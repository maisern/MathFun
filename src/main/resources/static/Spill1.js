
function testfunk(){
    window.alert("5 + 6 != " + 5 + 6);
}

function startSpill(){
    document.getElementById('spill').style.display='block';
    document.getElementById('start').style.display='none';
}

function svarGitt(svar){
    let tall = Number(svar);
    if (tall===20){
        document.write("Riktig")
        document.write(tall);
    }else {
        document.write("Feil!")
        document.write(tall);

    }
}
