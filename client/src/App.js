
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NoMatch from './pages/NoMatch';
// // import Nav from './components/Nav';
// import Wrapper from './components/Wrapper';
// import AllRecipes from './pages/ViewAllRecipes';
// import ViewRecipe from './pages/ViewRecipe';
// import AddRecipe from './pages/AddRecipe';

// const App = () => (
//   <Wrapper>
//     <Router>
//         {/* <Nav /> */}
//         <Switch>
//           {/* <Route exact path='/' component={Users} /> */}
//           <Route exact path='/recipes' component={AllRecipes} />
//           <Route exact path='/recipes/new' component={AddRecipe} />
//           <Route exact path='/recipes/:id' component={ViewRecipe} />
          
          
//           <Route component={NoMatch} />
//         </Switch>
//     </Router>
//   </Wrapper>


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';

// import Nav from './components/Nav';
import Profile from './pages/Profile';
import Likes from './pages/Likes';
import Following from './pages/Following';
import Register from './pages/Register';
import AllRecipes from './pages/ViewAllRecipes';
import ViewRecipe from './pages/ViewRecipe';
import AddRecipe from './pages/AddRecipe';

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/recipes' component={AllRecipes} />
        <Route exact path='/likes' component={Likes} />
        <Route exact path='/following' component={Following} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/recipes' component={AllRecipes} />
        <Route exact path='/recipes/new' component={AddRecipe} />
        <Route exact path='/recipes/:id' component={ViewRecipe} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

