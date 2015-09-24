
var letra: GameObject;
var tiempoMax: float = 3;
var conteoRegresivo:float;
var contador =0;
function Start () {

}

function Update () {
    conteoRegresivo -= Time.deltaTime;
    if (conteoRegresivo <= 0) {
        Instantiate(letra, transform.position, transform.rotation);
        conteoRegresivo += tiempoMax;
        contador++;
        if(contador%3 ==0){
            if(tiempoMax>= 1){
                tiempoMax = tiempoMax - 0.3;
            }else{
                if(tiempoMax>= .5){
                    tiempoMax = tiempoMax - 0.2;
                }
            }          
        }
    }
}