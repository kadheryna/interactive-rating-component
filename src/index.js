let firstBox = document.querySelector(".first__box");
let secondBox = document.querySelector(".second__box");
let numberButton = document.querySelectorAll(".number__btn");
let submitButton = document.querySelector(".submit");
let result = document.querySelector(".result");

numberButton.forEach(button => {
	button.onclick = () => {
		btnValue = button.value;
	};
});

const submitValue = () => {
	if (btnValue === undefined) return;
	firstBox.style.display = "none";
	secondBox.style.display = "flex";
	result.innerHTML = `You selected ${btnValue} out of 5`;
};
