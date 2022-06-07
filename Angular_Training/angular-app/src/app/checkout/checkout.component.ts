import { Component, Input } from "@angular/core";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html"
})
export class CheckoutComponent {
    @Input() name:string = 'Checkout';

    // getName = () => {
    //     return this.name;
    // }
    
    getName() {
        return this.name;
    }
}