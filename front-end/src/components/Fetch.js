
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    await fetch('http://localhost:4000/fetch')
      .then(res => res.json())
      .then(rec => {
        // console.log(rec)
        setData(rec)
      })
      .catch(() => console.log("Api call Error"))
  }

  const deleteData = async (id) => {
    let del = await fetch(`http://localhost:4000/delete/${id}`, {
      method: 'DELETE',
    });
    if (del) {
      getAll()
    }
  }
  return (
    <>
      <div className='container'>
        <h1 className='text-success text-center my-4'>Fetch Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ?
              data.map((value, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                  <td>{value.address}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteData(value._id)}>delete</button>

                    <Link to={`/update/${value._id}`}><button className='btn btn-warning'>Update</button></Link>
                  </td>
                </tr>
              )
              :
              <tr>
                <td colSpan={6} className='text-center'>No Data Found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Fetch;