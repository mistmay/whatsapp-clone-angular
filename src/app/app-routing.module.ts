import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './views/chat-container/chat-container.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { LogInGuard } from './guard/log-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'chat', component: ChatContainerComponent, canActivate: [LogInGuard] },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
