import {Corporate} from "../models/corporate.model";

export interface ICorporateRepository{
    addCorporate(corporate:Corporate):Promise<string|never>;
}