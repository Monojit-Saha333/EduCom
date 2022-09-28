import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { countries } from './country'

function ParentForm() {
    const [formValue, setFormValue] = useState({ name: "", parentname: "", studentregistrationnumber: "", address: "", state: "", country: "IN", city: "", zipcode: "", email: "", primarycontactpersonname: "", primarycontactpersonnumber: "", secondarycontactpersonname: "", secondarycontactpersonnumber: "", age: 0 })
    const states = countries.find(country => country.countrycode === formValue.country).states;
    console.log(states)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
    }

    const handlecountrychange = (e) => {
        setFormValue({ ...formValue, country: e.target.value });

    }
    const handleChangeStudentName = (e) => {
        if (e.target.value.match("^[a-zA-Z ]*$") != null) {
            setFormValue({ ...formValue, studentname: e.target.value });
        }
    }
    const handleChangeParentName = (e) => {
        if (e.target.value.match("^[a-zA-Z ]*$") != null) {
            setFormValue({ ...formValue, parentname: e.target.value });
        }
    }

    const handleChangeZipcode = (e) => {
        const elm = e.target;
        const zipcodeMaxLength = 6;
        const zipcodeRegex = "^[0-9]*$";

        if (!elm.value.match(zipcodeRegex)) return;

        if (elm.value.length > zipcodeMaxLength) return;
        setFormValue({ ...formValue, zipcode: elm.value });

    };
    const handleChangeCity = (e) => {
        if (e.target.value.match("^[a-zA-Z]*$") != null) {
            setFormValue({ ...formValue, city: e.target.value });
        }
    }
    const handleChangePrimaryPhoneNumber = (e) => {
        const elm = e.target;
        const phoneNumberMaxLength = 10;
        const phoneNumberRegex = "^[0-9]*$";

        if (!elm.value.match(phoneNumberRegex)) return;

        if (elm.value.length > phoneNumberMaxLength) return;
        setFormValue({ ...formValue, primarycontactpersonnumber: elm.value });

    };
    const handleChangeSecondaryPhoneNumber = (e) => {
        const elm = e.target;
        const phoneNumberMaxLength = 10;
        const phoneNumberRegex = "^[0-9]*$";

        if (!elm.value.match(phoneNumberRegex)) return;

        if (elm.value.length > phoneNumberMaxLength) return;
        setFormValue({ ...formValue, secondarycontactpersonnumber: elm.value });

    };


    return (
        <div className="ParentForm">

            <form onSubmit={handleSubmit}>
                <label>
                    StudentName:
                    <input type="text" value={formValue.studentname} required="on" onChange={handleChangeStudentName} />
                </label>
                <br>
                </br>
                <label>
                    ParentName:
                    <input type="text" value={formValue.parentname} required="on" onChange={handleChangeParentName} />
                </label>
                <br></br>
                <label>
                    StudentRegistrationNumber:
                    <input type="text" name="studentregistrationnumber" required="on" onChange={(e) => setFormValue({ ...formValue, studentregistrationnumber: e.target.value })} value={formValue.studentregistrationnumber} />
                </label>
                <br></br>
                <label>
                    Address:
                    <input type="text" name="address" required="on" onChange={(e) => setFormValue({ ...formValue, address: e.target.value })} value={formValue.address} />
                </label>
                <br></br>
                <label for="country">Country</label>

                <select name="country" id="country" required="on" onChange={handlecountrychange}>
                    {
                        countries.map((country) => <option key={country.countrycode} value={country.countrycode}>{country.countryname} </option>)
                    }


                </select>
                <br></br>
                <label></label>
                <label for="states">States</label>

                <select name="states" id="states" required="on" onChange={(e) => setFormValue({ ...formValue, state: e.target.value })}>
                    {
                        states.map((state) => <option key={state} value={state}>{state} </option>)
                    }


                </select>

                <br></br>
                <label>
                    City:
                    <input type="text" value={formValue.city} required="on" onChange={handleChangeCity} />
                </label>
                <br></br>
                <label>
                    Zipcode:
                    <input type="text" value={formValue.zipcode} required="on" onChange={handleChangeZipcode} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="email" name="email" required="on" onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} value={formValue.email} />
                </label>
                <br></br>
                <label>
                    PrimaryContactPersonName:
                    <input type="text" name="primarycontactpersonname" required="on" onChange={(e) => setFormValue({ ...formValue, primarycontactpersonname: e.target.value })} value={formValue.primarycontactpersonname} />
                </label>
                <br></br>
                <label>
                    PrimaryContactPersonNumber:
                    <input type="text" value={formValue.primarycontactpersonnumber} required="on" onChange={handleChangePrimaryPhoneNumber} />
                </label>
                <br></br>
                <label>
                    SecondaryContactPersonName:
                    <input type="text" name="secondarycontactpersonname" required="on" onChange={(e) => setFormValue({ ...formValue, secondarycontactpersonname: e.target.value })} value={formValue.secondarycontactpersonname} />
                </label>
                <br></br>
                <label>
                    SecondaryContactPersonNumber:
                    <input type="text" value={formValue.secondarycontactpersonnumber} required="on" onChange={handleChangeSecondaryPhoneNumber} />

                </label><br></br>
                <label>
                    Age:
                    <input type="number" min="4" required="on" name="age" required="on" onChange={(e) => setFormValue({ ...formValue, age: e.target.value })} value={formValue.age} />
                </label><br></br>
                <label>
                    Registration Date:
                    <input type="date" required="on" name="registrationdate" required="on" onChange={(e) => setFormValue({ ...formValue, age: e.target.value })} value={formValue.registrationdate} />
                </label><br></br>
                <input type="submit" value="Submit" />







            </form>
        </div>
    );
}
export default ParentForm;
