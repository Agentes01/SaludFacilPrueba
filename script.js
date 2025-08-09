document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const resultados = document.getElementById('resultados');
  const listaServicios = document.getElementById('lista-servicios');
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotPanel = document.getElementById('chatbotPanel');
  const closeChat = document.getElementById('closeChat');

  // Simulación de servicios médicos
  const servicios = [
    { nombre: "Clínica ABC", direccion: "Calle 123 # 45-67, Bogotá", eps: "Sura", especialidad: "Medicina general", espera: "3 días" },
    { nombre: "Hospital San José", direccion: "Av. 19 # 100-20, Medellín", eps: "Nueva EPS", especialidad: "Pediatría", espera: "1 día" },
    { nombre: "Centro Médico del Sur", direccion: "Carrera 50 # 80-100, Cali", eps: "Coomeva", especialidad: "Psicología", espera: "5 días" }
  ];

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    listaServicios.innerHTML = '';

    const filtered = servicios.filter(s => 
      s.nombre.toLowerCase().includes(query) || 
      s.especialidad.toLowerCase().includes(query) ||
      s.eps.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      listaServicios.innerHTML = '<p>No se encontraron servicios.</p>';
    } else {
      filtered.forEach(s => {
        const div = document.createElement('div');
        div.className = 'bg-white p-4 rounded-lg shadow';
        div.innerHTML = `
          <h3 class="font-semibold">${s.nombre}</h3>
          <p class="text-sm text-gray-600">${s.direccion}</p>
          <p class="text-sm">EPS: ${s.eps}</p>
          <p class="text-sm">Especialidad: ${s.especialidad}</p>
          <p class="text-sm">Tiempo de espera: ${s.espera}</p>
        `;
        listaServicios.appendChild(div);
      });
    }

    resultados.classList.remove('hidden');
  });

  // Chatbot
  chatbotToggle.addEventListener('click', () => {
    chatbotPanel.style.display = chatbotPanel.style.display === 'block' ? 'none' : 'block';
  });

  closeChat.addEventListener('click', () => {
    chatbotPanel.style.display = 'none';
  });
});