This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Locales

If you need to change the locales/messages, look for them inside the `public/locales/your-language` and change away.

Also if you add more, check out `src/components/translationChanger.js` and make the necessary changes.

I added that component as a means to manually change the translation. To give options to whoever might consider taking this repo out for a spin.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Storybook commands

- If you want to run this locally issue `yarn storybook` to get the app running in development mode (as a aside i tend to use the `--ci` flag to prevent Storybook from opening a browser window. If you don't want this, remove the flag)

- If you want to test the production version of your Storybook, issue `yarn build-storybook`, wait for the build to complete and then issue `serve_storybook` and open a browser window to `http://localhost:5000`



