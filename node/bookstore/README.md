

##### first setup

- create app.js
- models folder
- `npm init`
- add dependencies in package.js

  -express, body-parser, mongoose
- `npm install`

##### setup mongodb

- cmd as admin
- `cd "C:\Program Files\MongoDB\Server\4.2\bin"`
- `mongo`
- `show dbs`
- `use <dbname>`
- `show colelctions`
- `db.createCollection('books')`
- `db.createCollection('genres')`
- `db.genres.insert({name:'Suspense'})`
- `db.genres.find()` to see inside
- `db.genres.insert({name:'Self Help'})`
- `db.books.insert({title:'The Murder House', genre:'Suspense', description:'No. 7 Ocean Drive is a gorgeous, multi-million-dollar beachfront estate in the Hamptons.', author:'James Patterson', publisher:'Brown & Company', pages:'480', image_url:'http://prodimage.images-bn.com/pimages/9780316410984_p0_v2_s192x300.jpg', buy_url:'google.com'})`
- `db.books.find()`
