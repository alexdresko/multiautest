import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class SecondApp {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Second App';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }]);

        this.router = router;
    }
}
