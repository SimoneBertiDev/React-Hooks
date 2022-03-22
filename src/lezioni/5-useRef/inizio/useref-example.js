import React, { useRef, useState, useEffect } from "react";

const RefExample = () => {
  // console.log(useRef);
  const [posizione, setPosizione] = useState(0);
  const inputRef = useRef(null);
  const titolo = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    setPosizione(titolo.current.getBoundingClientRect());
  }, [titolo]);

  return (
    <div>
      <h2 ref={titolo} className="ml-1 mt-5">
        Titolo Titolo
      </h2>
      <h4
        style={{
          position: "absolute",
          left: posizione.left,
          top: `${posizione.top + 400}px`,
        }}
      >
        posizzione
      </h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button className="button p-3" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
