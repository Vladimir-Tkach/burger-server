import { Product } from "~/schema/product";

export const createTest = () => {
  const test = new Product({
    name: "Овощной",
    description: "Соус и овощи на выбор",
    image: "/i/sandwiches/ovoshnoy.png",
    price: 105,
    category: "sandwiches",
    market: "subway",
    type: "multiple",
    weight: 1,
    components: {
      size: "1x",
      bread: "white-italian",
      vegetable: [],
      sauce: [],
      filling: [],
    },
  });

  test.save((err) => {
    if (err) {
      console.log("err: ", err);
    } else {
      console.log("First seved!");
    }
  });
};
