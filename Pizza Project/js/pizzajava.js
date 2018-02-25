

function getReceipt(){
    var text1= "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
}

for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
    }
}
if (selectedSize === "Personal") {
	sizeTotal = 6;
} else if (selectedSize === "Medium") {
	sizeTotal = 10;
} else if (selectedSize === "Large") {
	sizeTotal = 14;
} else if (selectedSize === "Xlarge Pizza") {
	sizeTotal = 16;
} 
runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};
		
	

//getMeat(runningTotal,select,price); 

    /*document.getElementById("portion").innerHTML=select;
	document.getElementById("ItemPrice").innerHTML=price;
	document.getElementById("Total").innerHTML = "<br><h3></br> Total Price:$"+runningTotal+".00"+"</h3>";*/
}
     