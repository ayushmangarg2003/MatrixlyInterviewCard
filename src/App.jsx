import { useState, React } from 'react'
import "./App.css"
import blue from "./assets/blue.svg"

const App = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState(blue)

  const [cardTitle, setCardTitle] = useState("Matrixly AI")
  const [cardDesc, setCardDesc] = useState("Description about Matrixly AI will appear here in this font style")

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handelPhotoDevice = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file);
    setImg(base64)
    e.target.value = null;
  }

  const changeTitle = ev => {
    setTitle(ev.target.value)
    setCardTitle(ev.target.value)
  }

  const changeDesc = ev => {
    setDesc(ev.target.value)
    setCardDesc(ev.target.value)
  }

  return (
    <div className="app">
      <div className="left">
        <div className="form-container">
          <div className="title-container">
            <h3>Title</h3>
            <input type="text" placeholder={'Name to be displayed'} value={title} onChange={ev => changeTitle(ev)} />
          </div>
          <div className="desc-container">
            <h3>Description</h3>
            <input type="text" placeholder={"Description to be displated"} value={desc} onChange={ev => changeDesc(ev)} />
          </div>
          <div className="image-container">
            <label htmlFor="file-upload"><i className="fa-solid fa-cloud-arrow-up"></i>
              <p>Upload Image</p></label>
            <input
              type="file"
              lable="Image"
              name="myFile"
              className='file-upload'
              id='file-upload'
              accept='.jpeg, .png, .jpg , .webp'
              onChange={(ev) => handelPhotoDevice(ev)}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <div className="top-card">
            <div className="card-image">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bottom-card">
            <div className="card-title">
              <h2>{cardTitle}</h2>
            </div>
            <div className="card-description">
              <p>{cardDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App