import { AxiosInstance } from "axios";
import {ISearchVacancySchema, SearchVacancyReducerName} from "../../../../4Features/Search";
import {vacancyReducerName} from "../../../../5Entites/Vacancy/model";
import {TResponseVacancy} from "../../../../5Entites/Vacancy/model/types/responseVacancy";

export interface StateSchema {
    [SearchVacancyReducerName]: ISearchVacancySchema;
    [vacancyReducerName]: TResponseVacancy
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
