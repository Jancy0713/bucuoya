import React, { Component } from 'react'
import Taro, { Config, getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './chat-page.scss'

type Option = Partial<Record<keyof IOptions, string>>
interface IOptions {
  id: string
}
interface IState {
  id: string
}
export default class ChatPage extends Component {
  $instance = getCurrentInstance()

  state: IState
  componentWillMount () {
    const options = this.$instance.router?.params as Option
    this.setState({
      id: options.id,
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {this.state.id}
      </View>)
  }
}
