// type Animal = {};

// type Human = {};

// type GetRequiredInfromation<TType> = any;

// export type RequiredInformationForAnimal = GetRequiredInfromation<Animal>;

// export type RequiredInformationForHuman = GetRequiredInfromation<Human>;
// export {};

//  SOLUTION

type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInfromation<TType> = TType extends Animal
  ? { age: string }
  : TType extends Human
  ? { socialSecurityNumber: number }
  : TType extends { planet: string }
  ? { growUp: string }
  : never;

export type RequiredInformationForAnimal = GetRequiredInfromation<Animal>;

export type RequiredInformationForHuman = GetRequiredInfromation<Human>;

export type RequiredInformationForPlanet = GetRequiredInfromation<{
  planet: string;
}>;
