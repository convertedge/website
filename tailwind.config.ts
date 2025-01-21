import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
    },
  },
};
