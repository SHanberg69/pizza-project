

function getReceipt(){
    var text1= "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var doughTotal= 0;
    var dairyTotal= 0;
    var sauceTotal= 0;
    var sizeArray = document.getElementsByClassName("size");
    var doughArray = document.getElementsByClassName("crust");
    var dairyArray=document.getElementsByClassName("dairy");
    var sauceArray=document.getElementsByClassName("sauce");

    

 // for pizza size
for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1 + selectedSize;
    }
}
if (selectedSize === "Personal Pizza") {
	sizeTotal = 6;
} else if (selectedSize === "Medium Pizza") {
	sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
	sizeTotal = 14;
} else if (selectedSize === "X-tra Large Pizza") {
	sizeTotal = 16;
} 
    

//For Crust
for (var i = 0; i < doughArray.length; i++) {
    if (doughArray[i].checked) {
        var selectedCrust = doughArray[i].value;
        text1 = text1 + "<br>" + selectedCrust;
    }
}
if (selectedCrust === "Plain Crust") {
	doughTotal = 0;
} else if (selectedCrust === "Garlic Butter Crust") {
	doughTotal = 0;
} else if (selectedCrust === "Cheese Stuffed Crust") {
	doughTotal = 3;
} else if (selectedCrust === "Spicy Crust") {
	doughTotal = 0;
} else if (selectedCrust === "House Crust") {
	doughTotal = 0;
} 
    

//For dairy/cheese
    for (var i = 0; i < dairyArray.length; i++) {
    if (dairyArray[i].checked) {
        var selectedDairy = dairyArray[i].value;
        text1 = text1 + "<br>" + selectedDairy;
    }
}
if (selectedDairy === "With Cheese") {
	dairyTotal = 0;
} else if (selectedDairy === "Without Cheese") {
	dairyTotal = 0;
} else if (selectedDairy === "Extra Cheese") {
	dairyTotal = 3;

} 
    

// for sauce
     for (var i = 0; i < sauceArray.length; i++) {
    if (sauceArray[i].checked) {
        var selectedSauce = sauceArray[i].value;
        text1 = text1 + "<br>" + selectedSauce;
    }
}
    
if (selectedSauce === "Marinara Sauce") {
	sauceTotal = 0;
} else if (selectedSauce === "White Sauce") {
	sauceTotal = 0;
} else if (selectedSauce === "BBQ Sauce") {
	sauceTotal = 0;
} else if (selectedSauce === "No Sauce") {
	sauceTotal = 0;
     
}
  

    
function getMeat(runningTotal, text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
    
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}

    
    
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}

};		
	
    
    runningTotal = sizeTotal + doughTotal + dairyTotal + sauceTotal + meatTotal;
	console.log("subtotal: $"+runningTotal+".00");
    document.getElementById("portion").innerHTML = text1;
	document.getElementById("Total").innerHTML = "<br><h3></br> Total Price:$"+runningTotal+".00"+"</h3>";
    //getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};
	
   

   


    