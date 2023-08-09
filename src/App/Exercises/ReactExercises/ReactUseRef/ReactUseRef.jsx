import React, { useEffect } from 'react';
import { useRef } from 'react';

const ReactUseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="">Input without useRef</label>
      <input type="text" />
      <br />
      <label htmlFor="">Input with useRef</label>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default ReactUseRef;
