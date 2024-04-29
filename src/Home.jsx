import logo from "./img/logo.png";
export const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row col-5">
        <img src={logo} alt="logo" className="mx-auto mt-5" />
      </div>
    </div>
  );
};
