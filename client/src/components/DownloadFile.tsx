import { DownloadFileProps } from "../../libs/types";

const DownloadFile = ({downloadPageLink}: DownloadFileProps) => {
  return (
    <div className="p-1">
      <h1 className="my-2 text-lg font-medium">Your file was successfully uploaded.</h1>
      <div className="flex space-x-3 p-2 items-center justify-center mt-2">
        <span className="break-all">{downloadPageLink}</span>
        <img 
          src="images/copy-icon.png" 
          alt="" 
          className="w-8 h-8 ml-2 object-contain cursor-pointer" 
          onClick={() => navigator.clipboard.writeText(downloadPageLink)}
        />
      </div>
    </div>
  )
}

export default DownloadFile;