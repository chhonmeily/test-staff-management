import { matchedData, validationResult } from "express-validator";
import { Staff } from "../mongoose/schema/staff.mjs";
import { mockStaff } from "../utils/constants.mjs";

export const createStaffHandler = async (request, response) => {
  //convert date to ISODate format before insert to database
  const date = new Date(request.body.dateOfBirth);
  const convertDate = date.toISOString();
  request.body.dateOfBirth = convertDate;
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

export const editStaffByIdHandler = async (request, response) => {
  //convert date to ISODate format before insert to database
  const date = new Date(request.body.dateOfBirth);
  const convertDate = date.toISOString();
  request.body.dateOfBirth = convertDate;
  const id = request.params.id;
  const data = request.body;
  try {
    const updatedStaff = await Staff.findByIdAndUpdate({ _id: id }, data, {
      safe: true,
      upsert: true,
      new: true,
    });
    return response.send(updatedStaff);
  } catch (error) {
    return response.sendStatus(400);
  }
};

export const deleteStaffByIdHandler = async (request, response) => {
  const id = request.params.id;
  try {
    await Staff.findByIdAndDelete(id);
    response.sendStatus(200);
  } catch (error) {
    response.sendStatus(400);
  }
};

export const getAllStaffHandler = async (request, response) => {
  await Staff.find().then((result) => {
    response.send(result);
  });
};

export const searchStaffByQuery = async (request, response) => {
  const { gender, dateOfBirthFrom, dateOfBirthTo } = request.query;
  let foundStaff;
  const parsedGender = parseInt(gender);
  if (gender !== undefined) {
    foundStaff = await Staff.find({ gender: parsedGender });
    response.send(foundStaff);
  } else {
    response.sendStatus(404);
  }
};
