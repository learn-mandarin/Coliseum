import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_getPLayerInventory } from '../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import AuctionButton from '../AuctionButton/AuctionButton'
import './AuctionModal.css'

function AuctionModal({active, setActive}) {
    const dispatch = useDispatch()
    const inventory = useSelector(state => state.playerInventory)
    const [chosenItem, setChosenItem] = useState(null)
    const [price, setPrice] = useState('')
    useEffect(() => {
        dispatch(THUNK_ACTION_getPLayerInventory())
    }, [dispatch])

    function inputHandler(e) {
        e.preventDefault()
        setPrice(e.target.value)
        console.log(price)
    }

    function clickHandler(e) {
        e.preventDefault()
        console.log(e.target.id)
        setChosenItem(e.target.id)
    }

    function priceHandler(e) {
        setPrice('')
    }

    return (
        <div className={active ? 'modal active' : 'modal'}
             onClick={() => setActive(false)}>
            <div className={active ? 'modal__content' : 'modal'}
                 onClick={e => e.stopPropagation()}>
                <div>
                    {inventory &&
                        inventory.map(e => {
                            if (!e) {
                                return null
                            }
                            return <div onClick={clickHandler}
                                        key={e.id + 'el'}
                                        id={e.id}>
                                {e.item_name}
                            </div>
                        })
                    }
                </div>
                <div id="lalala" className="mb-3">
                    <label htmlFor="question"
                           className="form-label">
                        Choose price:
                    </label>
                    <input type="text"
                           onChange={inputHandler}
                           className="form-control"
                           id="exampleInputName"
                           value={price}/>
                </div>
                <AuctionButton title={'Place lot'}
                               itemId={chosenItem}
                               price={price}
                               setPrice={setPrice}/>
            </div>
        </div>

    )
}

export default AuctionModal
