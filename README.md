This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## GKE Docker repository

### Docker Build, Tag, and Push Image

To build a new docker image run the following command

```
docker build -t personal-website .
```

To tag a new image run the following command

```
docker tag personal-website eu.gcr.io/shea-meyers-personal-website/personal-website
```

To push the tagged image run the following command

```
docker push eu.gcr.io/shea-meyers-personal-website/personal-website
```

### Docker Pull Image 

To pull the image from GKE's Docker repository run the following command

```
docker pull eu.gcr.io/shea-meyers-personal-website/personal-website
```