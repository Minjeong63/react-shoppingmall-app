# 쇼핑몰 앱 만들기

## 로그인 기능

- Firebase로 구현

## ERROR

- firebaseConfig에서 계속 네트워크 오류가 발생

```
if (window.location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://127.0.0.1:3000');
}
```

- 위 부분을 삭제했더니 해결
