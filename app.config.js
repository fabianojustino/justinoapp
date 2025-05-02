const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const IS_PROD = process.env.APP_VARIANT === "production";

export default ({ config }) => ({
  ...config,
});

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.justinodev.hml";
  }

  if (IS_PREVIEW) {
    return "com.justinodev.hml";
  }

  if (IS_PROD) {
    return "com.justinodev.prod";
  }

  return "com.justinodev.hml";
};

const getAppName = () => {
  if (IS_DEV) {
    return "justinodev (Dev)";
  }
  if (IS_PREVIEW) {
    return "justinodev (Preview)";
  }
  if (IS_PROD) {
    return "justinodev (Prod)";
  }
};
