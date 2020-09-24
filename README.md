# tuGerente Test

<p align="center">
  <a href="https://material-ui.com/" rel="noopener" target="_blank"><img width="150" src="./public/favicon.png" alt="Tu Gerente Logo"></a></p>
</p>

<h1 align="center">tuGerente</h1>

[![npm package](https://img.shields.io/npm/v/react?label=React&logo=react&color=%2361DAFB)](https://www.npmjs.com/package/react)
[![npm package](https://img.shields.io/npm/v/axios?label=Axios)](https://www.npmjs.com/package/axios)
[![npm package](https://img.shields.io/npm/v/@material-ui/core/latest.svg?label=Material%20UI&logo=material-ui&color=%231976D2)](https://www.npmjs.com/package/@material-ui/core)

## Description

Create an app in react that will show photo albums of different users.
It must be possible to select the user's email with a text input and a search button.
When searching by email, the photos should be shown separated by albums as follows:
a section per album, whose title will be the name of the album.
A preview of the photos in that album below the title of each section (use the thumbnailUrl)
When you click on the thumbnail, the real image (url) with its title will be displayed on the entire screen in a popup
the list of users will be obtained from the following url: https://jsonplaceholder.typicode.com/users
the list of albums will be obtained from the following url: https://jsonplaceholder.typicode.com/albums
the list of photographs will be obtained from the following url: https://jsonplaceholder.typicode.com/photos

Here is the mockup of the app
![img](./mockup.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
