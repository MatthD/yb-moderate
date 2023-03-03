# yubo-moderate
A simple POC of moderation users

## required

- Node>=16.11


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
