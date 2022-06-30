import { z } from "zod";

const Data = z.object({
  id: z.string(),
  name: z.string(),
});

type DataType = z.infer<typeof Data>;

interface DataFromApi {
  id: string;
  name: string;
}

fetch("/somthing")
  .then((response) => response.json())
  .then((result = { d: 3, b: 5 }) => {
    const data = Data.parse(result);
  });
