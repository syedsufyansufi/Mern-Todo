const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((t) => (
        <li key={t._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors">
          <span className="text-gray-800">{t.text}</span>
          <button 
            onClick={() => deleteTask(t._id)}
            className="ml-3 p-1 hover:bg-red-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;