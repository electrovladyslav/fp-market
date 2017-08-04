* Testing task from [Future Processing](http://www.future-processing.com/).
* Applicant: Yermolin Vladyslav.

# TASK DESCRIPTION

Create an application for simulating a stock exchange where users can buy or sell their virtual shares based on current real market values.

## Description of application

Application hosted on git-hub. To run it on local machine you should have installed [node.js](https://nodejs.org/en/) and git. Choose directory and clone repository:
```
git clone git@github.com:electrovladyslav/fp-market.git
```
To start developing you should install  dependencies
```
npm i
```

To start automation assembling system type
```
npm start
```
This command start local server which will watch changing in html, styles or scripts files and reload the server.
 * All styles are divided on BEM-block and  assembling automatically.
 * All scripts are divided to ES-6 modules and gluing together by rollup module bundler.
 * All images are minificating.

 You can publish production version of application to gh-pages branch of your git-hub repository and it will hosted on git-hub server, like it work now on my [gh-page](https://electrovladyslav.github.io/fp-market/). For this use command

```
npm deploy
```


