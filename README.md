## Get Started

### Installation

Install it:

```bash
yarn or `npm install`
react-native link
```

## Running the Project

After completing the installation step, you're ready to start the project though!
There are three different environments that the project provide.

### Dev

```bash
yarn ios-dev or yarn android-dev
```

### Staging

```
yarn ios-staging or yarn android-staging
```

#### Proudction

```
yarn ios-prod or android-prod
```

You can find the configuration in the root directory which is called `.env.dev` `.env.prod` `.env.staging`.
However, there are additional scripts at your disposal:

|`yarn <script>`|Description|
|---------------|-----------|
|`android:build`    | Bundle your app before building apk file|
|`android:release`  | Build the apk to `android/app/build/outputs/apk/app-release.apk`|
|`test`             | Run unit test with Jest.|
|`lint`             | Lint the project for the coding style |

## Project Structure

The structure is only meant to serve as a guide, it's by no means prescriptive. It try to aims to represent generally 
guidelines and pattern for building scalable applications. If you have any thoughts about it. Don't be shy, just mention
it. We just list some important directories to show our idea and leave out some files or directories or we mention before,
such as: `.babelrc` `.eslintrc` ..etc.

```
.
.
|--- js
|    |--- index.js                  # main entry of this project 
|    |--- components                # global reusable and screen components 
|    |    |--- common               # global resuable components
|    |    |    └--- Header          # e.g.: Header Component
|    |    |         |--- __tests__  # all tests about the component 
|    |    |         |--- index.js   # header definitionin this layer
|    |    |         |--- Text.js    # subcomponent with CSS style, the component will be imported by index.js in this layer
|    |    |         └--- ...        # one resuable components might include more than one subcomponent. 
|    |    └--- loginComponent       # screen component
|    |         └---- ...            # it depends on the structure of container. if login container have three different subcontainer
|    |                              # in this layer, there are three component directories inside loginComponent. Each
|    |                              # subcomponent directory have the same structure like global resuable component
|    |--- lib                       # all the configurations of project
|    |--- modules                   # we divied our project into different blocks according to the function
|    |    |--- auth                 # put all the js files about auth into one directory
|    |    |    |--- __tests__       # all tests about the module in this layer
|    |    |    |--- authActions     # actions about auth
|    |    |    |--- authReducer     # reducers about auth
|    |    |    |--- authAPI         # APIs about auth
|    |    |    |--- authEpic        # epics about auth
|    |    |    └--- ....etc         
|    |    └--- ...etc    
|    |--- screens                   # all the files about app's screen which only include business logic
|    |    |--- loginScreens         # screen about login 
|    |    |    |--- __tests__       # all tests about the files in this layer
|    |    |    |---  society         # just examply, A screen might be divided into a small amount subscreens which have own
|    |    |    └ ...etc             # business logic
|    |    └ ... etc
|    └--- navigations               # all the routes of project                    
```

## Technologies we use

|package|Description|
|------------------|-----------|
|redux             | state management for our app |
|redux-observable  | deal with the side effect in our project, such as request api, UI event..etc|
|redux-logger      | good tool for displaying information about action|
|styled-component  | good lib for implementing the concept of css-js |
|redux-persist     | using this lib for managing local storage just like managing redux state|
|react-native-config| using for dividing our app into three different environments|
|redux-actions     | reduce the boilerplate to write action and reducer |
|normalizr         | normalizes nested json from api |
|jest              | testing framework |
|immutability-helper| mutate a copy of data without changing the original source|
|husky             | git hook made easy |
|react-native-debugger| good tool for debugging |
|axios             | a tool which is promise based http client|


