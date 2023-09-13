import React from 'react'
import './course.css'
import C1 from '../../assets/courses/c1.jpg'
import C2 from '../../assets/courses/c2.jpg'
import C3 from '../../assets/courses/c3.jpg'
import Auth1 from '../../assets/courses/author1.png'
import Auth2 from '../../assets/courses/author2.png'
import Auth3 from '../../assets/courses/author3.png'
import {FiUser} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'

const data = [
  {
    id: 1,
    Image: C1,
    price: "$50",
    course_tag_name: "DESIGN",
    course_name: "Marketing",
    course_detail: "One make creepeth man bearing their one firmament won't fowl meat over sea",
    auth_image: Auth1,
    auth_name: "David",
    user_icon: <FiUser/>,
    like_icon: <FiHeart/>
  },
  {
    id: 2,
    Image: C2,
    price: "$50",
    course_tag_name: "SALES",
    course_name: "Computer",
    course_detail: "One make creepeth man bearing their one firmament won't fowl meat over sea",
    auth_image: Auth2,
    auth_name: "Aadarsh",
    user_icon: <FiUser/>,
    like_icon: <FiHeart/>
  },
  {
      id: 3,
      Image: C3,
      price: "$50",
      course_tag_name: "DESIGN",
      course_name: "Development",
      course_detail: "One make creepeth man bearing their one firmament won't fowl meat over sea",
      auth_image: Auth3,
      auth_name: "Cameron",
      user_icon: <FiUser/>,
      like_icon: <FiHeart/>
    }
]

const Course = () => {
  return (
    <section id='course' className='section_gap'>

    <div className="container">
        <div className="main_title">
          <h2>Our Popular Courses</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
        </div>
        
        <div className="courses_container">

        {
        data.map(({id, Image, price, course_tag_name, course_name, course_detail, auth_image, auth_name, user_icon, like_icon}) => {
          return (
        <div className="single_course" key={id}>
          <div className="course_head">
            <img src={Image} alt="course_pic" />
          </div>
          <div className="course_content">
            <span className="price">{price}</span>
            <span className="course_tag">{course_tag_name}</span>
            <h4 className="course_name">
              <a href="http://">{course_name}</a>
            </h4>
            <p>{course_detail}</p>

            <div className="course_meta">
              <div className="auth_meta">
                <img src={auth_image} alt=""/>
                <span className='auth_name'>{auth_name}</span>
              </div>
              <div className='follows'>
                <span className="meta_info">
                  <a href="/"><i>{user_icon}</i>25</a>
                </span>
                <span className="meta_like">
                <a href="/"><i>{like_icon}</i>35</a>
                </span>
              </div>

            </div>
          </div>
        </div>
          )} 
        )
        } 
        </div> 
    </div>
    </section>
  )
}

export default Course
