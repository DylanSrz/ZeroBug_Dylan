export const EnvConfig = () => ({
    app: {
        port: Number(process.env.APP_PORT),
        env: process.env.NODE_ENV,
    },
    database: {
        type: process.env.DATABASE_TYPE || 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true
    }

})