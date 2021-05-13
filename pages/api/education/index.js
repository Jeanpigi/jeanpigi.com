import { education } from '@database/profile';

const allEducation = async (req, res) => {
    await res.status(200).json({ data: education });
};

export default allEducation;
