# 스튜디오메이트 프론트 개발자 과제
## React 포켓몬 도감

## 요구사항
* [포켓몬 API](https://pokeapi.co/)를 이용하여 포켓몬 도감 구현
* 포켓몬 리스트 화면
  * 번호 순서대로
  * 번호 검색 가능
  * 무한 스크롤
  * 포켓몬 한글 이름 출력(선택)
* 포켓몬 상세 화면
  * 포켓몬 정보
  * 진화단계 표시
  * 포켓몬 한글 이름 출력(선택)
* 상태관리 라이브러리 필수
* 캐시 및 렌더링 최적화(선택)
* SEO 최적화(선택)
* typescript 사용


## 포켓몬 api
1. 포켓몬 리스트
```
https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20
```
2. 포켓몬 상세
```
https://pokeapi.co/api/v2/pokemon/${id}
```
3. 포켓못 한글 이름
```
https://pokeapi.co/api/v2/pokemon-species/${id}
```
4. 포켓못 진화 단계
```
https://pokeapi.co/api/v2/evolution-chain/{id}
```

## 구상
* 리스트 갯수 20개
* intersectionObserver 로딩 할 때마다 offset 20 증가하여 조회
* 조회된 결과를 기존 목록에 추가
* 
<!--
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
-->