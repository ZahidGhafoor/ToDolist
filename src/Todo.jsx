import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const Todo = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);



  const itemEvent = (event) => {
    setItem(event.target.value);
  }

  const listofItems = () => {
    setNewItem((pvalue) => {
      return (
        [...pvalue, item]
      )
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>ZaHid's ToDo</h1>
          <br />
          <input value={item}
            type="text"
            placeholder="Add Your Items"
            onChange={itemEvent}
          />
          <button
            id="btn" variant="contained"
            onClick={listofItems}>
            <AddIcon />
          </button>
          <br />
          <ol>

            {newitem.map((val, index) => {
              return (
                <List key={index} text={val} />
              )

            })}
          </ol>
          <br />
        </div>
      </div>

    </>
  )
};

export default Todo;






// import React, { useState } from "react";
// import AddIcon from '@material-ui/icons/Add';
// import List from './List';

// const Todo = () => {
//   const [item, setItem] = useState("");
//   const [newitem, setNewItem] = useState([]);



//   const itemEvent = (event) => {
//     setItem(event.target.value);
//   }

//   const listofItems = () => {
//     setNewItem((pvalue) => {
//       return (
//         [...pvalue, item]
//       )
//     });
//     setItem("");
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="centre_div">
//           <br />
//           <h1>ZaHid's ToDo</h1>
//           <br />
//           <input value={item}
//             type="text"
//             placeholder="Add Your Items"
//             onChange={itemEvent}
//           />
//           <button
//             id="btn" variant="contained"
//             onClick={listofItems}>
//             <AddIcon />
//           </button>
//           <br />
//           <ol>

//             {newitem.map((val, index) => {
//               return (
//                 <List key={index} text={val} />
//               )

//             })}
//           </ol>
//           <br />
//         </div>
//       </div>

//     </>
//   )
// };

// export default Todo;