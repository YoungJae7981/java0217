// Select the button element
let submitBtn = document.getElementById("submitBtn");

// Add an event listener to the button
submitBtn.addEventListener("click", function () {
  // Step 1: Get input value
  let input_value = parseInt(document.getElementById("guessed").value);

  // Step 2: Generate random value
  let random_value = Math.floor(Math.random() * 10) + 1;

  // Step 3: Create output message tags
  let output_message = "";

  // Check if the input value is a number between 1 and 10
  if (isNaN(input_value)) {
    output_message = "입력이 잘못됐어 1부터 10까지 숫자만 얘기해야해";
  } else if (input_value < 1 || input_value > 10) {
    output_message = "1부터 10까지라고";
  } else {
    // We need to check if the input value matches the random value
    if (input_value === random_value) {
      output_message = "축하해 니가 맞았어";
    } else {
      output_message = `정답은 이거야~ ${random_value}.`;
    }
  }

  // Display the output message
  document.body.innerHTML = output_message;
});
