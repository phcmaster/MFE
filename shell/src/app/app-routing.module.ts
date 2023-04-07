import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'swags',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'https://d2fwugd1e0rkmk.cloudfront.net/remoteEntry.js',
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
