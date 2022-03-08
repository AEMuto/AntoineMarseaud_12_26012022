# General Information

This is the repository containing the **front-end** code for the new user's profil page in the Sportsee web application.\
The project use the library [recharts](https://recharts.org/) for visualizing the user's data.\
\
Others important dependencies are :
- [CRA](https://create-react-app.dev/)
- [styled-components](https://styled-components.com/)
- [react-router](https://reactrouter.com/)
- [axios](https://axios-http.com/)

## How to use
The project need its API in order to fully works. But there is an option to use mock data in place of the API calls if you want to skip the installation of the backend.

### 1. Launching the API
You can refer directly to the API's [documentation](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) for the instructions.
Otherwise, here is a quick recap :

First, we fork the repository and clone it.\
`git clone https://github.com/[your-username]/[path-to-the-api-repo]`

Then, we move into its directory.\
`cd [api-directory-name]`

We want to use node 12.18. The simplest way is to use [nvm](https://github.com/nvm-sh/nvm) (click the link for installation instructions).\
`nvm install 12.18`\
`nvm use 12.18`

Then, we install the API's dependencies with `npm i`

Finally, we launch it with `npm start`. For the endpoints options see [the doc](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#41-possible-endpoints).

### 2. Launching the project

Fork, clone and install.

`cd ..`

`git clone https://github.com/[your-username]/[project-name]`


`cd [project-name]`


`nvm use 16`


`npm i`


`npm start` should return that there is already a process running on port `:3000` (our backend), so enter `y` to change the port to `:3001`.

If all is well you should see the homepage at `http://localhost:3001/`
