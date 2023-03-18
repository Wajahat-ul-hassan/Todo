import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React, {useState , useEffect} from 'react'
import {Input , Card} from '../../components'
import Form from './Form';
import { useDispatch , useSelector } from 'react-redux';
import { deleteData , addData , updateData} from '../../Redux/Actions/Api.action';
const Home = () => {
  const dispatch = useDispatch()
  const redux = useSelector(({reducer})=>{
    return{
      data:reducer.data
    }
  })

  const [data , setData] = useState([])
  const [editData , setEditData] = useState(false)

  useEffect(()=>{
    setData(redux.data)
  },[redux.data])

  const handleSubmit = (val , id) => {
    if(id !== undefined){
      dispatch(updateData(val , id))
      setEditData(false)
    }else{
      const abc = {};
      const newid =  data?.length || 0
      abc.id = newid + 1
      abc.title = val.item
      dispatch(addData(abc))
    }
  }

  const handleDelete = (val) => {
  dispatch(deleteData(val))
  }

  const handleEdit = (id) => {
   const edit = data.filter((val)=>{
     if(val.id == id) return val
     return
   })
   setEditData(edit?.[0])
  }

  return (
    <View style={styles.mainContainer}>
      <Form 
      submit={handleSubmit}
      edit={editData?.title}
      id={editData?.id}
       />
         <ScrollView showsVerticalScrollIndicator={false}>
      {data?.length > 0 && 
       data.map((val)=>{
        const {title , id} = val
        return(
          <Card 
          text={title}
          onpressdelete={()=>handleDelete(val)}
          onpressedit={()=>handleEdit(id)}
          />
          )
        })}
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    margin:20,
    flex:1
  }
})