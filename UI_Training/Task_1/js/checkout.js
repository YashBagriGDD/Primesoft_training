"use strict";

window.onload = function () {
    //Initialize forms
    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit', e => {
            if(form.checkValidity() == false) {
                e.preventDefault();
                e.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });

    const PROMO_CODES = ['boot', 'promo', 'deal', 'examplecode'];

    let promoButton = document.getElementById('promoButton');
    let alertPlaceHolder = document.getElementById('alertPlaceHolder');

    //alert code takes from bootstrap alert page
    let alert = (message, type) => {
        let wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible my-2" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        alertPlaceHolder.append(wrapper);
    };

    //Promo code button
    let PromoCodeValidate = e => {
        e.preventDefault();
        let promoCode = document.getElementById('promoCode').value.toLowerCase();

        if (PROMO_CODES.indexOf(promoCode) == -1) {
            //Sets the code field to empty and prompts invalid code
            document.getElementById('promoCode').value = "";
            alert('Invalid code', 'danger');
        } else {
            //alert valid code
            alert('Code accepted', 'success');
        }
    };

    promoButton.addEventListener('click', PromoCodeValidate);
}