import { experiences } from '@database/profile';

const allExperiences = async (req, res) => {
    await res.status(200).json({ data: experiences });
};

export default allExperiences;
