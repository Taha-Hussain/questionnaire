import { Question } from "./question";

export interface Questionnaire {
    id:                       number;
    identifier:               string;
    name:                     string;
    questions:                Question[];
    description:              string;
    category_name_hyphenated: string;
}