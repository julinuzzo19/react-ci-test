import { useParams, useLocation } from "react-router-dom";

const About = () => {
  const params = useParams();
  const location = useLocation();

  console.log({ params });
  console.log({ location });

  return <div>About</div>;
};

export default About;
