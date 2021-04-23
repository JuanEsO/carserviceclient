# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Comentarios

se crearon dos componentes aparte de los que ya tenia el proyecto, los cuales fueron owner-list, el cual no proporciona una lista de todos los owners registrados en la api, y ademas nos da acceso al otro componente creado llamado edit-owner, el que como su nombre lo dice, nos permite editar un elemento owner o tambien permite crear un owner nuevo.

al componente list-cars se le adiciono la opcion de ver su owner asociado y ademas se le adiciono un boton para ir al componente owner-list, al componente edit-car se le adiciono la opcion de asociarle un owner al elemento car

se creo un servicio owner.service que por medio de http request, nos permite hacer peticiones get, post, put y delete sobre la api de owners
