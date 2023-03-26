export interface IFile {
  name: string | undefined,
  sizeInBytes: number | undefined,
  format: string | undefined,
  id?: string | undefined,
}

export type DownloadFileProps = {
  downloadPageLink: string;
}