import React from 'react'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import Map from '../../../common/Map/Map'
import Player from '../../../common/Player/Player'

import style from './AndreyTest.module.css'
import './button.css'

const AndreyTest = () => {
    return (
        <div className={style.main__gym}>
            <Player/>
            <AttackDefendWithCyberButtons/>
            <Map />
        </div>
    )
}

export default AndreyTest
