# yb-moderate
A simple POC of moderation users

## required

- Node>=16.11

## Install
- git clone
-  `npm install && cd client && npm install`
- In client `npx prisma generate` (if necessary)
- In top root folder, place the `db.sqlite` file (next to `package.json`)
- At root level run `npm run dev -- -o`
- Go to (http://localhost:3000/users)[http://localhost:3000/users]

You can play

### ☹️ What is mising ?

- The search to filter user by some filter type
- The ordering of media for user

## Learned
- Sqlite is embeded file without port
- 7MB data Sqlite
- ~1.3K users
- 55K messages
- ~4K medias



### How did I do ?

- Installed `Nuxt3 inside client` folder
- Install `PrismaAPI`
- Edit `.env` and `prisma/schema.prisma` to be able to point to SQLITE DB
- `npx prisma introspect`to create schema structure from DB
- `npx prisma generate` to get the client connector
