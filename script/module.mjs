export const ajax = new XMLHttpRequest();

ajax.open("GET", "https://seleksi-sea-2023.vercel.app/api/movies");
ajax.send();

export const filmSchedule = new XMLHttpRequest();

filmSchedule.open("GET", "../jadwal.json");
filmSchedule.send();

export class logUser {
   static id = 0;
   loginStatus = true;
   constructor() {
      this.id += 1;
      this.orderHistory = [];
      this.paymentMethod = [];
   }
}

class paymentMethod {
   constructor(paymentNumber) {
      this.paymentNumber = paymentNumber;
   }
}
export class gopay extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Gopay";
      this.logo = "../img/Visa.png";
   }
}
export class ovo extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Ovo";
      this.logo = "../img/Mastercard.png";
   }
}

export class dana extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Dana";
      this.logo = "../img/Mastercard.png";
   }
}
