<p align="center">
  <img width="150" src="https://cristiantait.com/imgAP/logo.png" alt="Portafolio Backend proyecto final Argentina Programa">
</p>

<p>El Jar del Proyecto esta subido en https://cristiantait.com/MVN/APCDT.jar y configurado dentro del Dockerfile para Render.</p>

<h1>Documentación del proyecto de backend en Apache NetBeans con Spring Boot</h1>
<p>Este proyecto de backend fue desarrollado en Apache NetBeans utilizando el framework Spring Boot de Java. A continuación se describen algunos detalles importantes del proyecto:</p>
<h2>Estructura del proyecto</h2>
<p>El proyecto está estructurado en diferentes paquetes de Java que contienen las diferentes capas de la aplicación. Los paquetes son los siguientes:</p>
<ul>
  <li>com.portfolioap.backend: contiene la clase principal que inicia la aplicación</li>
  <li>com.portfolioap.backend.controller: contiene las clases controladoras de la aplicación que se encargan de recibir las peticiones y enviar las respuestas al cliente</li>
  <li>com.portfolioap.backend.exception: contiene las clases que definen las excepciones personalizadas de la aplicación</li>
  <li>com.portfolioap.backend.model: contiene las clases que definen los modelos de datos utilizados en la aplicación</li>
  <li>com.portfolioap.backend.repository: contiene las clases que definen los repositorios utilizados para interactuar con la base de datos</li>
  <li>com.portfolioap.backend.service: contiene las clases que definen los servicios utilizados para realizar la lógica de negocio de la aplicación</li>
  <li>com.portfolioap.backend.util: contiene las clases que definen utilidades utilizadas en la aplicación</li>
</ul>
<h2>Clonación del repositorio</h2>
<p>Para clonar el repositorio de GitHub del proyecto de backend en Apache NetBeans con Spring Boot, siga estos pasos:</p>
<ol>
  <li>Abra la línea de comandos en su computadora</li>
  <li>Cree una nueva carpeta en su computadora donde desea clonar el repositorio</li>
  <li>Ejecute el siguiente comando: <code>git clone https://github.com/CristianTait/Portfolio-AP.git</code></li>
  <li>Ingrese a la carpeta PorfatolioBackEnd</li>
</ol>
<h2>Configuración en Apache NetBeans</h2>
<p>Para poder utilizar el proyecto de backend en Apache NetBeans, siga estos pasos:</p>
<ol>
  <li>Abra Apache NetBeans</li>
  <li>Haga clic en "File" y luego en "Open Project"</li>
  <li>Navegue hasta la carpeta PorfatolioBackEnd y seleccione el archivo pom.xml</li>
  <li>Haga clic en "Open Project"</li>
  <li>Una vez que el proyecto haya sido importado, haga clic derecho en el proyecto y seleccione "Properties"</li>
  <li>En el panel de propiedades, seleccione "Run"</li>
  <li>En el campo "Main Class", seleccione la clase "com.portfolioap.backend.PortfolioApBackendApplication"</li>
  <li>En el campo "Arguments", agregue los argumentos necesarios para su configuración local</li>
  <li>Guarde los cambios</li>
</ol>

<h1>URL y JSON de los endpoints de la API REST</h1>
<p>Para probar los endpoints de la API REST del proyecto de Spring Boot, se puede utilizar la herramienta Postman.
Postman es una herramienta de pruebas de API REST que permite enviar solicitudes HTTP a un servidor web y analizar la respuesta.
Para comenzar a utilizar Postman, es necesario tener instalada la aplicación en su equipo. La misma puede descargarse de manera gratuita desde la página oficial de Postman: https://www.postman.com/downloads/.
Para importar las colecciones, se debe hacer clic en el botón "Import" de la interfaz de usuario de Postman y seleccionar el archivo JSON descargado.
Este archivo contiene todas las solicitudes de ejemplo para cada uno de los endpoints de la API REST del proyecto de Spring Boot.</p>
<p>Documentacion API Postman:</p>
https://web.postman.co/workspace/My-Workspace~79c74c25-f349-4e7d-84ae-46b28c67fa2b/documentation/26172216-2e9bae69-d534-44d7-85e9-0a573e1471ea

<h2>Configuración de la base de datos</h2>

<p>La aplicación utiliza una base de datos MySQL. Para configurar la conexión a la base de datos, es necesario modificar el archivo <code>application.properties</code> ubicado en la ruta <code>src/main/resources</code>.</p>

<p>Los parámetros que se deben modificar son:</p>

<pre>
spring.datasource.url=jdbc:mysql://localhost:3306/nombre_base_datos
spring.datasource.username=nombre_usuario
spring.datasource.password=contraseña
</pre>

<p>Reemplace <code>nombre_base_datos</code>, <code>nombre_usuario</code> y <code>contraseña</code> con los valores correspondientes.</p>

<p>Es necesario tener instalado un servidor de base de datos MySQL, como XAMPP. A continuación se detallan los pasos para instalar y configurar XAMPP:</p>

<ol>
  <li>Descargar XAMPP desde la página oficial: <a href="https://www.apachefriends.org/es/download.html">https://www.apachefriends.org/es/download.html</a></li>
  <li>Ejecutar el archivo de instalación y seguir las instrucciones del asistente de instalación.</li>
  <li>Una vez instalado, abrir XAMPP y asegurarse de que los módulos Apache y MySQL estén activados.</li>
  <li>En el navegador web, abrir la página <code>http://localhost/phpmyadmin/</code> para acceder a la interfaz web de administración de la base de datos.</li>
  <li>Crear una nueva base de datos con el nombre deseado y configurar los permisos de usuario necesarios.</li>
  <li>Actualizar el archivo <code>application.properties</code> con los valores correspondientes de la base de datos creada.</li>
</ol>

<p>Una vez realizados estos pasos, la aplicación debería estar lista para funcionar con la nueva base de datos configurada.</p>
