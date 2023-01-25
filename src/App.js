import { useState, useEffect } from 'react';
import Button from "./components/Button";
import StudentDisplay from "./components/StudentsDisplay";

function App(props){
  const [students, setStudents] = useState([]);
    
    useEffect(() => {
    fetch('https://scratched-juniper-salto.glitch.me/kekambas')
      .then(res => res.json())
      .then(data => {
        const studentList = data;
        setStudents(studentList)
  
      })
  }, []);

  return (
    <>
      <div className ="containter">
        <Button onClick/>
        <StudentDisplay students={students}/>
      </div>
    </>
  );
}

export default App;
