import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component(
    {
        selector: 'user-view',
        template: require('./user-view.component.html'),
        providers: [UserService]
    })
export class UserViewComponent {
    public user: User;

    constructor(private userService: UserService) {
    }

    getUser(id) {
        this.user = this.userService.getUser(id);
    }
}