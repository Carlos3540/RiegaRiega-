import './styles.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

`

setupCounter(document.querySelector('#counter'))

 // Datos de plantas
        let plants = JSON.parse(localStorage.getItem('plants') || '[]');

        // Mensajes divertidos para notificaciones
        const funnyMessages = {
            suculenta: [
                "¡Tu suculenta está pidiendo un traguito! 💧",
                "Tiempo de hidratar a tu pequeña guerrera del desierto 🌵",
                "Tu suculenta dice: 'Un poquito de agua, por favor' 💚"
            ],
            cactus: [
                "¡Tu cactus tiene sed! (¡Increíble pero cierto!) 🌵",
                "Incluso los cactus necesitan amor... y agua 💧",
                "Tu cactus espinoso quiere un mimo acuático 🌵💧"
            ],
            flor: [
                "¡Tus flores quieren brillar! Dales agua ✨🌸",
                "Hora del spa para tus hermosas flores 💅🌺",
                "Tus flores susurran: '¡Agua, por favor!' 🌸💧"
            ],
            helecho: [
                "Tu helecho está sediento como vampiro 🧛‍♂️🌿",
                "¡Tu helecho verdecito necesita su dosis diaria! 💚",
                "Tiempo de regar tu frondoso amigo 🌿💧"
            ],
            arbol: [
                "Tu arbolito quiere crecer grande y fuerte 🌳💪",
                "¡Dale agua a tu futuro gigante verde! 🌳",
                "Tu árbol dice: 'Help me grow!' 🌳✨"
            ],
            hierba: [
                "¡Tus hierbas aromáticas piden agua! 🌱👃",
                "Tiempo de regar para tener sabores increíbles 🌱✨",
                "Tus hierbas quieren estar frescas y fragantes 🌱💚"
            ],
            otro: [
                "¡Tu planta especial necesita atención! 🪴",
                "Hora de mimar a tu verde compañera 🪴💚",
                "Tu planta única pide agua con cariño 🪴💧"
            ]
        };

        // Inicializar app
        function init() {
            displayPlants();
            updateStats();
            checkNotifications();
        }

        // Cambiar tabs
        window.showTab = function(tabName) {
    // Quitar clase activa de todos los botones
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Quitar clase activa de todos los contenidos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Activar el botón que corresponde
    const activeButton = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Mostrar el contenido que corresponde
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.classList.add('active');
    }
};


        // Agregar planta
        document.getElementById('plantForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const plantData = {
                id: Date.now(),
                name: document.getElementById('plantName').value,
                type: document.getElementById('plantType').value,
                waterFreq: parseInt(document.getElementById('waterFreq').value),
                lastWatered: new Date().toISOString(),
                nextWater: new Date(Date.now() + parseInt(document.getElementById('waterFreq').value) * 24 * 60 * 60 * 1000).toISOString()
            };
            
            plants.push(plantData);
            localStorage.setItem('plants', JSON.stringify(plants));
            
            // Limpiar formulario
            this.reset();
            
            // Mostrar notificación
            showNotification('🌱 ¡Planta agregada exitosamente!');
            
            // Actualizar vista
            displayPlants();
            updateStats();
            
            // Cambiar a tab de plantas
            showTab('plants');
            document.querySelector('.tab').click();
        });

        // Mostrar plantas
        function displayPlants() {
            const plantsList = document.getElementById('plantsList');
            
            if (plants.length === 0) {
                plantsList.innerHTML = `
                    <div class="empty-state">
                        <div class="emoji">🌿</div>
                        <h3>¡Comienza tu jardín digital!</h3>
                        <p>Agrega tu primera planta para comenzar</p>
                    </div>
                `;
                return;
            }
            
            plantsList.innerHTML = plants.map(plant => {
                const daysUntilWater = Math.ceil((new Date(plant.nextWater) - new Date()) / (1000 * 60 * 60 * 24));
                const statusClass = daysUntilWater <= 0 ? 'urgent' : daysUntilWater <= 1 ? 'soon' : 'ok';
                const statusText = daysUntilWater <= 0 ? '¡Necesita riego!' : 
                                daysUntilWater <= 1 ? `${daysUntilWater} día` : 
                                `${daysUntilWater} días`;
                
                const typeEmoji = {
                    suculenta: '🌵',
                    cactus: '🌵',
                    flor: '🌸',
                    helecho: '🌿',
                    arbol: '🌳',
                    hierba: '🌱',
                    otro: '🪴'
                };
                
                return `
                    <div class="plant-card">
                        <h3>${typeEmoji[plant.type] || '🪴'} ${plant.name}</h3>
                        <div class="plant-info">
                            <span class="plant-type">${plant.type}</span>
                            <span class="days-left ${statusClass}">${statusText}</span>
                        </div>
                        <p style="color: #666; margin: 10px 0;">
                            Último riego: ${new Date(plant.lastWatered).toLocaleDateString('es-ES')}
                        </p>
                        <div class="plant-actions">
                            <button class="btn-small btn-water" onclick="waterPlant(${plant.id})">
                                💧 Regar ahora
                            </button>
                            <button class="btn-small btn-delete" onclick="deletePlant(${plant.id})">
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Regar planta
        function waterPlant(plantId) {
            const plantIndex = plants.findIndex(p => p.id === plantId);
            if (plantIndex !== -1) {
                const plant = plants[plantIndex];
                plant.lastWatered = new Date().toISOString();
                plant.nextWater = new Date(Date.now() + plant.waterFreq * 24 * 60 * 60 * 1000).toISOString();
                
                localStorage.setItem('plants', JSON.stringify(plants));
                displayPlants();
                updateStats();
                
                // Mensaje random divertido
                const messages = funnyMessages[plant.type] || funnyMessages.otro;
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                showNotification(`💧 ¡${plant.name} está feliz! ${randomMessage.split('!')[1] || '¡Bien hecho!'}`);
            }
        }
        window.waterPlant = waterPlant;
        // Eliminar planta
        function deletePlant(plantId) {
            if (confirm('¿Estás seguro de que quieres eliminar esta planta?')) {
                plants = plants.filter(p => p.id !== plantId);
                localStorage.setItem('plants', JSON.stringify(plants));
                displayPlants();
                updateStats();
                showNotification('🗑️ Planta eliminada');
            }
        }
        window.deletePlant = deletePlant;

        // Actualizar estadísticas
        function updateStats() {
            const totalPlants = plants.length;
            const plantsNeedWater = plants.filter(plant => {
                const daysUntilWater = Math.ceil((new Date(plant.nextWater) - new Date()) / (1000 * 60 * 60 * 24));
                return daysUntilWater <= 0;
            }).length;
            
            document.getElementById('totalPlants').textContent = totalPlants;
            document.getElementById('plantsNeedWater').textContent = plantsNeedWater;
        }

        // Mostrar notificación
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Probar notificación
        window.testNotification = function() {
    const messages = [
        "🌱 ¡Esta es una notificación de prueba!",
        "💧 ¡Tu jardín virtual funciona perfectamente!",
        "🌸 ¡Las notificaciones están activas!",
        "🌿 ¡Todo listo para cuidar tus plantas!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMessage);
};


        // Verificar notificaciones periódicamente
        function checkNotifications() {
            const plantsNeedingWater = plants.filter(plant => {
                const daysUntilWater = Math.ceil((new Date(plant.nextWater) - new Date()) / (1000 * 60 * 60 * 24));
                return daysUntilWater <= 0;
            });
            
            if (plantsNeedingWater.length > 0) {
                const plant = plantsNeedingWater[0];
                const messages = funnyMessages[plant.type] || funnyMessages.otro;
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                
                // Solo mostrar notificación si han pasado al menos 5 minutos desde la última
                const lastNotification = localStorage.getItem('lastNotification');
                const now = Date.now();
                
                if (!lastNotification || (now - parseInt(lastNotification)) > 5 * 60 * 1000) {
                    setTimeout(() => {
                        showNotification(`${plant.name}: ${randomMessage}`);
                        localStorage.setItem('lastNotification', now.toString());
                    }, 2000);
                }
            }
        }

        // Inicializar al cargar la página
        document.addEventListener('DOMContentLoaded', init);

        // Verificar notificaciones cada 30 segundos
        setInterval(checkNotifications, 30000);


        // functions para la ventana emergente del la eliminaciòn de la planta 