import {Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

/**
 * 新的 HeroDetailComponent 应该从 ActivatedRoute 服务的可观察对象 params 中取得 id 参数，并通过 HeroService 服务获取具有这个指定 id 的英雄数据。
 **/
@Component({
	moduleId:module.id,
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['hero-detail.component.css']
})

/**
 * 用@Input 注解将hero变为输入属性
 */
export class HeroDetailComponents implements OnInit {
	// @Input()
	hero:Hero;

	ngOnInit(): void {
		this.route.params.forEach( (params) => {
			let id = +params['id']; //英雄的 id 是数字，而路由参数的值 总是字符串 。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
			this.heroService.getHero(id).then(hero => this.hero = hero);
		})
	}
	constructor(
		private heroService: HeroService,
  		private route: ActivatedRoute,
  		private location: Location 
  	){}

	/**
	 *根据浏览器的历史堆栈，后退一步。
	 *回退太多步会跑出我们的应用。 在 Demo 中，这算不上问题。但在真实的应用中，我们需要对此进行防范。 也许你该用 CanDeactivate guard. 
	 */
  	goBack(): void {
  		this.location.back();
  	}
}