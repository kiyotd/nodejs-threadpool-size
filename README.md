# Node.js のスレッドプールサイズによる非同期処理の速度比較

`UV_THREADPOOL_SIZE` のデフォルト値は 4

```bash
$ yarn s1
yarn run v1.23.0-20200615.1913
$ set UV_THREADPOOL_SIZE=1 & node src/crypto.js
656
1328
2019
2710
3390
4099
Done in 4.25s.
```

```bash
$ yarn s4
yarn run v1.23.0-20200615.1913
$ set UV_THREADPOOL_SIZE=4 & node src/crypto.js
1094
1135
1172
1203
1961
2001
Done in 2.15s.
```

```bash
$ yarn s6
yarn run v1.23.0-20200615.1913
$ set UV_THREADPOOL_SIZE=6 & node src/crypto.js
1431
1443
1460
1466
1480
1485
Done in 1.66s.
```

## 注意

Windows 環境のため `set UV_THREADPOOL_SIZE` で起動していますが、Mac や Linux
であればソースコード内で指定できます。

```javascript
process.env.UV_THREADPOOL_SIZE = 4;
```

## Reference

[Node.jsの設計をつらつらと概観する](https://qiita.com/Shiruba/items/709044782cffbd2aaeda)

## Author

**kiyotd**  
web designer, front-end engineer

- [kiyotd.com](https://kiyotd.com/)
- [twitter](https://twitter.com/_kiyotd)
- [github](https://github.com/kiyotd)
