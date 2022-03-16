import './App.css';
import {useDispatch , useSelector} from "react-redux";
import {fakeStoreData} from "./action";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.myFirstReducer.apiData);
  console.log(data);
  return (
    <div className="App">
      Hello there

      <button onClick={()=>dispatch(fakeStoreData())}>Click me to get data </button>
    </div>
  );
}

export default App;
