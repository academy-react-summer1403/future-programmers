import React, { useState } from 'react'
import http from '../../../core/services/interceptor'

const UploadImage = () => {
    const [Image, setImage] = useState('');

    const sendImage = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('formFile', Image)
        const res = await http.post('/SharePanel/AddProfileImage', data)
        console.log(res)
    }
  return (
      <div>
          <form onSubmit={sendImage}>
              <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
              <button type='submit'>click</button>
          </form>
    </div>
  )
}

export default UploadImage