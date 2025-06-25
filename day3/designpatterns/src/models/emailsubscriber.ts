import { Observer } from '../facades/observer';
export class EmailSubscriber  implements Observer {
    update(news: string[]): void {
        console.log(`Email Subscriber received news: ${news.join(', ')}`);
    }
    
}