import axios from "axios";
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
const API = import.meta.env.VITE_API_BASE_URL;

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  // Use API URL from env
  const API = import.meta.env.VITE_API_BASE_URL;

  // Fetch tasks
  const fetchTasks = async () => {
    try {
    const res = await axios.get(`${API}/tasks`, { withCredentials: true });
    setTasks(res.data);
  } catch (err) {
    console.error("Error fetching tasks:", err);
  }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async (text) => {
    const res = await axios.post(`${API}/tasks`, { text });
    setTasks([...tasks, res.data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ✅ MERN Todo
        </h1>
        <TaskForm
          className="mb-8 bg-white p-6 rounded-lg shadow-md"
          addTask={addTask}
        />
        <TaskList
          className="bg-white p-6 rounded-lg shadow-md"
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default TaskPage;
