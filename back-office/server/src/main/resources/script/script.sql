CREATE ROLE auto_trade WITH SUPERUSER LOGIN PASSWORD 'auto_trade';

CREATE DATABASE auto_trade OWNER auto_trade;

-- Toyota, Mercedez, Audi, BMW, Honda, Tesla, Hyundai, Kia, Mazda, Nissan, Subaru...
CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    state INTEGER DEFAULT 0
);

-- Sedan, Coupe, Hatchback, SUV, Crossover, Minivan, Pickup, Convertible, Wagon...
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    state INTEGER DEFAULT 0
);

-- automatic, manual, semi-automatic, CVT, DCT, DSG...
CREATE TABLE transmission_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    state INTEGER DEFAULT 0
);

-- Gasoline, Diesel, Electric, Hybrid, Hydrogen...
CREATE TABLE powertrain_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    state INTEGER DEFAULT 0
);

-- L200, L300, L400, Lancer, Pajero, Outlander, Mirage, Montero...
CREATE TABLE car_model (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand_id INTEGER NOT NULL REFERENCES brand(id),
    category_id INTEGER NOT NULL REFERENCES category(id),
    state INTEGER DEFAULT 0
);

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    birth_date DATE NOT NULL,
    genre INTEGER NOT NULL,
    phone_number VARCHAR(18) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE -- encrypted password
);

CREATE TABLE province (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    state INTEGER DEFAULT 0
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    birth_date DATE NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL, -- encrypted password
    phone_number VARCHAR(18),
    genre INTEGER NOT NULL,
    province_id INTEGER REFERENCES province(id),
    state INTEGER DEFAULT 0
);