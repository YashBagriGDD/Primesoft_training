import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

//#region Body

class CardItem extends React.Component {
    render() {
        return (
            <div className='col-sm-4'>
                <div className='card mb-4 rounded-3 shadow-sm'>
                    <Link to={`/posts/${this.props.link}`} className="text-decoration-none text-black" >
                        <div className='card-header py-3'>
                            <h4 className="my-0 fw-normal">{this.props.cardHeader}</h4>
                        </div>
                        <div className='card-body'>
                            <span className='fw-light'>{this.props.cardBody}</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

const Body = (props) => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // Make api call for list of posts (/posts).
        // After getting response, set it into profiles. use setProfiles. 
        // line 45 will be empty
        const fetchPosts = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);

            setProfiles(response.data);
        };

        fetchPosts();

    }, [])

    //Loop through profiles and map to card items.
    //Add Link to= to navigate to the details screen, pass the card id into the link (/card/${id})
    const cards = () => {
        return profiles.map((item) => {
            return <CardItem cardHeader={item.title} cardBody={item.body} key={item.id} link={item.id} />;
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