# 강의 내용

## Tailwind css

- 모바일 먼저 디자인 후 화면 크기를 늘려가며 modifier지정

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

## Tips

- int - str 사이 변환하기

```js
+"123"; // 123
123 + ""; // '123'
```
