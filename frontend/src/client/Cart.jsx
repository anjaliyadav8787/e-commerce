import React from 'react'
import { Trash, Heart } from 'lucide-react'
import {useContext, useState,useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'


export default function Cart() {
    let [data, setData] = useState([])
    let {setCount} = useContext(UserContext)
    let {login} = useContext(UserContext)

    useEffect(() => {
        fetchCartData()
    }, [])
  
    async function fetchCartData() {
      let result = await axios.get(`http://localhost:3000/api/getCart/${login}`)
      setData(result.data)
      setCount(result.data.length)
    }

    async function deleteCart(id){
        let flag  = confirm("Are u sure to delete item")
       if(flag){
        await axios.delete(`http://localhost:3000/api/deleteCart/${id}/${login}`)
        fetchCartData()
       }
      }

      let cost = data.reduce((acc,curent)=>acc + JSON.parse(curent.productPrice),0)
    

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-200">
        {data.map((data) => (
          <li key={data.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              {/* <img
           src={`http://localhost:3000/${data.image}`}
          className="h-[200px] w-full rounded-t-md object-cover"
               /> */}
              <div className="flex w-full flex-col justify-between pb-4 bg-black">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-white">{data.productBrand}</h3>
                    <p className="text-sm text-white">{data.productPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">{data.productRating}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">{data.productType}</p>
                  </div>

                </div>
                <div className="flex divide-x text-sm text-white ">
                  <button type="button" 
                   onClick={()=>deleteCart(data.id)}  
                  className="flex items-center space-x-2 px-2 py-1 pl-0 ">
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 ">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right text-black font-black">
        <p>
          Total amount:
          <span className="font-semibold font-black"> {cost}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4 border-black-3px">
        <Link
        to='/'
          type="button"
          className="rounded-md border border-black-3px px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-black"
        >
          Back to shop
        </Link>
        <button
          type="button"
          className="rounded-md border border-black-3px px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-black"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
