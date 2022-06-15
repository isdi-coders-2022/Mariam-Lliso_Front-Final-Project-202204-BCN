import { getFirebaseImageName } from "./getFirebaseImageName";

describe("Given getFirebaseImageName function", () => {
  describe("When its invoked with the given link", () => {
    test("Then it should return the name of image 'pumpkin-the-hamster.png'", () => {
      // Arrange
      const givenLink =
        "https://firebasestorage.googleapis.com/v0/b/valencia-sin-gluten.appspot.com/o/pumpkin-the-hamster.png?alt=media&token=90071fab-dc9b-463a-9380-b1799e354de5";
      const expectedImageName = "pumpkin-the-hamster.png";
      // Act
      const result = getFirebaseImageName(givenLink);
      // Assert
      expect(result).toBe(expectedImageName);
    });
  });
});
