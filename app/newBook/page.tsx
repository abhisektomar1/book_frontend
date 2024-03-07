"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/Header"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Component() {
    const router = useRouter()
    const [postInputs, setPostInputs] = useState<any>({
        title:"",
        id:`${Math.floor(Math.random() * 1000) + 1}`,
        description:"",
        auther:"",
        isbn:"",
        content:"",
        publication:""
    });
    async function sendRequest() {
        console.log(postInputs);
        
        try {
            const authToken = localStorage.getItem('token');
            if (!authToken) {
              router.push("/")
              return
            }
            const response = await axios.post(`http://localhost:4521/api/books`,
            postInputs,
            {
                headers: {
                  'Authorization': `Bearer ${authToken}`,
                  'Content-Type': 'application/json',
                }
              });
            alert("Success")
          
            router.push( "/books")
        } catch(e) {
            
            alert("Please Try again ")
            // alert the user here that the request failed
        }
    }
  return (
    <>
    <Header />
    <div className="space-y-8 m-4">
      <div className="space-y-2 m-4">
        <h1 className="text-3xl font-bold">Create a new book</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter the details of the book you want to create.</p>
      </div>
      <div className="space-y-4 m-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        title: e.target.value
                    })
            }}   id="title" placeholder="Enter the title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        auther: e.target.value
                    })
            }} id="author" placeholder="Enter the author" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="publication">Published Date</Label>
            <Input onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        publication: e.target.value
                    })
            }} id="publication" placeholder="Enter the published Date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="isbn">ISBN</Label>
            <Input onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        isbn: e.target.value
                    })
            }} id="isbn" placeholder="Enter the ISBN" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        description: e.target.value
                    })
            }}  className="min-h-[100px]" id="description" placeholder="Enter the description" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        content: e.target.value
                    })
            }} className="min-h-[100px]" id="content" placeholder="Enter the content" />
        </div>
        <button onClick={sendRequest}  className="bg-black text-white px-4 py-2 rounded-lg border-b-2 border-black hover:bg-gray-700 m-5">
          Add Book
        </button>
      </div>
    </div>
    </>
  
  )
}

