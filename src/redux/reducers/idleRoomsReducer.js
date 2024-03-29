import initialState from '../init/initialState'
import { GET_IDLE_ROOMS } from '../types/allRoomsTypes'

export const idleRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IDLE_ROOMS :
            return [...action.payload]

        default:
            return state
    }
}