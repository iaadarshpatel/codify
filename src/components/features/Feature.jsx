import React from 'react'
import {TbSchool} from 'react-icons/tb'
import {GiBookmarklet} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'
import './feature.css'


const data = [
  {
    id: 1,
    logo: <TbSchool/>,
    feature_name: "Scholarship Facility",
    feature_detail: "One make creepeth, man bearing theira firmament won't great heaven"
  },
  {
    id: 2,
    logo: <GiBookmarklet/>,
    feature_name: "Sell Online Course",
    feature_detail: "One make creepeth, man bearing theira firmament won't great heaven"
  },
  {
    id: 3,
    logo: <TbCertificate/>,
    feature_name: "Global Certification",
    feature_detail: "One make creepeth, man bearing theira firmament won't great heaven"
  }
]


const Feature = () => {
  return (
    <section id='feature' className='section_gap'>
      <div  className='container'>
        <div className="main_title">
          <h2>Awesome Feature</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
        </div>
        <div className="feature_container">

          {
        data.map(({id, logo, feature_name, feature_detail}) => {
          return (

            <div className="features" key={id}>
              <div className="single_feature">
                  <i className='icon'>{logo}</i>
                <div className="desc">
                    <h4 className="feature_name">{feature_name}</h4>
                    <p className="feature_detail">{feature_detail}</p>
                </div>
              </div>
            </div>
             )
           })           
         }
        </div>
      </div>
    </section>
  )
}

export default Feature