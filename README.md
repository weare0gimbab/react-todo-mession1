# 리액트 투두 앱 만들기 미션 레포

## 🎯 프로젝트 개요

이 과제는 **React와 Vite**를 사용해 간단한 Todo List를 구현하는 프로젝트입니다.

컴포넌트 구조와 상태 관리를 이해하고, **localStorage를 활용한 데이터 유지** 기능을 구현합니다.

**할 일을 입력하면 목록에 추가되고, 삭제할 수 있으며, localStorage에 저장되어 새로고침해도 유지**됩니다.

| 기능              | 설명                                                     |
| ----------------- | -------------------------------------------------------- |
| 할 일 추가        | 텍스트 입력 후 버튼 클릭 시 리스트에 항목 추가           |
| 할 일 삭제        | 항목의 삭제 버튼 클릭 시 해당 항목 제거                  |
| 완료 체크         | 체크박스를 클릭하면 완료 여부 표시 (스타일 변화 포함)    |
| localStorage 저장 | 추가/삭제/체크 시 변경된 todo 상태를 localStorage에 저장 |
| 초기 로드         | 앱 실행 시 localStorage에서 데이터를 불러와 렌더링       |

### ✅ 할 일 데이터 구조 예시

```python
	{id: '고유 ID',
	value: '할 일 내용',
	completed: false  // 체크 여부}
```

​

### ⚛️ 주요 컴포넌트 구조 예시

```python
src/
├─ components/
│  ├─ TodoItem.jsx
│  └─ TodoList.jsx
├─ App.jsx
├─ main.jsx
├─ hooks/
│  └─ useTodos.js      ← 상태 및 로직 커스텀 훅
└─ utils/
   └─ storage.js       ← getStorage, setStorage
```

### 🧠 추천 함수 및 훅 설계

| 함수 / 훅명           | 설명                                            |
| --------------------- | ----------------------------------------------- |
| useTodos()            | todo 상태 관리 및 추가/삭제 로직 포함 커스텀 훅 |
| createTodo(value)     | 새로운 todo 객체 생성 ({ id, value })           |
| addTodo(value)        | 리스트에 todo 추가                              |
| removeTodo(id)        | 특정 id를 가진 todo 삭제                        |
| getStorage(key)       | localStorage에서 데이터 불러오기                |
| setStorage(key, data) | localStorage에 데이터 저장                      |

### 💾 localStorage 연동 방식

useEffect()를 사용해 앱 최초 로딩 시 localStorage에서 todos 불러오기
todos 배열이 변경될 때마다 localStorage에 자동 저장되도록 설정

```jsp
useEffect(() => {
setStorage('todos', todos);
}, [todos]);
```

## TailwindCSS를 이용한 스타일 요소 구현

-   기본 구조만 구현되면 디자인은 자유롭게 꾸며도 됩니다.
-   CDN 방식으로 테일윈드를 적용하셔도 됩니다.

---

## 📦 설치 및 실행

```bash
npm create vite@latest
npm install
npm run dev
```

---

## ✅ 과제 제출 방법

-   [미션 레포지토리](https://github.com/sik2/react-todo-mession1)에서 저장소 fork 후 GitHub에 완성된 프로젝트 PR 보내기
-   정상 작동 확인 필수 (`npm run dev` 기준)
-   README에 간단한 기능 소개 및 스크린샷 포함 권장

---

필요 시 TypeScript 버전으로 확장하거나, 우선순위 기능, 날짜 필터, 편집 기능 등을 추가 구현해도 좋습니다.

**기능 구현이 핵심이며, 깔끔하고 읽기 쉬운 코드 구성**을 목표로 해주세요.
