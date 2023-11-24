# Paul Mallet's Portfolio

In this portfolio I'ld like to test as many scripts as I could to improve my JS skill, but I'ld like to create my own experience too. You'll find 4 different pages on this website: homepage, about me, projects and contact form. Each of them are available just by clicking on links of the nav menu of the homepage. Feel free to check the website on [this link](https://portfolio-pm.fr/) 😃.

My personal social accounts:

[![LinkedIn Profil](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![X(ex: Twitter) Profil](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/PaulMal33466829)
[![Stack Overflow Profil](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/22239802/paul)

![Projects Page](https://drive.google.com/uc?export=view&id=108UE1P7mvXc0xBjs01Yw_sbW6fgQB9O9)

## Tech Stack

After searching during few days about what kind of tech I could use, I found 2 well known JS frameworks. I've learnt how to structure a project and to animate properly element of the DOM.

| Name | Logo     | Description                |
| :-------- | :------- | :------------------------- |
| [Astro](https://astro.build/) | <img src="https://camo.githubusercontent.com/89e69f2170a86e4642f55f25097acfd5d862a4d51ed048176c67f0d2defb93b5/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d314c554a786f4c76434c6d45796c4b457377434c4c464b68424555736e42795270" alt="Astro_Logo" data-canonical-src="https://drive.google.com/uc?export=view&amp;id=1LUJxoLvCLmEylKEswCLLFKhBEUsnByRp" style="width: 200px;"> | This JS framework is used to build static site generator which means high content websites(ex: blog, e-commerce). It works with the View Transitions API(experimental) to create fluid and better user-experience navigation and that's why I've decided to choose it for this project. |
| [GSAP](https://gsap.com/) | <img src="https://camo.githubusercontent.com/9de0107ead6151945608b5b65a31e360deaccf0179ad87c3473ec374d710ae3a/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d317842376a4a324b4c745442735158466777453261715f2d594d644a3578375661" alt="GSAP_Logo" data-canonical-src="https://drive.google.com/uc?export=view&amp;id=1xB7jJ2KLtTBsQXFgwE2aq_-YMdJ5x7Va" style="width: 200px;"> | GSAP is a JS animation framework. It allows to create interactive and engaging websites with many animation properties like duration, positions, eases... It was my personal choice to bring alive few svgs and texts into portfolio-pm.fr |

## Project Structure

Inside this repository, you'll find folders and files in the src folder. The order is the same as this:

```text
/
├── public/
│   ├── sounds/
│   │   └── background.mp3
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Handwriting/
│   │   │   ├── DarkMode.astro
│   │   │   ├── Signature.astro
│   │   │   ├── Socials.astro
│   │   │   └── Sound.astro
│   │   ├── Box.astro
│   │   ├── Buttons.astro
│   │   ├── Frame.astro
│   │   └── Menu.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── scripts/
│   │   ├── buttons.js
│   │   ├── form.js
│   │   ├── little_js.js
│   │   ├── menu.js
│   │   └── roadmap.js
│   └── styles/
│       └── global.css
└── package.json
```
