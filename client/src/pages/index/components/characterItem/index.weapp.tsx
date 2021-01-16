import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'
import { View, Image } from '@tarojs/components'

interface IProp {
  girlInfo: ICharacterInfo
}

export interface ICharacterInfo {
  _id: number
  name: string
  logoList: string[]
  desc: string
}

export default class Index extends Component {
  props: IProp
  state = {
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  render() {
    return (
      <View className='character-wrap'>
        <Image className='character-logo' src={this.props.girlInfo.logoList[0]} mode='aspectFit'></Image>
        <View className="character-text">
          <View className='character-name'>{this.props.girlInfo.name}</View>
          <View className='character-desc'>{this.props.girlInfo.desc}</View>
        </View>
      </View>
    )
  }
}
