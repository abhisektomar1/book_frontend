import { Quote } from "@/components/Quote";
import { Signin } from "@/components/signin";
import { SnackbarProvider } from "notistack";

export default function Home() {
  return (
    <>
    
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <div>
              <Signin />
            </div>
            {/* <div className="hidden lg:block">
            <Quote />
        </div> */}
          </div>
        </div>
  
    </>
  );
}
