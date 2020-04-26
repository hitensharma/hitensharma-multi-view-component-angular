import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private _header: HeaderService, private router: Router) {}

  ngOnInit() {}
  onLoggedIn(uname, password) {
    if (password.value == "123") {
      this._header.loggedInUser.next(uname.value);
      this.router.navigate(["home"]);
    } else {
      alert("Enter password 123 to continue");
    }
  }
}
