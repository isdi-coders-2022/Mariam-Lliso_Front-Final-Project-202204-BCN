import { rest } from "msw";
import {
  mockEstablishments,
  mockEstablishment,
} from "../../../../mocks/establishmentMocks";
import { mockUserProfile } from "../../../../mocks/userMocks";
import {
  createEstablishmentEndpoint,
  deleteEstablishmentsEndpoint,
  establishmentsListEndpoint,
} from "../../../../routes/establishmentEndpoints";
import { userProfileEndpoint } from "../../../../routes/userEndpoints";
import { IEstablishmentState } from "../../../../types/establishmentInterface";

export const mockTokenKey: string = "MARIPURI666MARIPURI666MARIPURI";

export const mockEstablishmentData: IEstablishmentState = {
  totalEstablishments: 0,
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  establishments: mockEstablishments,
};

export const handlers = [
  // establishment
  rest.get(
    `${process.env.REACT_APP_API_URL}${establishmentsListEndpoint}`,
    (_, res, ctx) => res(ctx.status(200), ctx.json(mockEstablishmentData))
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}${deleteEstablishmentsEndpoint}:id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: `The establishment has been deleted`,
        })
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}${createEstablishmentEndpoint}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockEstablishment));
    }
  ),
  rest.put(
    `${process.env.REACT_APP_API_URL}${createEstablishmentEndpoint}:id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ data: { editedEstablishment: mockEstablishment } })
      );
    }
  ),
  // user
  rest.get(
    `${process.env.REACT_APP_API_URL}${userProfileEndpoint}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockUserProfile));
    }
  ),
];
