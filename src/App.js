import './App.css';
import { useEffect , useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fakeStoreData} from "./action";

function App() {

  const [users , setUsers] = useState();
  console.log(users);
  const dispatch = useDispatch();
  const data = useSelector(state => state.myFirstReducer.apiData);
  console.log(data);

  useEffect(()=>{
    dispatch(fakeStoreData());
    setUsers(data)
  },[])

  const findData = data?.filter((e)=> e.Name === "manoj");
  console.log(findData)
  return (
    <div className="App">
      <div>
        {data?.map((user)=>(
         <>
          <h1>{user.title}</h1>
          <p>{user.description}</p>
         </>
        ))}
      </div>
    </div>
  );
}

export default App;
