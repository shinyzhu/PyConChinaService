module.exports = ({ env }) => ({
  upload: {
    provider: "azure-storage",
    providerOptions: {
      account: "sres",
      accountKey: env("STORAGE_ACCOUNT_KEY"),
      serviceBaseURL: "https://sres.blob.core.windows.net/",
      containerName: "img",
      defaultPath: "",
      maxConcurrent: 10,
    },
  },
});
