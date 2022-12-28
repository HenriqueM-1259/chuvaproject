class gota{
    constructor(canvas){
        this.canvas = canvas;
        this.pos = {
            x:0,
            y:0
        },
        this.tamanho = {
            largura:0,
            altura:0,
        }
        this.velocidade=2;
        this.gravidade=1.3,
        this.colider=false,
        this.render={}
        this.getRandomX()
        this.getRandomY()
        this.getRandomL()
    }
    
    Update(){
       
        if(this.render != undefined){
           
        }
        this.pos.y  += this.velocidade + this.gravidade * this.tamanho.altura;
      
    }
    Drawn(){
        
        this.render = this.canvas.getContext('2d')
        this.render.fillStyle = 'blue'
        this.render.fillRect(this.pos.x,this.pos.y,this.tamanho.largura,this.tamanho.altura)
        
        return true
    }

    
    getRandomX(){
        
        this.pos.x =  Math.floor(Math.random() * window.innerWidth);

    }
    getRandomY(){
        
        this.pos.y =  Math.floor(Math.random() * -window.innerWidth);

    }
    getRandomL(){
        let con = Math.floor(Math.random() * 30);
        this.tamanho.altura = con
        this.tamanho.largura =  con
    }
}
class chuva{ 
    constructor(canvas){
        this.qtdGota = 350;
        this.canvas = canvas;
        this.gotas  = []
        this.addGota()
    }

    addGota(){
        for (let i = 0; i < this.qtdGota; i++) {
            this.gotas.push(new gota(this.canvas))
            
        }
    }

    Update(){
        for (let i = 0; i < this.gotas.length; i++) {
            this.gotas[i].Update();
            console.log(this.gotas[i])
            if(this.gotas[i].pos.y >= window.innerWidth){
                console.log(this.gotas[i])
                
                this.gotas[i].getRandomX();
                this.gotas[i].getRandomY();
            }
        }
        
    }
    Drawn(){
        for (let i = 0; i < this.gotas.length; i++) {
            this.gotas[i].Drawn();
        }
    }
}



const c = document.getElementById('canvasId');
const cContext = c.getContext('2d');
const cContext2 = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;

const ch  = new chuva(c)
var go = new gota(c)
function runLoop(){
    cContext.clearRect(0,0,window.innerWidth,window.innerHeight)
    ch.Update();
    ch.Drawn()
    
}

setInterval(() => {
    runLoop()
}, 60);


console.log(cContext, cContext2);




