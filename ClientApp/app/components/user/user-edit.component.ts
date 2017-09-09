import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component(
    {
        selector: 'user-edit',
        templateUrl: './user-edit.component.html',
        providers: [UserService],
    })
export class UserEditComponent {
    public user: User | null | undefined;
    public editoption: string;

    constructor(private userService: UserService) {
        this.user = null;
    }

    getUser(id: number) {
        this.user = this.userService.getUser(id);
    }

    saveUser() {
        if (this.user) {
            if (this.user.id > 0) {
                console.log('update');
            }
            else {
                console.log('add');
            }
        }
    }

    onEditOption(val: string) {
        if (val == 'update')
            this.user = null;
        else
            this.user = new User(0, '', '', '', new Date());
    }
}