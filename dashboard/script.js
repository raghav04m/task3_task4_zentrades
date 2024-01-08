
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('dashboardDropdown');
    dropdown.addEventListener('change', function () {
        const selectedValue = dropdown.value;
        console.log(`Selected value: ${selectedValue}`);
       
    });
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        alert('Button Clicked!');
    });
});
