import React from 'react'

type Props = {}

const UpdateCarForm = (props: Props) => {
  return (
    <form >
        <div className="mb-3">
      <label htmlFor="id" className="form-label">ID</label>
      <input
        type="number"
        className="form-control"
        name="id"
        
      />
    </div>
    <div className="mb-3">
      <label htmlFor="plate" className="form-label">Plate</label>
      <input
        type="text"
        className="form-control"
        name="plate"
        
      />
    </div>
    <div className="mb-3">
      <label htmlFor="kilometer" className="form-label">Kilometer</label>
      <input
        type="text"
        className="form-control"
        name="kilometer"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="dailyprice" className="form-label">Daily Price</label>
      <input
        type="text"
        className="form-control"
        name="dailyprice"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="minfindeksrate" className="form-label">Min. Findeks Rate</label>
      <input
        type="number"
        className="form-control"
        name="minfindeksrate"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="modelyear" className="form-label">Model Year</label>
      <input
        type="number"
        className="form-control"
        name="modelyear"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="model" className="form-label">Model </label>
      <input
        type="text"
        className="form-control"
        name="model"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="brand" className="form-label">Brand </label>
      <input
        type="text"
        className="form-control"
        name="model"
      
      />
    </div>
    <div className="mb-3">
      <label htmlFor="color" className="form-label">Color </label>
      <input
        type="text"
        className="form-control"
        name="color"
      
      />
    </div>

    


    <button type="submit" className="btn btn-primary">Update Car</button>
  </form>
  )
}

export default UpdateCarForm