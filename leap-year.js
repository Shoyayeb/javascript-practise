const inputYear = prompt("Enter Year")
function isLeap(inputYear) {
    if (inputYear) {
        if (inputYear % 4 === 0 || inputYear % 400 === 0 || inputYear % 100 !== 0) {
            alert("leap year");
        }
    }
}
isLeap(inputYear);