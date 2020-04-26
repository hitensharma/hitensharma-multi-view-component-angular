import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-product1",
  templateUrl: "./product1.component.html",
  styleUrls: ["./product1.component.scss"],
})
export class Product1Component implements OnInit {
  constructor(private _header: HeaderService) {
    this._header.headerNav.next(false);
    this._header.goBackLink.next("Back to Products");
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._header.headerNav.next(true);
    this._header.goBackLink.next("");
  }
}
