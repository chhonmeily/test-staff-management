import { matchedData, validationResult } from "express-validator";
import { Staff } from "../mongoose/schema/staff.mjs";
import { mockStaff } from "../utils/constants.mjs";

export const createStaffHandler = async (request, response) => {
  console.log("hello");
  let { dateOfBirth } = request.body;

  const [year, month, day] = dateOfBirth.split("-");
  request.body.dateOfBirth = new Date(year, month, day).toDateString();
  const result = validationResult(request);
  if (!result.isEmpty()) return response.status(400).send(result.array());
  const data = matchedData(request);
  const newStaff = new Staff(data);
  try {
    const savedStaff = await newStaff.save();
    return response.status(201).send(savedStaff);
  } catch (error) {
    return response.sendStatus(400);
  }
};

export const getStaffByIdHandler = async (request, response) => {
  const id = request.params.id;
  try {
    const findStaff = await Staff.findById(id);
    return response.status(201).send(findStaff);
  } catch (error) {
    return response.sendStatus(400);
  }
};
