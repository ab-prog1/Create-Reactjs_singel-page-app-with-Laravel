import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import "./home.css"
import { useState } from 'react';
import SkeletonPost from '../../components/skeleton/SkeletonPost';
const Home = () => {
     const [data, setData] = useState(null);
     const [visible, setVisible] = useState(3)

     const showMoreItems = () => {
          setVisible((prevValue) => prevValue + 3)
     }

     useEffect(()=> {
    
          const handlePosts = async()=>{
               axios.get("/api/view-blog")
              .then((res)=> {
                   setData(res.data.blog);
              })
         }
         handlePosts()
     
     }, [])

  return (
    <div className='home'>
         <div className="home-img"></div>
         <div className="container py-5">
              <h1 className="fw-bold home-title">از همه جا با ما باش</h1>

              <div className="row mt-5">
                 { data &&
                      data.slice(0,visible).map(post => {
                           return (
                              <div className="col-lg-4 col-md-6 mt-4" key={post.id}>
                              <div className="blog-item shadow">
                                   <img src={`http://localhost:8000/uploads/blog/${post.image}`} alt="" className='w-100 blog-img' />
                                   <div className="blog-item-text p-3">
                                        <div className="author border-bottm pb-2">
                                             <h6 className='fw-bold'>{post.title}</h6>
                                             <small className='fw-bold text-muted'>نویسنده :  {post.user.name}</small>
                                        </div>
                                        <Link className='btn btn-dark d-block w-100 mt-4' to={`/blogdetails/${post.id}`}>مشاهده</Link>
                                   </div>
                              </div>
                         </div>
                           )
                      })
                 }

                 {
                      !data && [1,2,3].map((item) => <SkeletonPost key={item} />)
                 }

                 <button className="btn bg-dark text-white mt-5" onClick={showMoreItems}>نمایش پست های بیشتر</button>
              </div>
         </div>
    </div>
  )
}

export default Home