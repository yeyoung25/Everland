// $(document).ready(function(){
//     copy_to_map();
// });


const copy = (text) => {
  alert("복사했습니다.");
  // 임시의 textarea 생성
  const $textarea = document.createElement("textarea");

  // body 요소에 존재해야 복사가 진행됨
  document.body.appendChild($textarea);

  // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
  $textarea.value =
    "199, EVERLAND-RO, POGOK-EUP, CHEOIN-GU, YONGIN-SI,GYEONGGI-DO, KOREA (Location number) 310 Jeondae-ri, Pogok-eup";
  $textarea.select();

  // 복사 후 textarea 지우기
  document.execCommand("copy");
  document.body.removeChild($textarea);
};