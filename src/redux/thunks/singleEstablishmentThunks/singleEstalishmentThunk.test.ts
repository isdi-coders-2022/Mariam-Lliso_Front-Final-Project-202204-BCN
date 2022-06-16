import axios from "axios";
import { mockEstablishment } from "../../../mocks/establishmentMocks";
import { loadSingleEstablishmentActionCreator } from "../../features/singleEstablishmentSlice/singleEstablishmentSlice";
import { finishedLoadingActionCreator } from "../../features/uiSlice/uiSlice";
import { server } from "../mocks/server/server";
import { loadSingleEstablishmentThunk } from "./singleEstalbishmentThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadSingleEstablishmentThunk function thunk", () => {
  const testEstablishmentId = "629c6fab590f5fafee717fec";

  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: mockEstablishment,
        status: 200,
      });

      const loadAction =
        loadSingleEstablishmentActionCreator(mockEstablishment);
      const thunk = loadSingleEstablishmentThunk(testEstablishmentId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });

    describe("When invoked and no establishment received", () => {
      test("Then the dispatch function will be called", async () => {
        const dispatch = jest.fn();

        axios.get = jest.fn().mockResolvedValue({ data: "", status: 200 });

        const thunk = loadSingleEstablishmentThunk(testEstablishmentId);

        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When invoked but throws an error", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue(new Error());

      const action = finishedLoadingActionCreator();
      const thunk = loadSingleEstablishmentThunk(testEstablishmentId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
