function compoundInterest(principal, rate, time) {
  // Calculate final amount with compound interest
  let amount = principal * (1 + rate) ** time;

  // Show details
  console.log("Principal Amount: " + principal);
  console.log("Time (years): " + time);
  console.log("Rate of Interest: " + (rate * 100) + "%");
  console.log("Final Amount: " + amount.toFixed(2));
}

// Example:
compoundInterest(2000, 0.08, 5);

age = 21
if (age>=18){
    console.log.apply("you are elgible")
} else{
    console.log("you are not eligible")
}

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score > 70) {
    return "B";
  } else if (score > 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "Fail";
  }
}
const score = 60;
console.log("marks:" +score+ "grade:" +getGrade(score))

