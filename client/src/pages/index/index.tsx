import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import { ICharacterInfo } from './components/characterItem/index.weapp'
import CharacterItem from './components/characterItem/index.weapp'
interface IState {
  characterList: ICharacterInfo[]
}

export default class Index extends Component {
  state: IState = {
    characterList: []
  }
  componentWillMount () {
    const database = Taro.cloud.database({
      env: 'dev-nykfj'
    })
    database.collection('character').get().then((res) => {
      this.setState({
        characterList: res.data
      })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Swiper autoplay={true} className="swiper-view">
          {["新手指引", "升级公告"].map((text) =>
            <SwiperItem>
              <View className="swiper-item">{text}</View>
            </SwiperItem>
          )}
        </Swiper>
        <View className="character-list-wrap">
          <View className="character-list-content">
            {this.state.characterList.map((character) =>
              <CharacterItem girlInfo={character}></CharacterItem>
            )}
          </View>
        </View>
      </View>
    )
  }
}
