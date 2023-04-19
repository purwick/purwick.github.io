const params = new URLSearchParams(window.location.search);
const score = params.get("score");
const resultDiv = document.getElementById("result");
resultDiv.innerText = "Your score is: " + score;
