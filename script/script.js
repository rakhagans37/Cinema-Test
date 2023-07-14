const totalChair = 0;
const choosenChair = [];
class nonLogUser {
   loginStatus = false;
   constructor() {
      this.balance = 0;
      this.orderHistory = [];
      this.paymentMethod = [];
   }
}
if (localStorage.length === 0) {
   localStorage.setItem("account", JSON.stringify(new nonLogUser()));
}

const movieBook = {
   0: {},
   1: {},
   2: {},
   3: {},
   4: {},
   5: {},
   6: {},
   7: {},
   8: {},
   9: {},
   10: {},
   11: {},
   12: {},
   13: {},
   14: {},
   15: {},
   16: {},
   17: {},
   18: {},
   19: {},
   20: {},
   21: {},
   22: {},
   23: {},
   24: {},
   25: {},
   26: {},
   27: {},
   28: {},
   29: {},
   30: {},
};
if ("BOOK" in localStorage === false) {
   localStorage.setItem("BOOK", JSON.stringify(movieBook));
}

class historyTopUp {
   constructor(totalTopUp) {
      this.type = "topup";
      this.image = "../img/income.png";
      this.title = "Top Up";
      this.date = new Date();
      this.totalTopUp = totalTopUp;
   }
}

function chooseMovie(movieID) {
   console.log(movieID);
   localStorage.setItem("movieID", movieID);
   window.location = "page/movie.html";
}

function closePopUp() {
   const form = document.getElementById("input-payment");
   form.style.display = "none";
}
function openPopUp() {
   const form = document.getElementById("input-payment");
   form.style.display = "flex";
}
function addPayment() {
   let json = JSON.parse(localStorage.getItem("account"));
   if (json.loginStatus === false) {
      alert("Anda harus login terlebih dahulu");
   } else {
      openPopUp();
   }
}

function confirmPayment() {
   let nominal = Number(
      document.getElementById("total").textContent.replace("Rp. ", "")
   );
   let json = JSON.parse(localStorage.getItem("account"));

   json.balance += nominal;
   json.orderHistory.push(new historyTopUp(nominal));
   localStorage.setItem("account", JSON.stringify(json));

   window.location = "balance.html";
}

function cancelPayment() {
   document.getElementById("section").style.display = "None";
}
