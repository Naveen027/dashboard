import React, { useEffect, useState } from "react";
import { Chart as chartjs } from 'chart.js/auto';//imp
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import './Cood.css';

function Cood() {
    const [students, setStudents] = useState([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/db.json');
                setStudents(response.data.students);
                console.log(response.data.students);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
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
                                <div id="linechart" >
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
                {/* <div className="row">
                <div className="col-lg-12">
                    <h4 style={{textAlign:"center"}}>Select Student</h4>
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
            </div> */}
            </div>
            </div>
        </>
    );
}

export default Cood;
