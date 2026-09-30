import * as z from 'zod'

export const envValidationSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    APP_PORT: z.coerce.number().int().positive().default(3000),

    DATABASE_HOST: z.string().min(1),
    DATABASE_PORT: z.coerce.number().int().positive().default(5432),
    DATABASE_USER: z.string().min(1),
    DATABASE_PASSWORD: z.string().min(1),
    DATABASE_NAME: z.string().min(1),
})

export type Env = z.infer<typeof schemaWithRules>

const schemaWithRules = envValidationSchema.superRefine((env, ctx) => {
    
})

export const validateEnv = (config: Record<string, unknown>): Env =>{
    const result = schemaWithRules.safeParse(config)

    if (!result.success) {
        const details = result.error.issues.map((issue) => `  - ${issue.path.join()}`)
    }
}