import React from 'react'
import {Link} from 'react-router-dom'
function ProductList() {
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Product List</h1>
                        <Link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to = "/productform"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
                    </div>
        <table>
        <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
    
                </tr>
        </table>
        </>
    )
}

export default ProductList
