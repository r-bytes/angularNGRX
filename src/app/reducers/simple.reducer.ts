import { Action } from "@ngrx/store";

export const simpleReducer = (state: string = "Hello world", action: Action) => {
    console.log("-----> action.type + state from simple.reducer", action.type, state)
    
    switch (action.type) {
        case "SPANISH" :
            return "Hola Mundo"
        case "FRENCH" :
            return "Bonjour Monde"
        case "INDONESIAN" :
            return "Halo Dunia"
        case "GERMAN" :
            return "Hallo Welt"
        case "DUTCH" :
            return "Hallo Wereld"
        default:
            return state;
    }
}