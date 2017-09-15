//membuat kuis matematika
function submitJawaban(){
	var total = 5;
	var score = 0;
	
	// input pertanyaan
	var q1 = document.forms["Kuis"]["q1"].value;
	var q2 = document.forms["Kuis"]["q2"].value;
	var q3 = document.forms["Kuis"]["q3"].value;
	var q4 = document.forms["Kuis"]["q4"].value;
	var q5 = document.forms["Kuis"]["q5"].value;
	
	// menambahkan validasi
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('Silahkan pilih jawaban No '+ i);
			return false;
		}
	}
	
	// inisialisasi jawaban yang benar
	var jawaban = ["c","c","c","d","c"];
	
	// mengecek jawaban
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == jawaban[i - 1]){
			score++;
		}
	}
	
	// tampilkan hasil
	alert('Nilai kamu '+score+' dari ' +total+ ' pertanyaan');
	
	return false;
}
