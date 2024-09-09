
<img width="70" align="left" src="src/assets/logo (2).png" alt="logo"/>

# 𝚉-𝙵𝚕𝚒𝚡/𝚃𝚑𝚎 𝙼𝚘𝚟𝚒𝚎-𝙱𝚛𝚘𝚠𝚜𝚎𝚛

# 𝚃𝚊𝚋𝚕𝚎 𝚘𝚏 𝙲𝚘𝚗𝚝𝚎𝚗𝚝𝚜
  - Requirements
  - Ressources
  - Layaout
  - Prerequisites
  - Getting Started
  - Environment Variables
  - Installation
  - Running the App
  - Deployment
  - Used Technologies


## 𝚁𝚎𝚚𝚞𝚒𝚛𝚎𝚖𝚎𝚗𝚝𝚜
- Using React.
- Handle the rooting with react-router-dom.
- Each movie page should be available with a direct url.
- Creating and using reusable components.
- Recreating the design attached ( pixel perfect or very close).
- If some pieces of the UI are missing you're responsible for filling the gap, creating them yourself by following the general UI style to the best of your abilities.
- Use [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
- Comply with the [terms of use](https://www.themoviedb.org/about/logos-attribution) of the API


## 𝚁𝚎𝚜𝚜𝚘𝚞𝚛𝚌𝚎𝚜  

- [Figma lean and level up](https://help.figma.com/hc/en-us)
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
- [React API](https://beta.reactjs.org/)
- [React-router-dom](https://reactrouter.com/en/main)


## 𝙻𝚊𝚢𝚘𝚞𝚝
<img  src="src/assets/images/Screenshot 2024-08-27 235144.png" alt="layout"/>  

  
## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a machine with **Node.js** installed (>= version X.X.X).
- You have a **Git** client installed to clone the project.
- You have a **Vercel** account (or any other deployment platform, if applicable).

## Getting Started

To get a local copy of the project up and running, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/your-repo-name.git
```
Then, navigate into the project directory:

```bash

cd your-repo-name
```
2. Install Dependencies
Install the necessary dependencies for the project. Make sure you are in the root of your project directory.

```bash
npm install
```
This command installs all the dependencies listed in the package.json file.

## Environment Variables
3. Set Up Environment Variables
This project requires certain environment variables to function properly (e.g., API keys, database URLs). We use a .env file for this purpose.

Using the .env.example
The repository includes an .env.example file, which lists all the environment variables you need to configure. To set up your local environment:

Copy the .env.example file to a new .env file.

```bash
cp .env.example .env
```
Open the .env file and replace the placeholder values with your own credentials:

```bash
API_KEY=your-api-key
DATABASE_URL=your-database-url
```
Save the file. These environment variables will now be available when you run the project locally.

Note: Do not commit your .env file to version control. It contains sensitive information like API keys and should remain private.

## Installation
After setting up your environment variables, continue with the installation steps.

Run the following command to start the project:
```bash
npm start
```
If you're using a development framework (e.g., Next.js), you might need to run a command like:
```bash
npm run dev
```
This will start the app on a local development server, typically accessible at http://localhost:3000.

## Running the App
Once the app is running, you should see it in your browser by navigating to:

```arduino
http://localhost:3000
```
If you're using a different port, replace 3000 with the correct port number.

# Deployment
The app is set up to be deployed using Vercel. If you'd like to deploy it yourself, follow these steps:

Create an account on Vercel.

Connect your GitHub repository to Vercel.

In the Vercel dashboard, go to the Settings tab of your project and add your environment variables by navigating to Environment Variables.

These should match the variables you have in your .env file (API keys, database URLs, etc.).
Once you've configured the environment variables, Vercel will automatically build and deploy the project.

For more details on deploying with Vercel, visit the official documentation.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

To contribute:

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

Contact
Zahra - zara.zara92@outlook.be

# 𝚄𝚜𝚎𝚍 𝚃𝚑𝚎𝚌𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜 
<div align="center">
	<img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
	<img width="50" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/>
</div>

# 𝙰𝚙𝚙 𝚂𝚌𝚛𝚎𝚎𝚗𝚜𝚑𝚘𝚝
<img src="src/assets/images/Screenshot 2024-08-20 193027.png">

# 𝙻𝚒𝚗𝚔 𝚝𝚘 𝚝𝚑𝚎 𝙰𝚙𝚙
[Here!](https://movie-browser-zflix.vercel.app/)




