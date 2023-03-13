import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import {Button} from '../index'
const Card = (props) => {
    const {onpressedit , onpressdelete , text , editData} = props
  return (
    <View style={styles.mainCardConatiner}>
      <Text style={{flex:1 , paddingHorizontal:10}}>{text}</Text>
      <Button title='edit' btnMainContainer={styles.edit} onpress={onpressedit}/>
      <Button title='delete' btnMainContainer={styles.deletebtn}  onpress={onpressdelete}/>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    mainCardConatiner:{
        flexDirection:'row',
        borderRadius:10,
        height:60,
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
backgroundColor:'#f9f9f9',
marginVertical:10
    },
    deletebtn:{
        backgroundColor:'red'
    },
    edit:{
        backgroundColor:'#a2dee8'
    }
})