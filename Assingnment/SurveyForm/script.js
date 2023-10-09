function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = getSelectedGender();
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('Please fill in all fields before submitting.');
    } else {
        const popupContent = document.getElementById('popupContent');
        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }
}



function getSelectedGender() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
        return selectedGender.value;
    }

    return '';
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('surveyForm').reset();
}

function resetForm() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('surveyForm').reset();
}
