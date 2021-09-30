CREATE TABLE clientes (
    cliente_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    cpf VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    adress VARCHAR NOT NULL
)


CREATE TABLE suplaiers (
    suplaier_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    cnpj VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    adress VARCHAR NOT NULL
)


CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    value NUMERIC NOT NULL,
    description VARCHAR NOT NULL,
    stock INT NOT NULL,
    suplaier_id INT NOT NULL,
    CONSTRAINT fksuplaiers FOREIGN KEY (suplaier_id) REFERENCES suplaiers (suplaier_id)
)

CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    product_id INT NOT NULL,
    value NUMERIC NOT NULL,
    date DATE NOT NULL,
    CONSTRAINT fkclientes FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
    CONSTRAINT fkproduct FOREIGN KEY (product_id) REFERENCES products (product_id)
)

