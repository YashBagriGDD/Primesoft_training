import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//#region Header

const NAVBAR_LINKS = [{name: 'Features', src: '#'},{name: 'Enterprise', src: '#'},{name: 'Support', src: '#'},{name: 'Pricing', src: '#'},{name: 'Checkout', src: '/checkout'}];

class NavbarItem extends React.Component {
    render() {
        if (NAVBAR_LINKS.indexOf(this.props.item) + 1 < NAVBAR_LINKS.length){
            return <a className="me-3 py-2 text-dark text-decoration-none" href={this.props.item.src}>{this.props.item.name}</a>;
        }
        else {
            return <a className="py-2 text-dark text-decoration-none" href={this.props.item.src}>{this.props.item.name}</a>;
        }
    }
}

class Navbar extends React.Component {
    render() {
        let navItems = this.props.navItems;
        let navItem = navItems.map(item => {
            return <NavbarItem key={item.name} item={item} />;
        });

        return <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto text-center">
            {navItem}
        </nav>
    }
}

class Header extends React.Component {
    render (){
        return <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="https://getbootstrap.com/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Pricing example</span>
                </a>
                <Navbar navItems={NAVBAR_LINKS} />
            </div>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Pricing</h1>
                <p className="fs-5 text muted">Quickly build an effective pricing table for your potential customers with this
                    Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
        </header>;
    }
}

//#endregion

export default Header;