
var div_question_number;
var div_question_text;
var div_yes;
var div_no;

var questions = [];

var current_question_number = 1;
var current_question;
var answer;
var user_answer = "g";


var nerd_points = 0;


function show_nerd_purity() {

	nerd_points = 0;  // For testing

	var para = document.createElement("p");
	var text = document.createTextNode("Your Nerd Purity: " + (nerd_points * 10) + "%");
	para.appendChild(text);
	document.body.appendChild(para);


	//para.style.fontSize = "xx-large";
	para.setAttribute("style","font-size: 600%; text-align: center");

	var image_url = ""
	switch (nerd_points) {
		case 0:
			image_url = "http://i.imgur.com/a5oziv3.jpg"; 
			break;
		case 1:
			image_url = "";
			break;
		case 2:

			break;
		case 3:

			break;
		case 4:

			break;
		case 5:

			break;
		case 6:

			break;
		case 7:

			break;
		case 8:

			break;
		case 9:
			image_url = "http://i.imgur.com/ywH9vuJ.jpg";
			break;
		case 10:

			break;
	}
	document.body.setAttribute("style", "background-image: url(" + image_url + ")");




};


function init_question_list() {
	for (var i = 0; i < 10; ++i) {
		var index = Math.floor(Math.random() * QUESTION_ARRAY.length);	
		questions.push(QUESTION_ARRAY[index]);
		QUESTION_ARRAY.splice(index,1);
	}


	var res = questions.pop().split("|");	
	current_question = res[0];
	answer = res[1];
};





function update_question() {
	div_question_number.innerHTML = "Question " + current_question_number;	

	var res = questions.pop().split("|");	
	current_question = res[0];
	answer = res[1];

	div_question_text.innerHTML = current_question;

};





function main_loop() {
	if (user_answer === answer)
	{
		console.log("Updated nerd ponts");	
		++nerd_points;
	}
	
	++current_question_number;
	user_answer = "g";
	if (current_question_number > 10) {
		document.body.innerHTML = "";	
		show_nerd_purity();
		return;
	}
	update_question();

};








function yes_clicked() {
	user_answer = "y";
	main_loop();
};

function no_clicked() {
	user_answer = "n";
	main_loop();
};



function main() {

	div_question_number = document.getElementById("question_number");
	div_question_text = document.getElementById("text_question");
	div_yes = document.getElementById("col_yes");
	div_no = document.getElementById("col_no");

	div_yes.onclick = yes_clicked;
	div_no.onclick = no_clicked;

	init_question_list();

	div_question_number.innerHTML = "Question " + current_question_number; 
	div_question_text.innerHTML = current_question;



};




main();



