import { createAsyncThunk } from "@reduxjs/toolkit";
import { TVacancy } from "../types/vacancy";
import { $api } from "../../../../6Shared/api/api";

export const fetchVacancyById = createAsyncThunk<TVacancy, string, { rejectValue: string }>(
    'vacancies/fetchVacancyById',
    async (id, thunkAPI) => {
        try {
            const response = await $api.get<TVacancy>(`job/vacancy/${id}`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log("Ошибка при получении вакансии");
            return thunkAPI.rejectWithValue("Ошибка при получении вакансии");
        }
    }
);