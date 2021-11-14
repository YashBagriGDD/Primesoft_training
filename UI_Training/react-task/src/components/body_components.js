import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkMark from '../check-mark-svgrepo-com.svg';

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

export default Body;