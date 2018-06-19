
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Animal = Backbone.Model.extend({
  walk: function(){
    console.log("Animal is walking...");
  }
});

var Dog = Animal.extend({
  walk: function(){
    Animal.prototype.walk.apply(this);
    console.log("Dog is walking...")
  }
});

var dog = new Dog(); 

dog.walk();
