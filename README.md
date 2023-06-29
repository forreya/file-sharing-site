<p align="center"><img alt="logo" src="https://github.com/forreya/file-sharing-site/blob/main/logo.png" width="60px" /></p>
<h1 align="center">FilesToGo - File Sharing Site</h1>

<p align="center">
  <a href="#"><img alt="NextJS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"></a>
  <a href="#"><img alt="CSS" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"></a>
  <a href="#"><img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></a>
  <a href="#"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></a>
  <a href="#"><img alt="Framer Motion" src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue"></a>
  <a href="#"><img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"></a>
</p>

<h4 align="center">FilesToGo is a web application built with TypeScript, Next.js, TailwindCSS and the MERN (MongoDB, Express, React, Node.js) stack. It allows users to upload files and generate download links to share with others.</h4>

---

![DemoGif](https://github.com/forreya/file-sharing-site/blob/main/demo.gif)

---

## 🕹️ Features

Here's an overview of the key functionalities of this website:

- **Drag and drop file upload**: Users can drag and drop their files to upload them to the site.
- **File metadata display**: File name & size is displayed on the site.
- **Generate unique download link for each uploaded file**: After uploading files, users can generate a unique download link for each file to share with others.
- **Download files with a link**: Users can download the files they uploaded or files shared with them by clicking on the download link.
- **Cloud storage integration with Cloudinary**: Files stored on Cloudinary for cloud storage.
- **Emailing file download links through Sendinblue**: Users can also send an email with the download link to someone else using Sendinblue.

---

## 📁 Usage

1. Drag and drop a file to upload it to the site.
2. After uploading the file, a unique download link will be generated to share with others.
3. Navigate to the download link and share it with whomever you wish.
4. Alternatively, to email a file download link to your friends, fill in the email form and your recipient will receive your file in no time!

---

## 💾 Installation

1. Clone Repository

```
git clone https://github.com/forreya/file-sharing-site.git
```

2. Install Dependencies

```
npm install 
```

3. Create `.env` & `.env.local` files and fill in the environmental variables with your own information (refer to `.env.example`)

_Note: You need to fill in the details for both the client (.env.local) and the server (.env)_
    
4. Run the Client & Server

```
npm run dev
```

This will install the necessary packages listed in the package.json file and run the application on your computer.

---

## 💻 Technologies

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [JavaScript](https://www.javascript.com/)
- [HTML](https://html.spec.whatwg.org/multipage/)
- [Framer Motion](https://www.framer.com/motion/)
- [CSS](https://devdocs.io/css/)
