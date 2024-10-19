import { Field, Form, Formik } from 'formik'
import React from 'react'

const EditProfile = () => {
  return (
    <div>
      <Formik initialValues={{ LName: '', FName:'', ReceiveMessageEvent: '' }}>
        <Form>
          <div className='flex'>
            <Field tّype='text' name='LName' placeholder='نام خانوادگی خود را وارد کنید' />
            <Field tّype='text' name='FName' placeholder='نام  خود را وارد کنید' />
          </div>


          <div>
            <h2>ایا میخواهید پیام دریافت کنید؟</h2>

            <label htmlFor="d1"></label>
            <Field id='d1' type='radio' name='ReceiveMessageEvent' value='true' />
            <span>true</span>
            <label htmlFor="d2"></label>
            <Field id='d2' type='radio' name='ReceiveMessageEvent' value='false' />
            <span>false</span>

          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default EditProfile