import RenderFile from "@components/RenderFile"
import axios from "axios"
import { GetServerSidePropsContext, NextPage } from "next"
import { IFile } from "../../../../libs/types"
import fileDownload from "js-file-download"

const index:NextPage<{
  file: IFile
}> = ({file:{format,name,sizeInBytes,id}}) => {

  const handleDownload = async () => {
    const {data} = await axios.get(`api/files/${id}/download`,{
      responseType: "blob",
    })
    fileDownload(data,name);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 px-4 bg-gray-800 rounded-md shadow-xl w-96">
      {!format ? <span>{`Sorry, this file doesn't exist :(`}</span> : <>
      
      <img src="/images/download-icon.jpeg" alt="" className="w-16 h-16 mt-8"></img>
      <h1 className="text-xl mt-8 mb-2">Your file is ready to be downloaded.</h1>
      <RenderFile file={{format,name,sizeInBytes,id}}/>
      <button className="button" onClick={handleDownload}>
        Download
      </button>
      </>}
    </div>
  )
}

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {id} = context.query;
  let file;
  try {
    const {data} = await axios.get(`api/files/${id}`)
    file = data
  } catch(error: any) {
    console.log(error.response.data)
    file = {}
  }

  return {
    props: {
      file,
    },
  }
} 