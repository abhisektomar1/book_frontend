"use client"
import { Router } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react'

function Header() {
  const router = useRouter()
  return (

    <header className=" py-4 p-4 border-b">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left section with "Books" title */}
      <Link href={"/books"}>
      <h1 className=" text-3xl font-bold">Books</h1>
      </Link>
     
      
      {/* Right section with logout button */}
      
      <button onClick={() => {
       
       localStorage.setItem('token', "")
       router.push("/")

        
      }}  className="bg-black text-white px-4 py-2 rounded-lg border-b-2 border-black hover:bg-gray-700">
        Logout
      </button>
    </div>
  </header>

  )
}

export default Header
