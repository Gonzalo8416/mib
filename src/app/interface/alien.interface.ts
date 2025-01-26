export interface Crime {
  year: string;
  description: string;
}

export interface Alien {
  name: string;
  humanImg: string;
  alienImg: string;
  origin: string;
  city: string;
  reward: string;
  danger: string;
  planetImg: string;
  planet: string;
  system: string;
  species: string;
  planetDescription: string;
  speciesDescription: string;
  crimes: Crime[];
}
