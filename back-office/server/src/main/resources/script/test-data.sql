insert into admin values
(DEFAULT, 'Admin', NULL, '2000-01-01', 1, '+261 32 55 063 38', 'admin@gmail.com', '$2a$10$UW0icB1Q1cIRKivhAYvEEuhmtwsrguViqGmLL/F/m7y3neuszotZG');

INSERT INTO users (name, first_name, birth_date, genre, phone_number, email, password, province_id)
VALUES ('Doe', 'John', '1990-01-01', 1, '123456789', 'john.doe@example.com', 'hashed_password_1', 1);

insert into brand values (default,'Mitsubishi');

insert into category values (default,'Pickup');

insert into province values (default,'TANA');

insert into car_model values (default,'L200',1,1,default);

insert into powertrain_type values (default,'Gasoline');

insert into transmission_type values (default,'automatic');

insert into commission values (default,now(),10);
