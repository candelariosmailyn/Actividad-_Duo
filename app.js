const contenedor = document.querySelector(".container");

for(let contador =0; contador <50; contador==){
  const particula = document.createElement('div');
  particula.classList.add("particula");
  particula.style.left =`${Math.random()* 100}%`;
  particula.style.top =`${Math.random()* 100}%`;
  particula.style.animationDelay =`${Math.random()* 8}s`;
  particula.style.width =`${Math.random()* 6 + 2}px`;
  particula.style.height = particula.style.width;
  contenedor.appendChild(particula);
}