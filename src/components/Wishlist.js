import React, { useState } from 'react';

const Wishlist = () => {

  const [wish, setWish] = useState({
    name: '',
    wish: '',
    priority: '1'
  });

  const handleChange = (event) => {
    setWish({
      ...wish,
      [event.target.name]: event.target.value,
      [event.target.wish]: event.target.value,
      [event.target.priority]: event.target.value,
     });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks ${ wish.name }! Santa has your wish! 🎅`);
  }

  return (
    <div>
      <h2>Tell Santa what you want for Christmas!</h2>

    <form onSubmit={ handleSubmit }>
      <label>You name:
        <input id="name" name="name" type="text" placeholder="Sven" required value={ wish.name } onChange={ handleChange }></input>
      </label>
      <label>What do you want?
        <textarea id="wish" name="wish" type="textarea" placeholder="10 hippos and a side of bacon for me please Santa!" rows="10" cols="50" required value={ wish.wish } onChange={ handleChange }></textarea>
      </label>
      <label>Priority:
        <select id="priority" name="priority" value={ wish.priority } onChange={ handleChange }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button>Send to Santa!</button>
    </form>
    </div>
  )
}

export default Wishlist;
