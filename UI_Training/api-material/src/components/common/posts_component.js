import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPostDetail} from "../redux/actions";
import UserHeader from "./user_component";


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
                        <UserHeader userId={this.props.userId} />
                    </div>
                </div>
            </div>
        );
    }
}

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