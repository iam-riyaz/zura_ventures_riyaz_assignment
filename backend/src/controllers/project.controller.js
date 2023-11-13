import { User } from "../models/user.schema.js";

export const projectCreateController = async (req, res) => {
  try {
    const { email, projectName } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      user.projects.push({ projectName });

      const updatedProject = await user.save();

      res.status(200).send(updatedProject);
    } else {
      res.status(404).send("User not found");
    }
  } catch {
    res.status(500).send("error creating project");
  }
};

export const projectFindController= async (req, res) => {
    try{

        const { email, projectName } = req.body;
        

    }
    catch{

    }
}
