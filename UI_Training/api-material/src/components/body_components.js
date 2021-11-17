import React, { useEffect, useState } from 'react';
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

const Body = (props) => {

    const [profiles, setProfiles] = useState([]);

    // const onCardClick = ID => {
    //     profilesSearch.get(`posts/${ID}`).then(response => {
    //         console.log(response);

    //         this.setState({profiles: response});
    //     });
    // }

    useEffect(() => {
        // Make api call for list of posts (/posts).
        // After getting response, set it into profiles. use setProfiles. 
        // line 45 will be empty

        effect
        return () => {
            cleanup
        }
    }, [])

    // onCardClick('');

    // let cards = this.state.profiles.map((item) => {
    //     return <CardItem cardHeader={item.title} cardBody={item.body} id={item.id} onClick={this.onCardClick(item.id)} />;
    // });

    return (
    //Loop through profiles and map to card items. 
    

    <main>
        {/*    Insert cards here    */}
            <div className='p-3'>
                {cards}
            </div>
        </main>);
}

//#endregion

export default Body;