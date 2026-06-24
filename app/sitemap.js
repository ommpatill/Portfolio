export default function sitemap() {
  const baseUrl = "https://ompatilportfolio.vercel.app";

  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/certifications`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}