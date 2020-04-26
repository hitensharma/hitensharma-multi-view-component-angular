import { Component, OnInit, OnDestroy } from "@angular/core";
import { HeaderService } from "../services/header.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private _header: HeaderService) {
    this._header.headerContactDetails.next(true);
    this._header.headerLoginBlock.next(false);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._header.headerContactDetails.next(false);
    this._header.headerLoginBlock.next(true);
  }
}
