import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { UserReactiveForm } from './components/user-reactive-form/user-reactive-form';
import { GetApi } from './components/API/get-api/get-api';
import { ProjectCompetitionCRUDReactiveForm } from './components/project-competition-crud-reactive-form/project-competition-crud-reactive-form';
import { SignalFormEx } from './components/signal-form-ex/signal-form-ex';
import { LifeCycleEx } from './components/life-cycle-ex/life-cycle-ex';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: 'controlflow',
    component: ControlFlow,
  },
  {
    path: 'dynamiccssclass',
    component: DynamicCssClass,
  },
  {
    path: 'user',
    component: UserMaster,
  },
  {
    path: 'user-reactive',
    component: UserReactiveForm,
  },
  {
    path: 'api-get',
    component: GetApi,
  },
  {
    path: 'projectcompetition-crud-reactiveform',
    component: ProjectCompetitionCRUDReactiveForm,
  },
  {
    path: 'signal-form-ex',
    component: SignalFormEx,
  },
  {
    path: 'life-cycle-ex',
    component: LifeCycleEx,
  },
  {
    path: '**',
    component: NotFound,
  },
];
