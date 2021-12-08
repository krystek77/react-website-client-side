# Client side part of the MERN web aplication

This is the company website. If you have account (only for company's employers)
you can create posts, edit, delete, add the likes to other post then yours.
Web site presents products of this company. (site in progress....)

## Installation

1. Clone repository
   ```bash
   git clone <repository link> <folder>
   ```
2. Go to folder
3. Use the node package manager to install dependencies
   ```bash
   npm install
   ```
4. Clone repository with server part of application

   ```bash
   git clone <repository link> <folder>
   ```

   Link to repository [Server Side](https://github.com/krystek77/mern-website-server-side).

5. Go to folder
6. Create .env file based on .envexample file

   You have to account and example database on mongoDB Atlas

7. Set your credentials and correct database name
8. Use the node package manager to install dependencies
9. Run server side part
   ```bash
   npm run start
   ```
10. Run client side part

```bash
npm run start
```

### During running server side part of application

2 test user accounts are created:

1. Role: admin
   email: <admin@gmail.pl>
   password: admin
2. Role: user
   email: <user@gmail.pl>
   password: user
