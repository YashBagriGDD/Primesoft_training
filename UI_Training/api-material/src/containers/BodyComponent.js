import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect }  from "react-redux";
import { fetchPosts } from "../redux/actions";
import CardItem from "../components/common/CardComponent";

//#region Body

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

const mapStateToProps = state => ({
    profiles: state.posts.list,
});

//#endregion

export default connect(mapStateToProps, { fetchPosts })(Body);