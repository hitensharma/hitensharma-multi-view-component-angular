import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  constructor() {}

  ngOnInit() {}
}
