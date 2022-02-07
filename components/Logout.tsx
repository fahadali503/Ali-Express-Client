import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeUserfromLocalStorage } from '../src/utils/jwt';
import { logoutUser } from '../store/slices/userSlice';

interface IProps {
  logoutLink: string
}

export const Logout = ({ logoutLink }: IProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    axios.get('/api/logout').then(res => {
      toast.success(res.data.message);
      router.push(logoutLink);
      removeUserfromLocalStorage();
      dispatch(logoutUser())
    }).catch(err => {
      toast.error(err.response?.data.message);
    })
  }
  return <div onClick={handleLogout} className={`flex  px-3 font-medium my-2 transition delay-75 hover:scale-110 text-gray-500 space-x-3 py-2 rounded-lg items-center cursor-pointer hover:bg-[#EBEEF2] hover:text-[#9769ff]`}>
    <MdLogout className='text-3xl' />
    <h1 className='text-lg'>Logout</h1>
  </div>;
};
