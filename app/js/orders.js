window.onload{

}


$('td').on('click') {
	$('tr').css('background-color', 'red');
}


/* It's now dawning on me that I should have made
the menu items with a creator class, append them, 
then have all of their information be usable from here,
rather than writing each out by hand. It's already 4:40.. 
I'll see what I can do before 5.*/


var Item = function (name, price, kind) {
	this.name = name;
	this.price = price;
	this.kind = kind;
}


var cheesePizza = new Item("Cheese Pizza", 17, "pizza");
var pepperoniPizza = new Item("Pepperoni Pizza", 19, "pizza");
var meatPizza = new Item("Meat Lovers Pizza", 24, "pizza");
var veggiePizza = new Item("Veggie Pizza", 20, "pizza");

var hamBurger = new Item("Hamburger", 9, "pizza");
var cheeseBurger = new Item("Cheese Burger", 11, "pizza");
var baconBurger = new Item("Bacon-Cheese Burger", 13, "pizza");
var bisonBurger = new Item("Bison Burger", 15, "pizza");
