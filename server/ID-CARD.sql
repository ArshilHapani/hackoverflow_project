use mysql;

create database id_card;

uae id_card;

create table admin(
    a_id char(10) PRIMARY KEY,
    a_pwd char(60)
);

create table student(
    s_enroll char(18),
    s_spid int(10) PRIMARY KEY,
    s_name varchar(50) NOT NULL,
    s_pwd char(60),
    s_stream varchar(20),
    s_dob date,
    s_contact varchar(15),
    s_address varchar(200),
    s_blood varchar(5),
    s_status varchar(10)
);

create table employee(
    e_id int(2) PRIMARY KEY,
    e_name varchar(50) NOT NULL,
    e_pwd char(60),
    e_pos varchar(50),
    e_dept varchar(50) NOT NULL,
    e_dob date,
    e_contact varchar(15) NOT NULL,
    e_address varchar(200),
    e_blood varchar(5),
    e_status varchar(10)
);