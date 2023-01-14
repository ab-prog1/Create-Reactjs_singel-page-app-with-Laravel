import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container py-5'>
         <div className="row min-vh-100 justify-content-center align-content-center">
             <div className="col-lg-4 text-center">
             <h1 className='text-center fw-bold'>این صفحه وجود ندارد</h1>
              <Link to="/" className='btn btn-success mt-3'>رفتن به صفحه اصلی</Link>
             </div>
         </div>
    </div>
  )
}

export default PageNotFound