let menu = document.querySelector("#menu-button");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

// Add event listener for the "Contact Us" button
let contactUsButton = document.querySelector("#contact-us-button"); // Assuming the button has this ID
contactUsButton.onclick = () => {
    let address = "kuvempu Health Street, jyothinagar,mysuru City, 56789";
    let contactNumber = "+1-800-123-4567";
    alert(`Contact Information:\nAddress: ${address}\nPhone: ${contactNumber}`);
};



let bookNowButton = document.querySelector("#book-now-button");
bookNowButton.onclick = () => {
    // Select the form and its input fields
    let form = document.querySelector("#appointment-form"); // Find the appointment form
    let username = form.username.value.trim();
    let gender = form.gender.value;
    let phno = form.phno.value.trim();
    let email = form.mail.value.trim();
    let date = form.querySelector('input[type="date"]').value; // Select date input
    let address = form.comment.value.trim(); // Select address input

    // Validate form inputs and prepare an alert message
    let missingFields = [];

    if (username === '') {
        missingFields.push("Patient Name");
    }
    if (gender === '') {
        missingFields.push("Gender");
    }
    if (phno === '') {
        missingFields.push("Mobile Number");
    }
    if (email === '') {
        missingFields.push("Email");
    }
    if (date === '') {
        missingFields.push("Appointment Date");
    }
    if (address === '') {
        missingFields.push("Permanent Address");
    }

    // Check if all fields are empty
    if (missingFields.length === 6) {
        alert("Please enter all the required data.");
    } else if (missingFields.length > 0) {
        // Show specific missing fields
        alert("Please enter the following missing data correctly:\n- " + missingFields.join("\n- "));
    } else {
        alert("Your appointment is booked!");
    }
};