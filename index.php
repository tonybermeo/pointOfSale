<html>
<head>
	<title>Fork in the Road</title>
	<link rel="stylesheet" href="css/normalize.css"/>
	<link rel="stylesheet" href="css/bootstrap.css"/>
	<link rel="stylesheet" href="css/custom.css"/>
</head>
<body>

<div id="container">
	<div id="sandwiches" class="col-md-6">
		<div class="sandwich col-md-2" id="sand1">Grilled Cheese</div>
		<div class="sandwich col-md-2" id="sand2">Pork Grilled Cheese</div>
		<div class="sandwich col-md-2" id="sand3">Pete's Famous Grilled Egg</div>
	</div>
<form>
	<div id="centerCircle">
		<div id="number">
			<span id="totalPrice">$0</span>
		</div>
		<button class="btn btn-success PayArea" type="button" id="actionPay">Payment</button>
		<button class="btn btn-warning PayArea" type="button" id="actionClear">Clear</button>
		<input type="text" class="form-control" placeholder="Cash Tendered" id="taskInput" name="taskInput"></input>
	</div>
</form>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/validator.js"></script>
</body>
</html>