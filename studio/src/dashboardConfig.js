export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a19a87c1a56fb2ee75dfc6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8iqcrgm3",
                  apiId: "897c1bae-d030-4018-809c-85dfc3761eeb",
                },
                {
                  buildHookId: "60a19a871e75cb96b3307004",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zxuqhquv",
                  apiId: "30de3500-925a-427e-b48e-248fbeb7a4ab",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NUKSI911/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zxuqhquv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
