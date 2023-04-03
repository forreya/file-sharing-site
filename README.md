# FilesToGo - File Sharing Site

FilesToGo is a web application built with TypeScript, Next.js, TailwindCSS and the MERN (MongoDB, Express, React, Node.js) stack. It allows users to upload files and generate download links to share with others.

## Features
- **Drag and drop file upload**: Users can drag and drop their files to upload them to the site.
- **File metadata display**: File name & size is displayed on the site.
- **Generate unique download link for each uploaded file**: After uploading files, users can generate a unique download link for each file to share with others.
- **Download files with a link**: Users can download the files they uploaded or files shared with them by clicking on the download link.
- **Cloud storage integration with Cloudinary**: Files stored on Cloudinary for cloud storage.
- **Emailing file download links through Sendinblue**: Users can also send an email with the download link to someone else using Sendinblue.

## Usage
_Side note: To store files on Cloudinary, fill in the Cloudinary credentials in the .env file._

1. Navigate to the homepage at http://localhost:3000.
2. Drag and drop a file to upload them to the site.
3. After uploading the file, a unique download link will be generated to share with others.
4. Navigate to the download link to download the file.
5. To email a file download link through Sendinblue, fill in the Sendinblue credentials in the .env file and use the email form on the site.

## Prerequisites
- Node.js: You must have Node.js installed on your machine. If you do not have it installed, you can download it [here](https://nodejs.org/en/download/).
- MongoDB: You need a MongoDB cluster to store the data of the uploaded files. If you don't have a MongoDB account- create one [here](https://account.mongodb.com/account/register).
- Cloudinary account: You must have a Cloudinary account to use the cloud storage integration. You can create an account for free [here](https://cloudinary.com/users/register/free).

## Installation
1. Clone the repository: `git clone https://github.com/forreya/file-sharing-site.git`
2. Install dependencies (frontend & backend): `npm install`
3. Create a `.env` file in the root directory of the server folder and fill in the environmental variables with your specific information (refer to `.env.example`)
4. Start the client & server: `npm run dev`
