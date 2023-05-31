![JAVASCRIPT](./src/assets/badges/javascript.svg)
![REACT](./src/assets/badges/react.svg)
<br>
![node.js](https://img.shields.io/badge/node.js-v16.16.0-green?style=for-the-badge&logo=nodedotjs)
![react](https://img.shields.io/badge/react-18.2.0-18a7d6?style=for-the-badge&logo=react)
![react-redux](https://img.shields.io/badge/react%20redux-8.0.5-blueviolet?style=for-the-badge&logo=redux)
![react-redux](https://img.shields.io/badge/redux-4.2.1-blueviolet?style=for-the-badge&logo=redux)
![react-router](https://img.shields.io/badge/react%20router-6.10.0-red?style=for-the-badge&logo=reactrouter)
![axios](https://img.shields.io/badge/axios-1.4.0-blueviolet?style=for-the-badge&logo=axios)
<br>
![proptypes](https://img.shields.io/badge/prop--types-15.8.1-teal?style=for-the-badge&logo=react)
![styled-components](https://img.shields.io/badge/styled--components-5.3.9-teal?style=for-the-badge&logo=styled-components)
![universal-cookie](https://img.shields.io/badge/universal--cookie-4.0.4-green?style=for-the-badge)

---

### 1. General information

![ArgentBank](https://user.oc-static.com/upload/2020/08/14/1597410191519_image2.png)

The project is about a new start-up bank, **Argent Bank**, which is trying to break into the industry and needs help setting up its app. We obtained a two-part contract which is broken down into a couple phases:

**Phase 1**: **User Authentication** - Creation of a web application allowing customers to log in and manage their accounts and profile.

**Phase 2**: **Transactions** - This would be to specify the API endpoints needed for a possible second mission once we have completed the first.

### 2. Getting Started with this repositery

## 2.1 Launching the micro API

You need first the micro API from this repositery: <br>
[https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

- Follow the instructions from the Back-End API GitHub
-
- API is running on port 3001 by default

## 2.2 Launching the front-end project

1. Clone the repository:

   ```sh
   git clone https://github.com/KevinLeFaucheur/project-13-bank-front
   ```

1. Change the current working directory to the cloned project location:

   ```sh
   cd project-13-bank-front
   ```

1. Install NPM packages:
   ```sh
   npm install
   ```
1. Runs the app in the development mode:
   ```sh
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Installing Redux Devtools

This extension will let you observe the application's redux state in Developper Tools.

[Chrome Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

[Firefox Redux Devtools](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

### Changing the front-end port

In `package.json` , in the `"scripts"` field, change port number in this line:<br>
`"start": "set PORT=3000 && react-scripts start",`
