let Questions = [
	{
		// nội dung câu hỏi
		question: "Trong Javascript sự kiện Onload thực hiện khi nào?",
		// đáp án đúng
		correct_answer: "Khi website được tải xong",
		// đáp án sai
		incorrect_answers: [
			"Khi người dùng mở trang mới",
			"Khi người dùng nhấp chuột",
			"Khi người dùng dowload 1 file"
		]
	},
	{
		question: "var a = 1; var b = ++a * a--; giá trị của b sẽ là",
		correct_answer: "4",
		incorrect_answers: [
			"1",
			"2",
			"0"
		]
	},
	{
		question: "Java script là ngôn ngữ :",
		correct_answer: "client-side",
		incorrect_answers: [
			"Cả client-side và sever-side",
			"sever-side",
			"Không thuộc bất cứ dạng nào trong ba dạng trên"
		]
	},
	{

		question: "4 giá trị của boder-radius lần lượt là :",
		correct_answer: "top-left, top-right, bottom-right, bottom-left",
		incorrect_answers: [
			"up, down, front, behind ",
			"top, bottom, left, right ",
			"bottom-left, bottom-right, top-right, top-left"
		]
	},
	{
		question: "Để khai báo mảng trong JS, ta dùng kí hiệu?",
		correct_answer: "[]",
		incorrect_answers: [
			"{}",
			"()",
			"||"
		]
	}
];

// console.log("init");
let index = 0;
let score =0;
loadQuestion();



// load câu hỏi và câu trả lời
function loadQuestion(){
	//b1 tạo nội dung câu hỏi
	// lấy thẻ chứa nội dung câu hỏi
	const elQuestionContent = document.getElementById('questionContent');

	//innerText
	//textContent
	//innerHTML

	// gán giá trị câu hỏi cho nội dung của thẻ
	elQuestionContent.innerText = "Câu " + (index + 1)+ ": "+ Questions[index].question;

	//css cho el thông qua dom 
	elQuestionContent.style.color ='#fff';
	elQuestionContent.style.margin ='40px 0';

	// b2 tạo nội dung câu trả lời

	//lây đáp án sai
	const listAnswer = Questions[index].incorrect_answers;

	//thêm đáp án đúng vào cuối mảng
	listAnswer.push(Questions[index].correct_answer);

	// tráo câu trả lời
	listAnswer.sort(function(){
		return 0.5- Math.random();
	});

	// lấy nơi chứa nội dung câu trả lời
	const answersContent = document.getElementById('answersContent');
	// xóa nội dung câu hỏi
	answersContent.innerHTML ='';
	// duyệt mảng câu hỏi
	listAnswer.forEach(function(ans,index){
		const elDiv = document.createElement('div');

		const elInput = document.createElement('input');
		elInput.type = 'radio';
		elInput.name = 'answer';
		elInput.value = ans;
		elInput.id = 'ans_'+index;
		// css cho nut input
		elInput.setAttribute('style','width:20px; height:20px');

		// đổ thẻ input vào thẻ div
		elDiv.appendChild(elInput);

		// tạo thẻ label
		const elLabel = document.createElement('label');
		elLabel.textContent = ans;
		elLabel.classList ='label__form';
		elLabel.htmlFor = 'ans_'+index;

		// đổ thẻ label vào thẻ div
		elDiv.appendChild(elLabel);

		// đổ thẻ div vào thẻ câu hỏi
		answersContent.appendChild(elDiv);
	});
	

}

//khi submit câu hỏi
const btnSubmit = document.getElementById('btn__submit');
btnSubmit.addEventListener('click',function(){
	// lấy input mà người dùng chọn
	let choiceAnswes = document.querySelector('input[name="answer"]:checked');
	
	// kiểm tra kết quả
	if(choiceAnswes.value == Questions[index].correct_answer){
		// nếu kết quả đúng
		score++; // tăng điểm
		// chuyển câu hỏi
		nextQuestion();
	}else{
		//nếu sai -> chuyển câu hỏi
		nextQuestion();
	}
	console.log(score);

});

//hàm chuyển câu hỏi
 function nextQuestion(){
	if(index < Questions.length -1){
		index++;
		loadQuestion();
	}else{
		//hiển thị kết quả
		//xóa nội dung câu hỏi và đáp án
		document.querySelector('.panel__conttent').remove();
		loadScore();
	}
 }

// hiển thị kết quả
function loadScore(){
	const elScore = document.getElementById('score');
	// tạo thẻ hiển thị điểm
	const elh1 = document.createElement('h1');
	elh1.textContent = `Điểm của bạn là ${score} / ${Questions.length}`;

	elScore.appendChild(elh1);
}