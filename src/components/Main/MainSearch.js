import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchform from "./SearchForm"


class MainSearch extends Component{
    componentDidMount(){
        var x = document.createElement("script");
        var text = 'const SEPARATION=100,AMOUNTX=50,AMOUNTY=50;let container,stats,camera,scene,renderer,particles,particle,count=0,mouseX=0,mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;function init(){container=document.createElement("div"),document.getElementById("search-container").prepend(container),(camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1e4)).position.z=1e3,scene=new THREE.Scene,particles=new Array;for(var e=2*Math.PI,n=new THREE.Geometry,t=new THREE.SpriteCanvasMaterial({color:0xFAB800,program:function(n){n.beginPath(),n.arc(0,0,.4,0,e,!0),n.fill()}}),i=0,o=0;o<AMOUNTX;o++)for(var a=0;a<AMOUNTY;a++)(particle=particles[i++]=new THREE.Sprite(t)).position.x=o*SEPARATION-AMOUNTX*SEPARATION/2,particle.position.z=a*SEPARATION-AMOUNTY*SEPARATION/2,scene.add(particle),i>0&&n.vertices.push(particle.position);(renderer=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),container.appendChild(renderer.domElement),stats=new Stats,container.appendChild(stats.dom),document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(e){mouseX=e.clientX-windowHalfX,mouseY=e.clientY-windowHalfY}function onDocumentTouchStart(e){1===e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}function onDocumentTouchMove(e){1===e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}function animate(){requestAnimationFrame(animate),render(),stats.update()}function render(){renderer.setClearColor(0x0E0E0E,1),camera.position.x+=.05*(mouseX-camera.position.x),camera.position.y+=.05*(-mouseY-camera.position.y),camera.lookAt(scene.position);for(var e=0,n=0;n<AMOUNTX;n++)for(var t=0;t<AMOUNTY;t++)(particle=particles[e++]).position.y=50*Math.sin(.3*(n+count))+50*Math.sin(.5*(t+count)),particle.scale.x=particle.scale.y=4*(Math.sin(.3*(n+count))+1)+4*(Math.sin(.5*(t+count))+1);renderer.render(scene,camera),count+=.1}init(),animate();';
        var t = document.createTextNode(text);
        x.appendChild(t);
        this.instance.prepend(x);
    }

    render(){
        return (
            <div id="search-container" ref={el => (this.instance = el)} className="search-container">
            
                <div className="wrap">
                    <h3 className="title-font">FIND THE RIGHT TUTOR FOR YOU</h3>
                    <Searchform />
                </div>
            </div>

                
                

        );
    }
}

export default MainSearch;


// <div class="row">
//     <div class="col-10">
//         <div class="countdown shadow clearfix">
//             <div class="card text-center ">
//                 <div class="row">
//                     <div class="col-4  box-count bord-right mt-2">
//                         <h5>Total Current Tutors</h5>
//                         <p class="figure-number animated zoomIn infinite">999</p>
//                     </div>
//                     <div class="col-4  box-count bord-right mt-2">
//                         <h5>Total Current Students</h5>
//                         <p class="figure-number">99,999</p>
//                     </div>
//                     <div class="col-4  box-count mt-2"><h5>Total Courses</h5>  <p class="figure-number">77</p></div>

//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
