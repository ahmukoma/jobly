import './css/form.css';

function form({heading='', inputs=[], formSubmit, errors=[]}){
    return (
        <div className='Form'>
            <div className='Form-container'>
                <form className="Form-form" onSubmit={formSubmit}>
                    {heading !== '' && <h1 className='heading'>{heading}</h1>}
                    {inputs.map(v => {
                        return v;
                    })}
                </form>
                <ul className='Form-errors'>
                    {errors.map((v, i) => {
                        return <li key={i}>{v}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default form;