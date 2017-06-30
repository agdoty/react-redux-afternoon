
<h1>Project Summary</h1>
During this project, we'll be building a web application that walks users through filling out a home loan application. We'll be building out the components that have already been made and make them better with redux. To keep track of data and pass it to the correct components we'll make heavy use of Redux and React Redux.


<h1>Setup</h1>

Fork and clone this repository.
cd into the project directory.
Run npm install to download the included dependencies.

<h1>Step One</h1>
Run the following in your terminal `npm i redux react-redux react-router-dom --save`
Run `npm start` to spin up the development server

Create a reducer file in your ducks folder

Create a store.js file in your src folder
import createStore from redux;
import reducer from `ducks/reducer.js`
export default createStore with reducer passed in as it's argument

Go into your index.js
import Provider from 'react-redux'
import store from wherever your store.js is located
wrap BrowserRouter and App inside of the provider, making sure to include the store in the provider
Whatever you component needs from the store, Provider is responsible for making sure that all components inside of it. You should only use provider once.

Go to your App.js and import connect from react-redux
connect helps to wrap your application and allow it to subscribe to things like actions that you get from your reducers
Go to the bottom of you app.js, above the export default, and create a function, it can be named whatever you want, let's call it mapStateToProps

redux will call this function whenever the state in the store changes.
It'll call state and return an object, the keys and values here will be merged into the props of this application
chose which part of the state you want to subscribe or 'listen' to.

Below the function you've just created, change your export default using connect. It should now look like `export default connect(mapStateToProps)(App)`
This will allow us to wrap around each component that you want to subscribe to the store (only wrap components that need info from the store)

Inside of the mapStateToProps function, return what you want to subscribe to. Our second view asks what type of home loan and property we want, so let's start by adding `loanType: state.loanType` and `propertyType: state.propertyType` inside of our return statement.


///////

export default function reducer(state, action){

}


