import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';

export enum editModeEnum {
    add = 1, update = 2
}

@Component(
    {
        selector: 'user-edit',
        templateUrl: './user-edit.component.html',
        providers: [UserService],
    })
export class UserEditComponent {
    public model: User | null = this.newUser();
    public editMode: editModeEnum;

    constructor(private userService: UserService) {
    }

    getUser(id: number) {
        var user = this.userService.getUser(id);

        if (user && this.model) {
            this.model.id = user.id;
            this.model.firstName = user.firstName;
            this.model.lastName = user.lastName;
            this.model.address = user.address;
            this.model.dob = user.dob;
        }
    }

    onSubmit() {
        if (this.model && this.editMode) {
            if (this.editMode == editModeEnum.add) {
                if (this.model.id == 0) {
                    this.userService.addUser(new User(0,this.model.firstName,this.model.lastName,'',new Date()));
                    this.model = this.newUser();
                    return;
                }
            }
            if(this.editMode == editModeEnum.update){
                if(this.model.id>0){
                    this.userService.updateUser(new User(this.model.id, this.model.firstName,this.model.lastName,this.model.address,this.model.dob));
                    this.model = this.newUser();
                    return;
                }
            }
        }
    }

    newUser() {
        return new User(0, '', '', '', new Date());
    }
}