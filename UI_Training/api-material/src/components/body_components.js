import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        const fetchPosts = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);

            //console.log(response);
            setProfiles(response.data);
        };

        fetchPosts();

    }, [])

    //Loop through profiles and map to card items.
    const cards = () => {
        return profiles.map((item) => {
            return <CardItem cardHeader={item.title} cardBody={item.body} key={item.id} />;
        });
    };

    return (<main>
        {/*    Insert cards here    */}
            <div className='p-3'>
                <div className="row">{cards()}</div>
            </div>
        </main>);
}

//#endregion

export default Body;