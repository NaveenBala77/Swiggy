import React, { useState } from 'react'
import './Admin.css'
import swiggywhite from '../../../src/Assets/Images/oie_NT8oxrF8CAcU.png'
import { IoSearchSharp } from "react-icons/io5";
import swiggyuserimg from '../../../src/Assets/Images/20181222122915-swiggy.jpeg'
import { useNavigate } from 'react-router-dom';


const Admin = () => {
  const [prod,setprod]=useState("prod1")
  const [resDetails, setResDetails]=useState(
    {
      resName:"",
      cuisine:[],
      resType:"",
      delTime:"",
      menuOptions:"",
      fsssi:"", 
      resAddress:"",
    }
  );
const cuisines = [
    "South Indian",
    "American",
    "Andhra",
    "Arabian",
    "Asian",
    "Bakery",
    "Barbecue",
    "Bengali",
    "Beverages",
    "Biryani",
    "Bubble Tea",
    "Burger",
    "Burgers",
    "Burmese",
    "Cafe",
    "Cakes and Pastries",
    "Chaat",
    "Chettinad",
    "Chinese",
    "Coffee",
    "Combo",
    "Continental",
    "Desserts",
    "European",
    "Fast Food",
    "French",
    "Grill",
    "Gujarati",
    "Haleem",
    "Healthy Food",
    "Home Food",
    "Hyderabadi",
    "Ice Cream",
    "Ice Cream Cakes",
    "Indian",
    "Indonesian",
    "Italian",
    "Jain",
    "Japanese",
    "Juices",
    "Kebabs",
    "Kerala",
    "Keto",
    "Korean",
    "Lebanese",
    "Lucknowi",
    "Maharashtrian",
    "Malaysian",
    "Mangalorean",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Momos",
    "Mongolian",
    "Mughlai",
    "Nepalese",
    "North Indian",
    "Paan",
    "Pan-Asian",
    "Pastas",
    "Pizzas",
    "Punjabi",
    "Rajasthani",
    "Rolls & Wraps",
    "Salads",
    "Seafood",
    "Singaporean",
    "Snacks",
    "South American",
    "Street Food",
    "Sushi",
    "Sweets",
    "Tandoor",
    "Thai",
    "Thalis",
    "Tibetan",
    "Turkish",
    "Vietnamese",
    "Waffle",
    "Sandwich"
];



  const navigate=useNavigate()
  // const [logout,setLogout]=useState(false)
  let newarray=[]
  
  const logoutSubmit=(e)=>{
    console.log("Logged out!");
    
    navigate('/')
  }
  const handleChange=(e)=>{
       const{name,value}=e.target;
       setResDetails((prev)=>{
        return{...prev,[name]:value};
       });
       newarray.push(resDetails.cuisine)
  };
  console.log(newarray);
  console.log(resDetails.cuisine);
  

  const formSubmit=(e)=>{
    e.preventDefault();
    console.log(resDetails)
  }

  const [prodDetails, setProdDetails]=useState(
    {
      prodName:"",
      price:"",
      dishType:"",
      rating:"",
      prodDescription:"",
      prodImg:"",
    }
  );

  const prodChange=(e)=>{
       const{name,value}=e.target;
       setProdDetails((prev)=>{
        return{...prev,[name]:value};
       });
  };

  const prodSubmit=(e)=>{
    e.preventDefault();
    console.log(prodDetails)
  }

  // function showdata(event) {
  //   setprod(event)
  // }
  return (
    <div className='admin_main'>
      <div className='sidebar'>
        <div className='logo_box'>
            <img src={swiggywhite} alt="" />
        </div>
        <div className='add_restaurant'>
          <button type='button' onClick={()=>setprod("prod1")}>Add Restaurant</button>
        </div>
        <div className='add_products'>
          <button type='button' onClick={()=>setprod("prod2")}>Add Products</button>
        </div>
      </div>
      <div className='mainpage'>
        <nav className='adminnav'>
            <div className='search'>
             <h2>Dashboard</h2>
              <div className='searchbox'>
               <input type="text" placeholder='Search'/>
               <button type='submit'><IoSearchSharp className='searchicon'/></button>
              </div>
            </div>
            <div className='userdisplay'>
              <button type='submit' onClick={logoutSubmit}>Logout</button>
              <img src={swiggyuserimg} alt="" />
            </div>
        </nav>
        {prod=="prod1" && <div className='restaurant_form'>
          <div className='res_head'>
            <h2>Add Restaurant</h2>
          </div>
          <div className='res_input'>
            <h4>Restaurant Name:</h4>
            <input type="text" name='resName' onChange={handleChange} />
          </div>
          <div className='res_inputt'>
            <h4>Cuisine:</h4>
              <select name="select" multiple className='multiselect' multiselect-search="true" multiselect-select-all="true" id="" onChange={handleChange}>
                {cuisines.map(cuisine => (
  <option key={cuisine} value={cuisine}>
      {cuisine}
  </option>
))}
              </select>  
          </div>
          <div className='res_input'>
            <h4>Area:</h4>
            <input type="text" name='area' onChange={handleChange} />
          </div>
          <div className='res_input'>
            <h4>Restaurant Type:</h4>
            <select  id="" name='resType' onChange={handleChange}>
                <option value="Outlet">Outlet</option>
                <option value="Cloud Kitchen">Cloud Kitchen</option>
            </select>
          </div>
          <div className='res_input'>
            <h4>Delivery Time:</h4>
            <select id="" name='delTime' onChange={handleChange}>
                <option value="5-10">5 - 10 Mins</option>
                <option value="10 - 15 Mins">10 - 15 Mins</option>
                <option value="15 - 20 Mins">15 - 20 Mins</option>
                <option value="20 - 25 Mins">20 - 25 Mins</option>
                <option value="25 - 30 Mins">25 - 30 Mins</option>
                <option value="30 - 35 Mins">30 - 35 Mins</option>
                <option value="35 - 40 Mins">35 - 40 Mins</option>
                <option value="40 - 45 Mins">40 - 45 Mins</option>
                <option value="45 - 50 Mins">45 - 50 Mins</option>
                <option value="50 - 55 Mins">50 - 55 Mins</option>
                <option value="60 Mins+">60 Mins+</option>
                
            </select>
          </div>
          <div className='res_input_radio'>
            <div className='res_input_radio_title'>
             <h4>Menu Options:</h4>
            </div>
            <div className='res_input_radio_box'>
              <input type="radio" name="menuOptions" value="veg" onChange={handleChange}/>
              <label for="veg">Veg</label>
              <input type="radio" name="menuOptions" value="non-veg" onChange={handleChange}/>
              <label for="nonveg">Non - Veg</label>
              <input type="radio" name="menuOptions" value="veg & non-veg" onChange={handleChange} checked/>
              <label for="both">Veg & Non - Veg</label>
            </div>
          </div>
          <div className='res_input'>
            <h4>FSSSI Code:</h4>
            <input type="text" name='fsssi' onChange={handleChange}/>
          </div>
          <div className='res_input'>
            <h4>Address:</h4>
            <input type="text" name='resAddress' onChange={handleChange}/>
          </div>
          <div className='submit_button'>
            <button type='submit' onClick={formSubmit}>Submit</button>
          </div>
        </div>} 
        
        {prod=="prod2" && <div className='products_form'>
            <div className='prod_head'>
             <h2>Add Product</h2>
            </div>
           <div className='prod_input'>
             <h4>Product Name:</h4>
             <input type="text" name='prodName' onChange={prodChange}/>
           </div>
           <div className='prod_input'>
             <h4>Product Price:</h4>
             <input type="text" name='price' onChange={prodChange}/>
           </div>
           <div className='prod_input_radio'>
            <div className='prod_input_radio_title'>
             <h4>Menu Options:</h4>
            </div>
            <div className='prod_input_radio_box'>
              <input type="radio" name="dishType" value="veg" onChange={prodChange}/>
              <label for="veg">Veg</label>
              <input type="radio" name="dishType" value="non-veg" onChange={prodChange}/>
              <label for="nonveg">Non - Veg</label>
            </div>
          </div>
          <div className='prod_input'>
           <h4>Rating:</h4>
           <input type="number" name='rating' onChange={prodChange}/>
          </div>
          <div className='prod_input'>
           <h4>Product Description:</h4>
           <input type="text" name='prodDescription' onChange={prodChange}/>
          </div>
          <div className='prod_input'>
           <h4>Product Image:</h4>
           <input type="file" name='prodImg' onChange={prodChange}/>
          </div>
          <div className='submit_button'>
            <button type='submit' onClick={prodSubmit}>Submit</button>
          </div>
        </div>}
      </div>
    </div>
  )
  
}

export default Admin