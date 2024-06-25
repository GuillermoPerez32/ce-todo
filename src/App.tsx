import { TaskList } from "./components/TaskList";
import { TextField } from "./components/TextField";

function App() {
  return (
    <div className="max-w-full w-screen px-14">
      <TextField />
      <TaskList />
    </div>
  );
}

export default App;
