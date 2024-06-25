import clsx from "clsx";
import { useTaskStore } from "../services/task";
import { renderFormattedText } from "../utils/renderFormattedText";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const setTaskDone = useTaskStore((state) => state.setDone);
  const removeTask = useTaskStore((state) => state.remove);

  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div key={task.id} className="p-2 mt-1 flex items-center">
          <input
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4"
            checked={task.done}
            onChange={(e) => {
              setTaskDone(task.id, e.target.checked);
              setTimeout(() => {
                removeTask(task.id);
              }, 500);
            }}
          />
          <p
            className={clsx("ml-2 transition-opacity duration-500", {
              "line-through opacity-0": task.done,
            })}
          >
            {renderFormattedText(task.content)}
          </p>
        </div>
      ))}
    </div>
  );
};
