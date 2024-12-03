export default defineAppConfig({
  ui: {
    primary: "sky",
    gray: "zinc",
    card: {
      base: "h-full",
      background: "bg-gray-100 dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "",
      ring: "",
      body: {
        base: "h-full",
      },
    },
    input: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    select: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    button: {
      color: {
        white: {
          solid:
            "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-800 dark:hover:bg-gray-800/80 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        },
      },
    },
  },
});
