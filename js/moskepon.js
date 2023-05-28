const botonmascotajugador = document.getElementById('botonmascota')
const botonfuego = document.getElementById('botonagua')
const botonagua = document.getElementById('botonfuego')
const botontierra = document.getElementById('botontierra')
const ButtomReload= document.getElementById('botonreinicar')
const sectionSelectAttack = document.getElementById("selectAttack")

const spanmascotajugador = document.getElementById('mascotajugador')

const spanvidasjugador = document.getElementById("vidasjugador")
const spanvidasenemigo = document.getElementById("vidasenemigo")
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const SectionMensajes = document.getElementById("mensajes")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const sectionVerMapa = document.getElementById("seemap")
const mapa = document.getElementById("map")
const widthMaxMap = 650

let mokepones = []
let ataquejugador
let ataqueenemigo
let attacksMokeponEnemy
let OpcionDeMokepones
let inputgreninja
let petPlayerObject
let inputcharizad 
let inputvulvasur 
let vidasjugador = 3
let vidasenemigo = 3
let mascotaJugador
let lienzo = map.getContext("2d")
let intervalo
let mapBackground = new Image()
mapBackground.src = "./Images/map.jpg"
let heightWeAreLookingFor
let widthMap = window.innerWidth - 20

heightWeAreLookingFor = widthMap * 600 / 1000

if(widthMap > widthMaxMap) {
    widthMap = widthMaxMap -20
}




map.width = widthMap
map.height = heightWeAreLookingFor

class Mokepon 
{
    constructor(Name, Photo, Life, fotoMapa) 
    {
        this.Name = Name
        this.Photo = Photo
        this.Life = Life
        this.attack = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, map.width - this.ancho)
        this.y = aleatorio(0, map.height - this.alto)
        this.mapPhoto = new Image()
        this.mapPhoto.src = fotoMapa
        this.speedX = 0
        this.speedY = 0
    }
    painMokepon() {
        lienzo.drawImage(
            this.mapPhoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
           ) 
    }
}

let greninja = new Mokepon("Greninja", "./Images/greninja_mokepon.png", 5,
"./Images/greninja_Icon.png")
let charizad = new Mokepon("Charizad", "./Images/Charizard_mokepon.png", 5,
"./Images/charizard_Icon.png")
let vulvasur = new Mokepon("Vulvasur", "./Images/Bulbasour_mokepon.png", 5,
"./Images/bulbasour_Icono.png")

let greninjaEnemy = new Mokepon("Greninja", "./Images/greninja_mokepon.png", 5,
"./Images/greninja_Icon.png")
let charizadEnemy = new Mokepon("Charizad", "./Images/Charizard_mokepon.png", 5,
"./Images/charizard_Icon.png")
let vulvasurEnemy = new Mokepon("Vulvasur", "./Images/Bulbasour_mokepon.png", 5,
"./Images/bulbasour_Icono.png")

greninja.attack.push(
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "🔥", id: "botonfuego" },
    { Name: "🌱", id: "botontierra" },
)
greninjaEnemy.attack.push(
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "🔥", id: "botonfuego" },
    { Name: "🌱", id: "botontierra" },
)
charizad.attack.push(
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🌱", id: "botonfuego" },
    { Name: "💧", id: "botontierra" },
)
charizadEnemy.attack.push(
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🌱", id: "botonfuego" },
    { Name: "💧", id: "botontierra" },
)
vulvasur.attack.push(
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "💧", id: "botonfuego" },
    { Name: "🔥", id: "botontierra" },
)
vulvasurEnemy.attack.push(
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "💧", id: "botonfuego" },
    { Name: "🔥", id: "botontierra" },
)

mokepones.push(greninja, charizad, vulvasur)

function iniciarjuego() {

    sectionVerMapa.style.display = "none"

    mokepones.forEach((Mokepon) => {
        OpcionDeMokepones = ` 
        <input type="radio" name="mascota" id=${Mokepon.Name} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.Name} ></label>
        <div class="card" >
                    <div class="card-image"><img src=${Mokepon.Photo} alt=${Mokepon.Name}
                    width="260px" height="240px"></div>
                <div class="card-text">
                    <span class="date-1">1 days ago</span>
                    <h2><i class="fa-fire"></i> ${Mokepon.Name} </h2>
                    <p>es un Pokémon de tipo agua/siniestro introducido en la sexta generación. 
                        Es la evolución de Frogadier.</p>
                </div>
                <div class="card-stats card-1">
                    <div class="stat">
                        <div class="value">40,0 kg</div>
                        <div class="type">agua/siniestro</div>
                    </div>
                    <div class="border"></div>
                    <div class="stat">
                        <div class="value">5123</div>
                        <div class="type">views</div>
                    </div>
                    <div class="border"></div>
                    <div class="stat">
                        <div class="value">32</div>
                        <div class="type">comment</div>
                    </div>
        </div>`
        contenedorTarjetas.innerHTML += OpcionDeMokepones

        inputgreninja = document.getElementById("Greninja")
        inputgreninja = document.getElementById("Charizad")
        inputgreninja = document.getElementById("Vulvasur")
    })
    botonmascotajugador.addEventListener("click", seleccionarmascotajugador)
    botonfuego.addEventListener("click", ataquefuego)
    botonagua.addEventListener("click", ataqueagua)
    botontierra.addEventListener("click", ataquetierra)
    
   
}

function seleccionarmascotajugador() {
    
        
    if (inputgreninja.checked) {
        spanmascotajugador.innerHTML = inputgreninja.id
        mascotaJugador = inputgreninja.id
    }else if (inputcharizad.checked) {
        spanmascotajugador.innerHTML = inputcharizad.id
        mascotaJugador = inputgreninja.i
    } else if (inputvulvasur.checked) {
        spanmascotajugador.innerHTML = inputvulvasur.id
        mascotaJugador = inputvulvasur.id
    } else {
        alert('selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    startMap()
    
}
function extraerAtaques(mascotaJugador) {
    let Attacks
    for(let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].Name) {
            Attacks = mokepones[i].Attacks
        }
    }
}
    function seleccionarmascotaenemigo(enemy) {
    spanMascotaEnemigo.innerHTML = enemy.Name
    attacksMokeponEnemy = enemy.Attacks
    sequenceAttack()
}
function sequenceAttack() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "🔥") {
                Attacks.push("FIRE")
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if(e.target.textContent === "💧") {
                Attacks.push("WATER")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if(e.target.textContent === "💧") {
                Attacks.push("EARTH")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
        })
    })
}
function ataquefuego() {
    ataquejugador = "fuego"
    ataquealeatorioenemigo()
}
function ataqueagua() {
    ataquejugador = "agua"
    ataquealeatorioenemigo()
}
function ataquetierra() {
    ataquejugador = "tierra"
    ataquealeatorioenemigo()
}
function ataquealeatorioenemigo() {
    let ataquealeatorio = aleatorio(0, attacksMokeponEnemy.length -1)

    if (ataquealeatorio == 0 || ataquealeatorio ==1) {
        ataqueenemigo.push("Fire Ball")
    } else if (ataquealeatorio == 3 || ataquealeatorio ==4) {
        ataqueenemigo.push("Water blust")
    } 
    else 
    {
        ataqueenemigo.push("Hearth")
    }


    crearmensajes()
}
function combate() {

    if(ataqueenemigo  == ataquejugador) {
        crearmensajes("empate")
    } else if (ataquejugador == 'fuego' && ataqueenemigo == 'tierra') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else if (ataquejugador == agua && ataqueenemigo == 'fuego') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
        
    } else if (jugador == tierra && ataqueenemigo == 'agua') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else {
        crearmensajes("perdiste")
        vidasjugador--
        spanvidasjugador.innerHTML = 'vidasjugador'
    }
}
function revisarvidas() {
    if (vidasenemigo == 0){
        crearmensajesfinal("felicitaciones ganaste")
    } else if (vidasjugador == 0) {
        crearmensajesfinal("lo siento perdiste")
    }
}
function crearmensajes(resultado) {

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo  + '- ' + resultado 

    sectionmensajes.appendChild(parrafo)
}
function crearmensajesfinal(resultadofinal) {
    

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo   + '- ' + resultado

    sectionmensajes.appendChild(parrafo)
}
function reiniciarjuego() {
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function painCanvas() {

   petPlayerObject.x = petPlayerObject.x + petPlayerObject.speedX
   petPlayerObject.y = petPlayerObject.y + petPlayerObject.speedY
    lienzo.clearRect(0, 0, map.width, map.height)
    lienzo.drawImage(
        mapBackground,
        0,
        0,
        map.width,
        map.height
        
        
    )
    petPlayerObject.painMokepon()
    greninjaEnemy.painMokepon()
    charizadEnemy.painMokepon()
    vulvasurEnemy.painMokepon()

    if(petPlayerObject.speedX !== 0 || petPlayerObject.speedY !== 0) 
    {
        reviewCollision(greninjaEnemy)
        reviewCollision(charizadEnemy)
        reviewCollision(vulvasurEnemy)
    }
}
function MovingLeft() 
{
    
    petPlayerObject.speedX = -5
}
function MovingRight() 
{
    petPlayerObject.speedX = 5
}
function MovingDown() 
{
    petPlayerObject.speedY = 5
}
function MovingTop() 
{
    petPlayerObject.speedY = -5
}
function StopMoving() 
{
    petPlayerObject.speedX = 0
    petPlayerObject.speedY = 0
}
function sePrecinoUnaTecla(event) {
    switch (event.key) {
        case "w":
            MovingTop()
            break
        case "s":
            MovingDown()
            break
        case "a":
            MovingLeft()
            break
        case "d":
            MovingRight()
            break
    
        default:
            break
    }
}
function startMap() {
    
    petPlayerObject = getObjectPet(mascotaJugador)
    intervalo = setInterval(painCanvas, 50)
    window.addEventListener("keydown", sePrecinoUnaTecla)
    window.addEventListener("keyup", StopMoving)
}
function getObjectPet() {
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].Name) {
            return mokepones[i]
        }
        
    }
}

function reviewCollision(enemy) {
    const topEnemy = enemy.y
    const downEnemy = enemy.y + enemy.alto
    const rightEnemy = enemy.x + enemy.ancho
    const leftEnemy = enemy.x
    
    const topPet = petPlayerObject.y
    const downPet =petPlayerObject.y +petPlayerObject.alto
    const rightPet= petPlayerObject.x + petPlayerObject.ancho
    const leftPet =petPlayerObject.x


    if(
        downPet < topEnemy ||
        topPet > downEnemy ||
        rightPet < leftEnemy ||
        leftPet > rightEnemy
    ) 
    {
        return
    }
    StopMoving()
    clearInterval(intervalo)
    sectionSelectAttack.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarmascotaenemigo(enemy)
    //alert("Hay collision" + enemy.Name)
}












window.addEventListener("load", iniciarjuego)