(function () {
  init();
  
  let g_containerInViewport;
  //초기화
  function init() {
      setStickyContainersSize();
      bindEvents();
  }
  
  function bindEvents() {
      window.addEventListener("wheel", wheelHandler);
  }
  
  function setStickyContainersSize() {
      document.querySelectorAll('.sticky-container').forEach(function (container) {
          // scrollWidth=전체 스크롤바를 사용하게 되어 숨겨진 영역까지 포함한 크기를 리턴
          const stickyContainerHeight = container.querySelector('main').scrollWidth;
          //.sticky-container의 높이를 각각 스크롤 너비와 같게 함
          container.setAttribute('style', 'height: ' + stickyContainerHeight + 'px');
      });
  }
  //요소가 화면에 들어왔는지를 확인하는 함수
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      //document.documentElement <html lang="en"> 이 반환
      //화면밖에 있는 요소가 진입을 시작하면 true
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }
  
  function wheelHandler(e) {
      // https://ko.javascript.info/iterable
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
          return isElementInViewport(container);
      })[0];
      if (!containerInViewPort) {
          return;
      }
  
      let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;//.sticky-container의 상단좌표를 스크롤보다 작은지 비교
      let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;//.sticky-container 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;//true 는 보이는 상태
  
      console.log(containerInViewPort, containerInViewPort.offsetTop, isPlaceHolderBelowBottom);
  
      if (g_canScrollHorizontally) {
          containerInViewPort.querySelector('main').scrollLeft += e.deltaY;
      }
  }
  })();