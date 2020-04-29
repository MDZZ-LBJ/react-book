import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
    loader: () => import('./'), // 要异步加载的组件 引入当前组件
    loading(){  // 加载时显示的内容
        return (
            <div>正在加载。。。</div>
        )
  }
})

export default()=><LoadableComponent/>

