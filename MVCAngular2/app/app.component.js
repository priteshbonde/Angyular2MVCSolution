"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./Service/app.service");
var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.name = 'Angular';
        this.welcome = "Display List using ngFor in Angular 2";
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
    AppComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(this.apiUrl)
            .subscribe(function (games) { _this.gamesServer = games; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/app/UserPage.html',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map