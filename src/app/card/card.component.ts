import { Component, OnInit, Input } from "@angular/core";
import { Doctor } from "../models/doctors";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() info: Doctor;

  constructor() {}

  ngOnInit() {}

  updateStars(stars: number) {
    this.info.stars = stars;
  }
}
