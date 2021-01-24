# GoofyKooks

[![Contributors](https://img.shields.io/github/contributors/markhv-code/GoofyKooks)](https://www.github.com/markhv-code/GoofyKooks/contributors)
[![Open Issues](https://img.shields.io/github/issues/markhv-code/GoofyKooks)](https://www.github.com/markhv-code/GoofyKooks/issues)
[![Forks](https://img.shields.io/github/forks/markhv-code/GoofyKooks)](https://www.github.com/markhv-code/GoofyKooks/forks)
[![Stars](https://img.shields.io/github/stars/markhv-code/GoofyKooks)](https://www.github.com/markhv-code/GoofyKooks/stars)

## What is it?

GoofyKooks is a clone of the popular web app [Yelp](https://www.yelp.com/) built with the surfing community in mind.

## Developing

To run this application locally, you'll need to:

1. `git clone` this repo
```sh
   git clone https://https://github.com/markhv-code/GoofyKooks
   ```
2. `cd` into the local repo
```sh
   cd GoofyKooks
   ```

3. `npm install` to install the dependencies
```sh
   npm install
   ```

4. Create a `.env` file based on the `.env.example` file included in the repo with your own values

5. Create a user on your local machine with the username and password specified in your `.env` file in PostgreSQL

6. Run `npx dotenv sequelize db:create` to create the database
```sh
    npx dotenv sequelize db:create
```

* If the `sequelize` module is not found, try running `npx dotenv sequelize-cli db:create` and replace `sequelize` with `sequelize-cli` for the rest of these commands
```sh
    npx dotenv sequelize-cli db:create
```
7. Run `npx dotenv sequelize db:migrate` to run the migrations
```sh
    npx dotenv sequelize db:migrate
```

8. Run `npx dotenv sequelize db:seed:all` to seed the database
```sh
    npx dotenv sequelize db:seed:all
 ```
    
9. Finally, start the development server with `npm start`. The scripts in the `package.json` should do the work. You'll see the local address you can use show up in the terminal.
```sh
    npm start
 ```