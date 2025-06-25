
import { NewsAgency } from '../models/newsagency';
import { EmailSubscriber } from '../models/emailsubscriber';
import { MobileSubscriber} from '../models/mobilesubscriber';   
const newsAgency = new NewsAgency();
const email=new EmailSubscriber();
const mobile=new MobileSubscriber();
newsAgency.subscribe(email);
newsAgency.subscribe(mobile);       
newsAgency.notify(['Breaking News: Observer Pattern in Action!', 'New Subscriber Added!']);