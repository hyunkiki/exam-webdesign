//준비 이벤트
// html코드를 다 읽고 나서 실행해줘
// $(document).ready(function() {})

// $(document).ready(function() {})의 축약형이다.
$(function () {

  // modal
  //.lst-bbs li:first-child를 클릭했을 때
  $(".lst-bbs li:first-child").click(function (e) {
    // a태그의 링크 갑 없애기
    e.preventDefault();
    // #modal을 찾아서 display: flex 변경해줘
    $('#modal').css('display', "flex");
    // $('#modal').show();
  });
  // .modal-box.btn-close을 클릭했을때
  $(".modal-box .btn-close").on("click focus", function () {
    // #modal 안보이게 해줘
    $("#modal").hide();
  });
});