import assert from "node:assert/strict";
import test from "node:test";

import { splitLinkedDescription } from "./project-description.ts";

test("separa la frase enlazada del resto de la descripción", () => {
  assert.deepEqual(
    splitLinkedDescription(
      "Sistema administrativo para Bastardos Barbería. Centraliza ingresos.",
      "Bastardos Barbería",
    ),
    {
      before: "Sistema administrativo para ",
      linkText: "Bastardos Barbería",
      after: ". Centraliza ingresos.",
    },
  );
});
