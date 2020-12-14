import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctors";

@Injectable({
  providedIn: "root",
})
export class DoctorsService {
  apiDoctors: Doctor[] = [];

  constructor() {}

  getDoctors() {
    let newDoctors = [
      {
        fName: "Stela",
        lName: "Popescu",
        position: "Generalist",
        img: "../../assets/imgs/medic-1.jpg",
        stars: 3,
      },
      {
        fName: "Micul",
        lName: "Geniu",
        position: "Pediatru",
        img: "../../assets/imgs/medic-2.jpg",
        stars: 5,
      },
      {
        fName: "Mircea",
        lName: "Coltescu",
        position: "Cardiolog",
        img: "../../assets/imgs/medic-3.png",
        stars: 2,
      },
      {
        fName: "Ruxandra",
        lName: "Stefanita",
        position: "Dentist",
        img: "../../assets/imgs/medic-4.jpg",
        stars: 4,
      },
      {
        fName: "Matei",
        lName: "Bals",
        position: "Oncolog",
        img: "../../assets/imgs/medic-5.jpg",
        stars: 1,
      },
      {
        fName: "Loredana",
        lName: "Stratulat",
        position: "Ortoped",
        img: "../../assets/imgs/medic-6.jpg",
        stars: 5,
      },
    ];
    this.apiDoctors.push(...newDoctors);

    setTimeout(() => {
      this.apiDoctors[0].fName = "Maricica";

      this.apiDoctors.push({
        fName: "Dumbraviceanu",
        lName: "Corin",
        position: "Chirurg",
        img: "../../assets/imgs/medic-2.jpg",
        stars: 1,
      });
    }, 5000);
  }
}
