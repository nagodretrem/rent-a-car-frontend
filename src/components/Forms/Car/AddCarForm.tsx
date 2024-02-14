import React from 'react'

type Props = {}

const AddCarForm = (props: Props) => {
  return (
    <form >
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddCarForm