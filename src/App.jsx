import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [item,setItem] =useState('');
const [price,setPrice] = useState('');
const [total,setTotal] = useState(0);



const itemList = [
  
  ]

  const [List, setItemList] = useState(itemList)

  const AddItem =()=>{
  

    if(item !=='' && price !=''){
   
      console.log('Ok hai ji');
    
      const newItem = {
      item: item,
      price: price
      };

  
      setItemList([...List, newItem]);

      setItem('');
      setPrice('');

      countTotal();

    }
    else{
    alert("Please Enter Item and price!")
    setItem('');
    setPrice('');
    }

    
  }
  

  const countTotal= ()=>{

  setTotal ( total+ parseInt(price));
  }

  const RemoveItem =()=>{

    const lastItem = List[List.length - 1];


    setTotal(total - parseInt(lastItem.price));
    setItemList(List.slice(0, -1));
  }


  
   

  return (
   <div className='bg-gray-700 w-full max-w-md mx-auto px-8 py-4'>

      <h1 className='mb-8'>Expense Tracker</h1>

      
      {/* Name */}
       <label className='flex text-2xl text-black '>Item Name:</label>
        <input 
        type="text" 
        value={item}
        onChange={e => setItem(e.target.value)}
        className='w-full mb-4 text-2xl bg-white text-black outline-none rounded-lg p-2' />
        
        {/* Amount */}
        <label className='flex text-2xl text-black '>Item Amount:</label>
        <input type="text"  
         value={price}
         onChange={e => setPrice(e.target.value)}
        className='w-full mb-4 text-2xl bg-white text-black outline-none rounded-lg p-2' />


      {/* add button */}
       <div className='flex gap-6'>  
          <button 
          onClick={ AddItem }
          className='bg-blue-400 hover:bg-blue-600'>Add</button>

          {/* remove button */}
          <button 
          onClick={RemoveItem}
          className='bg-blue-400 hover:bg-blue-600'>Remove</button>
      </div>

        <div className='flex justify-between content-center my-8 '>
            <div className='bg-gray-500  px-8 rounded-lg '>

              <h2 className='text-lg font-semibold'>Item List:</h2>
              <ul >
              {
              List.map((item, index) => (
                <li key={index}>
                  {item.item}: {item.price}
                </li>
              ))
              }
              </ul>
             

            </div> 
            <p  className='bg-white px-4 py-2 text-black text-lg font-semibold rounded-lg h-[50px]'>Total:{total}</p>
        </div>
      
    
   </div>
  )
}

export default App
