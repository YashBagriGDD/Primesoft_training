import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilesSearch from "../api/profilesSearch";

//#region Body

class CardItem extends React.Component {
    render() {
        return (
            <div className='col-sm-4'>
                <div className='card mb-4 rounded-3 shadow-sm'>
                    <div className='card-header py-3'>
                        <h4 className="my-0 fw-normal">{this.props.cardHeader}</h4>
                    </div>
                    <div className='card-body'>
                        <span className='fw-light'>{this.props.cardBody}</span>
                    </div>
                </div>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profiles: [] };
    }

    onCardClick = ID => {
        profilesSearch.get(`posts/${ID}`).then(response => {
            console.log(response);

            this.setState({profiles: response});
        });
    }

    render() {
        this.onCardClick('');

        let cards = this.state.profiles.map((item) => {
            return <CardItem cardHeader={item.title} cardBody={item.body} id={item.id} onClick={this.onCardClick(item.id)} />;
        });

        return (<main>
            {/*    Insert cards here    */}
                <div className='p-3'>
                    {cards}
                </div>
            </main>);
    }
}

//#endregion

export default Body;