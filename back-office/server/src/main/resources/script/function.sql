-- declancheur
CREATE OR REPLACE FUNCTION log_brand_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO brand_history (brand_id, action, old_name, timestamp)
        VALUES (OLD.id,'DELETE',OLD.name,NOW());
    ELSE
        INSERT INTO brand_history (brand_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE', OLD.name,NEW.name,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER brand_changes
AFTER  UPDATE OR DELETE ON brand
FOR EACH ROW
EXECUTE FUNCTION log_brand_changes();

-- declancheur
CREATE OR REPLACE FUNCTION log_category_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO category_history (category_id, action, old_name, timestamp)
        VALUES (OLD.id,'DELETE',OLD.name,NOW());
    ELSE
        INSERT INTO category_history (category_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE', OLD.name,NEW.name,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER category_changes
AFTER  UPDATE OR DELETE ON category
FOR EACH ROW
EXECUTE FUNCTION log_category_changes();

-- declancheur
CREATE OR REPLACE FUNCTION log_transmission_type_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO transmission_type_history (transmission_type_id, action, old_name, timestamp)
        VALUES (OLD.id,'DELETE',OLD.name,NOW());
    ELSE
        INSERT INTO transmission_type_history (transmission_type_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE', OLD.name,NEW.name,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER transmission_type_changes
AFTER  UPDATE OR DELETE ON transmission_type
FOR EACH ROW
EXECUTE FUNCTION log_transmission_type_changes();

-- declancheur
CREATE OR REPLACE FUNCTION log_powertrain_type_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO powertrain_type_history (powertrain_type_id, action, old_name, timestamp)
        VALUES (OLD.id,'DELETE',OLD.name,NOW());
    ELSE
        INSERT INTO powertrain_type_history (powertrain_type_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE', OLD.name,NEW.name,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER powertrain_type_changes
AFTER  UPDATE OR DELETE ON powertrain_type
FOR EACH ROW
EXECUTE FUNCTION log_powertrain_type_changes();

-- declancheur
CREATE OR REPLACE FUNCTION log_province_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO province_history (province_id, action, old_name, timestamp)
        VALUES (OLD.id,'DELETE',OLD.name,NOW());
    ELSE
        INSERT INTO province_history (province_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE', OLD.name,NEW.name,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER province_changes
AFTER  UPDATE OR DELETE ON province
FOR EACH ROW
EXECUTE FUNCTION log_province_changes();

-- declancheur
CREATE OR REPLACE FUNCTION log_users_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO users_history (users_id, action, old_name, old_first_name,old_birth_date,old_genre,old_phone_number,old_email,old_password,old_province_id,timestamp)
        VALUES (OLD.id,'DELETE',OLD.name, OLD.first_name,OLD.birth_date,OLD.genre,OLD.phone_number,OLD.email,OLD.password,OLD.province_id,NOW());
    ELSE
        INSERT INTO users_history (users_id, action, old_name,new_name,timestamp)
        VALUES (NEW.id, 'UPDATE',OLD.name,NEW.name, OLD.first_name,NEW.first_name,OLD.birth_date,NEW.birth_date,OLD.genre,NEW.genre,OLD.phone_number,NEW.phone_number,OLD.email,NEW.email,OLD.password,NEW.password,OLD.province_id,NEW.province_id,NOW());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER users_changes
AFTER  UPDATE OR DELETE ON users
FOR EACH ROW
EXECUTE FUNCTION log_users_changes();