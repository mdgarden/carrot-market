# 강의 내용

## 커맨드 모음

```bash
# run next.js
npm run dev

# prisma
pscale connect carrot-market

# push to db
npx prisma db push

# planetscale schema
app.planetscale.com/username/repository-name/branch-name/schema

# prisma studio
npx prisma studio
```

## Tailwind css

- 모바일 먼저 디자인 후 화면 크기를 늘려가며 modifier지정

### cls

## PlanetScale

- pscale은 mysql의 플랫폼이 아니다.
- pscale은 vitess를 사용하기 때문, 따라서 mysql과 다른 점이 존재함.
- vitess가 제공하지 않는 것 : 외부 키 제약
- 관계형 데이터베이스 환경에서는 외부 키를 참조하려고 할 때 그 외부 키가 반드시 존재해야 함. 그러나 pscale은 존재하지 않는 외부 키에 대해서도 정상 작동함.
- vitess가 scaling하는 방식이 다르기 때문에 외부 키가 존재하는지 확인하지 않음.= 외부 키 제약이 존재하지 않음.
- 따라서 한 객체가 다른 객체에 연결하려고 할 때 그 연결을 받는 객체가 존재한다는 것을 보장하기 위해서는 별도 코드를 추가해야함.

```
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
}
```

## type과 interface의 차이

## iron session과 JWT

### iron session

서명, 암호화된 쿠키를 사용하는 Node JS 무상태 세션도구
유저가 유저 정보를 가진 객체를 만들면 payload를 암호화함, 암호화된 정보를 쿠키로 전송
쿠키는 백엔드로 요청할 때마다 같이 보내짐
쿠키의 복호화

### JWT

암호화되지 않고 서명이 되어있음
유저의 id를 가진 객체에 서명하고 이 서명과 함께 유저에게 토큰을 보내는 것

## Tips

- int - str 사이 변환하기

```js
+"123"; // 123
123 + ""; // '123'
```
