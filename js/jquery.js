// 180 no module


// $("h1").css("color", "greenyellow");
console.log($("h1").hasClass("primary-color"));
console.log($("h1").css("margin"));


// click
$("button").click(() => {
    $("h1").text("this is text from jquery");
    $("h1").addClass("primary-color");
})
console.log(document.querySelectorAll("button"));
document.querySelectorAll("button").onClick = () => {

}