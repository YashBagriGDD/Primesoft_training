import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchUser } from "../../redux/actions";
import { connect } from "react-redux";



const UserHeader = (props) => {
    //Fetch user when it is mounted
    useEffect(() => {
        props.fetchUser(props.userId);
    }, []);

    const { user } = props;

    if(!user) { return null; }
    else {
        return (
            <div className="fw-bold">{user.username}</div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId)}
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);