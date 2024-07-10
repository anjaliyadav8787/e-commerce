import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminLogin() {

  let [data, setData] = useState([])

  useEffect(() => {
    fetchProductData()
  }, [])

  async function fetchProductData() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    console.log(result.data)
    setData(result.data)
  } 


  async function deleteProduct(id) {
    console.log(id)
    await axios.delete(`http://localhost:3000/api/deleteProduct/${id}`)
    fetchProductData()
  }
  

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">

          <div>

          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>productBrand</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        productPrice
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        productRating
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        productType
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((product, key) => (
                      <tr key={key}>
                        
                              <td>
                              <div className="text-sm font-medium text-gray-900">{product.productBrand}</div></td>
                              <td>
                              <div className="text-sm text-gray-700">{product.productPrice}</div></td>
                           
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{product.productRating}</div> </td>
                          <td>
                          <div className="text-sm text-gray-700">{product.productType}</div>
                        </td>
                        
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">


                          <Link type="button" 
                          to={`/admin/viewData/${product.id}`}
                          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">view</Link>
                          <button type="button" onClick={() => deleteProduct(product.id)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">delete</button>
                          <Link type="button"  to={`/admin/updateData/${product.id}`} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">update</Link>

                          <a href="#" className="text-gray-700">
                            {/* Edit */}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
