type TSkills = {
    id: number
    created_at: string
    updated_at: string
    title: string
    specialization: string
}

type TSpecialization = {
    id: number
    created_at: string
    updated_at: string
    title: string
}

type TGrade = {
    id: number
    created_at: string
    updated_at: string
    title: string
    specialization: string
}

type TAdditional_skills = {
    id: number
    created_at: string
    updated_at: string
    title: string
    specialization: string
}

export type TVacancy = {
    id : number,
    grade_title: string,
    created_at : string,
    updated_at : string,
    title : string,
    description : string,
    tasks : string,
    conditions : string,
    salary : number | null,
    workplace_type : string,
    office_title: string,
    schedule : string,
    experience : string,
    grade : TGrade | null,
    specialization : TSpecialization[] | null,
    skills : TSkills[],
    additional_skills : string[]
}