import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlaceIndex from './places/PlaceIndex';
import PlaceDetails from './places/PlaceDetails';
import Navigation from './Navigation';
import Error404 from './Error404';
import NewPlaceForm from './places/NewPlaceForm';
import EditPlaceForm from './places/EditPlaceForm';
import SignUpForm from './users/SignUpForm';
import LoginForm from './users/LoginForm';
import CurrentUserProvider from './contexts/CurrentUser';
import './gothic.css';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <div className="gothic-app">
          <header className="gothic-border">
            <h1>REST Rant - Gothic Edition</h1>
            <Navigation />
          </header>
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sign-up" component={SignUpForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/places" component={PlaceIndex} />
              <Route exact path="/places/new" component={NewPlaceForm} />
              <Route exact path="/places/:placeId" component={PlaceDetails} />
              <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
              <Route path="/" component={Error404} />
            </Switch>
          </main>
          <footer className="gothic-border">
            <p>&copy; 2023 REST Rant - Gothic Edition</p>
          </footer>
        </div>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;