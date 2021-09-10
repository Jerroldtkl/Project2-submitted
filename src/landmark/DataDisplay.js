import React from 'react';
import Images from "./Images";
import styles from "./Data.module.css";


function DataDisplay(props) {


  let totalPages = ''
  var limitDisplay = [], i, len;
  for (i =0, len = props.data.length; i < len; i+=5){
    limitDisplay.push(props.data.slice(i, i + 5))
    totalPages = limitDisplay.length 
    console.log('props data:', props.data)
    console.log('limit display:', limitDisplay)
    console.log(totalPages)
  }

  // for (i = 0, len = limitDisplay.length; i <len; i++){

  // }

  // if(totalPages == 1){
    
  // }
  // const chicken = limitDisplay.filter((element, index) =>{
    
  //   return index === (page - 1)
  // }) 
  // console.log(chicken)


  const displayArr = props.data.slice(0, 5);
  // console.log("display", displayArr);
  let content = "";

  if (displayArr.length > 1) {
    content = (
      <tr>
        <th scope="col">NAME</th>
        <th scope="col">ADDRESS</th>
        <th scope="col">IMAGE </th>
      </tr>
    );
  }




  if (props.data.length > 0) {



    console.log(JSON.stringify(limitDisplay[props.index]))

  return (
    <div className="container">
    <table class="table table-dark">
      <thead>{content}</thead>
      <tbody className={styles.fontFamily}>
        {limitDisplay[props.index].map((details, id) => {
          // console.log("images details", details.images);
          return (
            <tr>
              <th scope="row">
                <p className={styles.font}>{details.name}</p>{" "}
                {details.reviews.length >= 1 && <p className={styles.reviews}>{details.reviews[0].text}</p>}
                <p>
                  <a
                    className={styles.fontLink}
                    href={details.officialWebsite}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {details.officialWebsite}
                  </a>
                </p>
              </th>
              <th scope="row">
                <h3>{details.address.streetName}</h3>
                <p>{details.address.buildingName}</p>
                <p>
                  #{details.address.floorNumber}-{details.address.unitNumber}
                </p>
                <p>S({details.address.postalCode}) </p>
              </th>
              <th scope='row'>
              <Images images={details.images} />
              </th>
            </tr>
          );
        })}             
      </tbody>
    </table>
  </div>
    
  );}

  else {
    return <div></div>
  }
}

export default DataDisplay;
