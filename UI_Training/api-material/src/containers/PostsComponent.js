import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import {connect} from "react-redux";
import {fetchPostDetail} from "../redux/actions";
import CardItem from "../components/common/CardComponent";

// read :id using useParams()
// make api call to get post by id
// print body in a separate component
const PostBody = props => {
    let { postId } = useParams();

    useEffect(() => {
        props.fetchPostDetail(postId);
    }, []);

    let postItem = <CardItem cardHeader={props.post.title} cardBody={props.post.body} key={props.post.id} userId={props.post.userId} />;

    return (
        <main>
            <div className='p-3'>
                <div className="row justify-content-center">{postItem}</div>
            </div>
        </main>
    );
}

const mapStateToProps = state => {
    return { post: state.posts.detail };
};

export default connect(mapStateToProps, { fetchPostDetail })(PostBody);