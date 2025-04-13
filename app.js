const date = document.getElementById('birthDate');
const result = document.getElementById('ageOutput');
const button = document.getElementById('calculateAge');
button.addEventListener('click', () => {

    let age = Math.floor((Date.now() - Date.parse(date.value)) / (1000 * 60 * 60 * 24 * 365.25));
    if (isNaN(age)) {
        console.log('Please enter a valid date');
    } else {
        console.log(age);
        result.innerHTML = 'Your Age is ' + age + '  Years old';
    }
});
