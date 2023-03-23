import { define } from "$lib/define";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const word = params.query;

  const definitions = await define(word);

  return {
    definitions,
  };
}
