import { Condition } from "./condition";
import { Destination } from "./destination";

export interface Jump {
    conditions:  Condition[];
    destination: Destination;
}