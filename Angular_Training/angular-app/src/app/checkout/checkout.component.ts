import { Component } from "@angular/core";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html"
})
export class CheckoutComponent {
    name = 'Checkout';

    getName = () => {
        return this.name;
    }
    
    getName2() {
        return this.name;
    }
}