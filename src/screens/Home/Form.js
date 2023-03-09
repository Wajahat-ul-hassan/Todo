import React, { useRef, memo, useEffect, useState } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {Input} from '../../components'
function CForm(props) {
    const [currentLanguage,setLanguage] = useState('ar');
    const {
        submit,
        edit
    } = props;

    const dispatch = useDispatch()
    const reduxState = useSelector(({  language }) => {
        return {
  
            language: language?.language?.lan
        };
    });
    const form = useRef(null);
    

    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                item: edit ? edit : ''
            }}
            validationSchema={Validations()}
        >
            {({ handleChange, values, handleSubmit, errors }) => {
                return (
                    <>
                      <Input
                      onChange={handleChange('item')}
                      value={values.item}
                       placeholder='enter a item'
                       onPress={()=>handleSubmit()}
                      />
                      <Text>
                      {errors.item}
                      </Text>
                      </>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
