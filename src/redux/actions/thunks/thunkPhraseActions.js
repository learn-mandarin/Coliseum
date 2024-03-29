import axios from 'axios'
import { ACTION_setPhrase } from '../phraseActions'

export const THUNK_ACTION_getPhraseFromDbEnglish = (playerWs, enemyPlayerWs, db_room) => async (dispatch) => {
    if (playerWs.battlePlayer.defendHead === true && enemyPlayerWs.battlePlayer.attackHead === true) {
        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'head',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendBody === true) && (enemyPlayerWs.battlePlayer.attackBody === true)) {
        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'body',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendLegs === true) && (enemyPlayerWs.battlePlayer.attackLegs === true)) {
        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'legs',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if (playerWs.battlePlayer.defendHead === false && enemyPlayerWs.battlePlayer.attackHead === true) {
        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'head',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendBody === false) && (enemyPlayerWs.battlePlayer.attackBody === true)) {
        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'body',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendLegs === false) && (enemyPlayerWs.battlePlayer.attackLegs === true)) {

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/en',
                {
                    body_part: 'legs',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }
}

export const THUNK_ACTION_getPhraseFromDbRussian = (playerWs, enemyPlayerWs, evasion, db_room) => async (dispatch) => {
    if (playerWs.battlePlayer.defendHead === true && enemyPlayerWs.battlePlayer.attackHead === true) {

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'head',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendBody === true) && (enemyPlayerWs.battlePlayer.attackBody === true)) {

        if (evasion) {
            try {
                const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                    {
                        body_part: 'body',
                        type_of_action: 'evasion',
                        player_id: enemyPlayerWs.player.id,
                        db_room: db_room
                    })
                dispatch(ACTION_setPhrase(response.data.phrase.description))
            } catch (e) {
                console.log(e)
            }
        }

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'body',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendLegs === true) && (enemyPlayerWs.battlePlayer.attackLegs === true)) {

        if (evasion) {
            try {
                const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                    {
                        body_part: 'legs',
                        type_of_action: 'evasion',
                        player_id: enemyPlayerWs.player.id,
                        db_room: db_room
                    })
                dispatch(ACTION_setPhrase(response.data.phrase.description))
            } catch (e) {
                console.log(e)
            }
        }

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'legs',
                    type_of_action: 'hit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if (playerWs.battlePlayer.defendHead === false && enemyPlayerWs.battlePlayer.attackHead === true) {

        if (evasion) {
            try {
                const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                    {
                        body_part: 'head',
                        type_of_action: 'evasion',
                        player_id: enemyPlayerWs.player.id,
                        db_room: db_room
                    })
                dispatch(ACTION_setPhrase(response.data.phrase.description))
            } catch (e) {
                console.log(e)
            }
        }

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'head',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendBody === false) && (enemyPlayerWs.battlePlayer.attackBody === true)) {

        if (evasion) {
            try {
                const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                    {
                        body_part: 'body',
                        type_of_action: 'evasion',
                        player_id: enemyPlayerWs.player.id,
                        db_room: db_room
                    })
                dispatch(ACTION_setPhrase(response.data.phrase.description))
            } catch (e) {
                console.log(e)
            }
        }

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'body',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }

    if ((playerWs.battlePlayer.defendLegs === false) && (enemyPlayerWs.battlePlayer.attackLegs === true)) {

        if (evasion) {
            try {
                const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                    {
                        body_part: 'legs',
                        type_of_action: 'evasion',
                        player_id: enemyPlayerWs.player.id,
                        db_room: db_room
                    })
                dispatch(ACTION_setPhrase(response.data.phrase.description))
            } catch (e) {
                console.log(e)
            }
        }

        try {
            const response = await axios.post('https://dbforgame.herokuapp.com/battle/ru',
                {
                    body_part: 'legs',
                    type_of_action: 'crit',
                    player_id: enemyPlayerWs.player.id,
                    db_room: db_room
                })
            dispatch(ACTION_setPhrase(response.data.phrase.description))
        } catch (e) {
            console.log(e)
        }
    }
}


