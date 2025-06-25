import { Observer } from '../facades/observer';
export class MobileSubscriber implements Observer {
    update(news: string[]): void {
        console.log(`Mobile Subscriber received news: ${news.join(', ')}`);
    }
   
}   