# LOCAL WEATHER APP
> A web app pulls the current weather at user location and forecast the next 6 days weather

## About
This project was bootstrapped with [Create React App], [FLux] and [SCSS].


## Development Setup
1.  Install Node v.8.11.3
    * Easiest method: Install [nvm](https://github.com/creationix/nvm) and then run `nvm install v8.11.3`
    * Or follow [Node.js installation instructions](https://nodejs.org/en/download/)

2. Confirm [npm](https://github.com/npm/npm) was installed with Node by running `npm -v`. You should get a version number (current LTS is 5.6.0).
    * If you get `npm: command not found`, [install npm](https://www.npmjs.com/get-npm).
    
3. Clone this repo:
    ```cli
    git clone https://github.com/Huongg/Local-Weather.git && cd Local-Weather
    ```
4. Install packages:
    ```cli
    npm install
    ```


## Finish line
If everything is set up correctly, after running `npm start`, visit [localhost:3000](localhost:3000) in your browser.


## Folder Structure

After installation, your project should look like this:

```
Local-Weather/
  config/
  lib/
  node_modules/
  public/
        index.html
  scripts/
  spec/
        src/
        utils/
  src/
        assets/
        componets/
                MainWeather/
                        CurrentTemp.js
                        Dates.js
                        Mainweather.js
                        SimilarTemps.js
                SetupMenu/
                        ButtonUnit.js
                        SetupMenu.js
                        TestComponent.js
        libs/
                AppAction.js
                AppDispatcher.js
                AppStore.js
        stylesheets/
                abstracts/
                        colours.scss
                        minxins.scss
                        variables.scss
                base/
                        typography.scss
                components/
                        buttons.scss
                pages/
                        mainPage.scss
                        setUpPage.scss
                vendors/
                        bootstrap.scss
                main.scss
        utils/
                date_helpers.js
                get_current_location.js
                registerServiceWorkder.js
        index.js
  
  .gitignore
  package.json
  package-lock.json
  README.md
  yarn.lock  
```



