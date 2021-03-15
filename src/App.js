import React,{Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {GlobalStyle} from './style.js';
import {GlobalStyle1} from './statics/iconfont/iconfont.js';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component{
  render(){

    return (
      <Fragment>
      <Provider store={store}>     
<GlobalStyle/>
<GlobalStyle1/>
<BrowserRouter>
      		<div>
          <Header />
      <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      		</div>
      	</BrowserRouter>
      </Provider>
      </Fragment>
    );

}

}


export default App;
