function convert2Kilo(miles) {
    if(isNaN(miles)) return "could not calculate";
    if(miles < 0) return "distance cannot be negative";
    return (miles * 1.609) + " kilometers";
}

function convert2Miles(kilos) {
    if(isNaN(kilos)) return "could not calculate";
    if(kilos < 0) return "distance cannot be negative";
    return (kilos / 1.609) + " miles";
}

function convertor(miles, kilos,base) {
    let imiles = parseInt(miles);
    let ikilos = parseInt(kilos);
    switch (base){
        case "K":
            return convert2Miles(ikilos)
        case "M":
            return convert2Kilo(imiles);
        default:
            return "could not calculate";
    }
}

exports.convertDistance = convertor;

