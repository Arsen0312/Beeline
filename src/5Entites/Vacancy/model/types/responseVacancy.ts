import {TVacancy} from "./vacancy";

export type TResponseVacancy = {
    count : number,
    next : number | null,
    previous : number | null,
    results : TVacancy[]
}