import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () => loadRemoteModule({
      remoteEntry: '<URL_here>/remoteEntry.js',
      type: 'module',
      exposedModule: './SignupModule'
    })
      .then(m => m.SignupModule)
  },
  {
    path: 'signin',
    loadChildren: () => loadRemoteModule({
      remoteEntry: '<URL_here>/remoteEntry.js',
      type: 'module',
      exposedModule: './SigninModule'
    })
      .then(m => m.SigninModule)
  },
  {
    path: 'stickers',
    loadChildren: () => loadRemoteModule({
      remoteEntry: '<URL_here>/remoteEntry.js',
      type: 'module',
      exposedModule: './StickersModule'
    })
      .then(m => m.StickersModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
