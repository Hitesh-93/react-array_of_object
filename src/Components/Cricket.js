import React from 'react'
import myData from '../Data';

function Cricket() {
    return (
        <>
            <h1 className='my-4 text-center '>India Cricket Squad</h1>
            <div className='container-fluid'>
                <div className='row'>
                    {
                        myData.map((value) => {
                            return (
                                <>
                                    <div className='col-md-3 my-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={value.photo} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h3 className="card-title text-center text-primary fw-bolder"> {value.name}</h3>
                                                <h5 className="card-title text-dark"> Born: {value.born}</h5>
                                                <p className="card-text">{value.about}</p>
                                                {/* <a href="#" className="btn btn-primary">Search More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cricket




