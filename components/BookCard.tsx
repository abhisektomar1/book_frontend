
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookCard({title, description, publication, isbn,id}: any) {
  const router = useRouter()
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <Card className="border-0 bg-gray-50 dark:bg-gray-900 hover:shadow-lg max-w-sm ">
      <CardContent className="grid gap-1 p-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">Book</span>
          <span className="text-lg font-bold tracking-wide">{title}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Published
          </span>
          <span className="text-sm tracking-wide">{publication}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Description
          </span>
          <span className="text-sm tracking-wide">
           {description}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">ISBN</span>
          <span className="text-sm tracking-wide">{isbn}</span>
        </div>
        <div>
        <div className="flex items-center gap-2 mt-3 justify-between">
        <button onClick={() => {
          router.push(`/book/${id}`)
     }}  className="bg-black text-white px-4 py-2 rounded-lg border-b-2 border-black hover:bg-gray-700">
       Read
     </button>
          <Button onClick={handleLikeClick} size="icon" variant="ghost">{
            liked ? <HeartIcon className="w-9 h-9 " />  : <Icon className="w-9 h-9 animate-bounce" />
          }
            <span className="sr-only">Like</span>
          </Button>
        </div>
        </div>
      </CardContent>
    </Card>
  )
}


function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="red"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
function Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}





