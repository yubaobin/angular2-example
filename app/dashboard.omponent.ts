import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';

/**
 * 1.templateUrl加载模板文件，这时要添加 moduleId ,否则会报错
 **/
@Component({
	moduleId:module.id,  
  	selector: 'my-dashboard',
  	templateUrl: 'dashboard.component.html',
  	styleUrls: ['dashboard.component.css']   
})
export class DashboardComponent implements OnInit {
	heroes:Hero[] = [];
	constructor(private heroService: HeroService,private router: Router) {}
	ngOnInit(): void{
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(0,4));
	}
	gotoDetail(hero:Hero): void {
		let link = ['/detail', hero.id]; //生成路由的 链接参数数组
  		this.router.navigate(link); //把这个数组传给路由器的 navigate 方法。
	}
}
