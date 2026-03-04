# MyHome

Next.js, React, Tailwind CSS로 만든 아름다운 개인 홈페이지입니다.

## 빠른 시작

### 필수 요구사항
- **Node.js** 18+ ([다운로드](https://nodejs.org/))
- **npm** 9+ (Node.js와 함께 제공)

### 1. 개발 서버 실행

#### macOS / Linux
```bash
./run-server.sh dev
# 또는
./run-server.sh       # 'dev'가 기본값입니다
```

#### Windows
```cmd
run-server.bat dev
```

서버는 **http://localhost:3000**에서 시작됩니다.

### 2. 프로덕션 서버 실행

#### macOS / Linux
```bash
./run-server.sh prod
```

#### Windows
```cmd
run-server.bat prod
```

## 스크립트

모든 npm 스크립트를 직접 사용할 수 있습니다:

| 명령어 | 설명 |
|---------|-------------|
| `npm run dev` | 핫 리로드를 사용하여 개발 서버 시작 |
| `npm run build` | 프로덕션용 빌드 |
| `npm start` | 프로덕션 서버 실행 (먼저 빌드 필요) |
| `npm run lint` | ESLint 실행 |

## 실행 스크립트 사용

### macOS / Linux (`run-server.sh`)

```bash
./run-server.sh dev       # 개발 서버
./run-server.sh prod      # 프로덕션 빌드 + 서버
./run-server.sh build     # 빌드만 수행
./run-server.sh install   # 의존성 설치
./run-server.sh lint      # 코드 품질 확인
./run-server.sh help      # 도움말 표시
```

### Windows (`run-server.bat`)

```cmd
run-server.bat dev       REM 개발 서버
run-server.bat prod      REM 프로덕션 빌드 + 서버
run-server.bat build     REM 빌드만 수행
run-server.bat install   REM 의존성 설치
run-server.bat lint      REM 코드 품질 확인
run-server.bat help      REM 도움말 표시
```

## 프로젝트 구조

```
├── public/                  # 정적 자산
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── Header.tsx      # 네비게이션 바
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   ├── Features.tsx    # 기능 그리드
│   │   ├── About.tsx       # 소개 섹션
│   │   ├── Contact.tsx     # 검증이 있는 연락처 양식
│   │   └── Footer.tsx      # 푸터
│   ├── pages/
│   │   ├── _app.tsx        # 앱 래퍼
│   │   ├── _document.tsx   # HTML 문서
│   │   └── index.tsx       # 홈페이지
│   └── styles/
│       └── globals.css     # 전역 스타일 + Tailwind
├── package.json            # 의존성
├── tsconfig.json           # TypeScript 설정
├── next.config.js          # Next.js 설정
├── tailwind.config.js      # Tailwind CSS 설정
└── .gitignore              # Git 무시 규칙
```

## 주요 기능

- ⚡ **Next.js 14** - 최신 React 프레임워크
- 🎨 **Tailwind CSS** - 유틸리티 우선 스타일링
- 📝 **TypeScript** - 타입 안정성
- ✅ **Zod 검증** - 양식의 런타임 타입 검증
- 📱 **반응형 디자인** - 모바일 우선 접근
- 🔍 **SEO 최적화** - 메타 태그 및 의미론적 HTML
- 🚀 **프로덕션 준비** - SWC 축소를 통한 최적화 빌드

## 컴포넌트

### 헤더
- 고정된 네비게이션 바
- 모바일용 반응형 햄버거 메뉴
- 로고 및 네비게이션 링크

### 히어로
- 큰 제목과 CTA 버튼
- 그래디언트 배경
- 반응형 그리드 레이아웃

### 기능
- 4개 항목 기능 그리드
- 아이콘 및 설명
- 반응형 디자인 (1열 → 2열 → 4열)

### 소개
- 이미지 자리 표시자가 있는 프로필 섹션
- 전기 정보
- 기술 목록

### 연락처
- 검증이 있는 양식 (이름, 이메일, 메시지)
- 실시간 오류 메시지
- 성공/오류 피드백
- Zod 스키마 검증

### 푸터
- 빠른 링크
- 소셜 미디어 링크
- 저작권 정보
- 고정 위치

## 커스터마이제이션

### 색상
`tailwind.config.js`를 편집하여 색상 스키마를 변경하세요:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
      accent: '#F59E0B',
    },
  },
}
```

### 콘텐츠
`src/pages/index.tsx`의 컴포넌트 소품을 업데이트하세요:

```tsx
<Hero title="당신의 제목" subtitle="당신의 부제목" />
<About name="당신의 이름" role="당신의 역할" />
<Contact onSubmit={(data) => console.log(data)} />
```

## 배포

### Vercel (권장)
1. GitHub에 푸시
2. 리포지토리를 Vercel에 연결
3. 자동으로 배포

### Docker
```bash
docker build -t myhome .
docker run -p 3000:3000 myhome
```

### 전통적인 서버
```bash
npm run build
npm start
```

## 개발 팁

- **핫 리로드**: 개발 모드에서 변경 사항이 자동으로 새로 고쳐집니다
- **경로 별칭**: `@/`를 사용하여 src/에서 가져오기 (예: `@/components/Header`)
- **타입 안정성**: TypeScript는 빌드 시 확인합니다
- **스타일링**: Tailwind 클래스를 사용하면 CSS 파일이 필요 없습니다

## 문제 해결

### 포트 3000이 이미 사용 중입니다
```bash
# macOS/Linux: 포트 3000의 프로세스 종료
lsof -ti:3000 | xargs kill -9

# Windows: 포트 3000의 프로세스 찾기 및 종료
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### 빌드 오류
```bash
# Next.js 캐시 삭제
rm -rf .next

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 다시 빌드
npm run build
```

### TypeScript 오류
```bash
npm run build  # 모든 타입 오류 표시
```

## 라이선스

MIT 라이선스 - 자유롭게 템플릿으로 사용하세요!

## 지원

문제 또는 질문이 있으신 경우:
1. [Next.js 문서](https://nextjs.org/docs) 확인
2. [Tailwind 문서](https://tailwindcss.com/docs) 확인
3. 컴포넌트 소스 파일 검토
