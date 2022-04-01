const INITIAL_STATE = { face: ':|' }

const moodReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'happy':
            return { ...state, face: ':)' }
        case 'sad':
            return { ...state, face: ':(' }
        case 'angry':
            return { ...state, face: '>:(' }
        case 'confused':
            return { ...state, face: '<:O' }
        default:
            return INITIAL_STATE
    }
}

const store = Redux.createStore(moodReducer)