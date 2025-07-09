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

### 🧠 스크린샷

<img width="900" alt="image1" src="https://github.com/user-attachments/assets/1a1fb12f-c16b-4ee4-8cf6-3f761001033c" />
<img width="900" alt="image2" src="https://github.com/user-attachments/assets/090975ef-755c-491e-b9aa-83cfc3c4b8e4" />

### 💾 localStorage 연동 방식

useEffect()를 사용해 앱 최초 로딩 시 localStorage에서 todos 불러오기
todos 배열이 변경될 때마다 localStorage에 자동 저장되도록 설정

```jsp
useEffect(() => {
setStorage('todos', todos);
}, [todos]);
```

## 📦 설치 및 실행

```bash
npm create vite@latest
npm install
npm run dev
```
