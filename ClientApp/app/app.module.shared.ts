import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component'
import { UserViewComponent } from './components/user/user-view.component';
import { UserGridComponent } from './components/user/user-grid.component';
import { UserService } from './services/user.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        UserComponent,
        UserViewComponent,
        UserGridComponent
    ],
    providers:[UserService],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'user', component:UserComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
