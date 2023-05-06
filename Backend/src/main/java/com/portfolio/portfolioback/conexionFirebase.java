/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template

 */
package com.portfolio.portfolioback;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;


public class conexionFirebase {
    
    static Firestore bd;
    
    public static void conectar() throws FileNotFoundException, IOException{
        FileInputStream serviceAccount =
            new FileInputStream("yoprogramo.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://yoprogramoprogramo-default-rtdb.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
        bd = FirestoreClient.getFirestore();
        System.out.println("Se conecto con Exito");
    }
    
   public static void main(String[] args){
        try{
            conectar();
        } catch (IOException e) {
            e.printStackTrace();
        }
}
}
