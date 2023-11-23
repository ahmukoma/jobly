function Input({label, type='text', password=false, value='', change, disabled=false, otherClasses=''}){
    return (
        <div className={"Input-wrapper" + ' ' + otherClasses}>
            {type === 'submit' && <button type="submit" className='submit'>{label}</button>}
            {type === 'text' && <>
            <label className="lbl" htmlFor={`${label}`}>{label}</label>
            <input
                type={password ? 'password' : 'text'}
                placeholder={label}
                name={label}
                id={label}
                disabled={disabled}
                value={value}
                onChange={change}
            />
            </>}
            {type === 'conditions' && <>
            <label className="lbl center">Terms & Conditions</label>
            <small className='terms'>
                By signing up, you agree to our <a href='#'>Terms,</a> <a href='#'>Privacy Policy,</a> and <a href='#'>Information Sharing Policy</a>
            </small></>}
        </div>
    )
}

export default Input;