import React from "react"
import {Link} from "react-router-dom";

const List = () => {


    return (<>

        <ul>
            <li><Link to="/Updateprofile">Update Profile</Link></li>
            <li><Link to="/createorganization">Create Organization</Link></li>
            <li><Link to="/createproject">Create Project</Link></li>
            <li><Link to="/createteam">Create Team</Link></li>

            <li><Link to="/addimage">Add Image</Link></li>
            <li><Link to="/addproject">Add Project</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/invite">Invite</Link></li>
            <li><Link to="/recoverpassword">recoverpassword</Link></li>
            <li><Link to="/exportproject">Export Project</Link></li>
            <li><Link to="/importproject">Import Project</Link></li>
        </ul>

    </>);

}

export default List;