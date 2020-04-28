import React from 'react';
import Header from './common/header/index.js'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'




function App() {
  return (
      <Provider store={store}>
         <div>
             <Header />
             <BrowserRouter> {/* 根据路由渲染组件 */}
                 <div>
                     <Route path='/' exact component={Home}></Route>
                     <Route path='/detail' exact component={Detail}></Route>
                 </div>
             </BrowserRouter>
         </div>
      </Provider>

  );
}

export default App;
