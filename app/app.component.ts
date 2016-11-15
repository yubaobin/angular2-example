import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

/**
 *  1.a标签中的 [routerLink] 绑定。
 *  2.我们把 RouterLink 指令 (ROUTER_DIRECTIVES 中的另一个指令 ) 绑定到一个数组。它将告诉路由器，当用户点击这个链接时，应该导航到哪里。
 *  3.Angular 路由器提供了 routerLinkActive 指令，我们可以用它来为匹配了活动路由的 HTML 导航元素自动添加一个 CSS 类。 我们唯一要做的就是为它定义样式。真好！
 **/
@Component({
	selector:'my-app',
	template:`<h1>{{title}}</h1>
			  <nav>
			  	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			  	<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
			  </nav>	 
			  <router-outlet></router-outlet>`,
	styleUrls: ['app/app.component.css']
})

export class AppComponent  {
	title = "Tour of Heroes";
}