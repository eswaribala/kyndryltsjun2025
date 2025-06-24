import './index.css';
import {faker} from '@faker-js/faker';
import logo from './assets/logo.jpeg';
let showHeading=(data:string)=>{
    let heading = document.createElement("h1");
    heading.textContent = data;
    document.body.appendChild(heading);
}

let showParagraph=(data:string)=>{
    let paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

showHeading(faker.company.name());

//showParagraph("Kyndryl is a global leader in IT services, providing innovative solutions to help businesses thrive in the digital age. With a focus on cloud computing, data analytics, and cybersecurity, Kyndryl empowers organizations to transform their operations and achieve their strategic goals. Our team of experts collaborates with clients to deliver tailored services that drive efficiency, enhance security, and foster growth. Join us in shaping the future of technology and business.");
let image = document.createElement("img");
image.src = logo;
image.alt = "Kyndryl Logo"; 
document.body.appendChild(image);


showParagraph(faker.company.catchPhrase());