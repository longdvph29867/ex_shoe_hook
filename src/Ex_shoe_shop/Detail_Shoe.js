import React from 'react'

export default function Detail_Shoe({shoe, handleAddToCart}) {
    let {name, image} = shoe;
    let rendertbody = () => {
        let newShoe = {...shoe};
        delete newShoe.name;
        delete newShoe.image;
        return Object.keys(newShoe).map((key) => {
          return (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{newShoe[key]}</td>
                    </tr>
          )
        })
      }
  return (
    <div>
        <h4>Detail Shoe</h4>
        <div className="row">
          <div className="col-4">
            <div className="card text-center">
            <img className="card-img-top" src={image} alt='' />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
              </div>
            </div>
            <button onClick={() => {handleAddToCart(shoe)}} className="btn btn-success mt-3">Add to Cart</button>
          </div>

          <div className="col-8">
            
            <table className='table text-left'>
              <thead>
                <tr>
                  <th colSpan={2}>Thông tin chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {rendertbody()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
