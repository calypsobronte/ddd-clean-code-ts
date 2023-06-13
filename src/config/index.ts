export default {
    port: process.env.PORT,
    database: {
        mongodb: { connectionString: process.env.DB_URI }
    },
    swaggerSpec: {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Clean code - arquitecture DDD with Typescript',
                description:
                    "Esta API es documentada con Swagger, así se puede lograr un correcto y adecuado manejo a la misma.",
                contact: {
                    name: "Soy CalypsoBronte",
                    email: "codelinamaria@gmail.com",
                },
                version: '1.0.0'
            },
            servers: [
                {
                    url: process.env.SERVER_LOCAL,
                    description: "Local serve"
                }

            ],
            components: {
            },
            security: [
            ],
        },
        apis: ['./dist/docs/*.js', './docs/*.ts']

    }
}