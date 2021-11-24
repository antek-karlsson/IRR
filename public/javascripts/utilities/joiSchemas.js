const Joi = require("joi");

module.exports.restaurantSchema = Joi.object({
  restaurant: Joi.object({
    name: Joi.string.required(),
    address: {
      city: Joi.string.required(),
      state_region: Joi.string,
      country: Joi.string.required(),
      street: Joi.string.required(),
      houseNumber: Joi.string,
      zipCode: Joi.string,
    },
    description: Joi.string.required(),
    priceRange: Joi.string.required(),
    cuisine: Joi.string.required(),
    courses: {
      courseName: Joi.string,
      courseImgs: {
        filename: Joi.string,
        url: Joi.string,
      },
    },
    images: {
      filename: Joi.string,
      url: Joi.string,
    },
  }).required(),
});
