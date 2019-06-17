const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.src = siteContent["nav"]["img-src"];

let nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];



const addNavL = document.createElement('a');
addNavL.href = '#';
addNavL.textContent = 'App. Section';
document.querySelector('nav').appendChild(addNavL).style.color = 'green';


const addNavF = document.createElement('a');
addNavF.href = '#';
addNavF.textContent = 'Pre. Section';
document.querySelector('nav').appendChild(addNavF).style.color = 'green';


const greenNav = Array.from(nav);
greenNav.forEach((link) => {
  link.style.color = 'green';
});




console.log(nav);


let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"]; 
console.log(ctaText);

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"]

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
console.log(ctaImg);

let contHead = document.querySelectorAll("h4");
contHead[0].textContent = siteContent["main-content"]["features-h4"];
contHead[1].textContent = siteContent["main-content"]["about-h4"];
contHead[2].textContent = siteContent["main-content"]["services-h4"];
contHead[3].textContent = siteContent["main-content"]["product-h4"];
contHead[4].textContent = siteContent["main-content"]["vision-h4"];
contHead[5].textContent = siteContent["contact"]["contact-h4"];
console.log(contHead);

let contText = document.querySelectorAll("p");
contText[0].textContent = siteContent["main-content"]["features-content"];
contText[1].textContent = siteContent["main-content"]["about-content"];
contText[2].textContent = siteContent["main-content"]["services-content"];
contText[3].textContent = siteContent["main-content"]["product-content"];
contText[4].textContent = siteContent["main-content"]["vision-content"];
contText[5].textContent = siteContent["contact"]["address"];
contText[6].textContent = siteContent["contact"]["phone"];
contText[7].textContent = siteContent["contact"]["email"];
contText[8].textContent = siteContent["footer"]["copyright"];
console.log(contText);

let mainImg = document.querySelector(".middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];



//topCont.textContent = siteContent["main-content"]["features-content"]; 





