import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const loadUsers = () => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        if (response.data.data.length > 0) {
          setState(response.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUsers();
  }, [pageNumber]);

  return (
    <>
      <div className="container p-2">
        <h5 className="text-center">USERS</h5>
        <div className="row">
          {state &&
            state.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="card p-4 mb-2" key={item.id}>
                      <div className="card-image">
                        <img
                          src={item.avatar}
                          alt="image"
                          style={{ width: "100%", height: "150px" }}
                        />
                      </div>
                      <div className="card-body p-0">
                        <h4 className="text-center">
                          {item.first_name}&nbsp;{item.last_name}
                        </h4>
                        <p className="m-0 text-center">{item.email}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link pointer"
                onClick={() => {
                  setPageNumber(1);
                }}
              >
                1
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setPageNumber(2);
                }}
              >
                2
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setPageNumber(3);
                }}
              >
                3
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default App;
