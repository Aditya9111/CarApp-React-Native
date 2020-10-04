import Product from "../model/products";
import Detail from "../model/detail";

export const PRODUCT = [
  new Product("i1", "Waterless Cleanning", "white"),
  new Product("i2", "Waxing", "white"),
  new Product("i3", "Polish", "white"),
  new Product("i4", "Ceramic Coating", "white"),
  new Product("i5", "Clay Bar Treatment", "white"),
  new Product("i6", "Tyre Dressing", "white"),
];

export const Details = [
  new Detail("i1", "Water less cleaning", "image", 299),
  new Detail("i2", "Water less cleaning", "image", 149),
  new Detail("i3", "Water less cleaning", "image", 2999),
  new Detail("i4", "Water less cleaning", "image", 299),
  new Detail("i5", "Water less cleaning", "image", 299),
  new Detail("i6", "Water less cleaning", "image", 99),
];
