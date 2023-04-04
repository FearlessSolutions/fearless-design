// Get all the "Number of Confirmed" elements
const confirmedElems = document.querySelectorAll('td:nth-of-type(4)');

// Get all the "No Response" elements
const noResponseElems = document.querySelectorAll('td:nth-of-type(5)');

// Get all the "Unable to Attend" elements
const unableToAttendElems = document.querySelectorAll('td:nth-of-type(6)');

// Initialize totals to 0
let confirmedTotal = 0;
let noResponseTotal = 0;
let unableToAttendTotal = 0;

// Loop through each row of the table
for (let i = 0; i < confirmedElems.length; i++) {
	// Add the confirmed value to the confirmed total
	confirmedTotal += parseInt(confirmedElems[i].textContent);

	// Add the no response value to the no response total
	noResponseTotal += parseInt(noResponseElems[i].textContent);

	// Add the unable to attend value to the unable to attend total
	unableToAttendTotal += parseInt(unableToAttendElems[i].textContent);
}

// Set the total values in the table footer
document.getElementById('confirmed-total').textContent = confirmedTotal;
document.getElementById('no-response-total').textContent = noResponseTotal;
document.getElementById('unable-to-attend-total').textContent = unableToAttendTotal;
