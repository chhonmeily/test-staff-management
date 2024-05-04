import express, { request, response } from "express";
import mongoose from "mongoose";
import { mockStaff } from "./utils/constants.mjs";
import _ from "lodash";
import { checkSchema } from "express-validator";
import { createStaffValidationSchema } from "./utils/validation-schema.mjs";
import { createStaffHandler, getStaffByIdHandler } from "./handlers/staff.mjs";
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

app.get("/api/staff/:id", getStaffByIdHandler);

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});
