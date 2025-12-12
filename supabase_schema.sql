-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Proposals Table
CREATE TABLE IF NOT EXISTS proposals (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    empresa TEXT,
    servicio TEXT NOT NULL,
    mensaje TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
    date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    response TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Content Table
CREATE TABLE IF NOT EXISTS content (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert Initial Data (from db.json)
INSERT INTO users (id, email, password, name)
VALUES 
    ('1', 'admin@codram.com', 'admin', 'Admin User')
ON CONFLICT (id) DO NOTHING;

INSERT INTO content (id, title, text)
VALUES
    ('about', '¿Quiénes Somos?', 'CodeRAM se especializa en el desarrollo de sistemas administrativos, plataformas web empresariales y aplicaciones móviles personalizadas. Ofrecemos soluciones modulares, escalables y seguras para empresas que desean digitalizar su operatividad y potenciar su alcance.'),
    ('mission', 'Misión', 'Desarrollar soluciones tecnológicas innovadoras, funcionales y escalables que impulsen la transformación digital de empresas y organizaciones, ofreciendo software de alta calidad adaptado al mercado venezolano y latinoamericano.'),
    ('vision', 'Visión', 'Ser reconocidos como líderes en el desarrollo de software en Venezuela, destacando por nuestra creatividad, compromiso con la calidad y capacidad de generar impacto positivo en la productividad y competitividad de nuestros clientes.')
ON CONFLICT (id) DO NOTHING;
