
var vel = 5;
var letra: GameObject;
var tiempoMax = 15;
var conteoRegresivo=0;
function Start () {

}

function Update () {
    conteoRegresivo -= Time.deltaTime;
    if (conteoRegresivo <= 0) {
        Instantiate(letra, transform.position, transform.rotation);
        conteoRegresivo += tiempoMax;
    }
}