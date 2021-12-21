import React from 'react'
import {Link} from 'react-router-dom'
function ProductForm() {
    return (
        <div>
            <form class='container'>
                <div class='col-md-2'>
                    Enter the Product Name        :<input type="text"></input><br/>
                    Enter the Description    :<input type='password'></input><br/>

                    Enter the Price :<input type='number'></input><br/>
                    <Link to='/product'>
                        <button>Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ProductForm
