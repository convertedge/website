import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    index: defineCollection({
      source: "index.yml",
      type: "data",
      schema: z.object({
        title: z.string().nonempty(),
        subtitle: z.string().nonempty(),
        logos: z.string().nonempty(),
        usecases: z.object({
          title: z.string().nonempty(),
          items: z.array(
            z.object({
              label: z.string().nonempty(),
              icon: z.string().nonempty(),
            })
          ),
        }),
        features: z.object({
          title: z.string().nonempty(),
          items: z.array(
            z.object({
              title: z.string().nonempty(),
              description: z.string().nonempty(),
            })
          ),
        }),
        cta: z.object({
          title: z.string().nonempty(),
          subtitle: z.string().nonempty(),
          link: z.object({
            label: z.string().nonempty(),
            to: z.string().nonempty(),
          }),
        }),
      }),
    }),
    faq: defineCollection({
      source: "faq.yml",
      type: "data",
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
          })
        ),
      }),
    }),
    pricing: defineCollection({
      source: "pricing.yml",
      type: "data",
      schema: z.object({
        title: z.string().nonempty(),
        perks: z.object({
          title: z.string().nonempty(),
          items: z.array(z.string().nonempty()),
        }),
      }),
    }),
  },
});
