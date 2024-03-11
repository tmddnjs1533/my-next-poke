# 스튜디오메이트 프론트 개발자 과제
## React 포켓몬 도감

github(https://github.com/tmddnjs1533/my-next-poke)

## 실행 환경
* node v20.11.1
* next v14

## 실행 방법
```bash
npm install
npm run dev
```

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