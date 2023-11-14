import { response } from "express";
import { User } from "../models/user.schema.js";

export const loginController = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    console.log({ user });
    if (user == null) {
      console.log("user not found");
      user = new User({ email });
      await user.save();

      res.status(201).send(user);
    } else {
      res.status(200).send(user);
    }
  } catch {
    res.status(400).send("Error occurred");
  }
};

export const getUploads = async (req, res) => {
  try {
    const { _id, projectId } = req.body;
    const user = await User.findById(_id);
    if (user) {
      const uploads = user.projects.find((proj) => proj.id === projectId);
      res.status(200).send(uploads);
      return;
    } else {
      res.status(400).send("user not found");
      return;
    }
  } catch {
    res.status(400).send("error");
  }
};

export const createUploads = async (req, res) => {
  try {
    const { _id, projectId, name, description } = req.body;
    const user = await User.findById(_id);
    if (user) {
      const project = user.projects.find((proj) => proj.id === projectId);

      project.uploads.push({ name, description });
      const Uploads = await user.save();
      const updatedUploads = user.projects.find(
        (proj) => proj.id === projectId
      );
      res.status(200).send(updatedUploads);
    } else {
      res.status(400).send("error");
    }
  } catch {
    res.status(500).send("error happened");
  }
};

export const deleteUploads = async (req, res) => {
  try {
    const { _id, projectId, uploadId } = req.body;

    const updatedUser = await User.updateOne(
      { _id: _id, "projects._id": projectId },
      { $pull: { "projects.$.uploads": { _id: uploadId } } }
    );

    if (updatedUser) {
      const user = await User.findById(_id);
      if (user) {
        const updatedUploads = user.projects.find(
          (proj) => proj.id === projectId
        );
        res.status(200).send(updatedUploads);
        return;
      } else {
        res.status(404).send("error");
      }
    } else {
      res.status(500).send("unable to update");
    }
  } catch {
    res.status(500).send("error happened");
  }
};

export const updateUploades = async (req, res) => {
  try {
    const { _id, projectId, uploadId, newDescription } = req.body;

    const updatedUploads = await User.updateOne(
      { _id, "projects._id": projectId, "projects.uploads._id": uploadId },
      {
        $set: { "projects.$[proj].uploads.$[upl].description": newDescription },
      },
      { arrayFilters: [{ "proj._id": projectId }, { "upl._id": uploadId }] }
    );

    if (updatedUploads) {
      res.status(200).send("descriptionn updated successfully");
    } else {
      res.status(500).send("erorr while updated upload");
    }
  } catch {
    res.status(500).send("error happened");
  }
};
