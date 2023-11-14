<div align='center'>
  <h1>🥕 SPA로 만들어 본 당근 팀 블로그</h1>  
  <div>Vanilla JS로 React 구현하여, React를 분석할 수 있는 기회</div>
</div>
<br/>
<div align='center'>
  <img src="https://github.com/whatever-mentoring/single-page-application-practice/assets/97885933/9e9212f4-248b-46fa-9dcb-f810bdd53c79"/>
</div>

## 📌 Summary
<table>
    <tr>
        <th>기간</th>
        <td>2023-11-02 ~ </td>
    </tr>
    <tr>
        <th>기술 스택</th>
        <td>HTML, CSS, JavaScript(ES6), Fetch, Express</td>
    </tr>
</table>

## 📌 SPA 프로젝트를 통해 깨달은 점
> 혼재 되어 있던 개념을 명확하게 정리할 수 있게 된 기회

React를 사용하면서 코드의 동작 여부에 집중한 나머지, React 작동 원리에 대해서는 제대로 알고 있지 못 한 경향이 있었다. 따라서 SPA를 직접 구현해보며,  React에 대해 보다 깊게 알아보는 기회를 가지고자 하였다.   
그 결과 **들어본 적은 있지만 정확하게 안다고 확답하기 애매한 개념들을 확실하게 정립할 수 있는 시간이 되었다.**    
대표적인 예로는 다음과 같은 개념을 언급해 볼 수 있을 것 같다. SPA의 단점으로는 SEO의 취약함을 대표적으로 언급한다. 이를 React 작동 원리, 다시 말해 SPA 기반으로 간단하게 설명해 보면, SPA는 초기 페이지 로딩 이후에 동적으로 콘텐츠를 불러오는 방식을 그 이유로 답할 수 있다. SPA는 클라이언트 측에서 자바스크립트를 사용하여 동적으로 페이지를 생성하므로, 초기 페이지 로딩 이후에 콘텐츠를 불러오는 데 필요한 데이터를 서버에서 가져와야 한다. 이 때문에 검색 엔진이 적절하게 색인화하기 어려워 SEO에 취약하게 되는 것이다.

## 📌 일부 a 태그 클릭 시, SPA가 작동하지 않는 이슈
**[문제 상황]**   
아래의 gif를 통해 확인해 볼 수 있듯이, Header에서 회사소개와 같이 a 태그를 클릭하면 SPA가 제대로 동작을 한다. 하지만 당근 로고 이미지를 클릭하면 SPA가 작동하지 않는 이슈가 발생하였다.
<div align='center'>
  <img src="https://github.com/whatever-mentoring/single-page-application-practice/assets/97885933/c4001637-050c-45ad-9255-d91972bdc4f5"/>
</div>
<br />

```jsx
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
      console.log('SPA 작동');
    }
  });
  console.log('SPA 미작동');
  router();
});
```

**[해결 방법]**   
당근 로고의 경우, a 태그 안에 svg 파일이 있는데 클릭을 하면 a 태그가 아닌 svg가 target으로 담기게 되는 것을 확인하였다. 따라서 a 태그에 도달할 수 있도록 [closest](https://developer.mozilla.org/ko/docs/Web/API/Element/closest)을 통해 해당 문제를 해결하였다.

```jsx
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-link]');
    if (targetLink) {
      e.preventDefault();
      navigateTo(targetLink.href);
    }
  });

  router();
});
```
