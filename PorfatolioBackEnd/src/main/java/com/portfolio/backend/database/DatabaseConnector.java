/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Cristian
 */
public class DatabaseConnector {
  private static final int MAX_RETRIES = 3;
  private static final int RETRY_DELAY_MS = 500;

  public Connection connect(String url, String user, String password) throws SQLException, InterruptedException {
    int retries = 0;
    while (true) {
      try {
        Connection connection = DriverManager.getConnection(url, user, password);
        return connection;
      } catch (SQLException e) {
        if (++retries > MAX_RETRIES) {
          throw e;
        }
        System.err.println("Failed to connect to database, retrying in " + RETRY_DELAY_MS + "ms...");
        Thread.sleep(RETRY_DELAY_MS);
      }
    }
  }

  public void close(Connection connection) {
    if (connection != null) {
      try {
        connection.close();
      } catch (SQLException e) {
        System.err.println("Error closing database connection: " + e.getMessage());
      }
    }
  }
}
