import { useState } from "react";
import Navbar from "../components/common/Navbar";
import CreateGroup from "./CreateGroup";
import CreateTask from "./CreateTask";

export default function Create() {
  const [activeTab, setActiveTab] = useState("group");

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Create Workspace</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("group")}
            className={`px-6 py-3 rounded-xl ${
              activeTab === "group"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Create Group
          </button>

          <button
            onClick={() => setActiveTab("task")}
            className={`px-6 py-3 rounded-xl ${
              activeTab === "task"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Create Task
          </button>
        </div>

        <div className="bg-white shadow rounded-2xl p-8">
          {activeTab === "group" ? <CreateGroup /> : <CreateTask />}
        </div>
      </div>
    </>
  );
}