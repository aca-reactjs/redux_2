import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomDog, selectDog } from "../store/features/dog.feature";

export default function RandomDog() {
  const dog = useSelector((state) => selectDog(state));

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchRandomDog());
  };

  return (
    <div>
      <h1>random dog</h1>

      <div>
        {dog?.message ? (
          <img src={dog.message} alt="dog" width={200} height={200} />
        ) : null}
      </div>

      <Button onClick={handleClick}>Get Random Dog</Button>
    </div>
  );
}
