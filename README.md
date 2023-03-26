# FilesToGo - File Sharing Site

FilesToGo is a web application built with TypeScript, Next.js, TailwindCSS and the MERN (MongoDB, Express, React, Node.js) stack. It allows users to upload files and generate download links to share with others.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Cloudinary account (for cloud storage)

### Installation
1. Clone the repository: `git clone https://github.com/forreya/files-to-go.git`
2. Install dependencies (frontend & backend): `npm install`
3. Create a `.env` file in the root directory of the server folder and fill in the environmental variables with your specific information (refer to `.env.example`)
4. Start the client & server: `npm run dev`

## Features
- Drag and drop file upload
- File preview and metadata display
- Generate unique download link for each uploaded file
- Download file with link
- Cloud storage integration with Cloudinary