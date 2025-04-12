const date = document.getElementById('birthDate');
const result = document.getElementById('ageOutput');
const button = document.getElementById('calculateAge');
button.addEventListener('click', calculateAge);
function calculateAge() {
    console.log(date.value);
}