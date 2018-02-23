/*saving this info as possible things for later*/

var size_prices = new Array();
pizza_prices["personal"]=6;
pizza_prices["medium"]=10;
pizza_prices["large"]=14;
pizza_prices["xlarge"]=16;


function getPizzaSizePrice()
{
    var PizzaSizePrice=0;
    var theForm = document.forms["orderform"];
    var selectedSize = theForm.elements["size"];
    for(var i = 0; i < selectedSize.length; i++)
    {
        if(selectedSize[i].checked)
        {
            PizzaSizePrice = pizza_prices[selectedSize[i].value];
            break;
        }
    }
    return PizzaSizePrice();
}
