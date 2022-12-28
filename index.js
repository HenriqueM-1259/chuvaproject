class chuva{
    
    constructor(canvas){
        this.canvas = canvas;
        this.gotas  = {...new gota(this.canvas)}
    }
    
}

class gota{
    varGlobal = {
        pos:{
            x:0,
            y:0
        },
        velocidade:0,
        gravidade:0,
        colider:false,
        render:{}
    }
    constructor(canvas){
        this.canvas = canvas;
    }

    Update(){

    }
    Drawn(){
        this.varGlobal.render = this.canvas.getContext('2d')
        this.varGlobal.render.fillStyle = 'blue'
        this.varGlobal.render.fillRect(10,10,10,10)
    }
}

const c = document.getElementById('canvasId');
const cContext = c.getContext('2d');
const cContext2 = c.getContext('2d');
const ch  = new chuva(c)
const go = new gota(c)
go.Drawn()

console.log(cContext, cContext2);




