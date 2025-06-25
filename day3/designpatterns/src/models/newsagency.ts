import { Observer } from '../facades/observer';
export class NewsAgency {
    
    private observers:Observer[] = [];
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(news: string[]): void {
        this.observers.forEach(observer => observer.update(news));
    }   

  
}
            
            


