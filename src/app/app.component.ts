import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
    message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngrxAngular';
    message$: Observable<string>;

    constructor(
        private store: Store<AppState>
    ){
        this.message$ = this.store.select("message");
    }

    spanishMessage() {
        this.store.dispatch({
            type: "SPANISH",
        })
    }

    frenchMessage() {
        this.store.dispatch({
            type: "FRENCH",
        })
    }

    indonesianMessage() {
        this.store.dispatch({
            type: "INDONESIAN",
        })
    }
    
    germanMessage() {
        this.store.dispatch({
            type: "GERMAN",
        })
    }
    
    dutchMessage() {
        this.store.dispatch({
            type: "DUTCH",
        })
    }



}
