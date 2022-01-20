import $apiDb from '../../services/axiosServiceDb'
import { unSetLoader } from '../loaderActions'
import { ACTION_setPLayerInventory } from '../playerInventoryActions'

export const THUNK_ACTION_getPLayerInventory = (playerId) => async (dispatch) => {
    try {
        const response = await $apiDb.get(`/get-specific-inventory/${playerId}`)
        console.log(response.data)
        dispatch(ACTION_setPLayerInventory(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}