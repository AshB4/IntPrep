import React ,{useState} from "react";

export default function BetterDropDown({ options, onChange, label }) {
    const [selectedOption, setSelectedOption] = useState("");
    
    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };
    
    return (
        <div className="better-dropdown" aria-label="DropDown">
        <label>
            {label}
            <select value={selectedOption} onChange={handleChange}>
            <option value="" disabled>
                Select an option
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>
        </div>
    );
    }