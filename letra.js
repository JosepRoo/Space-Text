
public var materiales: Material[];
public var rend: Renderer;
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"];
var animaciones = ["azul", "morado", "rojo", "naranja"];
var color;
var letra;
var animacion;
var velocidadLetra = 10;
var RandomLetra;
var RandomColor;
var RandomPos = 10;
var explosion;

var meshToUse : Mesh;

function Start() {
    RandomColor = Random.Range(0, 4);
    RandomLetra = Random.Range(0, 19);
    meshToUse = Resources.Load("polySurface1", Mesh);
    GetComponent(MeshFilter).mesh = meshToUse;
    rend = GetComponent.<Renderer>();
    rend.enabled = true;
    
    //letra = letras[RandomLetra];
    //animacion = animaciones[RandomColor];
    //transform.position.x += Random.Range(RandomPos, -RandomPos);


}

    function Update() {
        //transform.position.z -= velocidadLetra * Time.deltaTime;
        if (materiales.Length == 0)return ;
        // we want this material index now
        rend.sharedMaterial = materiales[RandomColor];

        // falta eliminar cuando pase la linea es decir cuando sea GO
    }