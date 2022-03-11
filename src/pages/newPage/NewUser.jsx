import "./newUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newuserTitle">New User</h1>
      <form className="newuserForm">
        <div className="newUseritem">
          <label>Username</label>
          <input type="text" placeholder="Tanveer" />
        </div>
        <div className="newUseritem">
          <label>Full Name</label>
          <input type="text" placeholder="Tanveer Alam" />
        </div>
        <div className="newUseritem">
          <label>Email</label>
          <input type="email" placeholder="t.alam2878@gmail.com" />
        </div>
        <div className="newUseritem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUseritem">
          <label>Phone</label>
          <input type="number" placeholder="+92 332 221 4416" />
        </div>
        <div className="newUseritem">
          <label>Address</label>
          <input type="text" placeholder="Karachi | PK" />
        </div>
        <div className="newUseritem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="Male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="Female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="Other">Other</label>
          </div>
        </div>
        <div className="newUseritem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
