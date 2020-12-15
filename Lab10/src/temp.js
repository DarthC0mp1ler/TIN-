function convertFromCelcius(celc){
    if(isNaN(celc)) return "could not calculate";
    return (celc * 9/5 + 32) + " F, " + (celc + 273.15) + " K";
}

function convertFromFahrenheit(fahr){
    if(isNaN(fahr)) return "could not calculate";
    return ((fahr-32) * 5/9) + " C, " + ((fahr-32) * 5/9 + 273.15) + " K";
}

function convertFromKelvin(kelv){
    if(isNaN(kelv)) return "could not calculate";
    return (kelv - 273.15) + " C, " + ((kelv - 273.15) * 9/5 + 32) + " F";
}

function convertor(celc,fahr,kelv,base){
    let icelc = parseInt(celc);
    let ifahr = parseInt(fahr);
    let ikelv = parseInt(kelv);

    switch (base){
        case "C":
            return convertFromCelcius(icelc);
        case "F":
            return convertFromFahrenheit(ifahr);
        case "K":
            return convertFromKelvin(ikelv);
        default:
            return "could not calculate";
    }
}

exports.convertTemperature = convertor;