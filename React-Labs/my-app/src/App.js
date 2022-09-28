import logo from './logo.svg';
import './App.css';

function App() {
  const setImageAction=async (event)=>{
    event.preventDefault();
    const[pickture,SetPicture]
    const uploadPicture=(e){

    }
    const data= await fetch("https://localhost:44374/api/Upload",{
    method:"post",
    headers:{"Content-Type":"multipart/form-data"},
    body:JSON.stringify({})
    });
    const UploadImage= await data.json();
    console.log(UploadImage);
  }
  return (
    <div>
      <form onSubmit={setImageAction}>
      Upload Image
      <input type="file" name="image" onChange={uploadPicture}/>

      <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default App;
