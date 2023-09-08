import Rectangulo from './Rectangulo'

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let dir = 0;
let w_x = 100, w_y = 70;
let speed = 10;
let walls = [];
let pause = false;
let score = 0;