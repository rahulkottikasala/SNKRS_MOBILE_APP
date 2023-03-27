
import {View} from 'react-native'
import { COLOR } from '../const/Color'
export const DashLine = ({color, margin}) => (
    <View style={{width:'100%', height:10, borderTopWidth:1, borderStyle:'dashed', borderTopColor:color ? color :COLOR.grey, marginTop:10}} />

)

export const NormalLine = ({color, margin}) => (
    <View style={{width:'100%', height:margin ? margin :10, borderTopWidth:1, borderTopColor:color ? color :COLOR.grey, marginTop:margin ? margin :10}} />

)