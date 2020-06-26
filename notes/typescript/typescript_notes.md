TYPESCRIPT;

Functions - 


TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

// Named function //
function add(x, y) {                // "ADD" is the name of the function here.
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };


-----------------------------------------------


function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.


----------------------------------------------



let myAdd: (baseValue: number, increment: number) => number =
    
    function(x: number, y: number): number { return x + y; };



As long as the parameter types line up, it’s considered a valid type for the function, regardless of the names you give the parameters in the function type.

The second part is the return type. We make it clear which is the return type by using a fat arrow (=>) between the parameters and the return type.


Optional and Default Parameters;

In TypeScript, every parameter is assumed to be required by the FUNCTION. This doesn’t mean that it can’t be given NULL or UNDEFINED, but rather, when the FUNCTION is called, the compiler will check that the user has provided a VALUE for each PARAMETER. The compiler also assumes that these PARAMETERS are the only PARAMETERS that will be passed to the function. 

*In short, the number of arguments given to a function has to match the number of parameters the function expects* 

In JavaScript, every parameter is optional, and users may leave them off as they see fit. When they do, their value is undefined. We can get this functionality in TypeScript by adding a ? to the end of parameters we want to be optional. For example, let’s say we want the last name parameter from above to be optional:

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}



OPTIONAL PARAMETERS and trailing default parameters will share commonality in their types, so both

function buildName(firstName: string, lastName?: string) {
    // ...
}
and

function buildName(firstName: string, lastName = "Smith") {
    // ...
}
share the same type (firstName: string, lastName?: string) => string. The default value of lastName disappears in the type, only leaving behind the fact that the parameter is optional.

------------------------------------------------------------------------

THIS; 

THIS and arrow functions #

In JavaScript, THIS is a variable that’s set when a function is called. THIS makes it a very powerful and flexible feature, but it comes at the cost of always having to know about the context that a function is executing in. 

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};

 TypeScript will warn you when you make this mistake if you pass the --noImplicitThis flag to the compiler. It will point out that this in this.suits[pickedSuit] is of type any


 You can also run into errors with this in callbacks, when you pass functions to a library that will later call them. Because the library that calls your callback will call it like a normal function, this will be undefined. 



 interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}           



With this annotated, you make it explicit that onClickBad must be called on an instance of Handler. Then TypeScript will detect that addClickListener requires a function that has this: void. To fix the error, change the type of this:

class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use `this` here because it's of type void!
        console.log('clicked!');




Because onClickGood specifies its this type as void, it is legal to pass to addClickListener. Of course, this also means that it can’t use this.info. If you want both then you’ll have to use an arrow function:

class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}
This works because arrow functions use the outer this, so you can always pass them to something that expects this: void. The downside is that one arrow function is created per object of type Handler. Methods, on the other hand, are only created once and attached to Handler’s prototype.

---------------------------------------------

Constructors are identified with the keyword "constructor". A Constructor is a special type of method of a class and it will be automatically invoked when an instance of the class is created

The use of the "this" keyword, is used in object methods. The "this" keyword always points to the object that is calling a particular method.