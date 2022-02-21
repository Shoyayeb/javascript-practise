const weight = prompt("Enter weight -in kg");
const height = prompt("Enter height -in meter");
function bmiCalculator(weight, height) {
    const heightSquared = height ** 2;
    const bmi = weight / heightSquared;
    alert(`BMI is ${Math.round(bmi)}`);
}
bmiCalculator(weight, height);