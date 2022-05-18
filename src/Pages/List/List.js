import React from "react"
import {Link} from "react-router-dom";

const List = () => {


    return (<>

        <ul className={'test-list-parent'}>
            <li className={'test-list'}><Link to="/Updateprofile">Update Profile</Link></li>
            <li className={'test-list'}><Link to="/createorganization">Create Organization</Link></li>
            <li className={'test-list'}><Link to="/createproject">Create Project</Link></li>
            <li className={'test-list'}><Link to="/createteam">Create Team</Link></li>

            <li className={'test-list'}><Link to="/addimage">Add Image</Link></li>
            <li className={'test-list'}><Link to="/addproject">Add Project</Link></li>
            <li className={'test-list'}><Link to="/signup">Signup</Link></li>
            <li className={'test-list'}><Link to="/login">Login</Link></li>
            <li className={'test-list'}><Link to="/invite">Invite</Link></li>
            <li className={'test-list'}><Link to="/recoverpassword">recoverpassword</Link></li>
            <li className={'test-list'}><Link to="/exportproject">Export Project</Link></li>
            <li className={'test-list'}><Link to="/importproject">Import Project</Link></li>
        </ul>

    </>);

}

export default List;