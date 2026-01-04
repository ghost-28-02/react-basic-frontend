import './BlueButton.css'

function BlueButton(params){
    const classes = 'btn ' + (params.className || '');
    return (
        <button className={classes} onClick={params.onClick}>{params.children}</button>
    );
}

export default BlueButton;