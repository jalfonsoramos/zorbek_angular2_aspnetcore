import { Injectable } from '@angular/core';

export class User{
    constructor(public id:number, public firstName: string, public lastName:string, public address:string){}
}

@Injectable()
export class UserService{
    users: User[]= [
        new User(1,'Memo','Herrera','Ensenada'),
        new User(1,'Alfonso','Paredes','Tijuana'),
        new User(1,'Andres','Wong','Tijuana')];

    getUser(id:number){
        var user = null;

        for(var i=0;i<this.users.length;i++){
            if(id == this.users[i].id){
               user = this.users[i];
               break;
            }
        }

        return user;
    }
}