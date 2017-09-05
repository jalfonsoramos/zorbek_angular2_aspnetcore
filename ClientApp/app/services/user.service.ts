import { Injectable } from '@angular/core';

export class User {
    constructor(public id: number, public firstName: string, public lastName: string,
        public address: string, public dob: Date) { }
}

@Injectable()
export class UserService {
    users: User[] = [
        new User(1, 'Memo', 'Herrera', 'Ensenada', new Date('08/01/1992')),
        new User(2, 'Alfonso', 'Paredes', 'Tijuana', new Date('02/15/1974')),
        new User(3, 'Andres', 'Wong', 'Tijuana', new Date('01/15/1995'))];

    getUser(id: number) {
        return this.users.find(x => x.id == id);
    }

    getUsers() {
        return this.users;
    }
}