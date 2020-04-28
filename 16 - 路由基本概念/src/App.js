import React from 'react';
import Header from './common/header/index.js'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {BrowserRouter , Route} from 'react-router-dom'

function App() {
  return (
      <Provider store={store}>
         <div>
             <Header />
             <BrowserRouter> {/* 表示这里面使用路由 render表示要渲染的内容 exact完全匹配路由  */}
                 <div>
                     <Route path='/' exact render={()=> <div>home</div>  } ></Route>
                     <Route path='/detail' exact render={()=><div>detail</div>  } ></Route>
                 </div>
             </BrowserRouter>
         </div>
      </Provider>

  );
}

export default App;
