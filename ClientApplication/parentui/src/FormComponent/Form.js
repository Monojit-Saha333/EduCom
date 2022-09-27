import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { countries } from './country'

function ParentForm() {
    const [formValue, setFormValue] = useState({ name: "", parentname: "", studentregistrationnumber: 0, address: "", state: "", country: "IN", city: "", zipcode: "", email: "", primarycontactpersonname: "", primarycontactpersonnumber: "", secondarycontactpersonname: "", secondarycontactpersonnumber: "" })
    const states = countries.find(country => country.countrycode === formValue.country).states;
    console.log(states)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
    }
    const handlecountrychange = (e) => {
        setFormValue({ ...formValue, country: e.target.value });

    }
    return (
        <div className="ParentForm">

            <form onSubmit={handleSubmit}>
                <label>
                    StudentName:
                    <input type="text" name="name" onChange={(e) => setFormValue({ ...formValue, name: e.target.value })} value={formValue.name} />
                </label>
                <br>
                </br>
                <label>
                    ParentName:
                    <input type="text" name="parentname" onChange={(e) => setFormValue({ ...formValue, parentname: e.target.value })} value={formValue.parentname} />
                </label>
                <br></br>
                <label>
                    StudentRegistrationNumber:
                    <input type="number" name="studentregistrationnumber" onChange={(e) => setFormValue({ ...formValue, studentregistrationnumber: e.target.value })} value={formValue.studentregistrationnumber} />
                </label>
                <br></br>
                <label>
                    Address:
                    <input type="text" name="address" onChange={(e) => setFormValue({ ...formValue, address: e.target.value })} value={formValue.address} />
                </label>
                <br></br>
                <label for="states">States</label>

                <select name="states" id="states" onChange={(e) => setFormValue({ ...formValue, state: e.target.value })}>
                    {
                        states.map((state) => <option key={state} value={state}>{state} </option>)
                    }


                </select>

                <br></br>
                <label for="country">Country</label>

                <select name="country" id="country" onChange={handlecountrychange}>
                    {
                        countries.map((country) => <option key={country.countrycode} value={country.countrycode}>{country.countryname} </option>)
                    }


                </select>
                <br></br>
                <label>
                    City:
                    <input type="text" name="city" onChange={(e) => setFormValue({ ...formValue, city: e.target.value })} value={formValue.city} />
                </label>
                <br></br>
                <label>
                    Zipcode:
                    <input type="text" name="zipcode" onChange={(e) => setFormValue({ ...formValue, zipcode: e.target.value })} value={formValue.zipcode} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="email" name="email" onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} value={formValue.email} />
                </label>
                <br></br>
                <label>
                    PrimaryContactPersonName:
                    <input type="text" name="primarycontactpersonname" onChange={(e) => setFormValue({ ...formValue, primarycontactpersonname: e.target.value })} value={formValue.primarycontactpersonname} />
                </label>
                <br></br>
                <label>
                    PrimaryContactPersonNumber:
                    <input type="text" name="primarycontactpersonnumber" onChange={(e) => setFormValue({ ...formValue, primarycontactpersonnumber: e.target.value })} value={formValue.primarycontactpersonnumber} />
                </label>
                <br></br>
                <label>
                    SecondaryContactPersonName:
                    <input type="text" name="secondarycontactpersonname" onChange={(e) => setFormValue({ ...formValue, secondarycontactpersonname: e.target.value })} value={formValue.secondarycontactpersonname} />
                </label>
                <br></br>
                <label>
                    SecondaryContactPersonNumber:
                    <input type="text" name="secondarycontactpersonnumber" onChange={(e) => setFormValue({ ...formValue, secondarycontactpersonnumber: e.target.value })} value={formValue.secondarycontactpersonnumber} />
                </label><br></br>
                <input type="submit" value="Submit" />







            </form>
        </div>
    );
}
export default ParentForm;
