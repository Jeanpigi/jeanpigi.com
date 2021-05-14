import { proyectos } from '@database/profile';

const allProjects = async (req, res) => {
    await res.status(200).json({ data: proyectos });
};

export default allProjects;
