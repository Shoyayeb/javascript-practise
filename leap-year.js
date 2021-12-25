const inputYear = prompt("Enter Year")
function isLeap(inputYear) {
    // if (inputYear) {
    //     if (inputYear % 4 === 0 || inputYear % 400 === 0 || inputYear % 100 !== 0) {
    //         alert("leap year");
    //     }
    // }
    if (inputYear % 4 === 0) {
        if (inputYear % 100 === 0) {
            if (inputYear % 400 === 0) {
                alert("Leap Year");
            } else { alert("Normal Year"); }
        } else { alert("Leap Year"); }
    } else { alert("Normal Year"); }
}
isLeap(inputYear);