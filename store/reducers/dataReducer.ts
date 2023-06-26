import getData from "../actions/getData";

export interface IData {
    value: string;
    type: string;
    source: string;
    date: Date;
}

const initialState: IData[] = [];

type DataAction = {type: 'SET'} | {type: 'GET'};



export default function dataReducer (state: any = initialState, action: DataAction) {
    switch (action.type){
        case "SET":
            const payload = getData();
            return [...state, payload];
        default:
            return state;
    }
}