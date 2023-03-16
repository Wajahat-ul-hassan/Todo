import React, { useRef, memo } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { Text } from "react-native";
import {Input} from '../../components'
function CForm(props) {
    const {
        submit,
        edit,
        id
    } = props;
    const form = useRef(null);
    return (
        <Formik
            innerRef={form}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                submit(values , id)
                resetForm()
                setSubmitting(false);
            }}
            enableReinitialize={true}
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
                       Txt={edit ? 'Edit' : 'Add'}
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
