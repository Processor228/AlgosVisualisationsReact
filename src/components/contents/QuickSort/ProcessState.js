
export var typesOfActions = {
    ChooseOfPivot: {
        type: "Chos",
        index: 0,
        create: (idx) => {
            let act = typesOfActions.ChooseOfPivot;
            act.index = idx;
            return act;
        },
    },
    Comparison: {
        type: "Comp",
        index1: 0,
        index2: 0,
        create: (idx1, idx2) => {
            let act = typesOfActions.ChooseOfPivot;
            act.index1 = idx1;
            act.index2 = idx2;
            return act;
        }
    },
    Swapping: {
        type: "Swap",
        index1: 0,
        index2: 0,
        create: (idx1, idx2) => {
            let act = typesOfActions.ChooseOfPivot;
            act.index1 = idx1;
            act.index2 = idx2;
            return act;
        }
    }
}

export default {
    gameIsOn: false,
    numbers: [],
    action: {}
}
