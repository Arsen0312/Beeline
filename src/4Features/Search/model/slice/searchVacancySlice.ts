import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISearchVacancySchema } from "../type/type";

const initialState: ISearchVacancySchema = {
    term: ""
};

const productSearchSlice = createSlice({
    name: "SearchVacancy",
    initialState,
    reducers: {
        setTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        }
    }
});

export const {
    name: SearchVacancyReducerName,
    actions: SearchVacancyActions,
    reducer: SearchVacancyReducer
} = productSearchSlice;