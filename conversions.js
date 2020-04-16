//Title conversion from cm to inches
// convert cm to Inches
// 1cm = 0.393 in

function convertToIn(cm){
    var msg1 = "The conversion of ";
    var msg2 = "cm is ";
    var result = cm * 0.393;
    var msg3 = "inches.";
    return msg1 + cm.toString() + msg2 + result.toString() + msg3
}

console.log(convertToIn(20))
