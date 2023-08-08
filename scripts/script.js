// UPLOAD PAGE
$('.roll-nos').focus(function(){
  $(this).keyup(function(event){
    let input_text = $(this).val();
    let istext = input_text.search(/[a-zA-Z]/);
    if($(this).val()=='' || istext >= 0){
      $('.generate-btn').addClass('disabled');
      $(this).css('border-color', '#750e0e');
      $(this).css('box-shadow', '0 0 0 0.2rem rgba(255, 0, 0, 0.25)');
    }else{
      $('.generate-btn').removeClass('disabled');
      $(this).css('border-color', '#80bdff');
      $(this).css('box-shadow', '0 0 0 0.2rem rgba(0, 123, 255, 0.25)');
    }
  });
});

$('.copy-btn').click(function(){
  let copy_text = $('.attendance-list').val();
  navigator.clipboard.writeText(copy_text);
  alert("Attendance Copied !");
});

$('.upload-checkbox').click(function(){
  if($(this).prop('checked')){
    $('.upload-btn').removeClass('disabled');
  }else{
    $('.upload-btn').addClass('disabled');
  }
});

$('.generate-btn').click(async function(){
  let input = $('.roll-nos').val();
  let roll_nos = input.split(' ');
  let n = roll_nos.length;
  for(let i=0; i<n; i++){
    roll_nos[i] = Number(roll_nos[i]);
  }

  roll_nos.sort(function(a,b){return a-b});
  let file = await fetch("../images/names.txt");
  let text = await file.text();
  let rollnos_abs = [];

  let flag = 0;
  for(let i=0; i<70; i++){
    if(roll_nos[flag] != i+1){
      rollnos_abs.push(i+1);
    }else{
      flag++;
    }
  }

  let m = rollnos_abs.length;
  let names = text.split("\n");
  let result = 'No.of Students: ' + n + '\n';

  for(let i=0; i<m; i++){
    result += rollnos_abs[i] + '.' + names[rollnos_abs[i]-1] + '\n';
  }

  $('.attendance-list').val(result);
  $('.attendance-div').slideDown();
  let scHeight = $('.attendance-list').prop('scrollHeight');
  $('.attendance-list').css('height', scHeight + 'px');
});

$('.upload-btn').click(function(){
  alert("Attendannce Uploaded !");
})


// STATUS PAGE
$('.rollno-status').focus(function(){
  $(this).keyup(function(event){
    let input_text = $(this).val();
    let istext = input_text.search(/[a-zA-Z]/);
    if($(this).val()=='' || istext >= 0 || input_text.length > 2){
      $('.get-status-btn').addClass('disabled');
      $(this).css('border-color', '#750e0e');
      $(this).css('box-shadow', '0 0 0 0.2rem rgba(255, 0, 0, 0.25)');
    }else{
      $('.get-status-btn').removeClass('disabled');
      $(this).css('border-color', '#80bdff');
      $(this).css('box-shadow', '0 0 0 0.2rem rgba(0, 123, 255, 0.25)');
    }
  });
});

$('.get-status-btn').click(async function(){
  let rollno = Number($('.rollno-status').val());
  let file = await fetch("../images/names.txt");
  let text = await file.text();
  let names = text.split("\n");
  let present_days = Math.floor(Math.random() * 132) + 1;
  let absent_days = 132 - present_days;
  let present_per = Math.floor((present_days/132) * 100);
  let absent_per = Math.abs(100 - present_per);

  $('#status-name').text('Name: ' + names[rollno-1]);
  $('#status-rollno').text('Roll No.: 215U1A67' + rollno);
  $('#status-presentdays').text('Present Days: ' + present_days);
  $('#status-absentdays').text('Absent Days: ' + absent_days);
  $('#status-presentper').text('Present Percentage(%): ' + present_per);
  $('#status-absentper').text('Absent Percentage(%): '+ absent_per);
  
  const ctx = $('#myChart');
  const x_values = ['Present', 'Absent'];
  const y_values = [present_per, absent_per];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: x_values,
      datasets: [{
          
        data: y_values,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
        'rgb(75, 192, 192)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          }
      },
      scales: {
        y: {
          min:0,
          max:100
        }
      }
    }
  });
  
  
  $('.status-div').slideDown();
});
