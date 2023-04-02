import DownloadFile from "@components/DownloadFile";
import DropZone from "@components/DropZone";
import RenderFile from "@components/RenderFile";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [id, setId] = useState(null)
  const [downloadPageLink, setDownloadPageLink] = useState(null)
  const [uploadState, setUploadState] = useState<"Uploading"|"Uploaded"|"Upload Failed"|"Upload">("Upload")

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;
    setUploadState("Uploading")
    const formData = new FormData()
    if (file !== null) {
      formData.append("someFile", file);
    }
    try {
      const {data} = await axios({
        method: "post",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setDownloadPageLink(data.downloadPageLink)
      setId(data.id)
      setUploadState("Uploaded")
    } catch (error: any) {
      console.log(error)
      setUploadState("Upload Failed")
    }
  }

  const resetComponent = () => {
    setDownloadPageLink(null)
    setFile(null)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl font-medium">Welcome to FilesToGo</h1>
      <div className='w-96 flex flex-col items-center 
      bg-gray-800 shadow-xl rounded-xl justify-center pt-3 px-3' >
        {!downloadPageLink && <DropZone setFile={setFile}/>}
        
        {file && (
          <RenderFile file={{
            format: file?.type.split('/')[1],
            sizeInBytes: file?.size,
            name: file?.name,
          }}/>
        )}

        {!downloadPageLink && file && 
        <button 
          className="button"
          onClick={handleUpload}
        >
          {uploadState}
        </button>}

        {downloadPageLink && (
          <div className="p-2 text-center">
            <DownloadFile downloadPageLink={downloadPageLink}/>
            {/* email form */}
            <button
              className="button my-5"
              onClick={resetComponent}
            >
              Upload New File
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home;