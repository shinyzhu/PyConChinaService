module.exports = ({ env }) => ({
  upload: {
    provider: "azure-storage",
    providerOptions: {
      account: "rgeastasiadiag487",
      accountKey: env("STORAGE_ACCOUNT_KEY"),
      serviceBaseURL: "https://rgeastasiadiag487.blob.core.windows.net/",
      containerName: "pycon",
      defaultPath: "",
      maxConcurrent: 10,
    },
  },
});
