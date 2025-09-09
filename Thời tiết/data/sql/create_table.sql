USE data;
CREATE TABLE Submitted_forms(
    id INT PRIMARY KEY NOT NULL,
    name NVARCHAR(100) NOT NULL,
    details NVARCHAR(1000)
);