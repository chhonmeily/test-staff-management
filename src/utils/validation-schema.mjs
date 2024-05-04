export const createStaffValidationSchema = {
  staffId: {
    optional: {
      checkFalsy: true,
    },
  },
  fullName: {
    isLength: {
      options: {
        min: 10,
        max: 100,
      },
      errorMessage: "Full Name must 10 Characters with a max of 100 character",
    },
    notEmpty: {
      errorMessage: "Full Name must not be empty",
    },
    isString: {
      errorMessage: "Full Name must be string",
    },
  },
  dateOfBirth: {
    isDate: {
      option: {
        format: "YYYY-MM-DD",
      },
    },
  },
  gender: {
    notEmpty: {
      errorMessage:
        "Gender must not be empty and must be number 1 = male, 2 = female",
    },
  },
};
