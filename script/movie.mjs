import { ajax } from "../script/module.mjs";

const movieID = localStorage.getItem("movieID");
console.log(movieID);

ajax.onload = function () {
   const json = JSON.parse(ajax.responseText);
   const additionalInfo = document.getElementById("additional-info");
   const descriptionDetails = document.getElementById("description-details");
   const createDesc = document.createElement("p");

   document.getElementById("movie-title").innerHTML = json[movieID].title;
   document.getElementById("main-image").src = json[movieID].poster_url;
   document.getElementById(
      "background-image"
   ).style.backgroundImage = `url(${json[movieID].poster_url})`;
   document.getElementById("movie-description").appendChild(createDesc);
   createDesc.textContent = json[movieID].description;

   for (let i = 1; i <= 2; i++) {
      const createH3 = document.createElement("h3");
      const createP = document.createElement("p");
      const createDiv = document.createElement("div");

      if (i == 1) {
         createH3.textContent = json[movieID].ticket_price.toLocaleString();
         createP.textContent = "Harga Tiket";
      } else {
         if (json[movieID].age_rating < 13) {
            createH3.textContent = `A ${json[movieID].age_rating}+`;
         } else if (
            json[movieID].age_rating >= 13 &&
            json[movieID].age_rating < 18
         ) {
            createH3.textContent = `R ${json[movieID].age_rating}+`;
         } else {
            createH3.textContent = `D ${json[movieID].age_rating}+`;
         }
         createP.textContent = "Kategori Umur";
      }

      additionalInfo.appendChild(createDiv);
      createDiv.appendChild(createH3);
      createDiv.appendChild(createP);
   }

   for (let i = 1; i <= 3; i++) {
      const createP = document.createElement("p");
      const createPValue = document.createElement("p");

      if (i == 1) {
         createP.textContent = "Judul";
         createPValue.textContent = json[movieID].title;
      } else if (i == 2) {
         createP.textContent = "Tanggal Rilis";
         createPValue.textContent = json[movieID].release_date;
      } else {
         createP.textContent = "Kategori Usia";
         createPValue.className = "age ";
         if (json[movieID].age_rating < 13) {
            createPValue.textContent = `A ${json[movieID].age_rating}+`;
            createPValue.style.backgroundColor = "rgba(0, 255, 0, 0.384)";
         } else if (json[movieID].age_rating >= 18) {
            createPValue.textContent = `D ${json[movieID].age_rating}+`;
            createPValue.style.backgroundColor = "rgba(255, 0, 0, 0.363)";
         } else {
            createPValue.textContent = `R ${json[movieID].age_rating}+`;
            createPValue.style.backgroundColor = "rgba(255, 0, 0, 0.363)";
         }
      }
      createP.className = "desc-title";
      createPValue.className += "desc-value";

      descriptionDetails.appendChild(createP);
      descriptionDetails.appendChild(createPValue);
   }
};
