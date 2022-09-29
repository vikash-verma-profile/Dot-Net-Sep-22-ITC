import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[picture,setPicture]=useState({});
  const uploadPicture=(e)=>{
    setPicture({
      pictureAsFile:e.target.files[0]
    });
  };
  const setImageAction=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('file',picture.pictureAsFile);
    const data= await fetch("https://localhost:44374/api/Upload",{
    method:"post",
    body:formData
    });
    const UploadImage= await data;
    console.log(UploadImage);
  }
  return (
    <div>
      <form onSubmit={setImageAction}>
      Upload Image
      <input type="file" name="image" onChange={uploadPicture}/>

      <button type="submit">Upload</button>
        </form>


        <table border="1">
          <tr>
            <td>ID</td>
            <td>Image</td>
          </tr>
          
          </table>
    </div>
  );
}

export default App;
