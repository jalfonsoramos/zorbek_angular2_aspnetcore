import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component(
    {
        selector: 'user-view',
        templateUrl: './user-view.component.html',
        providers: [UserService]
    })
export class UserViewComponent {
    public user: User | undefined;

    constructor(private userService: UserService) {
    }

    getUser(id:number) {
        this.user = this.userService.getUser(id);       
    }
}