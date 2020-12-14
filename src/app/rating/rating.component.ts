import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
  @Input() stars: number;
  @Output() ratingClickedEmit: EventEmitter<number> = new EventEmitter();

  ratingIntent = -1;

  max: number = 5;
  arr = Array;
  constructor() {}

  ngOnInit() {}

  ratingClicked(index: number) {
    this.ratingClickedEmit.emit(index + 1);
  }

  ratingEnter(index: number) {
    this.ratingIntent = index + 1;
  }

  ratingLeave() {
    this.ratingIntent = -1;
  }
}
