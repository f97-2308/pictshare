## pictshare

### install

```
yarn add pictshare
```

### usage

```js
const pictshare = new Pictshare('https://www.pictshare.net/')
const data = await pictshare.geturl('https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI')
```

### todo

- [x] base64 (base64: string)
- [x] geturl (url: string) 
- [ ] geturl with error code 1020
- [ ] upload (file: buffer) 