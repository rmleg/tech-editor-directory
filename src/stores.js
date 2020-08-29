import { writable } from "svelte/store";

export const filters = writable({
  additionalServices: [],
  crafts: [],
  specialties: [],
  languages: [],
  typesOfProjects: [],
});
