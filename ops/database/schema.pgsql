-- CREATE DATABASE IF NOT EXISTS codinghermit;
-- SELECT 'CREATE DATABASE codinghermit'
--   WHERE NOT EXISTS (
--     SELECT FROM pg_database WHERE datname = 'codinghermit'
--   )\gexec

-- \c codinghermit;

DROP TABLE IF EXISTS staffs CASCADE;
CREATE TABLE staffs (
  staffId BIGINT PRIMARY KEY
  , staffName VARCHAR(64)
  , emailId VARCHAR(64)
);

DROP TABLE IF EXISTS courses CASCADE;
CREATE TABLE courses (
  courseId VARCHAR(16) PRIMARY KEY
  , courseName VARCHAR(128) NOT NULL
  , staffId BIGINT
  , FOREIGN KEY (staffId) REFERENCES staffs(staffId)
);

DROP TABLE IF EXISTS students CASCADE;
CREATE TABLE students (
  studentId BIGINT PRIMARY KEY
  , studentName VARCHAR(64)
  , emailId VARCHAR(64)
);

DROP TABLE IF EXISTS enrollments CASCADE;
CREATE TABLE enrollments (
  courseId VARCHAR(16)
  , studentId BIGINT
  , FOREIGN KEY (courseId) REFERENCES courses(courseId)
  , FOREIGN KEY (studentId) REFERENCES students(studentId)
  , PRIMARY KEY (courseId, studentId)
);

-- create table users
-- (
--    id integer not null,
--    firstName varchar(255) not null,
--    lastName varchar(255) not null,
--    emailId varchar(255) not null,
--    primary key(id)
-- );
