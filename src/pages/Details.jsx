import React, { useState } from 'react'
import { data } from './data'
import user from "../assets/user.png";
import pro from "../assets/pro.png";
import family from "../assets/family.png";
import phone from "../assets/phone.png";

const Details = () => {
  return (
    <section className='details-wrapper'>
        {Object.keys(data).map((d,i) => <DetailSection key={i} heading={d} values={data[d]} />)}
    </section>
  )
}

export default Details

export const DetailRow = ({label, value}) => {
    return (
        <div className='deatil-row'>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    )
}

export const DetailSection = ({ heading, values }) => {
  const [icon, setIcon] = useState({
    "Personal Detail" : [user, "user"],
    "Professional Details" : [pro, "pro"],
    "Family Details" : [family, "family"],
    "Contact Details" : [phone, "phone"]
  })
  return (
    <div className="details-section">
        <div className={`icon ${icon[heading][1] || ""}`}>
        <img src={icon[heading][0] || user} alt="" srcSet="" />
      </div>
      <div className="details-container">
        <div className="heading-section">
          <h1>{heading}</h1>
        </div>
        {Object.keys(values).map((d, i) => (
          <DetailRow key={i} label={d} value={values[d]} />
        ))}
      </div>
    </div>
  );
};