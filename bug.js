The Firebase SDK may throw an error if you try to access a property of a document snapshot before the data has been fully loaded.  This can happen if you use asynchronous operations and don't wait for the promise to resolve before accessing the data.

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // This might throw an error if data is not yet loaded
});
```