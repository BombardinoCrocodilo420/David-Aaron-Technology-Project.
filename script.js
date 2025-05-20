<<<<<<< HEAD
function showMultiples() {
    let output = "";
    for (let i = 1; i <= 12; i++) {
      output += (i * 8) + " ";
    }
    document.getElementById("multiplesOutput").innerText = output;
  }
  
  function calculateBudget() {
    const total = parseFloat(document.getElementById("budgetInput").value);
    if (isNaN(total)) {
      document.getElementById("budgetOutput").innerText = "Please enter a valid number.";
      return;
    }
    const stock = (total * 0.44).toFixed(2);
    const staff = (total * 0.30).toFixed(2);
    const ops = (total * 0.26).toFixed(2);
    document.getElementById("budgetOutput").innerText = `Stock: $${stock}, Staff: $${staff}, Operating: $${ops}`;
  }
  
  function multiplyWithoutOperator() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    if (isNaN(a) || isNaN(b)) {
      document.getElementById("multiplyOutput").innerText = "Enter valid numbers.";
      return;
    }
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += Math.abs(a);
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) result = -result;
    document.getElementById("multiplyOutput").innerText = `Result: ${result}`;
  }
  
  // Guessing Game Logic
  let secretNumber = Math.floor(Math.random() * 101);
  
  function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("guessFeedback");
  
    if (isNaN(guess)) {
      feedback.style.color = "red";
      feedback.innerText = "Please enter a number.";
      return;
    }
  
    if (guess === secretNumber) {
      feedback.style.color = "green";
      feedback.innerText = "🎉 Correct! You guessed the number!";
    } else if (guess < secretNumber) {
      feedback.style.color = "orange";
      feedback.innerText = "Too low! Try a higher number.";
    } else {
      feedback.style.color = "orange";
      feedback.innerText = "Too high! Try a lower number.";
    }
  }
  
  function resetGame() {
    secretNumber = Math.floor(Math.random() * 101);
    document.getElementById("guessFeedback").innerText = "";
    document.getElementById("guessInput").value = "";
  }
  
  // Table of 3 Generator
  function generateTable() {
    const limit = parseInt(document.getElementById("tableInput").value);
    const output = document.getElementById("tableOutput");
  
    if (isNaN(limit) || limit < 0) {
      output.style.color = "red";
      output.innerText = "Please enter a non-negative number.";
      return;
    }
  
    let result = "";
    for (let i = 0; i <= limit; i++) {
      result += `3 × ${i} = ${3 * i}<br>`;
    }
    output.style.color = "#2c3e50";
    output.innerHTML = result;
  }
  
  // Newsletter Subscription
  function subscribeNewsletter() {
    const email = document.getElementById("newsletterEmail").value;
    const message = document.getElementById("newsletterMessage");
    if (email.includes("@") && email.includes(".")) {
      message.style.color = "green";
      message.innerText = "Thanks for subscribing!";
      document.getElementById("newsletterEmail").value = "";
    } else {
      message.style.color = "red";
      message.innerText = "Please enter a valid email address.";
    }
  }
=======
function showMultiples() {
    let output = "";
    for (let i = 1; i <= 12; i++) {
      output += (i * 8) + " ";
    }
    document.getElementById("multiplesOutput").innerText = output;
  }
  
  function calculateBudget() {
    const total = parseFloat(document.getElementById("budgetInput").value);
    if (isNaN(total)) {
      document.getElementById("budgetOutput").innerText = "Please enter a valid number.";
      return;
    }
    const stock = (total * 0.44).toFixed(2);
    const staff = (total * 0.30).toFixed(2);
    const ops = (total * 0.26).toFixed(2);
    document.getElementById("budgetOutput").innerText = `Stock: $${stock}, Staff: $${staff}, Operating: $${ops}`;
  }
  
  function multiplyWithoutOperator() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    if (isNaN(a) || isNaN(b)) {
      document.getElementById("multiplyOutput").innerText = "Enter valid numbers.";
      return;
    }
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += Math.abs(a);
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) result = -result;
    document.getElementById("multiplyOutput").innerText = `Result: ${result}`;
  }
  
  // Guessing Game Logic
  let secretNumber = Math.floor(Math.random() * 101);
  
  function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("guessFeedback");
  
    if (isNaN(guess)) {
      feedback.style.color = "red";
      feedback.innerText = "Please enter a number.";
      return;
    }
  
    if (guess === secretNumber) {
      feedback.style.color = "green";
      feedback.innerText = "🎉 Correct! You guessed the number!";
    } else if (guess < secretNumber) {
      feedback.style.color = "orange";
      feedback.innerText = "Too low! Try a higher number.";
    } else {
      feedback.style.color = "orange";
      feedback.innerText = "Too high! Try a lower number.";
    }
  }
  
  function resetGame() {
    secretNumber = Math.floor(Math.random() * 101);
    document.getElementById("guessFeedback").innerText = "";
    document.getElementById("guessInput").value = "";
  }
  
  // Table of 3 Generator
  function generateTable() {
    const limit = parseInt(document.getElementById("tableInput").value);
    const output = document.getElementById("tableOutput");
  
    if (isNaN(limit) || limit < 0) {
      output.style.color = "red";
      output.innerText = "Please enter a non-negative number.";
      return;
    }
  
    let result = "";
    for (let i = 0; i <= limit; i++) {
      result += `3 × ${i} = ${3 * i}<br>`;
    }
    output.style.color = "#2c3e50";
    output.innerHTML = result;
  }
  
  // Newsletter Subscription
  function subscribeNewsletter() {
    const email = document.getElementById("newsletterEmail").value;
    const message = document.getElementById("newsletterMessage");
    if (email.includes("@") && email.includes(".")) {
      message.style.color = "green";
      message.innerText = "Thanks for subscribing!";
      document.getElementById("newsletterEmail").value = "";
    } else {
      message.style.color = "red";
      message.innerText = "Please enter a valid email address.";
    }
  }
>>>>>>> ecfb469227f12c8ad2aee446489de9d006ed9e1d
  