"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTest = void 0;
const product_1 = require("~/schema/product");
exports.createTest = () => {
    const test = new product_1.Product({
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
        }
        else {
            console.log("First seved!");
        }
    });
};
//# sourceMappingURL=index.js.map