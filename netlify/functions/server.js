import { handler as angularHandler } from "../../dist/pals-web/server/server.js";

export const handler = async (event, context) => {
  return await angularHandler(event, context);
};
