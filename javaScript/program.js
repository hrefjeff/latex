document.writeln('Hello, world!');

divider(20);

var empty_object = {};

var msThang = {

	"first-name" : "Morgan\u00E9",
	middle_name  : "msThang",
	last_name    : "Burcham"

};

document.writeln(msThang['first-name']);
document.writeln(msThang.last_name);

// for default vals, use ||
// Basically saying undefined, or "blah"
document.writeln(msThang.middle_name || "default");
document.writeln(msThang['middle_name'] || "default");

divider('22');

// update

msThang["first-name"] = "Missy";
msThang.last_name = "Elliot";

document.writeln(msThang['first-name']);
document.writeln(msThang.last_name);

divider(23);

// 10_30 (Programming languages example)
document.writeln("a".charCodeAt(0));

function divider(section){

		document.writeln('****************'+ section +'****************');

}

// ASCII code



// Freeze --- c++ const?
// From the Javascript: the difinitive guide

Object.freeze(msThang);

msThang['first-name'] = 'SomeChange';
document.writeln(msThang['first-name']);
document.writeln('Wow. No change o___o');

// Floating point test

var num = 1000000000;

for (var i = 0; i<900000; i++)
	num -= .5;

document.writeln(num);

//---------------------Exceptions--------------------
var try_example = function() {
  try {
    functionNotIsNotDefined("seven");
  }

  catch(e) {
    document.writeln(e.name + ": " + e.message);
  }
}
try_example();

//--------------------Bad Parts---------------------
	if ('' == '0')  // false
	if (0 == '')    // true
	if (0 == '0')   // true
	if (false == 'false')   // false
	if (false == '0')       // true
	if (false == undefined) // false
	if (false == null)      // false
	if (null == undefined)  // true
	if ('\t\r\n' == 0)      // true
	document.writeln('test');

//------------------Compound operator example------------------------
	var number = 5;
	number = number + 1;      
	document.writeln(number); // Writes 6 to HTML DOM
	number += 1;              // Compound operator for addition
	document.writeln(number); // Writes 7 to HTML DOM

//------------------Real numbers-----------------------------------
	// var x = .3 - .2; // thirty cents minus 20 cents
	// var y = .2 - .1; // twenty cents minus 10 cents
	// x == y           // declared false
	// x == .1          // also declared false
	// y == .1          // surprisingly declared true

//	var a = "\u0062";
//	alert(a);

//---------------Ordinal types--------------------------
var array = [];
array[4294967297] = 5;
array[5] = 2;
document.writeln(array[4294967297])

//---------------Hoisted function-----------------------
	hoistedFunction();  // Successful call without previous definition

	function hoistedFunction() 
	{ 
		document.writeln("Test Hoist");
	}

//--------------Closures---------------
	var candy = (function () {  // Anonymous function 1

		var flavor = "Lime";

		return {
			changeFlavor: function (newFlavor) { // Anonymous function 2
				flavor = typeof newFlavor === 'string' ? newFlavor : "Lime";
			},
			getFlavor: function () { // Anonymous function 3
				return flavor;
			}

		};
	}());

	document.writeln(candy.getFlavor()); // Prints "Lime"
	candy.setFlavor("Cherry");
	candy.flavor = "Chocolate";
	document.writeln(candy.getFlavor()); // Prints "Cherry"