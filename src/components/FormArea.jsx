import InputField from "./InputField"
import { useState } from 'react'
import SelectField from "./SelectField";
import Buttons from "./Buttons";

const categories = [
    { value: 'vocals', label: 'Vocals' },
    { value: 'strings', label: 'Strings' },
    { value: 'piano', label: 'Piano' },
];




const FormArea = () => {

    const [selectedOption, setSelectedOption] = useState(categories[0].value);

    const handleOptChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <form action="" className="form">

            <h3>Let's Get Started</h3><hr />

            <div className="name">
                <InputField type='text' placeholder='First Name' />
                <InputField type='text' placeholder='Last Name' />
            </div>

            <InputField type='email' placeholder='E-Mail Address' />
            <InputField type='number' placeholder='Phone Number' />
            <SelectField options={categories} value={selectedOption} onChange={handleOptChange} />
            <Buttons text='Schedule a Demo' />
            <Buttons text='Talk to an Instructor' />


        </form>
    )
}

export default FormArea