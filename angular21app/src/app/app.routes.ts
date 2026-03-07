import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(component => component.Login),
  },
  {
    path: '',
    loadComponent: () => import('./components/layout/layout').then(component => component.Layout),
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: 'databinding',
        loadComponent: () => import('./components/data-binding/data-binding').then(component => component.DataBinding),
      },
      {
        path: 'signal',
        loadComponent: () => import('./components/signal/signal').then(component => component.Signal),
      },
      {
        path: 'variables',
        loadComponent: () => import('./components/variables/variables').then(component => component.Variables),
      },
      {
        path: 'controlflow',
        loadComponent: () => import('./components/control-flow/control-flow').then(component => component.ControlFlow),
      },
      {
        path: 'dynamiccssclass',
        loadComponent: () =>
          import('./components/dynamic-css-class/dynamic-css-class').then(component => component.DynamicCssClass),
      },
      {
        path: 'user',
        loadComponent: () => import('./components/user-master/user-master').then(component => component.UserMaster),
      },
      {
        path: 'user-reactive',
        loadComponent: () =>
          import('./components/user-reactive-form/user-reactive-form').then(component => component.UserReactiveForm),
      },
      {
        path: 'api-get',
        loadComponent: () => import('./components/API/get-api/get-api').then(component => component.GetApi),
      },
      {
        path: 'projectcompetition-crud-reactiveform',
        loadComponent: () =>
          import('./components/project-competition-crud-reactive-form/project-competition-crud-reactive-form').then(
            component => component.ProjectCompetitionCRUDReactiveForm,
          ),
      },
      {
        path: 'projectcompetition-crud-reactiveform-signal',
        loadComponent: () =>
          import('./components/project-competition-crud-reactive-form-signal/project-competition-crud-reactive-form-signal').then(
            component => component.ProjectCompetitionCRUDReactiveFormSignal,
          ),
      },
      {
        path: 'signal-form-ex',
        loadComponent: () => import('./components/signal-form-ex/signal-form-ex').then(component => component.SignalFormEx),
      },
      {
        path: 'life-cycle-ex',
        loadComponent: () => import('./components/life-cycle-ex/life-cycle-ex').then(component => component.LifeCycleEx),
      },
      {
        path: 'pipes-ex',
        loadComponent: () => import('./components/pipes-ex/pipes-ex').then(component => component.PipesEx),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(component => component.NotFound),
  },
];
