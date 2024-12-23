# JavaScript Junior Developer Interview Challenges

Bienvenido a este repositorio que contiene problemas de entrevista técnica enfocados en la manipulación de arrays en JavaScript. Estos problemas están diseñados para ayudar a los desarrolladores junior a prepararse para entrevistas técnicas.

## Estructura del Repositorio

```
/interview-prep-js
│
├── README.md
├── LICENSE
│
├── problems/
│   ├── problem1.js
│   ├── problem2.js
│   ├── problem3.js
│   └── ... (otros problemas)
│
├── tests/
│   ├── problem1.test.js
│   ├── problem2.test.js
│   ├── problem3.test.js
│   └── ... (otros tests)
```

## Instrucciones

### 1. Clonar el Repositorio

Primero, clona este repositorio en tu máquina local:

```sh
git clone https://github.com/etzadev/interview-prep-js.git
cd interview-prep-js
```

### 2. Instalar Dependencias

```sh
npm install
# o
yarn install
```

### 3. Resolver Problemas

Los problemas se encuentran en la carpeta `problems/`. Cada archivo contiene la descripción del problema y un esqueleto de la función que necesitas implementar. Por ejemplo:

```javascript
// problems/problem1.js

/**
 * Escribe una función que reciba un array de números y devuelva la suma máxima
 * de cualquier subarray contiguo.
 * @param {number[]} arr - Array de números.
 * @returns {number} - Suma máxima del subarray contiguo.
 */
export const maxSubArraySum(arr) {
  // Implementa tu solución aquí
}
```

### 4. Ejecutar Pruebas

Las pruebas se encuentran en la carpeta `tests/` y están asociadas con los problemas en `problems/`. Para ejecutar las pruebas, usa un framework de pruebas como Jest:

```sh
npm run test
# o
yarn test
```

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas añadir más problemas o mejorar las pruebas existentes, por favor, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits (`git commit -am 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](./LICENSE).
