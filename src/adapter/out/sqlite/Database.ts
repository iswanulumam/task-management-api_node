import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export default async function openDb() {
  return open({
    filename: './db_sqlite/database.sqlite',
    driver: sqlite3.Database
  });
}