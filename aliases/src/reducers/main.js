export function main(state = {init: 'kek'}, action) {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                done: true
            };
        default:
            return state;
    }
}
