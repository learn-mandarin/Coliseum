const initialState = () => ({
    user: null,
    isLoading: false,
    mobs: [], //TODO mb get from server
    isAuth: false,
    player: null,
    playerInventory: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,],
    enemyPlayer: null,
    room: null,
    allRooms: null,
    chooseCharacter: null,
    mannequin: {
        hp: 10000,
        nickName: 'Манекен'
    },
    battlePlayer: {
        attackHead: false,
        attackBody: false,
        attackLegs: false,
        defendHead: false,
        defendBody: false,
        defendLegs: false,
    },
    battleEnemyPlayer: {
        attackHead: false,
        attackBody: false,
        attackLegs: false,
        defendHead: false,
        defendBody: false,
        defendLegs: false,
    },
})

export default initialState
