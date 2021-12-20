type Actions =
    | {type: "BUILD", payload: HTMLObjectElement[]};

type State = {
    list: HTMLObjectElement[]
};

export default (state: State = {list: []}, action: Actions) => {
    switch (action.type) {
        case "BUILD":
            return {...state, list: action.payload};
        default:
            return state;
    }
}