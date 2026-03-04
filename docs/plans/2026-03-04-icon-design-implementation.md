# 홈페이지 커스텀 아이콘 구현 계획

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** AgentOS 홈페이지의 모든 섹션(Features, Process, Contact)에 기하한 도형 스타일의 그래디언트 아이콘을 제작하고, PWA 앱 아이콘을 생성하여 통합한다.

**Architecture:**
1. SVG 아이콘을 그래디언트 기반으로 설계 (다크→골드)
2. React 함수 컴포넌트로 변환하여 재사용 가능하게 구성
3. 기존 Features/Process/Contact 섹션에 아이콘 교체 통합
4. PWA 아이콘 5개 생성 및 next.config 설정
5. 완성 후 모든 환경에서 반응형 테스트

**Tech Stack:** React 18, SVG, TypeScript, Next.js 14

---

## Task 1: Features 섹션 아이콘 (6개)

**Files:**
- Create: `src/components/icons/features/index.ts`
- Create: `src/components/icons/features/AgentIcon.tsx`
- Create: `src/components/icons/features/MultiAgentIcon.tsx`
- Create: `src/components/icons/features/RAGIcon.tsx`
- Create: `src/components/icons/features/AutomationIcon.tsx`
- Create: `src/components/icons/features/TuneIcon.tsx`
- Create: `src/components/icons/features/MonitorIcon.tsx`
- Modify: `src/components/Features.tsx` (아이콘 임포트)

**Step 1: AgentIcon.tsx 작성 (뇌/신경망)**

```tsx
// src/components/icons/features/AgentIcon.tsx
export function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 중앙 노드 */}
      <circle cx="12" cy="12" r="3" fill="url(#agentGrad)" />

      {/* 주변 노드들 (4개) */}
      <circle cx="6" cy="8" r="2" fill="url(#agentGrad)" opacity="0.8" />
      <circle cx="18" cy="8" r="2" fill="url(#agentGrad)" opacity="0.8" />
      <circle cx="6" cy="16" r="2" fill="url(#agentGrad)" opacity="0.8" />
      <circle cx="18" cy="16" r="2" fill="url(#agentGrad)" opacity="0.8" />

      {/* 연결선 */}
      <line x1="9" y1="10" x2="12" y2="12" stroke="url(#agentGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="15" y1="10" x2="12" y2="12" stroke="url(#agentGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="9" y1="14" x2="12" y2="12" stroke="url(#agentGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="15" y1="14" x2="12" y2="12" stroke="url(#agentGrad)" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}
```

**Step 2: MultiAgentIcon.tsx 작성 (협력 시스템)**

```tsx
// src/components/icons/features/MultiAgentIcon.tsx
export function MultiAgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="multiAgentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 3개 원이 중앙으로 수렴 */}
      <circle cx="6" cy="8" r="2.5" fill="url(#multiAgentGrad)" />
      <circle cx="18" cy="8" r="2.5" fill="url(#multiAgentGrad)" />
      <circle cx="12" cy="18" r="2.5" fill="url(#multiAgentGrad)" />

      {/* 중앙 집결점 */}
      <circle cx="12" cy="12" r="1.5" fill="url(#multiAgentGrad)" />

      {/* 수렴선 */}
      <path d="M 8 9 Q 10 11 11.5 12" stroke="url(#multiAgentGrad)" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M 16 9 Q 14 11 12.5 12" stroke="url(#multiAgentGrad)" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M 12 16 L 12 12.5" stroke="url(#multiAgentGrad)" strokeWidth="1.2" fill="none" opacity="0.7" />
    </svg>
  )
}
```

**Step 3: RAGIcon.tsx 작성 (피라미드/계층)**

```tsx
// src/components/icons/features/RAGIcon.tsx
export function RAGIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 3단계 사각형 (아래로 커짐) */}
      <rect x="10" y="4" width="4" height="3" fill="url(#ragGrad)" />
      <rect x="8" y="8" width="8" height="4" fill="url(#ragGrad)" opacity="0.8" />
      <rect x="6" y="13" width="12" height="5" fill="url(#ragGrad)" opacity="0.6" />
    </svg>
  )
}
```

**Step 4: AutomationIcon.tsx 작성 (화살표 흐름)**

```tsx
// src/components/icons/features/AutomationIcon.tsx
export function AutomationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 3개 화살표 흐름 */}
      <g>
        {/* 첫 번째 화살표 */}
        <line x1="3" y1="8" x2="6" y2="8" stroke="url(#autoGrad)" strokeWidth="1.5" />
        <polygon points="8,8 6,6.5 6,9.5" fill="url(#autoGrad)" />
      </g>

      <g>
        {/* 두 번째 화살표 */}
        <line x1="10" y1="12" x2="13" y2="12" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.8" />
        <polygon points="15,12 13,10.5 13,13.5" fill="url(#autoGrad)" opacity="0.8" />
      </g>

      <g>
        {/* 세 번째 화살표 */}
        <line x1="17" y1="16" x2="20" y2="16" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.6" />
        <polygon points="22,16 20,14.5 20,17.5" fill="url(#autoGrad)" opacity="0.6" />
      </g>
    </svg>
  )
}
```

**Step 5: TuneIcon.tsx 작성 (조정 레버)**

```tsx
// src/components/icons/features/TuneIcon.tsx
export function TuneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="tuneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 왼쪽 레버 */}
      <circle cx="5" cy="10" r="1.5" fill="url(#tuneGrad)" />
      <line x1="7" y1="10" x2="10" y2="10" stroke="url(#tuneGrad)" strokeWidth="1.5" />

      {/* 가운데 레버 */}
      <circle cx="12" cy="12" r="1.5" fill="url(#tuneGrad)" />
      <line x1="10" y1="12" x2="14" y2="12" stroke="url(#tuneGrad)" strokeWidth="1.5" opacity="0.8" />

      {/* 오른쪽 레버 */}
      <circle cx="19" cy="14" r="1.5" fill="url(#tuneGrad)" />
      <line x1="17" y1="14" x2="20" y2="14" stroke="url(#tuneGrad)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}
```

**Step 6: MonitorIcon.tsx 작성 (차트/대시보드)**

```tsx
// src/components/icons/features/MonitorIcon.tsx
export function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* 모니터 테두리 */}
      <rect x="3" y="3" width="18" height="12" fill="none" stroke="url(#monitorGrad)" strokeWidth="1.5" rx="1" />

      {/* 모니터 스탠드 */}
      <line x1="9" y1="15" x2="9" y2="17" stroke="url(#monitorGrad)" strokeWidth="1.5" opacity="0.7" />
      <line x1="15" y1="15" x2="15" y2="17" stroke="url(#monitorGrad)" strokeWidth="1.5" opacity="0.7" />
      <line x1="8" y1="17" x2="16" y2="17" stroke="url(#monitorGrad)" strokeWidth="1.5" opacity="0.7" />

      {/* 내부 막대 그래프 */}
      <rect x="6" y="10" width="2" height="4" fill="url(#monitorGrad)" opacity="0.9" />
      <rect x="10" y="7" width="2" height="7" fill="url(#monitorGrad)" opacity="0.8" />
      <rect x="14" y="8" width="2" height="6" fill="url(#monitorGrad)" opacity="0.7" />
    </svg>
  )
}
```

**Step 7: 인덱스 파일 생성**

```tsx
// src/components/icons/features/index.ts
export { AgentIcon } from './AgentIcon'
export { MultiAgentIcon } from './MultiAgentIcon'
export { RAGIcon } from './RAGIcon'
export { AutomationIcon } from './AutomationIcon'
export { TuneIcon } from './TuneIcon'
export { MonitorIcon } from './MonitorIcon'
```

**Step 8: Features.tsx 수정 (아이콘 교체)**

기존 코드에서 inline icon 정의를 제거하고 임포트해서 사용합니다.

**Step 9: 테스트**

```bash
npm run dev
```

**Step 10: 커밋**

```bash
git add src/components/icons/features/
git add src/components/Features.tsx
git commit -m "feat: add custom gradient icons for features section"
```

---

## Task 2: Process 섹션 아이콘 (4개)

**Files:**
- Create: `src/components/icons/process/index.ts`
- Create: `src/components/icons/process/ChatIcon.tsx`
- Create: `src/components/icons/process/ArchitectIcon.tsx`
- Create: `src/components/icons/process/CodeIcon.tsx`
- Create: `src/components/icons/process/RocketIcon.tsx`
- Modify: `src/components/Process.tsx`

---

## Task 3: Contact 섹션 아이콘 (3개)

**Files:**
- Create: `src/components/icons/contact/index.ts`
- Create: `src/components/icons/contact/EmailIcon.tsx`
- Create: `src/components/icons/contact/LocationIcon.tsx`
- Create: `src/components/icons/contact/AvailabilityIcon.tsx`
- Modify: `src/components/Contact.tsx`

---

## Task 4: PWA 앱 아이콘 생성 (5개)

**Files:**
- Create: `public/favicon.ico`
- Create: `public/apple-touch-icon.png`
- Create: `public/icon-192x192.png`
- Create: `public/icon-512x512.png`
- Create: `public/icon-social.png`
- Modify: `src/pages/_document.tsx`
- Modify/Create: `public/manifest.json`

---

## Task 5: 통합 테스트 및 최적화

**Files:**
- Verify: `src/components/`
- Verify: `public/`
- Verify: Browser DevTools

---

## Task 6: 문서 및 마무리

**Files:**
- Update: `docs/plans/2026-03-04-icon-design.md`
