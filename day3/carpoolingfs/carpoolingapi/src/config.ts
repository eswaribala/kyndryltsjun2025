export const config = {
    HOST: "localhost",
    PORT: 5432,
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "carpoolingdb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const dialect = "postgres";