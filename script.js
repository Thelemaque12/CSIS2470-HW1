// create an object
let jeff = {
  name: "Jefson Simeus",
  age: 29,
  married: true,
  classes: [1350, 1410, 1550, 2470],
  hobbies: [
    {
      name: "Basketball",
      description: " Playing full court 5 vs 5 basketball.",
    },
    {
      name: "Coding",
      description: "coding in python, javascript 2 of my favorite languages",
    },
  ],
};

//HTML Elements
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let classes = document.querySelector(".classes");
let married = document.querySelector(".married");
let hobbies = document.querySelector(".hobbies");
let load = document.querySelector(".loadJson");
let view = document.querySelector(".viewJson");
let raw = document.querySelector(".raw");

// Make JSON from Js Object
let json = JSON.stringify(jeff);

let loadJson = async () => {
  let jeff = JSON.parse(json);
  name.textContent = jeff.name;
  age.textContent = jeff.age;
  classes.textContent = jeff.classes.map((n) => n.toString()).join(", ");
  married.textContent = jeff.married;
  hobbies.textContent = Object.values(jeff.hobbies[1]).join("(").concat(")");
};

//Update DOM
let viewJson = async () => {
  raw.classList.toggle("mystyle");
  raw.style.padding = "1rem";
  raw.style.margin = "1rem";
  raw.style.width = "40vw";
  //raw.style.backgroundColor = "#ffffff";
  //raw.style.border = "2px solid #cccccc";
  //raw.style.borderRadius = "3px";
  raw.setAttribute("contenteditable", "true");
  raw.style.overflow = "scroll";
  raw.textContent = json;
};

load.addEventListener("click", async () => loadJson());
view.addEventListener("click", async () => viewJson());
