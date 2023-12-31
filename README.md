# Notion Planner Page Template

## 개요

- Notion API 기반 플래너 페이지 템플릿
- AWS의 [EventBridge Scheduler](https://docs.aws.amazon.com/ko_kr/eventbridge/latest/userguide/scheduler.html)와 [Lambda](https://aws.amazon.com/ko/lambda/features/)를 사용해서 매일 아침에 페이지를 자동으로 생성
- 자세한 과정은 [여기](https://velog.io/@inhudev/%EB%85%B8%EC%85%98-%ED%94%8C%EB%9E%98%EB%84%88-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%9D%EC%84%B1-%EC%9E%90%EB%8F%99%ED%99%94)에서 확인 가능합니다.

## 스택

- `JavaScript`
- `@notionhq/client` Notion API를 사용할 수 있는 클라이언트 패키지
- `dotenv` 환경변수를 .env 파일로 관리
- `dayjs` Date 관련 라이브러리
