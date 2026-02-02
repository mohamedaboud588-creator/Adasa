import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: "home", component: Home },
    {path: "about", component: Home },
    {path: "blog", component: Blog },
    {path: "**", component: Notfound}
];
