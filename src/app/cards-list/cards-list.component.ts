import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "../services/doctors.service";

@Component({
  selector: "app-cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.css"],
})
export class CardsListComponent implements OnInit {
  doctors: object = [];

  constructor(private doctorsService: DoctorsService) {
    this.doctors = this.doctorsService.apiDoctors;
  }

  ngOnInit() {
    this.doctorsService.getDoctors();
  }
}
