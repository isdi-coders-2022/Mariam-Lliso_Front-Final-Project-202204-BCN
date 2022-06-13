import singleEstablishmentSlice, {
  loadSingleEstablishmentActionCreator,
} from "./singleEstablishmentSlice";

describe("Given a singleEstablishmentSlice", () => {
  describe("When it receives an initial state and a loadSingleEstablishment action with 1 establishment as payload", () => {
    test("Then it should return a new establishment with same data than given one", () => {
      const initialStatus = {
        establishmentType: [],
        name: "",
        cusine: "",
        establishmentOffer: [],
        adress: "",
        municipality: "",
        region: "",
        phone: null,
        email: "",
        website: "",
        picture: "",
        pictureBackup: "",
        id: "",
      };

      const establishmentPayload = {
        establishmentType: [
          {
            code: "RES",
            description: "Restaurante",
          },
        ],
        name: "El barecito",
        cusine: "Tapas y bocadillos",
        establishmentOffer: [],
        adress: "Plaza del ayuntamiento, 34",
        municipality: "Meliana",
        region: "Valencia",
        phone: 963344488,
        email: "",
        website: "",
        picture: "mockImage.jpg",
        pictureBackup: "mockImage.jpg",
        id: "6294aa4bc78dbede94290071",
      };

      const expectedNewState = { ...establishmentPayload };

      const loadEstablishmentAction =
        loadSingleEstablishmentActionCreator(establishmentPayload);

      const newState = singleEstablishmentSlice(
        initialStatus,
        loadEstablishmentAction
      );

      expect(newState).toEqual(expectedNewState);
    });
  });
});
