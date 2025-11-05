import React, { useState, useEffect } from "react";

const Counter = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    useEffect(() => {
        console.log(name);
    }, [name]);
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
    </div>
  );
}

export default Counter;
