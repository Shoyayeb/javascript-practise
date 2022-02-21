const object = document.querySelectorAll('input[type="checkbox"]')
console.log(object);
for (const i of Object.values(object)) {
    i.checked = true;
}