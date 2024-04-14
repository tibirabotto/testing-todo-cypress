import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Form from "./components/Form";

const API_URL = "http://localhost:3000/api";
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    allTasks();
  }, [tasks]);

  const allTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(`>>>> ${error}`);
    }
  };

  const handleSubmit = async () => {
    try {
      if (id) {
        await axios.put(`${API_URL}/tasks/${id}`, {
          title,
        });
      } else {
        await axios.post(`${API_URL}/tasks`, {
          title,
        });
      }
      setId("");
      setTitle("");
    } catch (error) {
      console.error(error);
      setId("");
      setTitle("");
    }
  };

  const findOne = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/task/${id}`);
      setTitle(response.data.task.title);
      setId(response.data.task._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/task/${id}`);
      setId("");
      setTitle("");
    } catch (error) {
      console.error(error);
      setId("");
      setTitle("");
    }
  };
  return (
    <div id="contanier">
      <div className="bg-gray-100 p-4 sm:p-8 md:p-16 mt-20">
        <div className="container mx-auto">
          <Form title={title} setTitle={setTitle} handleSubmit={handleSubmit} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tasks &&
              tasks.map((task) => (
                <Card
                  findOne={() => findOne(task._id)}
                  task={task}
                  key={task._id}
                  handleDelete={() => handleDelete(task._id)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
