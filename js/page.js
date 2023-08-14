// $(document).ready(function(){
//     copy_to_map();
// });


//   function copy_to_map() {
    
//   }
    // div 취득
    var copyMap = document.getElementById("copyMap");

    // button 클릭 이벤트
    document.getElementById("btnCopy").onclick = () => {
      // div의 내용(textContent)을 복사한다.
      window.navigator.clipboard.writeText(copyMap.textContent).then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
    };