-- Run these statements from pgAdmin (or psql) to provision the INTI app database
-- 1. Create a dedicated database user (optional but recommended)
--    CREATE USER inti_app_user WITH PASSWORD 'change_me';
-- 2. Create the application database owned by that user
--    CREATE DATABASE inti_app OWNER inti_app_user;
-- 3. Connect to the new database before executing the rest of this file

CREATE TABLE IF NOT EXISTS accounts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  student_id VARCHAR(32) NOT NULL UNIQUE,
  ic TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
