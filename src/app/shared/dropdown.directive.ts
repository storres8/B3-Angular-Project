import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  // HostBinging allows us to add to an HTML attribute, and allows us to write the logic behind when we
  // want the element to be bound.

  // This particular instance we bind to the class attribute of the html element we place our directive
  // on. When the isOpen property of appDropdown directive is set to true then we add open to the class
  // on the html element.

  // We use HostListener to listen for a click event on the html element where our selector, shown above,
  // is placed on. Once clicked the toggleOpen CB function is initiated and the isOpen property is
  // set to the opposite of what it currently is.

  // By using HostBinging we can place our appDropdown selector on multiple html elements that need this
  // type of functionality to operate.
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
