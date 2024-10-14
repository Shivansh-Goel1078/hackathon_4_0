import { Injectable } from '@angular/core';
const mysql = require('mysql2/promise');
@Injectable({
  providedIn: 'root'
})
export class DbconnectorService {

  constructor() { }
  // config.js
  config = {
  db: {
      host: 'localhost',
      user: 'root', // replace with your MySQL username
      password: 'syspassword', // replace with your MySQL password
      database: 'dropzone_python', // replace with your database name
  },
};
 getConnection() {
  return mysql.createConnection(this.config.db);
}

 query(sql: any, params: any) {
  const connection =  this.getConnection();
  const [results] =  connection.execute(sql, params);
   connection.end(); // Close the connection after the query
  return results;
}

}
