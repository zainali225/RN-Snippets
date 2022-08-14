import { Dimensions } from 'react-native'
// import { getStatusBarHeight } from 'react-native-status-bar-height'


const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const wp = (float: number) => WIDTH * float / 100
export const hp = (float: number) => HEIGHT * float / 100
export const sHeight = 40 // getStatusBarHeight()