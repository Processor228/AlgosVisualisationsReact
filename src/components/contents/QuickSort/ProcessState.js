
export var typesOfActions = {
    ChooseOfPivot: {
        type: "Chos",
        idxP: 0,
        create: (idx) => {
            let act = typesOfActions.ChooseOfPivot;
            act.index1 = undefined;
            act.index2 = undefined;
            act.type = "Chos";
            act.idxP = idx;
            return act;
        },
    },
    Comparison: {
        type: "Comp",
        idxP: 0,
        index1: 0,
        index2: 0,
        create: (idx1, idx2, idxP) => {
            let act = typesOfActions.ChooseOfPivot;
            act.type = "Comp";
            act.idxP = idxP;
            act.index1 = idx1;
            act.index2 = idx2;
            return act;
        }
    },
    Swapping: {
        type: "Swap",
        idxP: 0,
        index1: 0,
        index2: 0,
        create: (idx1, idx2, idxP) => {
            let act = typesOfActions.ChooseOfPivot;
            act.type = "Swap";
            act.idxP = idxP;
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
