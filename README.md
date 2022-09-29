<div id='top'>

# NLW eSports - Trilha Ignite | Rocketseat

</div>

<p align="center">
  <a href="#memo-about">About</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#bookmark-use-cases">Use Cases</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/itzmatheus" target="_blank">Author</a>
</p>


## :memo: About

During the event **NLW eSports** we have developed a _web_ and _mobile_ platform where Gamers can find partners for the most popular games being displayed on Twitch. This project is part of the Ignite Trail and we learned about NodeJS with Express, React with TypeScript and React Native with Expo.

The web application allows us to create ads and find game partners (or duos). In the mobile application, we can access those ads to view the informations about each player and copy their Discord username to clipboard, so we can add them to our friends list.

This project was developed during the event **#NLWtogether** hosted by [Rocketseat](https://www.rocketseat.com.br) with the help of the instructors [Diego Fernandes](https://github.com/diego3g) and [Rodrigo Gonçalves](https://github.com/rodrigorgtic).

<!-- prettier-ignore -->
| 🪧 Informations   |     |
| --------------- | --- |
| ✨ Name         | **Web NLW eSports** - Rocketseat |
| 🏷️ Technologies  | TypeScript, ViteJS, ReactJS, Axios, Tailwindcss and RadixUI|
| 💻 Api version  | [Click here](https://github.com/itzmatheus/nlwt-ignite-eSport-server) |
| 📲 Mobile version | [Click here](https://github.com/itzmatheus/nlwt-ignite-eSport-mobile) |
| 🔥 Design       | [**Figma**](https://www.figma.com/community/file/1150897317533332617) |


<div>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>

## 🩹 Improvements needed

The project was totally developed according to the instructions given, no aditionals. In the future, it would be interesting to add the following implementations:

- Web responsivity;
- Form validation with React Hook Form;
- Replacing standard select element with Radix-UI Select;
- Carousel for scrolling through games, in case we have more games in the database (lib suggested: Keen Slider);

## :white_check_mark: Requirements

Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) v16.14.0 installed.

Suggest: https://github.com/nvm-sh/nvm

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/itzmatheus/nlwt-ignite-eSport-web
# Access
$ cd nlwt-ignite-eSport-web
# Install dependencies
$ npm install
# Run local
$ npm run dev
# The server will initialize in the <http://127.0.0.1:5173/>
```

PS: if you have [make](https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makefiles.html) installed, consult Makefile to see all commands shortcuts =)

## :bookmark: Use Cases

#### List games

Homepage to see all registered games and the amount of ads already published.

![](prints/Home.png)

#### Publish Ad

When you click in the button _Publicar anúncio_ is open a modal with a form to you register a new ad and also you can see the new ad on [mobile app](https://github.com/itzmatheus/nlwt-ignite-eSport-mobile).

![](prints/Publish.png)

---

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.


<a href='#top'>🔼 Back to top</a>

---
Developer by [@Matheus Leite](https://itzmatheus.github.io/portfolio/)

Readme by [@sucodelarangela](https://angelacaldas.vercel.app)
