import { useState } from 'react';

function App() {
  const [picture, setPicture] = useState({});
  const uploadPicture = (e) => {
    setPicture({
      pictureAsFile: e.target.files[0]
    });
  };
  const setImageAction = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', picture.pictureAsFile);
    const data = await fetch("https://localhost:44374/api/Upload", {
      method: "post",
      body: formData
    });
    const UploadImage = await data;
    console.log(UploadImage);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >Customer App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Add Customer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid" style={{marginTop:"40px"}} >
        <form onSubmit={setImageAction}>

          <div className="mb-3">
            <label  className="form-label">Upload Image</label>
            <input className="form-control" type="file" id="formFile" onChange={uploadPicture} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      <hr/>

        <table className="table" style={{marginTop:"40px"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
