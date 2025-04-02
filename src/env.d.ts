import { LanguageCode } from "./types";

declare namespace Astro {
  interface Locals {}
}

declare module "astro" {
  interface AstroGlobal {
    currentLocale: LanguageCode | undefined;
  }
}
