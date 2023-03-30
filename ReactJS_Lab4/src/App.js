import "./App.css";
import {Route, Routes} from "react-router-dom";
import TodoPage from "./Page/TodoPage"
import Calendar from "./Page/Calendar";
import Homepage from "./Page/Homepage";
import Todaypage from "./Page/Todaypage";
function App(){
  return(
    <Routes>
      <Route exect path="/" element={<Homepage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/today" element={<Todaypage />} />
      <Route path="/calendar" element={<Calendar/>} />
    </Routes>
  );
}
export default App;