
export const sizeInMb = (bytes?:number):string => {
  if (bytes === undefined) {
    return 'Unknown size';
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};