import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'

const Input = (props) => {
    const {onChange , value , placeholder ,Txt, placeholderTextColor , inputStyle , onPress } = props;
  return (
    <View style={[styles.inputMainContainer]}>
        <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={placeholderTextColor} 
        onChangeText={onChange} 
         value={value}
         style={[styles.Input , inputStyle]}
         />
         <TouchableOpacity style={[styles.inputBtn]} onPress={onPress}>
            <Text style={[styles.btnTxt]}>{Txt}</Text>
         </TouchableOpacity>
         
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    Input:{
flex:1,
        },
        inputMainContainer:{
            flexDirection:'row',
            backgroundColor:'#eeeee4',
            borderRadius:10
        },
        inputBtn:{
            width:100,
            backgroundColor:'#2197bf',
            borderTopRightRadius:10,
            borderBottomRightRadius:10,
            justifyContent:'center',
            alignItems:'center'
        },
        btnTxt:{
            color:'#fff',
            fontSize:16
        }
})