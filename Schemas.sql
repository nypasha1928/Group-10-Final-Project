CREATE TABLE stroke_data (
	id INT NOT NULL,
	gender VARCHAR(10) NOT NULL,
	age DOUBLE PRECISION NOT NULL,
	hypertension INT NOT NULL,
	heart_disease INT NOT NULL,
	ever_married VARCHAR(10) NOT NULL,
	work_type VARCHAR(30) NOT NULL,
	Residence_type VARCHAR(30) NOT NULL,
	avg_glucose_level DOUBLE PRECISION NOT NULL, 
	bmi DOUBLE PRECISION NOT NULL, 
	smoking_status VARCHAR(30),
	stroke INT NOT NULL,
	PRIMARY KEY (id)
    );


CREATE TABLE stroke_data_2 (
    id INT NOT NULL,
	gender VARCHAR(10) NOT NULL,
	age DOUBLE PRECISION NOT NULL,
	hypertension INT NOT NULL,
	heart_disease INT NOT NULL,
	ever_married VARCHAR(10) NOT NULL,
	work_type VARCHAR(30) NOT NULL,
	Residence_type VARCHAR(30) NOT NULL,
	avg_glucose_level DOUBLE PRECISION NOT NULL, 
	bmi DOUBLE PRECISION NOT NULL, 
	smoking_status VARCHAR(30),
	stroke INT NOT NULL,
	PRIMARY KEY (id)
    );

CREATE TABLE total_stroke_data AS 
SELECT * 
FROM stroke_data
UNION 
SELECT * 
FROM stroke_data2;

SELECT * FROM total_stroke_data;

SELECT stroke FROM stroke_data2;