import axios from 'axios'
import { GET_REWARD_FOR_BATTLE, GET_REWARD_FOR_MOB_BATTLE } from '../../types/playerTypes'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getPlayer({...response.data}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_ACTION_getPlayerExpAndGoldForBattle = (playerId, WinOrLoss, room) => async (dispatch) => {
    try {
        const response = await axios.post('https://dbforgame.herokuapp.com/battle/get-reward', {playerId, WinOrLoss, room})
        dispatch({type: GET_REWARD_FOR_BATTLE, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_ACTION_getPlayerExpAndGoldForMobBattle = (playerId, WinOrLoss, itemId) => async (dispatch) => {
    try {
        const response = await axios.post('https://dbforgame.herokuapp.com/battle/get-mob-reward', {
            playerId,
            WinOrLoss,
            itemId
        })
        dispatch({type: GET_REWARD_FOR_MOB_BATTLE, payload: response.data})

    } catch (e) {
        console.log(e)
    }
}



