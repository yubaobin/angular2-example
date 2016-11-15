import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';

//组件
import { AppComponent } from './app.component';
import { HeroDetailComponents } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent }      from './dashboard.omponent';
//service
import { HeroService } from './hero.service';
@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	routing
  ],
  //包含了所有属于本应用模块的，由我们亲自创建的组件、管道和指令。
  declarations: [ 
  	AppComponent,
  	HeroDetailComponents,
  	HeroesComponent,
  	DashboardComponent
  ],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}