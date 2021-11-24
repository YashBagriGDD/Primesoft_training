import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { connect }  from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./user_component";

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
                            <UserHeader userId={this.props.userId} />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

const Body = (props) => {
    useEffect(() => {
        props.fetchPosts();
    }, [])

    //Loop through profiles and map to card items.
    //Add Link to= to navigate to the details screen, pass the card id into the link (/card/${id})
    const cards = () => {
        return props?.profiles?.map((item) => {
            return <CardItem cardHeader={item.title} cardBody={item.body} key={item.id} link={item.id} userId={item.userId} />;
        });
    };


    return (<main>
        {/*    Insert cards here    */}
            <div className='p-3'>
                <div className="row">{cards()}</div>
            </div>
        </main>);
}

const mapStateToProps = state => {
    return {profiles: state.posts.list};
};

//#endregion

export default connect(mapStateToProps, { fetchPosts })(Body);