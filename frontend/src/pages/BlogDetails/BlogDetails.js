import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'

const BlogDetails = () => {
     const [singleData, setSingleData] = useState("")
     const {id} = useParams();

     useEffect(()=> {
          axios.get(`/api/detail-blog/${id}`)
          .then(res => {
              setSingleData(res.data.blog);
          })

     }, [])

  return (
    <div className='container py-5'>
         <div className="row py-5 justify-content-center">
              <div className="col-lg-8 mt-4">
                    <div className="blog-item">
                         <img src={`http://localhost:8000/uploads/blog/${singleData.image}`} alt="" className='w-100 blog-img' />
                         <div className="blog-item-text p-3">
                              <div className="author d-flex pb-2 justify-content-between">
                                   <h6 className='fw-bold'>{singleData.title}</h6>
                                   <h6 className="fw-bold">نویسنده: {singleData && singleData.user.name}</h6>
                              </div>
                              <p className='mt-5'>{singleData.description}</p>
                         </div>
                    </div>
              </div>
              <div className="col-lg-8">
                   <Comments />
              </div>
         </div>
    </div>
  )
}

export default BlogDetails