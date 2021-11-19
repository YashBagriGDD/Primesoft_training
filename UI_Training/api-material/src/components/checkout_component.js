import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapLogo from '../bootstrap-logo.svg';


class CheckoutComponent extends React.Component {
    render() {
        return(<main>
            <div className=" py-5 text-center">
                <img className="mb-3" src={bootstrapLogo} alt="bootstrap logo" width="72" height="57" />
                    <h2>Checkout form</h2>
                    <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each
                        required form group has a validation state that can be triggered by attempting to submit the
                        form without completing it.</p>
            </div>

            {/*// <!-- Forms -->*/}
            <div className="row g-3">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex mb-3 align-items-center justify-content-between">
                        <span className="text-primary">Your card</span>
                        <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-2">
                        <li className="d-flex list-group-item justify-content-between">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small>Brief description</small>
                            </div>
                            <span>$12</span>
                        </li>
                        <li className="d-flex list-group-item justify-content-between">
                            <div>
                                <h6 className="my-0">Second Item</h6>
                                <small>Brief description</small>
                            </div>
                            <span>$8</span>
                        </li>
                        <li className="d-flex list-group-item justify-content-between">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small>Brief description</small>
                            </div>
                            <span>$5</span>
                        </li>
                        <li className="d-flex list-group-item justify-content-between bg-light">
                            <div>
                                <h6 className="text-success my-0">Promo code</h6>
                                <small className="fw-light text-success">EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="d-flex list-group-item justify-content-between">
                            <span>Total (USD)</span>
                            <span className="fw-bold">$20</span>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" id="promoCode" placeholder="Promo code"
                                   value="" />
                                <button className="btn btn-secondary" type="submit" id="promoButton">Redeem</button>
                        </div>
                        <div id="alertPlaceHolder"></div>
                    </form>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing Address</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                       required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                       required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                           value="" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                       value="" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                       value="" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">Address 2 <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2"
                                       placeholder="Apartment or suite" value="" />
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States of America</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="zipcode" className="form-label">Zip</label>
                                <input type="number" className="form-control" id="zipcode" placeholder="" value=""
                                       required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="sameShippingAddress" />
                                    <label htmlFor="sameShippingAddress" className="form-check-label">Shipping address
                                        is the same as my billing address.</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="saveInfo" />
                                    <label htmlFor="saveInfo" className="form-check-label">Save this information for
                                        next time.</label>
                            </div>

                            <hr className="my-4" />

                                <h4 className="mb-3">Payment</h4>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="creditCard" id="creditCard"
                                           checked required />
                                        <label htmlFor="creditCard" className="form-check-label">
                                            Credit Card
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="creditCard" id="debitCard"
                                           required />
                                        <label htmlFor="debitCard" className="form-check-label">
                                            Debit Card
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="creditCard" id="paypal"
                                           required />
                                        <label htmlFor="paypal" className="form-check-label">
                                            PayPal
                                        </label>
                                </div>

                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="ccName" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="ccName" placeholder="" value=""
                                               required />
                                            <div className="form-text">
                                                Full name as displayed on card.
                                            </div>
                                            <div className="invalid-feedback">
                                                Name on card is required.
                                            </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="ccNumber" className="form-label">Card Number</label>
                                        <input type="number" className="form-control" id="ccNumber" placeholder=""
                                               value="" required />
                                            <div className="invalid-feedback">
                                                Card number is required.
                                            </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="ccExpiration" className="form-label">Expiration</label>
                                        <input type="text" id="ccExpiration" className="form-control" placeholder=""
                                               value="" required />
                                            <div className="invalid-feedback">
                                                Expiration date required.
                                            </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="ccSecurity" className="form-label">CVV</label>
                                        <input type="number" className="form-control" id="ccSecurity" placeholder=""
                                               value="" required />
                                            <div className="invalid-feedback">
                                                Security code is required.
                                            </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <button className="col-12 btn btn-primary btn-lg" type="submit">Continue to
                                    checkout
                                </button>
                    </form>
                </div>
            </div>
        </main>);
    }
}

export default CheckoutComponent;