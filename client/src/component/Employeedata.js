import React from 'react'

function Employeedata({empl,key}) {
    return (
        <div>
            <div>Name :{empl.fullName}</div>
            <div>email :{empl.email}</div>
            <div>joining date :{empl.joining}</div>
        </div>
    )
}

export default Employeedata
