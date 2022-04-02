import { React, useState } from 'react'
import Select from 'react-select';
import './FrontButtons.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const options1 = [
    {label:"Select State"},
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
];
const options2 = [
    {label:'Select City'},
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
];
// const options = ["one", "Two", "Three"]
function FrontButtons() {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [flag1, setflag1] = useState(false);
    const [flag2, setflag2] = useState(false);  
    // const label = 'All';
    const handleOnClick1=()=>{
        setSelectedOption1(options1);  
        let vari = true; 
        // if(flag1 == true) {
        //     vari = false;  
        // } 
        setflag1(vari); 
    }
    const handleOnClick2=()=>{
        setSelectedOption2(options2);  
        let vari = true; 
        // if(flag2 == true) {
        //     vari = false;  
        // } 
        setflag2(vari); 
    }
    return (
        // <div class=" css-14el2xx-placeholder" id="react-select-3-placeholder">Select State</div>
        <>
            <div className='flex'>
                <Select className='dropdown1'
                    // devalue={}
                    defaultValue = {selectedOption1}
                    onChange={handleOnClick1}
                    options={options1}
                    // isRtl={isRtl}
                    name="All"

                />
                <Select className='dropdown2'
                    isDisabled = {!flag1}
                    defaultValue = {selectedOption2}
                    onChange={handleOnClick2}
                    options={options2}
                />

            </div>
            <div className="getplaces" style={{marginLeft:'650px'}}>
                <Button disabled= {!flag1 || !flag2} style = {{borderRadius:'25px'}}  variant="contained"><SearchIcon className = "searchicon"/>Search</Button>
            </div>
        </>
    )
}

export default FrontButtons