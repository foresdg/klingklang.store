import logoHeader from '../../img/logoheader.jpg'

const NavBar = () => {
    return (
        <div className="navBarFull">



                <div className="btn-left">
                    <button className='btnHead'>entradas</button>
                    <button className='btnHead'>tienda</button>
                </div>
    
                    <img src={logoHeader} className="logoHeader"/>
    
                <div className='btn-right'>
                    <button className='btnHead'>cabra52</button>
                    <button className='btnHead'>agenda</button>
                </div>
        </div>
    
    )
}

export default NavBar;