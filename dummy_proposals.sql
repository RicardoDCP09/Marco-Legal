-- Insertar Propuestas Ficticias (Seed Data)
INSERT INTO proposals (nombre, email, empresa, servicio, mensaje, status, date, response) VALUES
(
    'Carlos Rodríguez',
    'crodriguez@agroimport.com',
    'AgroImport S.A.',
    'Sistemas de Gestión',
    'Hola, estamos buscando modernizar nuestro sistema de inventario actual. Necesitamos una solución que integre nuestras 3 sucursales en tiempo real y permita facturación electrónica. ¿Podrían enviarnos una cotización preliminar?',
    'pending',
    NOW() - INTERVAL '2 hours',
    NULL
),
(
    'Ana María Mendez',
    'ana.mendez@startuphub.co',
    'StartupHub',
    'Apps Móviles',
    'Necesito desarrollar un MVP para una app de delivery enfocada en farmacias locales. Tengo los diseños en Figma listos. Me interesa saber tiempos estimados de desarrollo para iOS y Android.',
    'accepted',
    NOW() - INTERVAL '2 days',
    'Hola Ana, gracias por contactarnos. Hemos revisado tu solicitud y nos encantaría trabajar en tu MVP. Te contactaremos mañana para una reunión inicial.'
),
(
    'Juan Pérez',
    'juan.perez88@gmail.com',
    NULL,
    'Desarrollo Web',
    'Quiero una página web personal tipo portafolio para mostrar mis fotografías. Algo minimalista pero con buenas animaciones. Presupuesto ajustado.',
    'rejected',
    NOW() - INTERVAL '5 days',
    'Hola Juan, gracias por tu interés. En este momento nuestro enfoque está en proyectos corporativos y no podemos ajustarnos a tu presupuesto. Te recomendamos buscar freelancers en plataformas como Upwork.'
),
(
    'Sofía Vergara',
    'gerencia@clinicadelvalle.com',
    'Clínica Del Valle',
    'Automatización',
    'Requerimos automatizar el proceso de agendamiento de citas médicas. Actualmente usamos WhatsApp manual y perdemos muchos pacientes. Buscamos un chatbot con IA o un sistema web integrado.',
    'pending',
    NOW() - INTERVAL '1 day',
    NULL
),
(
    'Miguel Ángel Castillo',
    'mcastillo@logisticaexpress.net',
    'Logística Express',
    'Consultoría',
    'Estamos experimentando lentitud en nuestra base de datos principal. Necesitamos una auditoría de rendimiento y optimización urgente.',
    'pending',
    NOW() - INTERVAL '30 minutes',
    NULL
),
(
    'Laura Giménez',
    'laura.g@inmobiliarialara.com',
    'Inmobiliaria Lara',
    'Desarrollo Web',
    'Necesitamos renovar nuestro portal inmobiliario. Queremos mapas interactivos y recorridos virtuales 360 de las propiedades.',
    'accepted',
    NOW() - INTERVAL '1 week',
    'Estimada Laura, es un placer saludarte. Tu proyecto suena fantástico y tenemos experiencia con tours virtuales. Te hemos enviado una propuesta formal a tu correo.'
),
(
    'Roberto Chang',
    'rchang@techsolutions.org',
    'Tech Solutions',
    'Seguridad Informática',
    'Solicitud de prueba de penetración (pentesting) para nuestra nueva plataforma fintech antes del lanzamiento.',
    'pending',
    NOW() - INTERVAL '3 days',
    NULL
);
