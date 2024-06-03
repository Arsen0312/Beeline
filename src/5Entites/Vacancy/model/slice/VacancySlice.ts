import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TResponseVacancy } from "../types/responseVacancy";
import { fetchVacancyList } from "../services/fetchVacancyList";
import { fetchVacancyById } from "../services/fetchVacancyById";
import { TVacancy } from "../types/vacancy";

interface VacancyState {
    isLoading: boolean;
    errors: string;
    vacancy: TVacancy | false;
    data: TResponseVacancy;
}

const initialState: VacancyState = {
    isLoading: false,
    errors: '',
    vacancy: false,
    data: {
        count: 0,
        next: null,
        previous: null,
        results: []
    }
};

export const vacancySlice = createSlice({
    name: "vacancy",
    initialState,
    reducers: {
        reset: (state) => {
            state.vacancy = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancyList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVacancyList.fulfilled, (state, action: PayloadAction<TResponseVacancy>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.errors = '';
            })
            .addCase(fetchVacancyList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ?? "Ошибка при получении вакансий";
            });

        builder
            .addCase(fetchVacancyById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVacancyById.fulfilled, (state, action: PayloadAction<TVacancy>) => {
                state.isLoading = false;
                state.vacancy = action.payload;
                state.errors = '';
            })
            .addCase(fetchVacancyById.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ?? "Ошибка при получении вакансий";
            });
    }
});

export const {
    name: vacancyReducerName,
    reducer: vacancyReducer,
    actions: vacancyActions
} = vacancySlice;