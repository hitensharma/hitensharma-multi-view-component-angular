import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  constructor() {}

  ngOnInit() {}
}
