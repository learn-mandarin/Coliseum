import { IS_LOADING, IS_NOT_LOADING } from '../types/loaderTypes'

export const setLoader = () => ({type: IS_LOADING,})
export const unSetLoader = () => ({type: IS_NOT_LOADING,})
