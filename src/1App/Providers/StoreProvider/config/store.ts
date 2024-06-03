import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {vacancyReducer} from "../../../../5Entites/Vacancy/model"
import {SearchVacancyReducer} from "../../../../4Features/Search";

const rootReducer = combineReducers({
    SearchVacancy: SearchVacancyReducer,
    vacancy: vacancyReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
