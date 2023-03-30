import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post } from "./models/post.model";
import * as PostActions from "./actions/post.actions";

interface AppState {
    // message: string;
    post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'ngrxAngular';
    // message$: Observable<string>;
    post: Observable<Post>;
    text!: string;


    constructor(private store: Store<AppState>) {
        // this.message$ = this.store.select("message");
        this.post = this.store.select("post");
    }

    editText() {
        this.store.dispatch(new PostActions.EditText(this.text));
    }
    resetPost() {
        this.store.dispatch(new PostActions.Reset());
    }
    upVote() {
        this.store.dispatch(new PostActions.Upvote());
    }
    downVote() {
        this.store.dispatch(new PostActions.Downvote());
    }

    // spanishMessage() {
    //     this.store.dispatch({
    //         type: "SPANISH",
    //     })
    // }

    // frenchMessage() {
    //     this.store.dispatch({
    //         type: "FRENCH",
    //     })
    // }

    // indonesianMessage() {
    //     this.store.dispatch({
    //         type: "INDONESIAN",
    //     })
    // }
    
    // germanMessage() {
    //     this.store.dispatch({
    //         type: "GERMAN",
    //     })
    // }
    
    // dutchMessage() {
    //     this.store.dispatch({
    //         type: "DUTCH",
    //     })
    // }
}
