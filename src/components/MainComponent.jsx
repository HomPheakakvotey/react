import Feedback from "./Feedback";
import ProductComponent from "./ProductComponent";

const MainComponent = () => {
  return (
    <div>
      <h1 className="font-extrabold text-4xl m-10 text-cyan-800">Product</h1>
      <ProductComponent/>
      <h1 className="font-extrabold text-4xl m-10 text-cyan-800">Feedback</h1>
      <Feedback/>
    </div>
  );
};
export default MainComponent;
