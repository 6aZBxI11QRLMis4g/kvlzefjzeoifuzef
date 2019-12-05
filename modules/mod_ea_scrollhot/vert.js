/*
Up down slideshow Script
By Dynamic Drive (www.dynamicdrive.com)
For full source code, terms of use, and 100's more scripts, visit http://www.dynamicdrive.com
Edited by Manos Orfanoudakis (www.orfanoudakis.gr) for Estate Agent Improved
*/



///////Do not edit pass this line///////////////////////
if(typeof(EAscrollV ) == "undefined"){
function EArotateV(obj,i,visiblediv,hiddendiv,sheight,pause){
	objects= eval(obj);
	i=(i==objects.length)?0:i;
	vdiv= document.getElementById(visiblediv);
	hdiv= document.getElementById(hiddendiv);

	if (parseInt(hdiv.style.top)<=1){
		hdiv.style.top=0+"px"
		vdiv.style.top=sheight+"px";
		vdiv.innerHTML=objects[i];
		setTimeout("EArotateV('"+obj+"',"+(++i)+",'"+hiddendiv+"','"+visiblediv+"',"+sheight+","+pause+")",pause);
		return
	}
	
	vdiv.style.top=parseInt(vdiv.style.top)-4+"px";
	hdiv.style.top=parseInt(hdiv.style.top)-4+"px";
	setTimeout("EArotateV('"+obj+"',"+i+",'"+visiblediv+"','"+hiddendiv+"',"+sheight+","+pause+")",40);
	
}

function EAscrollV(obj,div1,div2,sheight,pause){
	objects= eval(obj);
	dom=document.getElementById;
	if (dom){
		first_obj= document.getElementById(div1);
		second_obj= document.getElementById(div2);
		if(objects.length<1)return;
		if(objects.length==1){
			first_obj.top=0+'px';
			first_obj.innerHTML=objects[0];
			return;	
		}
		first_obj.innerHTML=objects[0];
		second_obj.style.top=sheight+'px';
		second_obj.style.visibility='visible';
		second_obj.innerHTML=objects[1];
		setTimeout("EArotateV('"+obj+"',2,'"+div1+"','"+div2+"',"+sheight+","+pause+")",pause);
	}	
}
}

