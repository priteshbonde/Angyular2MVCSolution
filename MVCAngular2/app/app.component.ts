import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AppService } from './Service/app.service'
@Component({
    selector: 'my-app',
    templateUrl: '/app/UserPage.html',
})
export class AppComponent {
    name = 'Angular';
    welcome: string;
    apiUrl: string;
    //private _userService: AppService ;
    indLoading: boolean;
    msg: string;
    games: [{
        game: string,
        platform: string,
        release: string
    }];

    gamesServer: [{
        game: string,
        platform: string,
        release: string
    }];
    constructor(private _userService: AppService) {
        this.welcome = "Display List using ngFor in Angular 2"
        //this._userService = new AppService()
        this.games = [{
            game: "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 24"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "Couter strike 1.6",
            platform: "Windows",
            release: "August 25"
        }];
        this.apiUrl = "http://localhost:55780/Home/GetGamesList";
         
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(this.apiUrl)
            .subscribe(games => { this.gamesServer = games; this.indLoading = false; },
            error => this.msg = <any>error);

    }
}