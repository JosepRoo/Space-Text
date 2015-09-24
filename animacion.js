#pragma strict
var vida:float;
function Start () {
    vida = Time.time +1;
}

function Update () {

    if(vida <= Time.time){
        Destroy(gameObject);
    }

}