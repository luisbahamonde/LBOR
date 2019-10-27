import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaPageModule' },
  { path: 'persona', loadChildren: './persona/persona.module#PersonaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
