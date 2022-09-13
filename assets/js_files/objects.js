// key value pair
const Actor = {
  name: "Amitabh Bachchan",
  cloths: "white",
};

console.table(Actor.name); // access objests using dot notation
console.table(Actor["cloths"]); // access objests using bracket notation

// Assign objects
Actor.phone = "+12345678980"; // asign objests using dot notation
Actor["car"] = "Nano"; // asign objests using bracket notation
console.table(Actor.phone);

// Whole data of objects

console.log(Actor);

// Objects and function

// ES6 arrow function with object inside a func. with 2 args.
//template literals
// Mathod Math.floor
const introducer = (name, cloths) => {
  const Hero = {
    name: name,
    cloths: cloths,
    assets: 100,
    liability: 30,
    networth: function () {
      return this.assets - this.liability;
    },
  };

  const intro = `Hi, my name is ${Hero.name} and I have a ${
    Hero.cloths
  } shirt. Also I have ${Hero.assets}USD with ${
    Hero.liability
  } liability with an awesome networth ${Hero.networth()}USD `;
  return intro;
};

console.log(introducer("Krunal", "Black"));
