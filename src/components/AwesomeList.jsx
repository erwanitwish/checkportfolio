import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";

export default function AwesomeList() {
  const [error, setError] = useState();
  const [state, setState] = useState({
    columns: [
      { title: "Titre", field: "title" },
      { title: "Description", field: "description" },
      { title: "Image", field: "image" },
      { title: "Link", field: "link" },
    ],
    data: [],
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await axios.get(
          `https://portfolio-back.portfolio.erwanquillec.com/project`
        );
        setState({ ...state, data: list.data });
        console.log(state);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    getList();
  }, []);

  return (
    <>
      {error ? (
        <div> Something went wrong</div>
      ) : (
        <MaterialTable
          style={{ width: "80vw" }}
          title='Mes projets'
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) => {
              return axios
                .post(`http://localhost:8080/project`, newData)
                .then(() => {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                });
            },
            onRowUpdate: (newData, oldData) => {
              return axios
                .put(`http://localhost:8080/project/${oldData.id}`, newData)
                .then(() => {
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                });
            },
            onRowDelete: (oldData) => {
              return axios
                .delete(`http://localhost:8080/project/${oldData.id}`)
                .then(() => {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                });
            },
          }}
        />
      )}
    </>
  );
}
