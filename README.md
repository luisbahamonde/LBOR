## LBOR - IONIC V4

LBOR es un proyecto de código abierto desarrollado en [ionic 4](http://ionicframework.com/) pensado para facilitar el acceso a los datos de [LibreBOR](https://librebor.me/) desde una aplicacion movil.

### Instalación

Instalación de la última versión disponible de ionic y codova.

```bash
$ sudo npm install -g ionic cordova

```

después clona e instala proyecto

```bash
$ git clone https://github.com/luisbahamonde/LBOR.git
$ cd LBOR
$ npm install
```

añade la plataforma compila y listo. 

```bash
$ ionic cordova platform add ios
$ ionic cordova build ios
```

Para saltar el error de [CORS](https://ionicframework.com/docs/faq/cors) se utiliza el plugin [cordova-plugin-advanced-http](https://ionicframework.com/docs/native/http/). Este plugin no funciona en el navegador. Para probar la aplicación correctamente se debe de instalar en un dispositivo o emulador ios/android.

*Made with ♡ by [Roocket Labs](https://roocket.io)*
