import {DEFUZE_KITS,CARD_FLIPPED,RESET_GAME, SHUFFLE_GAME} from './types'

export const flipCard = () => dispatch => {
    console.log('card flipped')
    dispatch({
        type: CARD_FLIPPED
    })
}

export const addDefuzeKit = () => dispatch => {
    console.log('adding a defuze kit')
    dispatch({
        type: DEFUZE_KITS
    })
}

export const reset = () => dispatch => {
    console.log('reset')
    dispatch({
        type: RESET_GAME
    })
}
export const shuffle = () => dispatch => {
    console.log('shuffling')
    dispatch({
        type: SHUFFLE_GAME
    })
}