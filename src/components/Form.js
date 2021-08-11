// import { useState } from "react";
// export default function NameForm(props) {
//   const [name, setName] = useState("");
//   // handleChange Event
//   const handleChange = (evt) => {
//     setName(evt.target.value);
//   };
//   // handleSubmission Event
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     alert(`We have submitted ${name}`);
//     setName("");
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={handleChange} />
//         <input type="submit" value="SUBMIT" />
//       </form>
//       <h1>{name}</h1>
//     </>
//   );
// }
