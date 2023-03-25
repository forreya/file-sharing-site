import DropZone from "@components/DropZone";
import { useState } from "react";

function Home() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl font-medium">Welcome to FilesToGo</h1>
      <div className='w-96 flex flex-col items-center 
      bg-gray-800 shadow-xl rounded-xl justify-center' >
        <DropZone setFile={setFile}/>
        {/* render file */}
        {
          file?.name
        }
        {/* upload button */}
      </div>
    </div>
  )
}

export default Home;