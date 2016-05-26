$(document).ready(function(){
console.log ("ready");

var sandwich1 = 8.00;
var sandwich2 = 9.95;
var sandwich3 = 12.50;

sandwichID = 0;
payAreaBtn = 0;

finalPrice = 0;
processChange = 0;

$(".sandwich").click(function(event){
	sandwichID = event.target.id;
	orderProcessor(sandwichID);
});

$(".PayArea").click(function(event){
	payAreaBtn = event.target.id;
	paymentOrClear(payAreaBtn);
});

	function orderProcessor(sandwichID) {

	 	if (sandwichID == "sand1") {
	 		finalPrice = finalPrice + sandwich1;
 		} else if (sandwichID == "sand2") {
 			finalPrice = finalPrice + sandwich2;
 		} else {
			finalPrice = finalPrice + sandwich3;
 		}
	document.getElementById('totalPrice').innerHTML = "$" + finalPrice;
	}

	function paymentOrClear(payAreaBtn) {
		
		if (payAreaBtn == "actionPay") {
			 	task = $("#taskInput").val();
			 	if (task == "") {
			 		alert("no values entered for payment");
			 	} else if (task != "") {
			 			if (task < finalPrice) {
						alert("your payment does not cover the cost of the food");
					} else if (task > finalPrice) {
						processChange = task - finalPrice;
						document.getElementById('totalPrice').innerHTML = "$" + processChange;
					}
			 	}
					

		} else if (payAreaBtn == "actionClear") {
			finalPrice = 0.00;
			document.getElementById('totalPrice').innerHTML = "$" + finalPrice;
		}
	}

});