import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor() {}

  headerContactDetails = new BehaviorSubject(false); //For Header Contact Details
  headerNav = new BehaviorSubject(true); //For Menu
  goBackLink = new BehaviorSubject(""); //For going Back to Products
  headerLoginBlock = new BehaviorSubject(true);
  loggedInUser = new BehaviorSubject("");
}
