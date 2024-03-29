import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    THUNK_ACTION_getTraderItems,
    thunkGetAllAuctionItemsAction
} from '../../../../redux/actions/thunks/thunkGetAllAuctionItemsAction'
import BackGround from '../../../common/BackGround/BackGround'
import MarketItem from '../../../common/MarketItem/MarketItem'
import './MarketPage.scss'

const MarketPage = () => {
    const dispatch = useDispatch()
    const [change, setChange] = useState(false)
    const player = useSelector(state => state.player)
    const auctionItems = useSelector(state => state.auctionItems)
    const playerInventory = useSelector(state => state.playerInventory)
    const traderItems = useSelector(state => state.traderItems)

    useEffect(() => {
        dispatch(thunkGetAllAuctionItemsAction())
    }, [playerInventory])
    useEffect(() => {
        dispatch(THUNK_ACTION_getTraderItems())
    }, [])

    return (
        <div className="marketPage">
            <BackGround/>
            <div className="marketPage__items-wrapper">
                <div className="marketPage__items">
                    {traderItems && traderItems.assassin.assassin_common.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.assassin.assassin_uncommon.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.monk.monk_rare.map(item =>
                        <MarketItem item={item}/>
                    )}

                    {traderItems && traderItems.monk.monk_common.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.monk.monk_uncommon.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.monk.monk_rare.map(item =>
                        <MarketItem item={item}/>
                    )}

                    {traderItems && traderItems.warrior.warrior_common.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.warrior.warrior_uncommon.map(item =>
                        <MarketItem item={item}/>
                    )}
                    {traderItems && traderItems.warrior.warrior_rare.map(item =>
                        <MarketItem item={item}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MarketPage
