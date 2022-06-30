// Example

export function deepEqualCompare<Arg>(
  a: Arg extends any[] ? "Don't pass arrays argument!" : Arg,
  b: Arg extends any[] ? "Don't pass arrays argument!" : Arg
): boolean {
  return a === b;
}

const val = deepEqualCompare({}, {});

const func = (val: { name: string } | { age: number }) => {
  if ("name" in val) {
    return val.name;
  }
  if ("age" in val) {
    return val.age + 1000;
  }
};

func({ name: "3" });
func({ age: 9 });

type Letter = {
  a: number;
  b: string;
  c: {
    name: string;
  };
};

type LetterKey = keyof Letter;
type LetterValue = Letter[keyof Letter];

const letter: LetterKey = "a";
const letterValue: LetterValue = { name: "3" };
