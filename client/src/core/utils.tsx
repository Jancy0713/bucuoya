import Taro from '@tarojs/taro'

export enum LocalStorageKey {
  OPEN_ID = "openId"
}

export const setStorage = (key: LocalStorageKey, value: any) => {
  Taro.setStorage({
    key,
    data: value,
  })
}
