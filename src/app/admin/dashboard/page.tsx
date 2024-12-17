"use client"
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(setLoading(true));

axios
.get("/api/get_products")
.then((res) => setProducts(res.data))
.catch((err) => console.log(err))
.finally(() => dispatch(setLoading(false)));

}, [updateTable]);

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text3xl'>All Products</h2>

        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      </div>
  )
}

export default Dashboard