import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard.omponent';
import { HeroDetailComponents }      from './hero-detail.component';
/**
 * 1.path: 路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes 。
 * 2.component: 导航到此路由时，路由器需要创建的组件，如 HeroesComponent 。
 * 3.配置  '' 重定向到/dashboard
 * 4.路径中的冒号 (:) 表示 :id 是一个占位符，当导航到这个 HeroDetailComponent 组件时，它将被填入一个特定英雄的 id 。
 **/
const appRoutes: Routes = [
  {
  	path:'',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
  },{
    path: 'heroes',
    component: HeroesComponent
  },{
  	path: 'dashboard',
  	component: DashboardComponent
  },{
    path: 'detail/:id',
    component: HeroDetailComponents
  }
];

/**
 *使用 RouterModule.forRoot 方法，导出包含了路由数组的 routing 常量。它返回一个 配置好的路由模块 ，它将被加入到根 NgModule - AppModule 中。
 *调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。 forRoot 方法为我们提供了路由需要的服务提供商和指令。
 **/
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

