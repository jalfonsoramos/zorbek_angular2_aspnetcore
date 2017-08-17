import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component(
    {
        selector: 'helloworld',
        template: require('./helloworld.component.html'),
        providers: [UserService]
    })
export class HelloworldComponent {
    public firstName = '';
    public lastName = '';
    public address = '';

    constructor(userService: UserService) {
        var user = userService.getUser(1);
        if (user != null) {
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.address = user.address;
        }
        else {
            this.firstName = '';
            this.lastName = '';
            this.address = '';
        }
    }
}