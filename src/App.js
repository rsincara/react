import './App.css';
import React from "react";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'currentPosition': 1}
        this.elements = props.urls;
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        console.log(this.elements)
    }

    moveRight() {
        if (this.state.currentPosition + 1 === this.elements.length) {
            this.setState({'currentPosition': 0})
        } else {
            this.setState(prevState => ({'currentPosition': prevState.currentPosition + 1}))
        }
    }

    moveLeft() {
        if (this.state.currentPosition - 1 === -1) {
            this.setState({'currentPosition': this.elements.length - 1})
        } else {
            this.setState(prevState => ({'currentPosition': prevState.currentPosition - 1}))
        }
    }

    render() {
        return (
            <div className='slider'>
                <SliderButton text='Влево' onClick={this.moveLeft}/>
                <SliderElement url={this.elements[this.state.currentPosition]} className={'slider-element'}/>
                <SliderButton text='Вправо' onClick={this.moveRight}/>
            </div>
        )
    }
}

function SliderElement(props) {
    return (
        <img src={props.url} width='200px' height='200px' className='slider-image' alt='image'/>
    )
}

function SliderButton(props) {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Slider;
