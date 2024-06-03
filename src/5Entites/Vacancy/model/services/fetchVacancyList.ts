import {createAsyncThunk} from "@reduxjs/toolkit";
import {TResponseVacancy} from "../types/responseVacancy";
import {$api} from "../../../../6Shared/api/api";
import {IQueriesToVacancy} from "../types/queriesToVacancy";

export const fetchVacancyList = createAsyncThunk<TResponseVacancy, IQueriesToVacancy, { rejectValue: string }>(
    'vacancies/fetchVacancies',
    async (params, thunkAPI) => {

        const queries: Record<string, string> = { ...params };
        console.log(`job/vacancy/?${new URLSearchParams(queries)}`)
        try {

            const response = await $api.get<TResponseVacancy>(`job/vacancy/?${new URLSearchParams(queries)}`);
            return thunkAPI.fulfillWithValue(response.data)
        } catch (e) {
            console.log("Ошибка при получении вакансий")
            return thunkAPI.rejectWithValue("Ошибка при получении вакансий");
        }
    }
);