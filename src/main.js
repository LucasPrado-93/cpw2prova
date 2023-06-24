const token = localStorage.getItem("token");

// Se token não tiver valor...
if (!token) {
  window.location.href = "login.html";
} else {
  document.getElementById("app").innerHTML =`
    <h1>Seja bem vind@!</h1>
    
    <iframe width="900" height="700" src="https://www.youtube.com/embed/PWgvGjAhvIw?controls=0&amp;start=67&autoplay=1" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <a href="logout.html">Clique aqui para sair</a>
    
  `;
}
