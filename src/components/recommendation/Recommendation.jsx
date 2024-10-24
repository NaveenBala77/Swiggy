import React from 'react'
// import logo from "../../Assets/logo192.png"
import FoodCart from '../Foodcart/FoodCart'
import Swiper from '../Swiper/Swiper'
import "./Recommendation.css"
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
const Recommendation = () => {
 let foodsarray= [
    {
        "name": "Original Recipe Chicken",
        "price": 9.99,
        "rating": 4.5,
        "description": "A classic favorite made with KFC's secret blend of 11 herbs and spices, fried to crispy perfection.",
        "image": "https://imgs.search.brave.com/x271tGjQfT7T6gQW7tgKZCf2Hmv0WcFlCi9M3gKPtG8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/aGlja2VuLXNrZXdl/cnMtd2l0aC1zbGlj/ZXMtc3dlZXQtcGVw/cGVycy1kaWxsXzI4/MjktMTg4MTMuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        "name": "Extra Crispy Chicken",
        "price": 10.49,
        "rating": 4.6,
        "description": "Double-breaded and fried for a deliciously crunchy coating with a tender and juicy inside.",
        "image": "https://imgs.search.brave.com/2y7Le1wT4reJ-0niWgWk5hbF8M-RJb0CzCHu5yoqaAg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/YWtlZC1jaGlja2Vu/LXdpbmdzLWFzaWFu/LXN0eWxlXzI4Mjkt/MTAxNTkuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
    },
    {
        "name": "Kentucky Grilled Chicken",
        "price": 9.79,
        "rating": 4.2,
        "description": "Marinated and grilled to perfection for a lighter option with a smoky flavor.",
        "image": "https://imgs.search.brave.com/ZrBuDkM39SRPjq76ZTI6V9rSikb1CniepSk3PuG4e30/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGlja2VuLXdp/bmdzLWJhcmJlY3Vl/LXN3ZWV0bHktc291/ci1zYXVjZS1waWNu/aWMtc3VtbWVyLW1l/bnVfMjgyOS0xNzI5/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
    },
    {
        "name": "Popcorn Nuggets",
        "price": 5.99,
        "rating": 4.4,
        "description": "Bite-sized pieces of all-white meat chicken, seasoned and breaded to crispy perfection.",
        "image": "https://imgs.search.brave.com/1JRhEsOy_nK5GTK7CdH1bSy9wK8zMjrntDtBjOWsb68/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZWxpY2lvdXMt/Z3JpbGxlZC1idXJn/ZXJzXzYyODQ3LTE0/LmpwZw"
    },
    {
        "name": "Chicken Tenders",
        "price": 6.49,
        "rating": 4.5,
        "description": "Juicy, tender chicken strips breaded in KFC's special blend of herbs and spices.",
        "image": "https://imgs.search.brave.com/HZUK3lbYSDe7_m1blZq0_zL_YMmfwoR81gvPMHdf0dQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXJnZXItd2l0aC1m/cmllc18xODE2MjQt/Mjc2MS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
    },
    {
        "name": "Chicken Sandwich",
        "price": 5.49,
        "rating": 4.7,
        "description": "A crispy chicken filet topped with mayonnaise and pickles on a buttery brioche bun.",
        "image": "https://assets.bonappetit.com/photos/5b6c6f4673629f37bbbe94d5/1:1/w_320,c_limit/oven-barbecued-chicken-01.jpg"
    },
    {
        "name": "Spicy Chicken Sandwich",
        "price": 5.79,
        "rating": 4.6,
        "description": "A spicy chicken filet with a fiery blend of spices, mayonnaise, and pickles on a brioche bun.",
        "image": "https://imgs.search.brave.com/wL_hLZSS99J4MOOCQtfDGhuP_ZMWgCg5GeIMWQpy0Ic/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjEtMTIvOTBvaDZl/MV9mb29kLWFtcF82/MjV4MzAwXzI5X0Rl/Y2VtYmVyXzIxLmpw/Zz9pbT1GYWNlQ3Jv/cCxhbGdvcml0aG09/ZG5uLHdpZHRoPTU0/MCxoZWlnaHQ9NzIw"
    },
    {
        "name": "Famous Bowl",
        "price": 6.99,
        "rating": 4.8,
        "description": "A layered bowl of mashed potatoes, sweet corn, crispy chicken, and home-style gravy topped with cheese.",
        "image": "https://imgs.search.brave.com/_XV6DA9BgVeXFpRWmACe-kSe4bX5l6GgZy-VkN-kEbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/YXN0eS1idXJnZXIt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZC1mcmVzaC1oYW1i/dXJnZXItZmFzdGZv/b2Qtd2l0aC1iZWVm/LWNoZWVzZV85MDIy/MC0xMDYzLmpwZz9z/aXplPTYyNiZleHQ9/anBn"
    },
    {
        "name": "Pot Pie",
        "price": 7.49,
        "rating": 4.5,
        "description": "A classic comfort food with tender chicken, diced potatoes, peas, and carrots in a savory sauce topped with a flaky crust.",
        "image": "https://imgs.search.brave.com/C-e488IjCwen1F83K4rhIvb-O2oZzwN_h4qXTQ_FOsk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8wNS8yMS80Ni9h/bWVyaWNhbi0xMjM5/MDgxXzY0MC5qcGc"
    },
    {
        "name": "Mac & Cheese Bowl",
        "price": 6.99,
        "rating": 4.7,
        "description": "Creamy mac and cheese topped with crispy popcorn nuggets and a sprinkle of KFC's special cheese blend.",
        "image": "https://imgs.search.brave.com/qQT_kktOvuNHbDjoTrfNoB2pOt4JgzGOHiL_9P_f6NM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/aGlja2VuLXdpbmdz/LWJhcmJlY3VlLXN3/ZWV0bHktc291ci1z/YXVjZS1waWNuaWMt/c3VtbWVyLW1lbnUt/dGFzdHktZm9vZC10/b3Atdmlldy1mbGF0/LWxheV8yODI5LTY0/NzEuanBnP3NpemU9/NjI2JmV4dD1qcGc"
    },
    {
        "name": "Chicken Little",
        "price": 2.99,
        "rating": 4.3,
        "description": "A small sandwich with a crispy chicken tender, pickles, and mayo on a warm bun.",
        "image": "https://imgs.search.brave.com/Va5Rx68KqKctEGQuBSMHQi77nyT0r8M_AL0NzuMfLpA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGluZXNlLWZv/b2QtY2hpbmVzZS10/cmFkaXRpb25hbC1j/dWlzaW5lLWRpc2hl/cy1kYXJrLWJhY2tn/cm91bmQtdG9wLXZp/ZXctY29weS1zcGFj/ZV8yMzMyMjYtOTA5/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
    },
    {
        "name": "Nashville Hot Chicken",
        "price": 10.99,
        "rating": 4.7,
        "description": "Crispy chicken with a spicy Nashville sauce, served with pickles and a side of coleslaw.",
        "image": "https://imgs.search.brave.com/g1cfQbrZDY0XlJQbZpvz1AhJIK1aDroIEG05lH3hgZU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Vw/b25zLm9uZWluZGlh/LmNvbS9pbWFnZXMv/MTgwMHgvaW1hZ2Vz/L21lZGlhLzc1L3Mv/U3dpZ2d5XzUwMHg1/MDAuanBn"
    },
  ]
  return (

    <>
    <Navbar/>
   <Swiper/>
    <div className='recommendmain'>
    <div className='recommenttitle'>
      <h3>Restaurants with online food delivery in Coimbatore</h3>
    </div>
    <div className='undertitle'>
    <div className='border'>
        <p>Filter</p>
    </div>
    <div className='border'>
        <p> Sort By</p>
    </div>
    <div className='border'>
        <p>Fast Delivery</p>
    </div>
    <div className='border'>
        <p>New on Swiggy</p>
    </div>
    <div className='border'>
        <p>Ratings 4.0+</p>
    </div>
    <div className='border'>
        <p>Pure Veg</p>
    </div>
    <div className='border'>
        <p>Offer</p>
    </div>
    <div className='border'>
        <p>Rs.300-Rs.600</p>
    </div>
   
    <div className='border'>
        <p>Less than Rs.300</p>
    </div>
   
    </div>
   
        <div className='recommend'>
      <FoodCart
      foodarray={foodsarray}
      />
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Recommendation