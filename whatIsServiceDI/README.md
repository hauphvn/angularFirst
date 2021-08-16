- Two ways injection a service:

1. Using annotation: ``@Injectable`` inside that service class.
2. Declaration that service at providers of app module.

- If we declare a service on a specify component, it will create a instance only for that component.
- So, we should declare a service at app module, or using annotation with ``provideIn: {root}``
