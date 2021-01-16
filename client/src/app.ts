import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'

import './app.scss'
import { LocalStorageKey, setStorage } from './core/utils'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
      Taro.cloud.callFunction({
        name: "login",
        data: {}
      }).then(res => {
        setStorage(LocalStorageKey.OPEN_ID, (res.result as any)?.openid)
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
