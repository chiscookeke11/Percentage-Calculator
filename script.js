var numField1 = document.getElementById('numField1');
	var numField2 = document.getElementById('numField2');
	var form = document.getElementById('xIsWhatPercentOfY');
	var resultField = document.getElementById('resultField');



form.addEventListener('submit', function(event){
	if (!numField1.value || !numField2.value){
		alert("Please Insert Value in the input fields");
	}
	else{
		var x = parseFloat(numField1.value);
		var y = parseFloat(numField2.value);
		var result = x / y;
		var answer = result * 100;
	}
	resultField.innerText = "Answer: " + answer + "%";
	event.preventDefault();
}
);
