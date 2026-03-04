# 앱 아이콘 재디자인

**날짜:** 2026-03-04 (재디자인)
**프로젝트:** MyHome (AgentOS 포트폴리오)
**상태:** 디자인 승인 완료

---

## 개요

기존의 단순한 신경망 패턴 아이콘에서 **'A' 글자 기반의 세련된 브랜드 아이콘**으로 재디자인합니다.

---

## 디자인 사양

### 색상
- **배경**: 다크→골드 그래디언트 (#1a1a1a → #D4AF37)
- **'A' 글자**: 골드 (#D4AF37)
- **기타**: 흰색 보조 요소 (필요시)

### 'A' 글자 스타일
- **폰트**: 굵은 산스 세리프 (예: Montserrat Bold, Inter Bold)
- **특징**: 기술적 디테일 - 끝 부분이 약간 각진 기하학적 터치
- **위치**: 원 중앙에 배치
- **색상**: 골드 (#D4AF37)

### 원형 배경
- **스타일**: 순수 원 테두리 또는 배경
- **색상**: 다크→골드 그래디언트 배경
- **크기**: 'A' 글자 주변에 여백 있게

### 아이콘 사이즈
- **favicon.ico**: 16x16, 32x32 (멀티사이즈)
- **apple-touch-icon.png**: 180x180
- **icon-192x192.png**: 192x192
- **icon-512x512.png**: 512x512
- **icon-social.png**: 1200x630

---

## 기술 구현

### 파일 생성
각 아이콘을 SVG로 먼저 설계한 후 ImageMagick으로 변환:

```bash
# SVG 템플릿 생성
cat > /tmp/app-icon-template.svg << 'EOF'
<svg viewBox="0 0 {SIZE} {SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1a1a1a" />
      <stop offset="100%" stopColor="#D4AF37" />
    </linearGradient>
  </defs>
  <!-- 배경 원 -->
  <circle cx="{CENTER}" cy="{CENTER}" r="{RADIUS}" fill="url(#appGrad)" />
  <!-- 'A' 글자 (골드) -->
  <text x="{CENTER}" y="{CENTER}"
        font-size="{FONTSIZE}"
        font-weight="bold"
        font-family="Arial, sans-serif"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="#D4AF37">A</text>
</svg>
EOF
```

### 파일 위치
- 생성: `public/favicon.ico`, `public/apple-touch-icon.png`, etc.
- 수정: `src/pages/_document.tsx` (이미 연결됨)
- 참조: `public/manifest.json` (이미 설정됨)

---

## 완성 기준

- [ ] favicon.ico 생성 (멀티사이즈)
- [ ] apple-touch-icon.png 생성
- [ ] icon-192x192.png 생성
- [ ] icon-512x512.png 생성
- [ ] icon-social.png 생성 (텍스트 포함)
- [ ] 모든 아이콘이 다크→골드 그래디언트 배경
- [ ] 'A' 글자가 골드 색상으로 명확히 표시
- [ ] 모든 사이즈에서 'A' 글자가 선명하게 보임
- [ ] 빌드 성공 (0 errors)
- [ ] manifest.json과 _document.tsx 연결 확인

---

## 승인

**승인자:** Daniel
**승인 날짜:** 2026-03-04
**상태:** ✅ 디자인 승인 완료
