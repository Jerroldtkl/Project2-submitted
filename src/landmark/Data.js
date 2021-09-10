import React, { useState, useEffect } from "react";
import DataDisplay from "./DataDisplay";
import styles from "./Data.module.css";


function Data() {
  const [bar, setBar] = useState([]);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(1)

  const fetchPost = async () => {
    setError(null);

    const url = `https://tih-api.stb.gov.sg/content/v1/bars-clubs/search?keyword=${inputText}&language=en&apikey=mkG9xqF6crEIlLPG1t0hIvdsdn4qQAKz`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data.data);
      // console.log("location", data.data[0].address.streetName);
      // console.log("uuid", data.data[0].images[0].uuid);

      setBar(data.data);
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(error)


  useEffect(() => {
    fetchPost();
  }, [inputText]);

  function handlesubmit() {
    console.log(handleChange);
    setInputText(currentText);
    document.querySelector('#displayButton').style.display = 'block'
  }
  function handleChange(e) {
    setCurrentText(e.target.value);
  }


  return (
    <React.Fragment>
      <div>
        <div className={styles.content}>
          <input
            className={styles.text}
            type="text"
            value={currentText}
            onChange={handleChange}
          ></input>
          <button onClick={handlesubmit}>Search!</button>
        </div>
      </div>
              
      <DataDisplay data={bar} index={index} />
      <div className={styles.buttons} id="displayButton">
        <button class="btn btn-dark" onClick={() => setIndex(0)}>1</button>
        <button class="btn btn-dark" onClick={() => setIndex(1)}>2</button>
        <button class="btn btn-dark" onClick={() => setIndex(2)}>3</button>
        <button class="btn btn-dark" onClick={() => setIndex(3)}>4</button>
      </div>

    </React.Fragment>
  );
}

export default Data;
