import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component'
import { UserViewComponent } from './components/user/user-view.component';
import { UserGridComponent } from './components/user/user-grid.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }, 
            { path: 'user', component:UserComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        UserComponent,
        UserViewComponent,
        UserGridComponent,
        UserEditComponent
    ],
    providers:[UserService]
})
export class AppModuleShared {
}
