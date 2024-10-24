import React from 'react'
import "./Footcart.css"
// import foodimg from "../../Assets/img1.jpg"
import { MdStars } from "react-icons/md";
const FoodCart = (props) => {
    let myarray=props.foodarray
    console.log(myarray);
  return (
    <>
   {myarray.map(function (data) {
    return( <div className='cartbox'>
        <div className='cartimg'>
            <img src={data.image} alt="" />
            <div className='cart'>
                <h3>20% OFF UPTO {data.price}</h3>
            </div>
        </div>
        <div className='cartcont'>
                <h1>{data.name}</h1>
                <p><MdStars className='star' /><span>{data.rating} .25-30mins</span></p>
                <h6>{data.description}</h6>
        </div>
    </div>)
   })}
    </>
  )
}

export default FoodCart