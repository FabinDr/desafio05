CREATE DATABASE ma_guide;

USE ma_guide;

CREATE TABLE destinos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(255)
);

CREATE TABLE atrativos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    destino_id INT,
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(50),
    descricao TEXT,
    dicas TEXT,
    FOREIGN KEY(destino_id) REFERENCES destinos(id)
);
