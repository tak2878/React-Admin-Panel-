import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tanveer Alam</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">tak2878</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">03.03.1997</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+92 332 221 4416</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">t.alam2878@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Karachi | PK</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>username</label>
                <input
                  type="text"
                  placeholder="tak2878"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Tanveer Alam"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="t.alam2878@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+92 332 221 4416"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Karachi | PK"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdatedUpload">
                <img
                  src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
                  alt=""
                  className="userUpdateImg"
                />
                <label html="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
