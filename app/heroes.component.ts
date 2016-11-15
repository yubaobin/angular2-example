import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponents } from './hero-detail.component';
import { HeroService } from './hero.service';

/**
 * 1.用反引号可以实现多行模板
 * 2.styles 该组件的样式，此样式只会作用于这个 AppComponent 组件，而不会“泄露”到外部 HTML 中
 * 3.(需要绑定的事件)=""绑定事件
 * 4.模板中的 class.selected 是括在一对方括号中的。 这就是“属性绑定”的语法，一种从数据源 ( 即 hero === 
 * selectedHero 表达式 ) 到 class 属性的单向数据流。
 * 5.my-hero-detail 是详情组件 [hero]="selectedHero" 等号 (=) 左边方括号中的这个 hero 是属性绑定的 目标
 * Angular 希望我们把 目标属性 定义成组件的 输入属性 ，否则， Angular 会拒绝绑定，并且抛出一个错误。
 * 6.providers 创建新的 AppComponent 组件时,也要创建一个 HeroService 的新实例
 * 7.uppercase 借助它，我们能插手“插值表达式绑定”的过程,管道擅长做下列工作：格式化字符串、金额、日期和
 * 其它显示数据。 Angular 自带了好几个管道，而且我们还可以写自己的管道。
 * 8.styleUrls 属性是一个由样式文件的文件名 ( 包括路径 ) 组成的数组。 我们还可以列出来自多个不同位置的样式文件。
 */
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})

//实现OnInit接口
export class HeroesComponent implements OnInit{ 
	//添加2个属性
	title = "Tour of Heroes"; 
	heroes: Hero[];
	selectedHero: Hero; // ：是属性类型为Hero类

	ngOnInit(): void {//生命周期
		this.getHeroes();
	}
	constructor(private heroService: HeroService,private router:Router) {
		//参数中定义了一个私有的 heroService 属性，并把它标记为注入 HeroService 的靶点。
		
	}
	onSelect(hero:Hero):void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		// this.heroService.getHeroslowly().then(heroes => this.heroes = heroes);
	}

	gotoDetail():void {
	  this.router.navigate(['/detail',this.selectedHero.id]);
	}
}