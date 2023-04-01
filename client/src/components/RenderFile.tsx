import { FunctionComponent } from "react";
import { sizeInMb } from "../../libs/sizeInMb";
import { IFile } from '../../libs/types';

const RenderFile:FunctionComponent<{
  file: IFile
}> = ({file:{name,format,sizeInBytes}}) => {
  return (
    <div className="flex items-center w-full p-4">
      <img src={`/images/${format}-icon.png`} alt="" className="w-10 h-14 mr-2"/>
      <span className="mx-2">{name}</span>
      <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
    </div>
  )
}

export default RenderFile;