## Getting Started
This application depeneds on NodeJS and PostgreSQL. Make sure to have them installed. 

## Running the Application in Development Environment
1. Once PostgreSQL is installed, create a database named 'vulpix_dev'.
2. Install dependencies, run `npm install` or `yarn`, if tou use yarn.
3. Run migrations by running `npm run migrate` or `yarn migrate` if you use yarn.
4. Create a new file called `.env` with the contents below:
```
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=5432
DB_NAME=vulpix_dev
GMAIL_PASSWORD=YOUR_GMAIL_PASSWORD
## just to display in email
FRONTEND_URL=YOUR_FRONTEND_URL
```
*The database user and password may depend on what you have configured in PostgreSQL.*    
5. To run the application in development environment, run `npm start` or `yarn start` if you use yarn. To start the application with nodemon, run `npm run start:nodemon` or `yarn start:nodemon`.

## Deployment
Before starting, make sure to have port 5000 exposed. To see the current configuration, run `sudo ufw status`. If not enabled, run `sudo ufw allow 5000`.
1. `sudo apt update`
2. `sudo apt install nodejs`
3. Check the installation by running `nodejs -v` and `npm -v`
4. Run `sudo npm install -g pm2`
5. Run `sudo npm install -g yarn`
6. Check the installation of yarn by running `yarn --version`
7. Run `sudo apt install postgresql postgresql-contrib`
8. Start postgresql `sudo systemctl start postgresql@12-main` . *This depends on the version of postgresql being installed, so watch for the start command in the command line when it is being installed.*
9. Run `sudo -u postgresql psql` to open access the PostgreSQL prompt.
10. In the PostgreSQL prompt, run `CREATE DATABASE vulpix_prod;` *with the semicolon*.
11. Then `ALTER USER postgres PASSWORD 'your_password';` *with the semicolon* to change the DB password.
12. `\q` to exit the PostgreSQL prompt.
13. `touch .env` and paste in the contents as below
```
## .env

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=5432
DB_NAME=vulpix_prod
GMAIL_PASSWORD=YOUR_GMAIL_PASSWORD
## just to display in email
FRONTEND_URL=YOUR_FRONTEND_URL
```
13. Install dependencies by running `yarn install --frozen-lockfile`
14. Perform migrations and seeding by running `yarn migrate:production`
15. Start the application by running `pm2 start node --name "backend" -- app.js`