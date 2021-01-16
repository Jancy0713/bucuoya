import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import { ICharacterInfo } from './components/characterItem/index.weapp'
import CharacterItem from './components/characterItem/index.weapp'
interface IState {
  characterList: ICharacterInfo[]
  swiperList: ISwiperItem[]
}

enum SwiperContentType {
  GUIDELINES = 10,
  UPGRADE = 20,
}

interface ISwiperItem {
  title: string
  imgUrl?: string
  contentType: SwiperContentType
}

export default class Index extends Component {
  state: IState = {
    characterList: [],
    swiperList: [{
      title: "新手指引",
      contentType: SwiperContentType.GUIDELINES,
    }, {
      title: "升级公告",
      contentType: SwiperContentType.UPGRADE,
    }]
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

  handleTapSwiperToNav = (contentType: SwiperContentType) => {
    Taro.navigateTo({
      url: `/pages/info/info?contentType=${contentType}`
    })
  }

  render () {
    return (
      <View className='index'>
        <Swiper
          indicator-dots={true}
          indicator-active-color='#ffffff'
          indicator-color='rgba(256, 256, 256, .3)'
          autoplay={true}
          className="swiper-view"
        >
          {this.state.swiperList.map((swiperItem) =>
            <SwiperItem>
              <View
                className="swiper-item"
                onClick={() => this.handleTapSwiperToNav(swiperItem.contentType)}
              >
                {swiperItem.title}
              </View>
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
