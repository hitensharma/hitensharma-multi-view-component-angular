import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  constructor() {}

  ngOnInit() {}
}
