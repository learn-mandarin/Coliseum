import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PlayerStats.module.css'

const PlayerStats = () => {
    const player = useSelector((state) => state.player)
    console.log(player.total_stats)
    const stats = Object.entries(player.total_stats).slice(6, 10)
    console.log(stats)
    return (
        <ul className={styles.player__stats}>
            {stats.map((item, i) => {
                return (<li>{item[0]},{item[1]}</li>)
            })}

            {/* <li>agl: {player.total_stats.agl}</li>
      <li>int: {player.total_stats.int}</li>
      <li>def: {player.total_stats.def}</li>
      <li>evs: {player.total_stats.evs}</li> */}
        </ul>
    )
}

export default PlayerStats
