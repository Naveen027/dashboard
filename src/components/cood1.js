import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import './Cood.css';

function Cood1() {
    const hardcodedData = [
        
            {
              "id": 1,
              "name": "John Doe",
              "marks": {
                "English": 85,
                "Kannada": 90,
                "Mathematics": 78,
                "Science": 92,
                "Social": 88 
              },
              "attendance": {
                "January": "28",
                "February": "29",
                "March": "25",
                "April": "30",
                "May": "30",
                "June": "25",
                "July": "27",
                "August": "31",
                "September": "15",
                "October": "26",
                "November": "30",
                "December": "24"
              },
              "courses":{
                "total":"15",
                "ongoing":"4",
                "completed":"6",
                "pending":"5"
              },
              "details":{
               "Admissonnumber":1213,
               "Admissondate":"12/06/2022",
               "Fees":"25000",
               "Paid":"14000",
               "Pending":"16000"
              } 
            },
            {
              "id": 2,
              "name": "Jane Smith",
              "marks": {
                "English": 75,
                "Kannada": 88,
                "Mathematics": 80,
                "Science": 85,
                "Social": 79
              },
              "attendance": {
                "January": "25",
                "February": "23",
                "March": "22",
                "April": "6",
                "May": "30",
                "June": "29",
                "July": "25",
                "August": "31",
                "September": "25",
                "October": "6",
                "November": "10",
                "December": "29"
              },
              "courses":{
                "total":"15",
                "ongoing":"6",
                "completed":"3",
                "pending":"6"
              },
              "details":{
               "Admissonnumber":1215,
               "Admissondate":"12/06/2022",
               "Fees":"25000",
               "Paid":"10000",
               "Pending":"15000"
              } 
            },
            {
              "id": 3,
              "name": "Bob Johnson",
              "marks": {
                "English": 92,
                "Kannada": 86,
                "Mathematics": 95,
                "Science": 88,
                "Social": 90
              },
              "attendance": {
                "January": "20",
                "February": "25",
                "March": "5",
                "April": "30",
                "May": "25",
                "June": "20",
                "July": "25",
                "August": "31",
                "September": "55",
                "October": "6",
                "November": "20",
                "December": "29"
              },
              "courses":{
                "total":"15",
                "ongoing":"5",
                "completed":"7",
                "pending":"3"
              },
              "details":{
               "Admissonnumber":1216,
               "Admissondate":"12/06/2022",
               "Fees":"25000",
               "Paid":"20000",
               "Pending":"5000"
              } 
            },
            {
              "id": 4,
              "name": "Henry",
              "marks": {
                "English": 95,
                "Kannada": 86,
                "Mathematics": 55,
                "Science": 98,
                "Social": 70
              },
              "attendance": {
                "January": "25",
                "February": "13",
                "March": "22",
                "April": "36",
                "May": "15",
                "June": "29",
                "July": "25",
                "August": "31",
                "September": "5",
                "October": "16",
                "November": "20",
                "December": "9"
              },
              "courses":{
                "total":"15",
                "ongoing":"2",
                "completed":"5",
                "pending":"8"
              },
              "details":{
               "Admissonnumber":1218,
               "Admissondate":"12/06/2022",
               "Fees":"25000",
               "Paid":"22000",
               "Pending":"3000"
              } 
            },{
              "id": 5,
              "name": "Bob Marley",
              "marks": {
                "English": 90,
                "Kannada": 56,
                "Mathematics": 55,
                "Science": 58,
                "Social": 80
              },
              "attendance": {
                "January": "25",
                "February": "13",
                "March": "22",
                "April": "36",
                "May": "25",
                "June": "19",
                "July": "25",
                "August": "21",
                "September": "15",
                "October": "16",
                "November": "20",
                "December": "29"
              },
              "courses":{
                "total":"25",
                "ongoing":"5",
                "completed":"15",
                "pending":"5"
              },
              "details":{
               "Admissonnumber":1212,
               "Admissondate":"12/06/2022",
               "Fees":"25000",
               "Paid":"12000",
               "Pending":"13000"
              } 
            }
        ]
    
    

    const [students, setStudents] = useState([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);

    useEffect(() => {
        if (hardcodedData.length > 0) {
            setStudents(hardcodedData);
        }
    }, []);

    const selectedStudent = students.length > 0 ? students[selectedStudentIndex] : null;

    if (!selectedStudent) {
        return <p>Loading...</p>;
    }

    const subjects = Object.keys(selectedStudent.marks);
    const marks = Object.values(selectedStudent.marks);
    const month = Object.keys(selectedStudent.attendance);
    const attendancenumbers = Object.values(selectedStudent.attendance);
    const total = selectedStudent.courses.total;
    const ongoing = selectedStudent.courses.ongoing;
    const completed = selectedStudent.courses.completed;
    const pending = selectedStudent.courses.pending;
    const tableRows = Object.entries(selectedStudent.details);

    const handleStudentChange = (index) => {
        setSelectedStudentIndex(index);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <h4 className="dashboard">Student Dashboard</h4>
                        <div className="student-list">
                            {students.map((student, index) => (
                                <button
                                    key={student.id}
                                    className={index === selectedStudentIndex ? 'active' : ''}
                                    onClick={() => handleStudentChange(index)}
                                >
                                    {student.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <div className="stdname">
                            <h5>Student Name:</h5>
                            <h4>{selectedStudent.name}</h4>
                        </div>
                        <div className="stdname">
                            <h5>Id:</h5>
                            <h4>{selectedStudent.details.Admissonnumber}</h4>
                        </div>
                        <div className="boxes">
                            <div className="box1">
                                <p>No. of Courses</p>
                                <h3>{total}</h3>
                            </div>

                            <div className="box1">
                                <p>No. of Courses Ongoing</p>
                                <h3>{ongoing}</h3>
                            </div>

                            <div className="box1">
                                <p>No. of Courses Completed</p>
                                <h3>{completed}</h3>
                            </div>

                            <div className="box1">
                                <p>No. of Courses in due</p>
                                <h3>{pending}</h3>
                            </div>
                        </div>

                        <div>
                            <div className="container-fluid" id="charts">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Bar
                                            data={{
                                                labels: subjects,
                                                datasets: [
                                                    {
                                                        label: 'Marks',
                                                        data: marks,
                                                        borderWidth: 1,
                                                        barThickness: 90,
                                                        backgroundColor: [
                                                            '#ffbf005c',
                                                            '#ffbf005c',
                                                            '#ffbf005c',
                                                            '#ffbf005c',
                                                            '#ffbf005c'
                                                        ],
                                                        borderColor: [
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)'
                                                        ],
                                                    },
                                                ],
                                            }}
                                            style={{ margin: "20px auto 20px auto", width: "550px", height: "400px" }}
                                        />
                                    </div>

                                    <div className="col-lg-6" id="doughnut">
                                        <Doughnut
                                            data={{
                                                labels: subjects,
                                                datasets: [
                                                    {
                                                        label: 'Marks',
                                                        data: marks,
                                                        borderWidth: 1,
                                                        barThickness: 60,
                                                        backgroundColor: [
                                                            '#ff000080',
                                                            '#ffbf005c',
                                                            'lightblue',
                                                            'grey',
                                                            '#be8d34a8'
                                                        ],
                                                        borderColor: [
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)',
                                                            'rgb(70, 156, 231)'
                                                        ],
                                                    },
                                                ],
                                            }}
                                            style={{ margin: "20px auto 20px auto" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div id="linechart">
                                        <Line
                                            data={{
                                                labels: month,
                                                datasets: [
                                                    {
                                                        label: 'attendancenumbers',
                                                        data: attendancenumbers,
                                                        borderWidth: 2,
                                                        pointRadius: 5,
                                                        backgroundColor: 'rgba(70, 156, 231, 0.2)',
                                                        borderColor: 'rgb(70, 156, 231)',
                                                        pointBackgroundColor: 'yellow',
                                                        pointBorderColor: 'rgb(70, 156, 231)',
                                                    },
                                                ],
                                            }}
                                            options={{
                                                scales: {
                                                    y: {
                                                        beginAtZero: true,
                                                    },
                                                },
                                                elements: {
                                                    line: {
                                                        tension: 0,
                                                    },
                                                },
                                            }}
                                            style={{ margin: "20px", width: "300px", height: "350px" }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6" id="table">
                                    <h4 style={{ textAlign: "center" }}>Student Details</h4>
                                    <table>
                                        <tbody>
                                            {tableRows.map(([key, value]) => (
                                                <tr key={key}>
                                                    <td>{key}:</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cood1;
