'use strict';
const input = 'R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3'.split(', ');
let direction = 0;//0 - N, 1 - E, 2 - S, 3 - W
let position = [0, 0];//x & y
let visited = '';
let start = 35;
let multiply = 6;
let met = false;
var c = document.getElementById("canvas");
var canvas = c.getContext("2d");
canvas.moveTo(start*multiply, start*multiply);
function move(txt){
    let temp = JSON.parse(JSON.stringify(position));
    if(txt[0] == 'R'){
        direction++;
    }else{
        direction--;
    }
    if(direction < 0){
        direction += 4;
    }
    direction %= 4;
    txt = txt.substring(1) * 1;
    if(direction >= 2){
        txt *= -1;
    }
    if(!met){
        for(let i = 0; i < Math.abs(txt); i++){
            temp[(direction+1)%2] += txt/Math.abs(txt);
            if(visited.indexOf(JSON.stringify(temp)) !== -1){
                console.log('Real address: ' + (Math.abs(position[0]) + Math.abs(position[1])));
                met = true;
            }
            visited += JSON.stringify(temp);
        }
    }
    position[(direction+1)%2] += txt;
    canvas.lineTo((position[0]+start)*multiply, (position[1]+start)*multiply);
}
for(let i = 0; i < input.length; i++){
    move(input[i]);
}
canvas.stroke();
console.log('Fake address: ' + (Math.abs(position[0]) + Math.abs(position[1])));//[240, -139]
