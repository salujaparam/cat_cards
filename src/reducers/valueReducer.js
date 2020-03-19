import {CARD_FLIPPED,DEFUZE_KITS, RESET_GAME, SHUFFLE_GAME} from '../actions/types'
import cat from '../images/cat.jfif'
import defuse from '../images/defuse.jfif'
import exploding from '../images/exploding.jfif'
import shuffle from '../images/shuffle.jfif'

const initialState = {
    cards: [
        {name: 'Cat Card', img: cat},
        {name: 'Defuze Card', img: defuse},
        {name: 'Shuffle Card', img: shuffle},
        {name: 'Exploding kitten Card', img: exploding}
    ],
    flipped_cards: 0,
    defuze_kits: 0,
    message: ''
};

export default function(state=initialState, action) {
    switch(action.type) {
        case CARD_FLIPPED:
            console.log('reducer cardFlipped')
            const newState = {...state}
            newState.flipped_cards = newState.flipped_cards+1
            newState.message = "Continue Playing"
            return newState
        case DEFUZE_KITS:
            console.log('reduxer defuze kit')
            const nState = {...state}
            nState.defuze_kits = nState.defuze_kits + 1
            nState.message = "Got a defuze kit"
            return nState
        case RESET_GAME:
            const neState = Object.assign({}, initialState)
            neState.message = "Play Again"
            return neState
        default:
            return state;
    }
}