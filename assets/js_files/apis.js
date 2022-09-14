// dog img api https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById("dogImage");
const getNewDogImage = document.getElementById("getNewDogImage");

// const getNewDog = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((Response) => Response.json())
//     .then((json) => {
//       console.log(json);
//       dogImageDiv.innerHTML = `<img src="${json.message}" height=300 width=300 />`;
//     });
// };

const getNewDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  dogImageDiv.innerHTML = `<img src="${data.message}" height=300 width=300 />`;
};

getNewDogImage.onclick = () => getNewDog();
