import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  /*************************************/
  /* Properties of Header Updates Here */
  /*************************************/

  goBackLink = ""; //For Back Link
  headerNav; //For Menu
  headerLoginBlock; //For Login Block
  headerContactDetails; //For Contact Details
  loggedInUser; //Login User Check
  constructor(private _header: HeaderService, private router: Router) {
    //For Header Contact Details
    this._header.headerContactDetails.subscribe((res) => {
      this.headerContactDetails = res;
    });
    //For Menu
    this._header.headerNav.subscribe((res) => {
      this.headerNav = res;
    });
    //For Go Back Link
    this._header.goBackLink.subscribe((res) => {
      this.goBackLink = res;
    });
    //For Login Link
    this._header.headerLoginBlock.subscribe((res) => {
      this.headerLoginBlock = res;
    });
    //For Login Link
    this._header.loggedInUser.subscribe((res) => {
      this.loggedInUser = res;
      this.router.navigate(["/"]);
    });
  }

  onLogout() {
    this._header.loggedInUser.next("");
  }

  ngOnInit() {}
}
