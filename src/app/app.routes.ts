import { Routes, RouterModule } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    ProductComponent,
    SearchComponent
 } from "./components/index.paginas";

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing =  RouterModule.forRoot(routes, { useHash:true });
