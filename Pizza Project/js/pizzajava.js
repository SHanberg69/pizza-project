
function valueAndCost() {
	var runningTotal = 0,
        sizeTotal = 0;
    select = "<h3>You Ordered:</h3>";   
	price = "<h3>Item Price:</h3>";  
    sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			select = select+selectedSize+"<br>";
		}
	}
	if (selectedSize === "personal") {
		sizeTotal = 6;	
	} else if (selectedSize === "medium") {
		sizeTotal = 10;
	} else if (selectedSize === "large") {
		sizeTotal = 14;
	} else if (selectedSize === "xlarge") {
		sizeTotal = 16;
	}
	price = price+sizeTotal+"<br>";
	runningTotal = sizeTotal;
	getMeat(runningTotal,select,price); 

    document.getElementById("portion").innerHTML=select;
	document.getElementById("ItemPrice").innerHTML=price;
	document.getElementById("Total").innerHTML = "<br><h3></br> Total Price:$"+runningTotal+".00"+"</h3>";
}
     