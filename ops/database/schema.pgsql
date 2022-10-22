-- CREATE DATABASE IF NOT EXISTS codinghermit;
-- SELECT 'CREATE DATABASE codinghermit'
--   WHERE NOT EXISTS (
--     SELECT FROM pg_database WHERE datname = 'codinghermit'
--   )\gexec

-- \c codinghermit;

DROP TABLE IF EXISTS staffs CASCADE;
CREATE TABLE IF NOT EXISTS staffs (
  staffId BIGINT PRIMARY KEY
  , staffName VARCHAR(64) NOT NULL
  , emailId VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS courses CASCADE;
CREATE TABLE IF NOT EXISTS courses (
  courseId BIGINT PRIMARY KEY
  , courseName VARCHAR(128) NOT NULL
  , staffId BIGINT NOT NULL
  , FOREIGN KEY (staffId) REFERENCES staffs(staffId)
);

DROP TABLE IF EXISTS students CASCADE;
CREATE TABLE IF NOT EXISTS students (
  studentId BIGINT PRIMARY KEY
  , studentName VARCHAR(64) NOT NULL
  , emailId VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS enrollments CASCADE;
CREATE TABLE IF NOT EXISTS enrollments (
  courseId BIGINT
  , studentId BIGINT
  , FOREIGN KEY (courseId) REFERENCES courses(courseId)
  , FOREIGN KEY (studentId) REFERENCES students(studentId)
  , PRIMARY KEY (courseId, studentId)
);

INSERT INTO staffs VALUES (1, 'Staff1', 'staff1@email.com') ON CONFLICT DO NOTHING;
INSERT INTO staffs VALUES (2, 'Staff2', 'staff2@email.com') ON CONFLICT DO NOTHING;

INSERT INTO courses VALUES (1, 'Course1', 1) ON CONFLICT DO NOTHING;
INSERT INTO courses VALUES (2, 'Course2', 2) ON CONFLICT DO NOTHING;

INSERT INTO students VALUES (1, 'Student1', 'student1@email.com') ON CONFLICT DO NOTHING;
INSERT INTO students VALUES (2, 'Student2', 'student2@email.com') ON CONFLICT DO NOTHING;

INSERT INTO enrollments VALUES (1, 1) ON CONFLICT DO NOTHING;
INSERT INTO enrollments VALUES (2, 2) ON CONFLICT DO NOTHING;

-- INSERT INTO users VALUES (DEFAULT, 'ADMIN') ON CONFLICT DO NOTHING;

-- GENERATED ALWAYS AS IDENTITY

-- CREATE TABLE IF NOT EXISTS roles (
--   role_id SERIAL NOT NULL PRIMARY KEY,
--   role_name VARCHAR(255) DEFAULT NULL
-- );

-- CREATE TABLE IF NOT EXISTS users (
--   user_id SERIAL NOT NULL PRIMARY KEY,
--   active int DEFAULT 0,
--   login_id VARCHAR(255) NOT NULL,
--   user_name VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS user_roles (
--   user_id INT NOT NULL,
--   role_id INT NOT NULL,
--   PRIMARY KEY (user_id,role_id)
-- );

-- INSERT INTO roles VALUES (DEFAULT, 'ADMIN') ON CONFLICT DO NOTHING;
-- INSERT INTO roles VALUES (DEFAULT, 'ADMIN') ON CONFLICT DO UPDATE;

-- create table users
-- (
--    id integer not null,
--    firstName varchar(255) not null,
--    lastName varchar(255) not null,
--    emailId varchar(255) not null,
--    primary key(id)
-- );
