/* test> use ecommerce
switched to db ecommerce
ecommerce> db.createCollection("messages")
{ ok: 1 }
ecommerce> db.createCollection("products")
{ ok: 1 }
ecommerce> db.createCollection("products")

//punto 1 y 2
ecommerce> db.products.insertMany([
    ...     {
    ...       "title": "a1",
    ...       "price": 120,
    ...       "thumbnail": "a1",
    ...     },
    ...     {
    ...         "title": "a2",
    ...         "price": 580,
    ...         "thumbnail": "a2",
    ...       },
    ...       {
    ...         "title": "a3",
    ...         "price": 900,
    ...         "thumbnail": "a3",
    ...       },
    ...       {
    ...         "title": "a4",
    ...         "price": 1280,
    ...         "thumbnail": "a4",
    ...       },
    ...       {
    ...         "title": "a5",
    ...         "price": 1700,
    ...         "thumbnail": "a5",
    ...       },
    ...       {
    ...         "title": "a6",
    ...         "price": 2300,
    ...         "thumbnail": "a6",
    ...       },
    ...       {
    ...         "title": "a7",
    ...         "price": 2860,
    ...         "thumbnail": "a7",
    ...       },
    ...       {
    ...         "title": "a8",
    ...         "price": 3350,
    ...         "thumbnail": "a8",
    ...       },
    ...
    ...       {
    ...         "title": "a9",
    ...         "price": 4320,
    ...         "thumbnail": "a9",
    ...       },
    ...       {
    ...         "title": "a10",
    ...         "price": 4990,
    ...         "thumbnail": "a10",
    ...       },
    ...   ])
    {
      acknowledged: true,
      insertedIds: {
        '0': ObjectId("635b0f355c8b59103162368b"),
        '1': ObjectId("635b0f355c8b59103162368c"),
        '2': ObjectId("635b0f355c8b59103162368d"),
        '3': ObjectId("635b0f355c8b59103162368e"),
        '4': ObjectId("635b0f355c8b59103162368f"),
        '5': ObjectId("635b0f355c8b591031623690"),
        '6': ObjectId("635b0f355c8b591031623691"),
        '7': ObjectId("635b0f355c8b591031623692"),
        '8': ObjectId("635b0f355c8b591031623693"),
        '9': ObjectId("635b0f355c8b591031623694")
      }
    }

    ecommerce> db.messages.insertMany([
        ...     {
        ...         "date": "22102022",
        ...         "author": "aa1",
        ...         "text": "bb1",
        ...       },{
        ...         "date": "23102022",
        ...         "author": "aa2",
        ...         "text": "bb2",
        ...       },{
        ...         "date": "24102022",
        ...         "author": "aa3",
        ...         "text": "bb3",
        ...       },{
        ...         "date": "25102022",
        ...         "author": "aa4",
        ...         "text": "bb4",
        ...       },{
        ...         "date": "26102022",
        ...         "author": "aa5",
        ...         "text": "bb5",
        ...       },{
        ...         "date": "27102022",
        ...         "author": "aa6",
        ...         "text": "bb6",
        ...       },{
        ...         "date": "29102022",
        ...         "author": "aa7",
        ...         "text": "bb7",
        ...       },{
        ...         "date": "31102022",
        ...         "author": "aa8",
        ...         "text": "bb8",
        ...       },{
        ...         "date": "22102022",
        ...         "author": "aa9",
        ...         "text": "bb9",
        ...       },{
        ...         "date": "22102022",
        ...         "author": "aa10",
        ...         "text": "bb10",
        ...       },
        ...   ])
        {
          acknowledged: true,
          insertedIds: {
            '0': ObjectId("635b1bcd5c8b5910316236b5"),
            '1': ObjectId("635b1bcd5c8b5910316236b6"),
            '2': ObjectId("635b1bcd5c8b5910316236b7"),
            '3': ObjectId("635b1bcd5c8b5910316236b8"),
            '4': ObjectId("635b1bcd5c8b5910316236b9"),
            '5': ObjectId("635b1bcd5c8b5910316236ba"),
            '6': ObjectId("635b1bcd5c8b5910316236bb"),
            '7': ObjectId("635b1bcd5c8b5910316236bc"),
            '8': ObjectId("635b1bcd5c8b5910316236bd"),
            '9': ObjectId("635b1bcd5c8b5910316236be")
          }
        }   

// punto 3
        ecommerce> db.products.find()
        [
          {
            _id: ObjectId("635b1b265c8b5910316236ab"),
            title: 'a1',
            price: 120,
            thumbnail: 'a1'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236ac"),
            title: 'a2',
            price: 580,
            thumbnail: 'a2'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236ad"),
            title: 'a3',
            price: 900,
            thumbnail: 'a3'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236ae"),
            title: 'a4',
            price: 1280,
            thumbnail: 'a4'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236af"),
            title: 'a5',
            price: 1700,
            thumbnail: 'a5'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236b0"),
            title: 'a6',
            price: 2300,
            thumbnail: 'a6'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236b1"),
            title: 'a7',
            price: 2860,
            thumbnail: 'a7'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236b2"),
            title: 'a8',
            price: 3350,
            thumbnail: 'a8'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236b3"),
            title: 'a9',
            price: 4320,
            thumbnail: 'a9'
          },
          {
            _id: ObjectId("635b1b265c8b5910316236b4"),
            title: 'a10',
            price: 4990,
            thumbnail: 'a10'
          }
        ]

        ecommerce> db.messages.find()
[
  {
    _id: ObjectId("635b1bcd5c8b5910316236b5"),
    date: '22102022',
    author: 'aa1',
    text: 'bb1'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236b6"),
    date: '23102022',
    author: 'aa2',
    text: 'bb2'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236b7"),
    date: '24102022',
    author: 'aa3',
    text: 'bb3'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236b8"),
    date: '25102022',
    author: 'aa4',
    text: 'bb4'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236b9"),
    date: '26102022',
    author: 'aa5',
    text: 'bb5'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236ba"),
    date: '27102022',
    author: 'aa6',
    text: 'bb6'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236bb"),
    date: '29102022',
    author: 'aa7',
    text: 'bb7'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236bc"),
    date: '31102022',
    author: 'aa8',
    text: 'bb8'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236bd"),
    date: '22102022',
    author: 'aa9',
    text: 'bb9'
  },
  {
    _id: ObjectId("635b1bcd5c8b5910316236be"),
    date: '22102022',
    author: 'aa10',
    text: 'bb10'
  }
]

// punto 4
ecommerce> db.products.countDocuments()
10
ecommerce> db.messages.countDocuments()
10

//punto 5
//a)
ecommerce> db.products.insertOne({  title: 'a11', price: 4440, thumbnail: 'a11'})
{
  acknowledged: true,
  insertedId: ObjectId("635c571d5c8b5910316236bf")
}
//b)
//i)
ecommerce> db.products.find({price:{$lt:1000}})
[
  {
    _id: ObjectId("635b1b265c8b5910316236ab"),
    title: 'a1',
    price: 120,
    thumbnail: 'a1'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236ac"),
    title: 'a2',
    price: 580,
    thumbnail: 'a2'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236ad"),
    title: 'a3',
    price: 900,
    thumbnail: 'a3'
  }
]
//ii)
ecommerce> db.products.find({$and:[{price:{$gt:1000}},{price:{$lt:3000}}]})
[
  {
    _id: ObjectId("635b1b265c8b5910316236ae"),
    title: 'a4',
    price: 1280,
    thumbnail: 'a4'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236af"),
    title: 'a5',
    price: 1700,
    thumbnail: 'a5'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236b0"),
    title: 'a6',
    price: 2300,
    thumbnail: 'a6'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236b1"),
    title: 'a7',
    price: 2860,
    thumbnail: 'a7'
  }
]
//iii)
ecommerce> db.products.find({price:{$gt:3000}})
[
  {
    _id: ObjectId("635b1b265c8b5910316236b2"),
    title: 'a8',
    price: 3350,
    thumbnail: 'a8'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236b3"),
    title: 'a9',
    price: 4320,
    thumbnail: 'a9'
  },
  {
    _id: ObjectId("635b1b265c8b5910316236b4"),
    title: 'a10',
    price: 4990,
    thumbnail: 'a10'
  },
  {
    _id: ObjectId("635c571d5c8b5910316236bf"),
    title: 'a11',
    price: 4440,
    thumbnail: 'a11'
  }
]
//iv)
ecommerce> db.products.find().sort({price:1}).limit(1).skip(2)
[
  {
    _id: ObjectId("635b1b265c8b5910316236ad"),
    title: 'a3',
    price: 900,
    thumbnail: 'a3'
  }
]

//C)
ecommerce> db.products.updateMany({}, {$set:{stock:100}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 11,
  modifiedCount: 11,
  upsertedCount: 0
}

//d)
ecommerce> db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
//e)
ecommerce> db.products.deleteMany({price: { $lt: 1000 }})
{ acknowledged: true, deletedCount: 3 }

//f)
ecommerce> db.createUser({
  ...     user: "pepe",
  ...     pwd: "asd456",
  ...     roles: [{ role: "read", db: "ecommerce" }],
  ... });
  { ok: 1 } */