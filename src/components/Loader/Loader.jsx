import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className="loader-container">
    <Oval type="string" color="#4fa94d" height={100} width={100} />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;
