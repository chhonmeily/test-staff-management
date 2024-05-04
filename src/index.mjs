import express, { request, response } from "express";
import mongoose from "mongoose";
import { mockStaff } from "./utils/constants.mjs";
import _ from "lodash";
import { checkSchema } from "express-validator";
import { createStaffValidationSchema } from "./utils/validation-schema.mjs";
import { createStaffHandler } from "./handlers/staff.mjs";
const app = express();

mongoose
  .connect("mongodb://localhost/staff_management")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//get all staff
app.get("/api/staff", (request, response) => {
  response.status(201).send(mockStaff);
});

app.post(
  "/api/staff",
  checkSchema(createStaffValidationSchema),
  createStaffHandler
);

// app.get("/api/staff/:id", (request, response) => {
//   const id = request.params.id;
//   const parseId = String(id);
//   console.log(parseId);
//   if (!_.isString(parseId)) return response.sendStatus(400);
//   const findStaffById = mockStaff.findIndex(
//     (staff) => staff.staffId === parseId
//   );

//   if (findStaffById === -1) return response.sendStatus(404);
//   request.findStaffById = findStaffById;

//   const findUser = mockStaff[findStaffById];
//   if (!findUser) return response.sendStatus(404);
//   return response.send(findUser);
// });

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});
