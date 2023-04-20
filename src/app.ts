import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validations failed", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    //  TODO: Here we should log to an external tool like DataLog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal Server Error" });
});
