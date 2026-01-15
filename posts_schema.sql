-- Asegurar que la extensión para UUIDs exista (necesario para uuid_generate_v4)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Crear la tabla (si no existe)
CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL, -- Contenido en Markdown
    image_url TEXT,
    published BOOLEAN DEFAULT false,
    author_id TEXT REFERENCES users(id), -- Puede requerir un ID de usuario válido existente
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Insertar Artículos de Ejemplo (Seed Data)
INSERT INTO posts (title, slug, excerpt, image_url, published, author_id, content) VALUES
(
    'La Importancia de la Transformación Digital en 2025',
    'importancia-transformacion-digital-2025',
    'Descubre por qué digitalizar tu negocio ya no es una opción, sino una necesidad para sobrevivir y crecer en el mercado actual.',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200',
    true,
    NULL, -- REEMPLAZAR con un ID de usuario válido si es necesario, ej: 'd0c9b0e2-...'
    '# La Transformación Digital: El Motor del Crecimiento Empresarial

En el vertiginoso mundo empresarial de 2025, la **transformación digital** ha dejado de ser una simple "tendencia" para convertirse en el pilar fundamental de cualquier estrategia de negocio exitosa. Ya no se trata solo de tener una página web o presencia en redes sociales; se trata de integrar la tecnología en cada área de tu organización para cambiar fundamentalmente cómo operas y entregas valor a tus clientes.

## ¿Qué es realmente la Transformación Digital?

No es simplemente comprar computadoras más rápidas o almacenar archivos en la nube. Es un cambio cultural que requiere que las organizaciones desafíen constantemente el status quo, experimenten a menudo y se sientan cómodas con el fracaso como parte del aprendizaje.

### Beneficios Clave para tu Empresa

1.  **Eficiencia Operativa:** La automatización de procesos manuales reduce errores y libera a tu equipo para tareas estratégicas.
2.  **Mejor Experiencia del Cliente:** Los clientes de hoy esperan inmediatez y personalización. Las herramientas digitales te permiten ofrecerlo.
3.  **Toma de Decisiones basada en Datos:** Dejar de adivinar y empezar a decidir con análisis en tiempo real.

## Cómo CodeRAM te acompaña en este viaje

En **CodeRAM**, entendemos que cada empresa es única. No ofrecemos soluciones "enlatadas". Analizamos tus procesos, identificamos cuellos de botella y desarrollamos **soluciones de software a medida** que se adaptan a tu flujo de trabajo, y no al revés.

Desde sistemas de gestión integral (ERP) hasta plataformas de atención al cliente automatizadas, nuestra misión es ser tu socio tecnológico en esta evolución.

> "La tecnología no es nada. Lo importante es que tengas fe en la gente, que sean básicamente buenas e inteligentes, y si les das herramientas, harán cosas maravillosas con ellas." - Steve Jobs
'
),
(
    'Desarrollo de Apps Móviles: ¿Web App, Nativa o Híbrida?',
    'desarrollo-apps-moviles-nativa-hibrida',
    'Una guía completa para entender qué tipo de aplicación móvil se adapta mejor a las necesidades y presupuesto de tu proyecto.',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200',
    true,
    NULL,
    '# ¿Web App, Nativa o Híbrida? Eligiendo el Camino Correcto

Cuando decides llevar tu negocio al bolsillo de tus clientes con una **App Móvil**, la primera gran decisión técnica es: ¿Qué tecnología utilizamos? En **CodeRAM**, te ayudamos a desglosar estas opciones para que tomes la decisión más inteligente para tu inversión.

## 1. Apps Nativas (iOS / Android)

Desarrolladas específicamente para cada sistema operativo (Swift para iOS, Kotlin para Android).

*   **Pros:** Rendimiento máximo, acceso total al hardware (cámara, GPS, sensores), mejor experiencia de usuario (UX).
*   **Contras:** Mayor costo y tiempo de desarrollo (se necesitan dos códigos base).
*   **Ideal para:** Juegos, apps que requieren alto procesamiento o uso intensivo de hardware.

## 2. Apps Híbridas / Multiplataforma (React Native, Flutter)

Es la especialidad de la casa en CodeRAM. Permiten escribir el código una sola vez y desplegarlo tanto en iPhone como en Android.

*   **Pros:** Desarrollo más rápido, menor costo, mantenimiento simplificado, rendimiento casi nativo.
*   **Contras:** Ligeramente menos potentes que las nativas puras para tareas gráficas extremas.
*   **Ideal para:** E-commerce, redes sociales, apps de gestión (90% de los casos de uso empresarial).

## 3. Web Apps (PWA)

Son sitios web que parecen apps. No se descargan de la tienda.

*   **Pros:** Acceso inmediato sin instalación, compatible con todo.
*   **Contras:** No tienen acceso a todas las funciones del teléfono, no envían notificaciones push en iOS fácilmente.

### Conclusión

Para la mayoría de las PyMES y Startups, una solución **Multiplataforma** ofrece el mejor equilibrio entre calidad, precio y tiempo de mercado. ¡Contáctanos y evaluemos juntos tu idea!'
),
(
    'Automatización de Procesos: El Secreto de la Productividad',
    'automatizacion-procesos-secreto-productividad',
    'Aprende cómo la automatización de tareas repetitivas puede ahorrarte cientos de horas al año y reducir costos operativos.',
    'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200',
    true,
    NULL,
    '# Automatiza lo Aburrido, Enfócate en lo Importante

¿Cuántas horas a la semana pasa tu equipo copiando datos de un Excel a otro, enviando correos de confirmación manuales o generando reportes repetitivos? La **automatización de procesos** es la llave para liberar el verdadero potencial de tu talento humano.

## ¿Qué podemos automatizar hoy mismo?

La respuesta corta: casi cualquier tarea digital repetitiva basada en reglas fijas.

*   **Generación de Facturas:** Automáticamente al cerrar una venta.
*   **Onboarding de Clientes:** Envío de correos de bienvenida, creación de usuarios y asignación de tareas.
*   **Reportes de Ventas:** Dashboards que se actualizan solos cada mañana.
*   **Gestión de Inventario:** Alertas automáticas cuando el stock baja.

## El Impacto en la Rentabilidad

Implementar scripts de automatización o integrar tus sistemas (tu CRM con tu Email Marketing, por ejemplo) tiene un ROI (Retorno de Inversión) casi inmediato.

> **Dato:** Se estima que los empleados pierden hasta un 30% de su tiempo en tareas administrativas que podrían automatizarse.

En **CodeRAM**, desarrollamos bots y scripts a medida, así como integraciones complejas entre sistemas para que tu información fluya sin barreras. Deja que las máquinas hagan el trabajo mecánico, y deja que tu equipo haga el trabajo creativo.'
),
(
    'Ciberseguridad Básica para Empresas Modernas',
    'ciberseguridad-basica-empresas-modernas',
    'Proteger tus datos y los de tus clientes es vital. Conoce las prácticas esenciales de seguridad informática que implementamos en cada proyecto.',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
    true,
    NULL,
    '# La Seguridad no es un Juego

En la era digital, los datos son el "nuevo petróleo", y por lo tanto, son el objetivo principal de ataques. Una brecha de seguridad no solo cuesta dinero, cuesta algo más difícil de recuperar: **la confianza de tus clientes**.

## Principios de Seguridad en CodeRAM

Cuando desarrollamos software, la seguridad no es un "agregado" al final, es parte del diseño (*Security by Design*).

### 1. Encriptación de Datos
Toda información sensible (contraseñas, datos personales) debe viajar y almacenarse encriptada. Utilizamos estándares modernos como AES-256 y hashing con bcrypt.

### 2. Autenticación Robusta
Implementamos sistemas de login seguros, gestión de sesiones con JWT (Json Web Tokens) y recomendamos siempre la Autenticación de Dos Factores (2FA).

### 3. Backups Automatizados
¿Qué pasa si todo falla? Un sistema de copias de seguridad robusto es tu seguro de vida.

### ¿Está tu software actual protegido?

Muchas aplicaciones antiguas tienen vulnerabilidades conocidas que no han sido parchadas. Realizar una **auditoría de seguridad** y actualizar tus sistemas es una inversión crítica. Protege tu activo más valioso.'
),
(
    'Tendencias de Diseño Web 2025: Dark Mode y Minimalismo',
    'tendencias-diseno-web-2025-dark-mode',
    'Analizamos por qué el "Dark Mode" y el diseño minimalista están dominando la web y cómo mejoran la experiencia de usuario.',
    'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1200',
    true,
    NULL,
    '# El Lado Oscuro del Diseño (Es Bueno)

Si has notado que todas tus aplicaciones favoritas están adoptando un "Modo Oscuro" (**Dark Mode**), no es casualidad. Es una de las tendencias de diseño más fuertes de los últimos años y ha llegado para quedarse.

## ¿Por qué Dark Mode?

1.  **Salud Visual:** Reduce la fatiga ocular, especialmente en condiciones de baja luz, lo cual es ideal para usuarios que pasan muchas horas frente a la pantalla.
2.  **Ahorro de Batería:** En pantallas OLED (comunes en móviles modernos), los píxeles negros están apagados, consumiendo significativamente menos energía.
3.  **Estética Premium:** Los esquemas de colores oscuros, combinados con colores de acento neón o vibrantes (como nuestro Cian `#00D4FF`), transmiten modernidad, elegancia y tecnología de punta.

## Minimalismo Funcional

El diseño web moderno se aleja del desorden. "Menos es más".

*   **Espacios en Blanco (o Negro):** Dejar "aire" entre elementos mejora la legibilidad.
*   **Micro-interacciones:** Pequeñas animaciones al pasar el mouse (hover) que dan vida a la interfaz sin abrumar.
*   **Tipografía Grande:** Títulos claros y fuentes legibles como *Inter* o *Roboto*.

En **CodeRAM**, nos especializamos en crear interfaces que no solo funcionan impecablemente, sino que se ven increíbles. Tu página web es tu carta de presentación digital; asegúrate de que esté vestida para impresionar.'
);
