import Style from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={Style["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
