import React from "react";
import UserHeader from "./UsernameComponent";
import {Link} from "react-router-dom";


class CardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cardContent

        if(this.props.link){
            cardContent = (
                <Link to={`/posts/${this.props.link}`} className="text-decoration-none text-black" >
                    <div className='card-header py-3'>
                        <h4 className="my-0 fw-normal">{this.props.cardHeader}</h4>
                    </div>
                    <div className='card-body'>
                        <span className='fw-light'>{this.props.cardBody}</span>
                        <UserHeader userId={this.props.userId} />
                    </div>
                </Link>
            );
        } else {
            cardContent = (
                <div>
                    <div className='card-header py-3'>
                        <h4 className="my-0 fw-normal">{this.props.cardHeader}</h4>
                    </div>
                    <div className='card-body'>
                        <span className='fw-light'>{this.props.cardBody}</span>
                        <UserHeader userId={this.props.userId} />
                    </div>
                </div>
            );
        }

        return (
            <div className='col-sm-4'>
                <div className='card mb-4 rounded-3 shadow-sm'>
                    {cardContent}
                </div>
            </div>
        );
    }
}

export default CardItem;