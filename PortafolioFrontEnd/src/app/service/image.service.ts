import { Injectable } from "@angular/core";
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { from, first} from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { EmailAuthProvider } from 'firebase/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: "root"
})
export class ImageService {
  url: string = "";
  constructor(
    private storage: AngularFireStorage,
    private auth: AngularFireAuth
  ) {}

  public async uploadImage($event: any, name: string): Promise<void> {
    // código para subir imagen
  }

  async getImages(): Promise<void> {
    // código para obtener imágenes
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    const user = await this.auth.currentUser;
    if (user) {
      const credentials = EmailAuthProvider.credential(user.email!, currentPassword);
      try {
        await user.reauthenticateWithCredential(credentials);
        await user.updatePassword(newPassword);
        console.log('Contraseña cambiada exitosamente.');
      } catch (error) {
        console.log('Error al cambiar contraseña:', error);
      }
    } else {
      console.log('No hay un usuario autenticado.');
    }
  }

  async updateImage(imagePath: string, file: File): Promise<string | null> {
    const imgRef = this.storage.ref(imagePath);
    try {
      const currentUser = await this.auth.currentUser;
      if (currentUser) {
        await imgRef.put(file);
        const url = await imgRef.getDownloadURL().toPromise();
        if (url) {
          return url;
        } else {
          console.log("No se pudo obtener la URL de descarga de la imagen actualizada.");
        }
      } else {
        console.log("Se requiere autenticación para actualizar la imagen.");
      }
    } catch (error) {
      console.log('Error al actualizar imagen:', error);
      return null;
    }
    return null;
  }

  async login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    return this.auth.signOut();
  }
}