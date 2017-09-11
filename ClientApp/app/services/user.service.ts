import { Injectable } from '@angular/core';

export class User {
    constructor(public id: number, public firstName: string, public lastName: string,
        public address: string, public dob: Date) { }
}

@Injectable()
export class UserService {
    private static users: User[] = [
        new User(1, 'Memo', 'Herrera', 'Ensenada', new Date('08/01/1992')),
        new User(2, 'Alfonso', 'Paredes', 'Tijuana', new Date('02/15/1974')),
        new User(3, 'Andres', 'Wong', 'Tijuana', new Date('01/15/1995'))];

    getUser(id: number) {
        return UserService.users.find(x => x.id == id);
    }

    getUsers() {
        return UserService.users;
    }

    updateUser(user: User) {
        var index = UserService.users.findIndex(x => x.id == user.id);

        if (index > -1) {
            UserService.users[index].firstName = user.firstName;
            UserService.users[index].lastName = user.lastName;
            UserService.users[index].address = user.address;
            UserService.users[index].dob = user.dob;
        }
    }

    addUser(user: User) {
        if (user.id == 0) {
            var newid = UserService.users[UserService.users.length - 1].id + 1;
            user.id = newid;
            UserService.users.push(user);
        }
    }
}