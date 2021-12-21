import React from 'react'
import {Link} from 'react-router-dom'

function UserList() {
    return (
        <div>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">UserList</h1>
                <Link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to="/userform">
                    <i class="fas fa-download fa-sm text-white-50"></i>
                    Create User</Link>
            </div>
            <table><tr>
                <td>Name</td>
                <td>Password</td>
                <td>email</td>
                <td>Mobile</td>
                </tr>
            </table>
        </div>
    )
}

export default UserList
