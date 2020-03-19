import React, { Component } from 'react'
import cat from '../images/cat.jfif'
import closed from '../images/closed.png'
import '../styles/Cards.css'
import { connect } from 'react-redux'
import {flipCard, addDefuzeKit, reset, shuffle} from '../actions/valueActions'

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: {
                name: 'Start the game', 
                img: closed
            },
            numberOfTimesFlipped: 0
        }
        

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        let card = this.props.value.cards[Math.floor(Math.random()*this.props.value.cards.length)];
        console.log('card',card)
        const times = this.state.numberOfTimesFlipped;
        this.setState({card, numberOfTimesFlipped: times+1}, () =>{
            console.log('state',this.state)
        })
        if(card.name === 'Cat Card'){
            this.props.flipCard();
        }
        if(card.name === 'Defuze Card'){
            this.props.addDefuzeKit();
        }
        if(card.name === 'Shuffle Card'){
            this.props.reset();
            this.setState({numberOfTimesFlipped:0})
            // this.props.value.message = 'Cards shuffled'
        }
        if(card.name === 'Exploding kitten Card'){
            if(this.props.value.defuze_kits > 0){
                this.props.value.defuze_kits = this.props.value.defuze_kits - 1;
            }
            else{
                this.setState({numberOfTimesFlipped:0})
                this.props.reset();
            }
        }
        if(this.state.numberOfTimesFlipped === 5){
            this.props.reset();
            this.setState({
                card: {
                    name: 'Won, Play Again', 
                    img: closed
                },
                numberOfTimesFlipped:0
            })
            return
        }
        // this.props.flipCard();
        // this.props.addDefuzeKit();
        // this.props.reset();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="closed">
                    <img src={closed} alt="Avatar" className="img-closed" />
                </div>
                <button className="flip" onClick={this.onButtonClick} >Flip a Card</button>
                <div className="card">
                    <img src={this.state.card.img} alt="Avatar" className="img-card" />
                    <div className="container">
                        <h4><b>{this.state.card.name}</b></h4>
                        <p>Cat Cards</p>
                    </div>
                </div>
                <div className="values">
                    <p>No. of Card flipped: {this.props.value.flipped_cards}</p>
                    <p>No. of defuze kits: {this.props.value.defuze_kits}</p>
                    <p>{this.props.value.message}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    value: state.value
})


export default connect(mapStateToProps, {flipCard, addDefuzeKit,reset, shuffle})(Cards);