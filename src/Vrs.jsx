import { Lifo2 } from "./Lifo2";
import { Fifo2 } from "./Fifo2";

export const Vrs = () => {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="col-6 p-0">
          <Lifo2 />
        </div>
        <div className="col-6 p-0">
          <Fifo2 />
        </div>
      </div>
    </div>
  );
};
