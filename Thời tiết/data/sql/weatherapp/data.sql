-- Write your own SQL object definition here, and it'll be included in your package.
CREATE DATABASE minhnhan;
USE minhnhan;

CREATE TABLE Submitted_forms(
    id NVARCHAR(100) NOT NULL PRIMARY KEY,
    name NVARCHAR(100) NULL,
    details NVARCHAR(1000) NOT NULL
);