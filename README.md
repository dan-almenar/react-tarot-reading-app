# React Tarot Reading App

## Introduction
As part of the [**Codo a Codo: React + Go**](https://www.buenosaires.gob.ar/educacion/codo-codo) programming bootcamp, we were asked to develop a [React](https://reactjs.org/) app that allows users to get their fortune read by Tarot Cards.

Some key features that said app should have were listed for us, and can be reduced to the following list:
- App needs to get input from the user (name, email, date of birth and gender at the least).
- Tarot Cards could be defined by ourselves (via a JSON file) or fetched from an external API. This app follows the latter approach, thanks to [this free API](https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0). Not required, yet I added an horoscope feature (based on user's birthday) thanks to [this free API](https://rapidapi.com/sameer.kumar/api/aztro/).
- Some functionality needs to make users get the feeling there's some actual processing between the data input and the almost instant result from the API fetch. So, at the very least, a *setTimeout* function needs take place in order to achieve that goal.
- Whilst UI/UX are not the top evaluated factor, some creativity in that regard is always welcome. Students have absolute freedom on choosing whatever CSS and/or react components frameworks or libraries to achieve said result -or non at all-. On that note, I added [Bulma](https://bulma.io) and [Google Material Icons](https://fonts.google.com/icons).

Added features beyond of the scope of the test:
- Typescript.
- Routing.
- useEffect.

## [Live version](https://ophiuchus-oracle.netlify.app/)

## About clonning this repo:
The App was created with [Vite](https://vitejs.dev/).

After cloning this repo, open a terminal/prompt window, navigate to the projects folder and type:
```bash
   npm install
```

For running the project in development mode, use the following command in your terminal:
```bash
    npm run dev
```

When the App loads, go into your browser at **localhost:3000**

## Introducción
Como parte del programa [**Codo a Codo: React + Go**](https://www.buenosaires.gob.ar/educacion/codo-codo) del Gobierno de la Ciudad de Buenos Aires, nos encomendaron a hacer una App con [React](https://react.org/) que le permitiese a los usuarios tener una lectura de su fortuna a través de cartas del tarot  (ver nota abajo).

Como parte de la actividad, la app debía contener algunas funcionalidades básicas, que pueden resumirse de la siguiente manera:
- La App debía obtener del usuario una serie de datos (nombre, email, fecha de nacimiento y género como mínimo).
- Los datos relativos a las cartas del tarot podían ser diseñados por nosotros mismos (vía un archivo JSON) o ser extraída de una API externa. Esta App sigue la última de dichas posibilidades, gracias a [esta API gratuita](https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0). Aunque no era un requisito, añadí una funcionalidad de horóscopo (basada en la fecha de nacimiento del usuario) gracias a [esta API gratuita](https://rapidapi.com/sameer.kumar/api/aztro/).
- Una funcionalidad debe ser añadida para que los usuarios tengan una sensación de procesamiento entre el ingreso de los datos y el casi instantáneo resultado de la extracción de la data de la API. Así, una función *setTimeout* debe ser implementada para alcanzar ese resultado.
- Aunque la UI/UX no son los principales factores de evaluación, alguna creatividad en ese sentido es bienvenida. Los estudiantes tienen completa libertad de elegir cualesquiera frameworks o librerías de CSS o de componentes react para tal fin -o ninguno-. En este sentido, hice uso de [Bulma](https://bulma.io) y los [Material Icons de Google](https://fonts.google.com/icons).

Características añadidas más allá del área de la prueba:
- Typescript.
- Routing.
- useEffect.

## [Versión final](https://ophiuchus-oracle.netlify.app/)

## Sobre clonar esta App:
Esta App fue creada con [Vite](https://vitejs.dev)

Después de clonar el repo, abra una terminal/prompt y, navegue hasta la carpeta del proyecto y escriba:
```bash
    npm install
```

Para correr la App en modo de desarrollo, utilice este comando:
```bash
    npm run dev
```

Una vez que la App haya cargado, abra su navegador en **localhost:3000**

## Nota importante:
Si bien el programa Codo a Codo es una iniciativa del Gobierno de la Ciudad de Buenos Aires, la App desarrollada está entéramente en Inglés, toda vez que las bases de datos de las API gratuitas utilizadas están definidas en ese idioma.
