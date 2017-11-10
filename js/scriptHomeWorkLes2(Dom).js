//Задача тест
/*
var ask=["9*1=9","9*2=18","9*3=28","9*9=81"];
var Answer=[true,true,false,true];
var result=0;
alert("pifagor table");
var confirmUser=confirm("you are ready?");
if(confirmUser){
	alert("begin");	
	for(var i=0;i<ask.length;i++){
		var tempAnswer=confirm(ask[i]);
		if(tempAnswer==Answer[i]){
			 result++;
		}
	}

}
else alert("see you later");
alert(result);
*/

// Задача на введение ФИО и запрет ввода других символов
//Как этот код сделать не какашкой????
 var userFullName=[];
 var wrongSimbol="!@#$%^&";
 var point=0;
 fin:
 for(var i=0;i<3;i++){
 	 userFullName[i]=prompt("enter your data","");
 	for(var j=0;j<wrongSimbol.length;j++){ 		
 		if(userFullName[i].indexOf(wrongSimbol.charAt(j))!=-1){
 			alert("etered wrong simbol");
            alert("reload your page!");
            point++;
 			break fin;
 		}
 	}
 }
 if(point==0) alert(userFullName[0]+"\n"+userFullName[1]+'\n'+userFullName[2]);
 
