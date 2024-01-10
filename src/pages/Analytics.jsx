import React, { useState, useRef } from 'react';
import profile from "../imgs/Ellipse 434.svg";
const Analytics = () => {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch({profile}, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
    return (
        <div>
          <p className='kyc'>kyc</p>
       <div className="mainB">
       <div className="image-upload-container">
      <div className="box-decoration">
       
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src={profile} alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
        <label htmlFor="image-upload-input" className="image-upload-label">
        UserID:{image ? image.name : ""}
        </label>
        <button
          className="image-upload-button"
          onClick={handleClick}
        >
         Update Profile Photo 
        </button>
      </div>
    </div>

        <div className="formtable">
        <div class="contain">
      <div class="apply_box">
        <h1>
       Personal Info 
        </h1>
        <form action="">
          <div class="form_container">
            <div class="form_control">
              <label for="email"> Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="1234567890@gmail.com"
              />
            </div>
            <div class="form_control">
              <label for="Company"> Company name </label>
              <input
                type="text"
                id="Company"
                name="Company"
                placeholder="Metafoundation"
              />
            </div>
          
          
            <div class="form_control">
              <label for="Address"> Address</label>
              <input
                type="text"
                id="Address"
                name="Address"
              
              />
            </div>
            <div class="form_control">
              <label for="zip"> Zip </label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="345527"
              />
            </div>
            <div class="button_container">
            <button type="submit">Save Changes</button>
          </div>
            <div style={{width:"100%",background:"#113AA3",height:"2px",marginTop:"2rem",marginBottom:"2rem"}}>
            </div>
            <h2>Change Password</h2>
            <div class="form_control">
              <label for="Password"> Old Password </label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="**************"
              />
            </div>
            <div class="form_control">
              <label for="Password"> New Password</label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="**************"
              />
            </div>
            <div class="form_control">
              <label for="Password"> Repeat New Password </label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="**************"
              />
            </div>
            <div class="button_container">
            <button type="submit">Save Changes</button>
          </div>
          </div>
         
        </form>
      </div>
    </div>
        </div>
       </div>
        </div>
    );
};

export default Analytics;