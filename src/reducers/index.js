import * as types from '../actions/ActionTypes';

// 초기 상태를 정의

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, action) {
    const { counters } = state;
    console.log(state);
    console.log(action.type);
    switch(action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color:action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length-1)
            };
        case types.INCREMENT:
            console.log("incre");
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            console.log(state);
            return state;
    }
}

export default counter