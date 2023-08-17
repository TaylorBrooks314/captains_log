import React from "react";

function Index({ logs }) {
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            {log.title}
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <button>Delete</button>
            </form>
          </li>
        ))}
        <br />
        <a href={"/new"}>Create</a>
      </ul>
    </div>
  );
}
export default Index;
