"use client";

import Login from "@/components/admin-apanel/Login";
import Sidebar from "@/components/admin-apanel/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from 'react'

const layout = ({children}: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store) => store.LoadingReducer);
  const { data: session} = useSession();
  
  if(!session?.user){
    return <Login />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
      {}
      <div>
        {isLoading && <Loader />}
      </div>
      </div>
    </div>
  )
}

export default layout