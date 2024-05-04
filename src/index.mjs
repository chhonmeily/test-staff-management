import express, { request, response } from "express";
import mongoose from "mongoose";
import { mockStaff } from "./utils/constants.mjs";
import _ from "lodash";
import { checkSchema } from "express-validator";
import { createStaffValidationSchema } from "./utils/validation-schema.mjs";
import {
  createStaffHandler,
  editStaffByIdHandler,
  getStaffByIdHandler,
  deleteStaffByIdHandler,
  getAllStaffHandler,
  searchStaffByQuery,
} from "./handlers/staff.mjs";
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

app.get("/api/staff", getAllStaffHandler);

app.post(
  "/api/staff",
  checkSchema(createStaffValidationSchema),
  createStaffHandler
);

app.get("/api/staff/:id", getStaffByIdHandler);

app.patch("/api/staff/:id", editStaffByIdHandler);

app.delete("/api/staff/:id", deleteStaffByIdHandler);

app.get("/api/search", searchStaffByQuery);

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});
