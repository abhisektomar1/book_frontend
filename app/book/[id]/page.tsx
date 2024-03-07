"use client"
import Header from "@/components/Header"
import { CardContent, Card } from "@/components/ui/card"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Component({ params }: { params: { id: string } }) {

  const router = useRouter()
    const [data, setData] = useState<any>({});
    useEffect(() => {
      const authToken = localStorage.getItem('token');
      if (!authToken) {
        router.push("/")
        return
      }
      axios.get(`http://localhost:4521/api/books/${params.id}`,
      {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          }
        }).then((r) =>{
            console.log(r);
            
         setData(r.data);
          
        }).catch((e)=>{
          alert(e.message)
        });
  
    
    },[])
  return (
    <>
    <Header />
    <Card className="w-full max-w-[210mm] h-full p-8  mx-auto mt-20">
      <CardContent className="px-4 py-6 md:px-6 md:py-12 lg:py-16 xl:py-20">
        <div className="space-y-4 print:space-y-2 print:divide-y print:divide-gray-200">
          <div className="space-y-2 print:divide-y print:divide-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight print:font-bold">{data?.title}</h1>
            <div className="grid grid-cols-1 gap-1 not-2xl:grid-cols-2">
              <div className="space-y-1">
                <p className="text-gray-500">Published on {data?.publication}</p>
                <p className="text-gray-500">Ages 8-12</p>
              </div>
              <div className="space-y-1">
                <p className="text-right text-gray-500">ISBN {data?.isbn} </p>
               
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p>
           {data?.description}
            </p>
          
          </div>
          <div className="space-y-8 print:space-y-10">
            <div className="space-y-8 print:space-y-10">
              <h2 className="text-3xl font-extrabold tracking-tight print:text-2xl print:font-bold">
                Chapter 1
              </h2>
              <div className="prose prose-gray max-w-none print:prose-inherit">
                <p>
                {data?.content}
                </p>
                
              </div>
            </div>
            {/* <div className="space-y-8 print:space-y-10">
              <h2 className="text-3xl font-extrabold tracking-tight print:text-2xl print:font-bold">
                Chapter 2: Mistress Mary Quite Contrary
              </h2>
              <div className="prose prose-gray max-w-none print:prose-inherit">
                <p>
                  Mary had liked to look at her mother from a distance and she had thought her very pretty, but as she
                  knew very little of her she could scarcely have been expected to love her or to miss her very much
                  when she was gone. She did not miss her at all, in fact, and as she was a self-absorbed child she gave
                  her entire thought to herself, as she had always done.
                </p>
                <p>
                  If she had been older she would no doubt have been very anxious at being left alone in the world, but
                  she was very young, and as she had always been taken care of, she supposed she always would be. What
                  she thought was that she would like to know if she was going to nice people, who would be polite to
                  her and give her her own way as her Ayah and the other native servants had done.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  
  )
}

