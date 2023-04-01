import { Dispatch, FunctionComponent, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DropZone:FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  },[])

  const {getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone({ 
    onDrop,
    multiple: false,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'audio/mpeg': ['.mpeg'],
      }
  });

  return (
    <div className='pt-3 pb-6 px-2 w-full '>
      <div {...getRootProps()} className= "w-full h-80 rounded-md cursor-pointer focus:outline-none ">
        <input {...getInputProps()} />

        <div 
          className={
            "flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl h-full space-y-3 " +
            (isDragReject ? "border-red-500 " : "") +
            (isDragAccept ? "border-green-500 " : "")
          }
        >

          <img alt='file' 
               src="/images/file-icon.png" 
               className='h-16 w-16'>
          </img>

          { isDragReject ? <p>Sorry... only JPG, PNG and MP3 files are supported.</p>
          :
          <div>
            <p className='mt-2'>Drop your file here</p>
            <p className='mt-2 text-base text-gray-300'>
              Only JPG, PNG & MP3 files are supported.
            </p>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default DropZone;