import { Choice } from "./choice";
import { Jump } from "./jump";

export interface Question {
    answer?:string;
    question_type: string;
    identifier:    string;
    headline:      string;
    description:   null;
    required:      boolean;
    multiple?:     string;
    choices?:      Choice[];
    jumps:         Jump[];
    multiline?:    string;
}
