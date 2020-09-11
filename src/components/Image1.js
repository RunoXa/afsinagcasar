import React, {Component} from "react";
import ImagesBar from './ImagesBar';
import '../styles/Image1.css';

export default class Image1 extends Component {

    render() {
        return (
            <div className="main-images-1">
                <ImagesBar/>
                <div className="main-images">
                    <h1>Image 1</h1>
                </div>
            </div>
        )
    }
}