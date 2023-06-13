/**
 * @swagger
 * components:
 *  schemas:
 *      users:
 *          summary: Crear un nuevo usuario
 *          type: object
 *          properties:
 *              uuid:
 *                  type: string
 *                  description: Identificador del usuario, viene desde la API
 *              name:
 *                  type: string
 *                  description: Nombre del usuario
 *              description:
 *                  type: string
 *                  description: Cualquier tipo de texto a ingresar
 *          required:
 *              - name
 *              - description
 *          example:
 *              name: "Juan"
 *              description: "Este es un test ddd"
 * 
 * @swagger
 * /users/create:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/users'
 *      responses:
 *          201:
 *              description: created successful
 *          400:
 *              description: Bad Request
 *          500:
 *              description: internal server error    
 * 
 * @swagger
 * /users/all:
 *  get:
 *      summary: Obtener todos los usuarios, registrados en la plataforma
 *      tags: [users]
 *      description: Trae la información de los usuarios solicitado
 *      responses:
 *          200:
 *              description: resultado de búsqueda que coincide con criterio
 *          500:
 *              description: error
 * @swagger
 * /users/{uuid}:
 *  get:
 *      summary: Lista la informacion del usuario por id
 *      tags: [users]
 *      parameters:
 *          - in: path
 *            name: uuid
 *            schema:
 *              type: string
 *            required: true
 *            description: uuid del usuario registrado en la plataforma
 *      responses:
 *          200:
 *              description: A users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/users'
 *          401:
 *              description: error
 */