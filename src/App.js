import "./App.css";
import { useState } from "react";
import { Users } from "./users";
import { Table } from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
