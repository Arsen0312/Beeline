import {StateSchema} from "../../../../1App/Providers/StoreProvider/config/StateSchema";

const getVacancyList = (state: StateSchema) => state.vacancy.results;
const getVacancyAllDate = (state: StateSchema) => state;

// LIST

export const VacancySelectors = {
    getVacancyList,
    getVacancyAllDate
};