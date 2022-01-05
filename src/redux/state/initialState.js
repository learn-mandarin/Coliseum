const initialState = () => ({
  user: null,
  isLoading: false,
  mobs: [], //TODO mb get from server
  isAuth: false,
  player: null,
  enemyPlayer: null,
  battlePlayer: {
    attackHead: false,
    attackLeftHand: false,
    attackRightHand: false,
    attackBody: false,
    attackLegs: false,
    defendHead: false,
    defendLeftHand: false,
    defendRightHand: false,
    defendBody: false,
    defendLegs: false,
  },
  battleEnemyPlayer: {
    attackHead: false,
    attackLeftHand: false,
    attackRightHand: false,
    attackBody: false,
    attackLegs: false,
    defendHead: false,
    defendLeftHand: false,
    defendRightHand: false,
    defendBody: false,
    defendLegs: false,
  },
})

export default initialState