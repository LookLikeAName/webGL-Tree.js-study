/*=========prepare for screne========= */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/* ======== where thing done ========*/
var cubeArray=[];

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial( );



camera.position.z = 15;
camera.position.y = 10;

var animate = function () {
	requestAnimationFrame( animate );

    cubeArray.forEach((item,i)=>
    {
        cubeRotate(item);
    })

    controls.update();
	renderer.render(scene, camera);
};

var addCube = function(inputCubeArray){
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x=Math.random()*(Math.random()*10)*(Math.random()>0.5?1:-1);
    cube.position.y=Math.random()*(Math.random()*10)*(Math.random()>0.5?1:-1);
    cube.position.z=Math.random()*(Math.random()*10)*(Math.random()>0.5?1:-1);
    inputCubeArray.push(cube);
    scene.add( inputCubeArray[inputCubeArray.length-1] );
}
var deleteCube = function(inputCubeArray){
    if(inputCubeArray){
        scene.remove( inputCubeArray[inputCubeArray.length-1] );
        inputCubeArray.pop();
    }
}
var cubeRotate = function(inputCube){
    inputCube.rotation.x += 0.01;
	inputCube.rotation.y += 0.01;
}

animate();
            
/**======= web control ========**/

window.addEventListener("keydown",(e)=>
{
    //console.log(e);
    switch(e.key)
    {
        /*case "w":
        case "W":
            cube.position.y+=0.1;
            break;
        case "a":
        case "A":
            cube.position.x-=0.1;
            break;
        case "s":
        case "S":
            cube.position.y-=0.1;
            break;
        case "d":
        case "D":
            cube.position.x+=0.1;
            break;*/
        case "q":
        case "Q":
            deleteCube(cubeArray);
            break;
        case "e":
        case "E":
            addCube(cubeArray);
            break;
        default:
            break;
    }
})