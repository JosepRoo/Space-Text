import UnityEngine;


//para Materiales 
public var materiales: Material[];
public var rend: Renderer;
var RandomColor;
// para mes filter
public var letraString: String;
public var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","s","t","u","v","w","x","y","z"];
var RandomLetra;
var meshToUse : Mesh;

//Score
public var playerScript: player;

//para animaciones
//public var explosion: GameObject;
var animaciones: GameObject[];
public var animacion;

//movimiento y asi
var velocidadLetra: int;
var contadorVel:int;
var RandomPos = 90;
var destruirEnemigo: float=-60;
// obtener atributos de player
public var player: GameObject;
public static var score: int;
var applyScore: int = 100;

function Start() {

    velocidadLetra = 5;
    RandomColor = Random.Range(0,5 );
    RandomLetra = Random.Range(0, 24);
    meshToUse = Resources.Load(letras[RandomLetra], Mesh);
    GetComponent(MeshFilter).mesh = meshToUse;
    rend = GetComponent.<Renderer>();
    rend.enabled = true;
    transform.position.x += Random.Range(-RandomPos, RandomPos);
    letraString =letras[RandomLetra];
    animacion = animaciones[RandomColor];
    player = GameObject.FindGameObjectWithTag("Player");
    playerScript = player.GetComponent("player");
    score = playerScript.playerScore;

}

function Update() {
    if(velocidadLetra <= 10){
        if(contadorVel%7==0){
            velocidadLetra++;
        }
    }
        
        transform.position.y -= velocidadLetra * Time.deltaTime;
        if (materiales.Length == 0)return ;
        // we want this material index now
        rend.sharedMaterial = materiales[RandomColor];
        if(transform.position.y <= destruirEnemigo){
            
            Destroy(gameObject);//Pierdes
        }
        if(this.transform.position.y >= player.transform.position.y-3 && this.transform.position.y <= player.transform.position.y+3 ){
            
            for(var i=0; i<25;i++){
                if(Input.GetKeyDown(letras[i])== true && letras[i]==letraString){
                    Instantiate(animacion,transform.position,transform.rotation);
                    Destroy(gameObject);
                    playerScript.playerScore += applyScore;
                    Debug.Log(playerScript.playerScore);
                    //score += applyScore;
                }
                else{
                    if (Input.GetKeyDown(letras[i])== true && letras[i] != letraString){
                        //score -= 2*applyScore;
                        playerScript.playerScore -= 2*applyScore;
                        Debug.Log(playerScript.playerScore);
                    }
                    
                }
            }
        }
    }