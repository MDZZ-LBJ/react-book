import React from 'react';
import Header from './common/header/index.js'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'




function App() {
  return (
      <Provider store={store}>
             <BrowserRouter> {/* 根据路由渲染组件 */}
                 <div>
                     <Header />
                     <Route path='/' exact component={Home}></Route>
                     <Route path='/detail' exact component={Detail}></Route>
                     <Route path='/login' exact component={Login}></Route>
                     <Route path='/write' exact component={Write}></Route>
                 </div>
             </BrowserRouter>
      </Provider>

  );
}

export default App;
