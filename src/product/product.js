import React, { Component } from "react";
import './product.css'

class Product extends Component {
    render() {
        return (
            
            <div className="card products">
                <img className="card-img-top" src={this.props.img} alt="product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="" className="btn btn-primary">Add to wishlist</a>
                </div>
            </div>
        );
    }
}export default Product;