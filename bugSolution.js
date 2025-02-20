To fix this, always ensure you handle the promise returned by `get()` or other asynchronous Firebase operations and access the data only within the `.then()` block. 

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().myField); // Access data here after it's loaded
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
This corrected version uses the `.then()` method to handle the promise and access the data only after it's loaded.  It also includes error handling using the `.catch()` method.