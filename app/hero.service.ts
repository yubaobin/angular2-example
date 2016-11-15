import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/**
 * 可注入服务
 * 1.当 TypeScript 看到 @Injectable() 装饰器时，就会记下本服务的元数据。如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
 * 2.getHeroes()方法使用promise进行异步
 **/


@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
	getHero(id:number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
	//延时2秒
	getHeroslowly(): Promise<Hero[]> {
		return new Promise<Hero[]>( resolve => 
			setTimeout(resolve,2000))
			.then(() => this.getHeroes());
	}
}
