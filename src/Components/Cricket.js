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
                                    <div className='col col-xl-3 my-3'>
                                        <div className="card card-hover" style={{ width: "17rem" }}>
                                            <img src={value.photo} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h3 className="card-title text-center text-primary fw-bold"> {value.name}</h3>
                                                <h6 className="card-title text-dark text-center fw-bold"> Born: {value.born}</h6>
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




