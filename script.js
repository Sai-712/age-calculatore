function getDOB() {
 let inputDob = document.getElementById("inputDob").value;
 let dob = new Date(inputDob);
 let now = new Date();

 let yearDiff = now.getFullYear() - dob.getFullYear();
 let monthDiff = now.getMonth() - dob.getMonth();
 let dateDiff = now.getDate() - dob.getDate();

 if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
   yearDiff--;
   monthDiff = (monthDiff + 12) % 12;
   if (dateDiff < 0) {
     monthDiff--;
     dateDiff = new Date(now.getFullYear(), now.getMonth(), 0).getDate() + dateDiff;
   }
 }

 let dobDay = dob.getDay();
 let daysLived = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
 let yearsLived = yearDiff;
 let monthsLived = yearsLived * 12 + monthDiff;
 let weeksLived = Math.floor(daysLived / 7);
 let hoursLived = daysLived * 24;
 let minutesLived = hoursLived * 60;
 let secondsLived = minutesLived * 60;

 let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
 if (nextBirthday < now) {
   nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
 }
 let daysLeft = Math.floor((nextBirthday - now) / (1000 * 60 * 60 * 24));

 document.getElementById("CurrentAge").textContent = yearDiff + " years " + monthDiff + " months " + dateDiff + " days";
 document.getElementById("DOB").textContent = dob.toDateString();
 document.getElementById("InYears").textContent = yearsLived;
 document.getElementById("InMonths").textContent = monthsLived;
 document.getElementById("InWeeks").textContent = weeksLived;
 document.getElementById("InDays").textContent = daysLived;
 document.getElementById("InHours").textContent = hoursLived;
 document.getElementById("InMinutes").textContent = minutesLived;
 document.getElementById("InSeconds").textContent = secondsLived;
 document.getElementById("DaysLeft").textContent = daysLeft;
}
