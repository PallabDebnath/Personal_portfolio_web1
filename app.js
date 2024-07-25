import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const root = document.getElementById("app");
const opstion ={
    el: root,
    shaderPoint: 16,
    curvePoints: 80,


};

neonCursor(opstion);