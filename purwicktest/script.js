function calculateScore() {
	let score = 0;
	let maxScore = 382;
	const checkboxes = document.getElementsByName("question");
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			const weight = parseInt(document.getElementById(checkboxes[i].value+"_weight").value);
			score += weight;
		}
	}
	window.location.href = "result.html?score=" + (maxScore - score);
}
