import React, {useState} from "react";

const Form = (props) => {

    // state for the form 
  const [formData, setFormData] = useState(props.song);   // update with props sent down from app for an empty form 
    
  // HandleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        // handleSubmit from app here 
        props.handleSubmit(formData);
        props.history.push('/');
    }

  // HandleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    // onSubmit is an event listener - listening for a submit click
  return (
      <div className="song-form">

        <form onSubmit={handleSubmit}>   
        TITLE
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />

        ARTIST
        <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
        />

        TIME
        <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
        />
    
        <input
            type="hidden"
            name="time"
            value={formData.favorite}
            onChange={handleChange}
        />

        <input type="submit" value={props.label} />

        </form>
    </div>
    )
}

export default Form;