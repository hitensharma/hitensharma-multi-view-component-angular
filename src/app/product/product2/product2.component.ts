import { Component, OnInit, OnDestroy } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-product2",
  templateUrl: "./product2.component.html",
  styleUrls: ["./product2.component.scss"],
})
export class Product2Component implements OnInit, OnDestroy {
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
