function loadCV(cv){
    $('#home').hide();
    $('#profileCard').show();
$('#nombreCompleto').html(cv.name + " " + cv.lastname);
$("#picture").attr("src",cv.picture);

$span = $('#career').find('i')
$('#career').text(cv.career);
$('#career').prepend($span);

$span = $('#home').find('i')
$('#home').text(cv.home);
$('#home').prepend($span);

$span = $('#email').find('i')
$('#email').text(cv.email);
$('#email').prepend($span);

$span = $('#phone').find('i')
$('#phone').text(cv.phone);
$('#phone').prepend($span);

var skills="";
cv.Skills.forEach(function(skill, index) {
   skills= skills +  "<p>" + skill.name +" </p>" + 
    "<div class='w3-light-grey w3-round-xlarge w3-small'>" + 
    "<div class='w3-container w3-center w3-round-xlarge w3-teal' style='width:" + skill.domain + "%'>" + skill.domain + " %</div>" + 
    "</div>";
  });
$('#skills').html(skills);


var lenguajes="";
cv.Languages.forEach(function(languaje, index) {
    lenguajes= lenguajes + "<p>"+languaje.languaje +"</p>" + 
    "<div class='w3-light-grey w3-round-xlarge'>" + 
    "<div class='w3-round-xlarge w3-teal' style='height:24px;width:"+languaje.domain +"%'></div>" + 
    "</div>";
  });
$('#lenguajes').html(lenguajes);

var WorkExp="";
cv.WorkExp.forEach(function(WorkExps, index) {
    WorkExp= WorkExp + "<div class='w3-container'>" + 
    "<h5 class='w3-opacity'><b>" + WorkExps.title +"/" + WorkExps.location +"</b></h5>"+
    "<h6 class='w3-text-teal'><i class='fa fa-calendar fa-fw w3-margin-right'></i>" + WorkExps.from +" - ";
    if(WorkExps.to=="Current"){
        WorkExp = WorkExp+"<span class='w3-tag w3-teal w3-round'> " + WorkExps.to +"</span>";
    }
    else{
        WorkExp = WorkExp+"" + WorkExps.to;
    }
    WorkExp = WorkExp+"</h6>"+
    "<p></p>"+
    "<hr>"+
    "</div>";
  });
$('#workExp').html(WorkExp);


var educationHTML="";
cv.Education.forEach(function(Education, index) {
    educationHTML= educationHTML + "<div class='w3-container'>"+
    "<h5 class='w3-opacity'><b>"+ Education.title +"</b></h5>"+
    "<h6 class='w3-text-teal'><i class='fa fa-calendar fa-fw w3-margin-right'></i>"+Education.from +" - " + Education.to +"</h6>"+
    "<p>" + Education.school +"</p>"+
    "<hr>"+
    "</div>";
  });
$('#Education').html(educationHTML);





}

function getJsonFile (){
    $.getJSON("js/cv_db.json", function(json) {
        loadCV(json[1]);
    });
    
}
function searchProfile(){
   
}
function goHome(){
    $('#home').show();
    $('#profileCard').hide();
}
 