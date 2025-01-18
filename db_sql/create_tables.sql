BEGIN;

CREATE TABLE bottle_tracker (
    id BIGSERIAL PRIMARY KEY,
    name varchar(750) NOT NULL,
    description text,
    created timestamptz default NULL,
    updated timestamptz default NULL
);

CREATE TABLE bottle_details (
    id BIGSERIAL PRIMARY KEY,
    bottle_tracker_id BIGINT REFERENCES bottle_tracker NOT NULL,
    rating varchar(100),
    country varchar(250),
    appellation varchar(100),
    alcohol varchar(100),
    aging_cooperage varchar(500),
    ta varchar(100),
    farming varchar(500),
    vineyard varchar(250),
    region varchar(250),
    varietal varchar(100),
    wine_maker varchar(250),
    ph varchar(100),
    blend varchar(255),
    harvest_date varchar(255),
    production varchar(100),
    created timestamptz default NULL,
    updated timestamptz default NULL
);

CREATE TABLE bottle_pricing (
    id BIGSERIAL PRIMARY KEY,
    bottle_tracker_id BIGINT REFERENCES bottle_tracker NOT NULL,
    price integer,
    retail_price integer,
    web_price integer,
    created timestamptz default NULL,
    updated timestamptz default NULL
);
ROLLBACK;
-- COMMIT;