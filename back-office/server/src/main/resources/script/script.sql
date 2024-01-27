CREATE ROLE auto_trade WITH SUPERUSER LOGIN PASSWORD 'auto_trade';

CREATE DATABASE auto_trade OWNER auto_trade;

-- Toyota, Mercedez, Audi, BMW, Honda, Tesla, Hyundai, Kia, Mazda, Nissan, Subaru...
CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

insert into brand values (default,'Toyota');

--history table
CREATE TABLE brand_history(
    brand_id INTEGER NOT NULL REFERENCES brand (id),
    old_name VARCHAR(50) NOT NULL,
    new_name VARCHAR(50) NOT NULL
);

-- Sedan, Coupe, Hatchback, SUV, Crossover, Minivan, Pickup, Convertible, Wagon...
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

insert into category values (default,'Sedan');

-- history table
CREATE TABLE category_history(
    category_id INTEGER NOT NULL REFERENCES category (id),
    old_name VARCHAR(50) NOT NULL,
    new_name VARCHAR(50) NOT NULL
);

-- automatic, manual, semi-automatic, CVT, DCT, DSG...
CREATE TABLE transmission_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

insert into transmission_type values (default,'automatic');


-- history table
CREATE TABLE transmission_type_history(
    transmission_type_id INTEGER NOT NULL REFERENCES transmission_type (id),
    old_name VARCHAR(50) NOT NULL,
    new_name VARCHAR(50) NOT NULL
);

-- Gasoline, Diesel, Electric, Hybrid, Hydrogen...
CREATE TABLE powertrain_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

insert into powertrain_type values (default,'Gasoline');

-- history table
CREATE TABLE powertrain_type_history(
    powertrain_type_id INTEGER NOT NULL REFERENCES powertrain_type (id),
    old_name VARCHAR(50) NOT NULL,
    new_name VARCHAR(50) NOT NULL
);

-- L200, L300, L400, Lancer, Pajero, Outlander, Mirage, Montero...
CREATE TABLE car_model (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand_id INTEGER NOT NULL REFERENCES brand(id),
    category_id INTEGER NOT NULL REFERENCES category(id),
    state INTEGER DEFAULT 0
);

insert into car_model values (default,'L200',1,1,default);


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
    name VARCHAR(50) NOT NULL
);

insert into province values (default,'TANA');

-- history table
CREATE TABLE province_history(
    powertrain_id INTEGER NOT NULL REFERENCES province (id),
    old_name VARCHAR(50) NOT NULL,
    new_name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    birth_date DATE NOT NULL,
    genre INTEGER NOT NULL,
    phone_number VARCHAR(18) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE, -- encrypted password
    province_id INTEGER NOT NULL REFERENCES province(id)
);

INSERT INTO users (name, first_name, birth_date, genre, phone_number, email, password, province_id)
VALUES ('Doe', 'John', '1990-01-01', 1, '123456789', 'john.doe@example.com', 'hashed_password_1', 1);

CREATE TABLE users_history (
    users_id INTEGER NOT NULL REFERENCES users (id),
    new_name VARCHAR(50) NOT NULL,
    old_name VARCHAR(50) NOT NULL,
    new_first_name VARCHAR(50),
    old_first_name VARCHAR(50),
    new_birth_date DATE NOT NULL,
    old_birth_date DATE NOT NULL,
    new_genre INTEGER NOT NULL,
    old_genre INTEGER NOT NULL,
    new_phone_number VARCHAR(18) NOT NULL,
    old_phone_number VARCHAR(18) NOT NULL,
    new_email VARCHAR(50) NOT NULL UNIQUE,
    old_email VARCHAR(50) NOT NULL UNIQUE,
    new_password TEXT NOT NULL UNIQUE, -- encrypted password
    old_password TEXT NOT NULL UNIQUE, -- encrypted password
    new_province_id INTEGER NOT NULL REFERENCES province(id),
    old_province_id INTEGER NOT NULL REFERENCES province(id)
);

CREATE TABLE commission (
    id SERIAL PRIMARY KEY,
    car_model_id INTEGER REFERENCES car_model(id) NOT NULL,
    from_date TIMESTAMP NOT NULL,
    percentage DOUBLE PRECISION NOT NULL
);

CREATE TABLE global_commission (
    id SERIAL PRIMARY KEY,
    from_date TIMESTAMP NOT NULL,
    percentage DOUBLE PRECISION NOT NULL
);

drop table announcement_picture cascade;
insert into commision values (default,now(),10);

CREATE TABLE announcement (
    id SERIAL PRIMARY KEY,
    mileage DOUBLE PRECISION NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    announcement_date DATE DEFAULT NOW(),
    car_model_id INTEGER NOT NULL REFERENCES car_model(id),
    powertrain_type_id INTEGER NOT NULL REFERENCES powertrain_type(id),
    transmission_type_id INTEGER NOT NULL REFERENCES transmission_type(id),
    description VARCHAR(255),
    years INTEGER NOT NULL,
    phone_number VARCHAR(18) NOT NULL,
    status INTEGER DEFAULT 0, -- is sold | validated | deleted
    sale_date DATE,
    commission DOUBLE PRECISION NOT NULL,
    users_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE announcement_picture(
    id SERIAL PRIMARY KEY,
    announcement_id INTEGER NOT NULL REFERENCES announcement (id),
    path TEXT NOT NULL,
    state INTEGER DEFAULT 0 --if delete
);
