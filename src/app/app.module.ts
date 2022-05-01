import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './core/background/background.component';
import { ChatContainerComponent } from './views/chat-container/chat-container.component';
import { SidebarComponent } from './views/chat-container/components/sidebar/sidebar.component';
import { ChatComponent } from './views/chat-container/components/chat/chat.component';
import { SidebardHeaderComponent } from './views/chat-container/components/sidebar/components/sidebard-header/sidebard-header.component';
import { SidebardMainComponent } from './views/chat-container/components/sidebar/components/sidebard-main/sidebard-main.component';
import { SidebarSearchComponent } from './views/chat-container/components/sidebar/components/sidebar-search/sidebar-search.component';
import { AvatarComponent } from './views/chat-container/components/shared/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatProperComponent } from './views/chat-container/components/chat/components/chat-proper/chat-proper.component';
import { ChatPlaceholderComponent } from './views/chat-container/components/chat/components/chat-placeholder/chat-placeholder.component'
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { LogInComponent } from './views/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ChatContainerComponent,
    SidebarComponent,
    ChatComponent,
    SidebardHeaderComponent,
    SidebardMainComponent,
    SidebarSearchComponent,
    AvatarComponent,
    ChatProperComponent,
    ChatPlaceholderComponent,
    SearchPipePipe,
    ErrorPageComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
