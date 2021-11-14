import logo from './logo.svg';
import bootstrapLogo from './bootstrap-logo.svg';
import checkMark from './check-mark-svgrepo-com.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container py-3">
      {/*  Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
      <Footer />

    </div>
  );
}

//#region Header

const NAVBAR_LINKS = [{name: 'Features', src: '#'},{name: 'Enterprise', src: '#'},{name: 'Support', src: '#'},{name: 'Pricing', src: '#'},{name: 'Checkout', src: 'checkout.html'}];

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

//#endregion

//#region Body

const cards = [
  {
    cardClasses: 'card mb-4 rounded-3 shadow-sm',
    cardHeaderClasses: 'card-header py-3',
    cardHeader: 'Free',
    price: 0,
    listItems: [
      "10 users included", "2 GB of storage", "Email support", "Help center access"
    ],
    buttonClasses: 'w-100 btn btn-lg btn-outline-primary',
    buttonText: 'Sign up for free'
  },
  {
    cardClasses: 'card mb-4 rounded-3 shadow-sm',
    cardHeaderClasses: 'card-header py-3',
    cardHeader: 'Pro',
    price: 15,
    listItems: [
      "20 users included", "10 GB of storage", "Priority email support", "Help center access"
    ],
    buttonClasses: 'w-100 btn btn-lg btn-outline-primary',
    buttonText: 'Get started'
  },
  {
    cardClasses: 'card mb-4 rounded-3 shadow-sm border-primary',
    cardHeaderClasses: 'card-header py-3 text-white bg-primary border-primary',
    cardHeader: 'Enterprise',
    price: 29,
    listItems: [
      "30 users included", "15 GB of storage", "Phone and email support", "Help center access"
    ],
    buttonClasses: 'w-100 btn btn-lg btn-primary',
    buttonText: 'Contact us'
  }
]

class ListItem extends React.Component {
  render() {
    return <li>{this.props.value}</li>
  }
}

class CardItem extends React.Component {
  render() {
    let cardItem = this.props.item.listItems;
    let listItems = cardItem.map((obj) =>
        <ListItem key={obj.toString()} value={obj} />
    );

    return (
        <div className={this.props.item.cardClasses}>
          <div className={this.props.item.cardHeaderClasses}>
            <h4 className="my-0 fw-normal">{this.props.item.cardHeader}</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>${this.props.item.price}<small className='text-muted fw-light'>/mo</small></h1>
            <ul className='list-unstyled mt-3 mb-4'>
              {listItems}
            </ul>
            <button type='button' className={this.props.item.buttonClasses}>{this.props.item.buttonText}</button>
          </div>
        </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <CardItem item={cards[0]} />
        </div>
        <div className="col">
          <CardItem item={cards[1]} />
        </div>
        <div className="col">
          <CardItem item={cards[2]} />
        </div>
      </div>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
          <tr>
            <th style={{width: 34 + '%;'}}></th>
            <th style={{width: 22 + '%;'}}>Free</th>
            <th style={{width: 22 + '%;'}}>Pro</th>
            <th style={{width: 22 + '%;'}}>Enterprise</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row" className="text-start">Public</th>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Private</th>
            <td></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          </tbody>

          <tbody>
          <tr>
            <th scope="row" className="text-start">Permissions</th>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Sharing</th>
            <td></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Unlimited members</th>
            <td></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><img src={checkMark} alt="" width="24" height="24" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>;
  }
}

//#endregion

//#region Footer

const FOOTER_LIST_1 = [{name: "Cool Stuff", src: "#"},{name: "Random Features", src: "#"},{name: "Team Features", src: "#"},{name: "Stuff for developers", src: "#"},{name: "Another one", src: "#"},{name: "Last Time", src: "#"}];
const FOOTER_LIST_2 = [{name: "Resource", src: "#"},{name: "Resource name", src: "#"},{name: "Another resource", src: "#"},{name: "Final resource", src: "#"}];
const FOOTER_LIST_3 = [{name: "Team", src: "#"},{name: "Locations", src: "#"},{name: "Privacy", src: "#"},{name: "Terms", src: "#"}];

class Footer extends React.Component {
  render() {
    return <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src={bootstrapLogo} alt="" width="24" height="19"/>
          <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
        </div>

        <FooterCol title="Features" items={FOOTER_LIST_1}/>
        <FooterCol title="Resources" items={FOOTER_LIST_2}/>
        <FooterCol title="About" items={FOOTER_LIST_3}/>

      </div>
    </footer>;
  }
}

class ListItemLink extends React.Component {
  render() {
    return <li className="mb-1"><a className="link-secondary text-decoration-none" href={this.props.link}>{this.props.name}</a></li>;
  }
}

class FooterCol extends React.Component {
  render() {
    let footerItem = this.props.items;
    let listItems = footerItem.map((obj) =>
        <ListItemLink key={obj.name} link={obj.src} name={obj.name} />
    );

    return <div className="col-6 col-md">
      <h5>{this.props.title}</h5>
      <ul className="list-unstyled text-small">
        {listItems}
      </ul>
    </div>
  }
}

//#endregion

export default App;
