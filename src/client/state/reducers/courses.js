const DEFAULT_ACTION = {type: '', payload: {}};

export default function courses(state = {}, action = DEFAULT_ACTION) {
    const {type = ''} = action;

    let nextState;

    switch (type) {
    default:
        nextState = state;
        break;
    }

    return nextState;
}
