import { type Config } from "drizzle-kit"

import { env } from "~/env"

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["theo-t3-gallery_*"],
} satisfies Config
