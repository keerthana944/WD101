document.addEventListener('DOMContentLoaded', function() {
    // Get today's date
    var today = new Date();

    // Calculate the minimum and maximum allowed birthdates
    var maxDate = new Date(today);
    maxDate.setFullYear(today.getFullYear() - 18);

    var minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 55);

    // Format the dates as strings in the "YYYY-MM-DD" format
    var maxDateStr = maxDate.toISOString().split('T')[0];
    var minDateStr = minDate.toISOString().split('T')[0];

    // Set the max and min attributes of the date input
    document.getElementById('dob').setAttribute('max', maxDateStr);
    document.getElementById('dob').setAttribute('min', minDateStr);
});

function submitForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('termsCheckbox').checked;

    // Perform age validation
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    

    // Perform other validations as needed

    // Add data to the table
    var table = document.getElementById('userTable');
    var row = table.insertRow(1); // Inserting a new row at the second position (after the header row)

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = dob;
    cell5.innerHTML = acceptTerms ? 'True' : 'False';

    // Clear the form after submission
    document.getElementById('registrationForm').reset();
}
