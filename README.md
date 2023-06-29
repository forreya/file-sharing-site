<p align="center"><img alt="logo" src="https://github.com/forreya/file-sharing-site/blob/main/logo.jpeg" width="60px" /></p>
<h1 align="center">FilesToGo - File Sharing Site</h1>

<p align="center">
  <a href="#"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></a>
  <a href="#"><img alt="NodeJS" src="	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="#"><img alt="NextJS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"></a>
  <a href="#"><img alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"></a>
  <a href="#"><img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></a>
  <a href="#"><img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></a>
</p>

<h4 align="center">FilesToGo is a web application built with TypeScript, Next.js, TailwindCSS and the MERN (MongoDB, Express, React, Node.js) stack. It allows users to upload files and generate download links to share with others.</h4>

---

![DemoGif](https://github.com/forreya/file-sharing-site/blob/main/demo.gif)

---

## 🕹️ Features

Here's an overview of the key functionalities of this website:

- **Drag and drop file upload**: Users can drag and drop their files to upload them to the site.
- **File metadata display**: File name & size is displayed on the site.
- **Generate unique download link for each uploaded file**: A unique download link is generated for each file.
- **Download files with a link**: Users can download the files they uploaded or files shared with them.
- **Cloud storage integration with Cloudinary**: Files stored on Cloudinary for cloud storage.
- **Emailing file download links through Sendinblue**: Users can send an email with the download link to someone else.

---

## 📁 Usage

1. Drag and drop a file to upload it to the site.
2. After uploading the file, a unique download link will be generated to share with others.
3. Navigate to the download link and share it with whomever you wish.
4. Alternatively, to email a file download link to your friends, fill in the email form and your recipient will receive your file in no time!

---

## 💾 Installation

_Note: For step 3, you need to fill in the details for both the client side (.env.local) and the server side (.env). Refer to the .env.example files_

1. Clone Repository

```
git clone https://github.com/forreya/file-sharing-site.git
```

2. Install Dependencies

```
npm install 
```

3. Create `.env` & `.env.local` files and fill the environmental variables in with your own information

```
PORT = '4000'
MONGO_USER = 'fa_mulan'
MONGO_PASSWORD = 'iuew32bv4uibvr'
MONGO_URI = 'mongodb+srv://fa_mulan:beOUEinehyUIPS@my-cluster.erirwk.mongodb.net'
```
    
4. Run the Client & Server

```
npm run dev
```

This will install the necessary packages listed in the package.json file and run the application on your computer.

---

## 💻 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/)
- [NextJS](https://nextjs.org/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
