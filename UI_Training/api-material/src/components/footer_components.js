import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapLogo from '../bootstrap-logo.svg';

//#region Footer

const FOOTER_LIST_1 = [{name: "Cool Stuff", src: "#"},{name: "Random Features", src: "#"},{name: "Team Features", src: "#"},{name: "Stuff for developers", src: "#"},{name: "Another one", src: "#"},{name: "Last Time", src: "#"}];
const FOOTER_LIST_2 = [{name: "Resource", src: "#"},{name: "Resource name", src: "#"},{name: "Another resource", src: "#"},{name: "Final resource", src: "#"}];
const FOOTER_LIST_3 = [{name: "Team", src: "#"},{name: "Locations", src: "#"},{name: "Privacy", src: "#"},{name: "Terms", src: "#"}];

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

//#endregion

export default Footer;
