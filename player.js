#pragma strict

var letra;
var lineaS: GameObject;
var lineaI: GameObject;


function Start () {
	
}

function Update () {
	if (Event.current.type == EventType.KeyDown) {
        KeyPressedEventHandler();
    }
  
}

function KeyPressedEventHandler(){
	if (lineaS.transform.position.y >= letra.transform.position.y && lineaI.transform.position.y <= letra.transform.position.y){
	
		if (EventType.KeyDown == letraString){
			letra.explotar;
			letra.destroy;
			//sumar score

		}
		else{
			//quitar puntos
		}
		
	}
	else {
		
		//quitar score
		//animacion posible
	}
	
		
}  