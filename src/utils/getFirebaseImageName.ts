export const getFirebaseImageName = (imageUrl: string): string => {
  imageUrl = imageUrl.replace(
    "https://firebasestorage.googleapis.com/v0/b/valencia-sin-gluten.appspot.com/o/",
    ""
  );

  imageUrl = imageUrl.replace(/\?.*/, "");

  return imageUrl;
};
