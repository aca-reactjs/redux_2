import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomDog, selectDog } from "../../store/features/dog.feature";
import CircularProgress from "@mui/material/CircularProgress";

export default function RandomDog() {
  const dog = useSelector((state) => selectDog(state));

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchRandomDog());
  };

  return (
    <div>
      <h1>random dog</h1>
      <Button onClick={handleClick}>Get Random Dog</Button>

      <div>
        {dog.status === "loading" && <CircularProgress />}
        {dog.status === "error" && <p>error</p>}
        {dog.status === "success" && dog?.data?.message ? (
          <img src={dog?.data?.message} alt="dog" width={200} height={200} />
        ) : null}
      </div>
    </div>
  );
}
