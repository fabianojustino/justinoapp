const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const IS_PROD = process.env.APP_VARIANT === "production";

export default ({ config }) => ({
  ...config,
});

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.yourname.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.yourname.stickersmash.preview";
  }
  if (IS_PROD) {
    return "com.yourname.stickersmash.prod";
  }

  return "com.yourname.stickersmash";
};

const getAppName = () => {
  if (IS_DEV) {
    return "StickerSmash (Dev)";
  }
  if (IS_PREVIEW) {
    return "StickerSmash (Preview)";
  }
  if (IS_PROD) {
    return "StickerSmash (Prod)";
  }
};
