import dist from './dist';
import temp from './temp';

function convertDistance() {
    let kilos = document.getElementById('kilos').value;
    let miles = document.getElementById('miles').value;
    let base = document.getElementById('Dbase').value;

    let res =  dist.convertDistance(miles,kilos,base);
    document.getElementById('Dres').value = res;
}

function convertTemperature(){
    let celc = document.getElementById('celc').value;
    let fahr = document.getElementById('fahr').value;
    let kelv = document.getElementById('kelv').value;
    let base = document.getElementById('Tbase').value;

    let res = temp.convertTemperature(celc,fahr,kelv,base);
    document.getElementById('Tres').value = res;
}

window.convertDistance = convertDistance;
window.convertTemperature = convertTemperature;

//document.body.appendChild(convertDistance());