import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
    const {btnMainContainer , btnTxt , title , onpress} = props
  return (
    <TouchableOpacity style={[styles.btnMainContainer , btnMainContainer]} onPress={onpress}>
      <Text style={[styles.btnTxt , btnTxt]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnMainContainer:{
        height:60,
        minWidth:60,
        borderRadius:5,
        marginHorizontal:5,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTxt:{
        color:'#fff' ,
         fontSize:12
        }
})