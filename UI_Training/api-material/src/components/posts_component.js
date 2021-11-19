import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";

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

// read :id using useParams()
// make api call to get post by id
// print body in a separate component
const PostBody = props => {
    const [post, setPost] = useState([]);
    let { postid } = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${postid}`

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(url);

            setPost(response.data);
        }

        fetchPost();
    }, []);

    let postItem = <CardItem cardHeader={post.title} cardBody={post.body} key={post.id} />;

    return (
        <main>
            <div className='p-3'>
                <div className="row justify-content-center">{postItem}</div>
            </div>
        </main>
    );
}

export default PostBody;