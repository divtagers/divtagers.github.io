'use strict';

//main submit
$('#main-submit').click(function () {
	var text = $('#main-text').val();

	if (!text) {
		alert('내용을 작성해 주세요.');
	} else {
		$.ajax({
			url: '/api/post',
			type: 'POST',
			data: {
				text: text
			},
			success: function () {
				alert('성공적으로 작성되었습니다.');
				window.location.reload();
			},
			error: function () {
				alert('글 작성에 실패하였습니다. 누군가 방해를 하는것 같습니다. 곧 고치도록 하겠습니다.');
			}
		});
	}
});