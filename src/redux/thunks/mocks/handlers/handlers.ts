import { rest } from "msw";
import { mockEstablishments } from "../../../../mocks/establishmentMocks";
import { establishmentsListEndpoint } from "../../../../routes/establishmentEndpoints";
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
  rest.get(
    `${process.env.REACT_APP_API_URL}${establishmentsListEndpoint}`,
    (_, res, ctx) => res(ctx.status(200), ctx.json(mockEstablishmentData))
  ),
];
