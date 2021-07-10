const arr = ["Hello", "HI"];
const arrOff = [];
const inputValue = "Hi";

function Capitalize(Text) {
  let textToLowerCase = Text.toLowerCase();
  return textToLowerCase.charAt(0).toUpperCase()+textToLowerCase.slice(1).toLowerCase();
}

arr.map((item) => {
  arrOff.push(item.toLowerCase());  
  arrOff.push(item.toUpperCase());  
  arrOff.push(Capitalize(item));
})

if(arrOff.includes(inputValue)) {
  alert("equal");
} else {
  alert("not equal");
}
