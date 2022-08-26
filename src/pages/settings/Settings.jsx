import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);


  
  const PF = "http://localhost:8000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      console.log("filename", filename)
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload/", data);
      } catch (err) {}
    }
    try {
      await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: updatedUser })
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" })
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img 
            src= {file ? URL.createObjectURL(file) : PF + user.profilePic}
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{ display: "none" }}
            onChange={e => setFile(e.target.files[0])}
            className="settingsPPInput" 
          />
        </div>
        <label>Username</label>
        <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} onLoad={(e) => setUsername(e.target.value)} name="name" /> 
        <label>Email</label>
        <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} onLoad={(e) => setUsername(e.target.value)} name="name" />
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} onLoad={(e) => setUsername(e.target.value)} name="password" />
        <button className="settingsSubmit" type="submit">
          Update
        </button>
        {success && <span style={{ color:"teal", textAlign:"center", marginTop:"20px" }}> Profile has been updated. </span>}
      </form>
      </div>
      <Sidebar />
    </div>
  );
}
