import './index.scss';

export function NavBar() {
    return (
        <div className="header">
            <h1 className='logo'>DBCommerce</h1>
            <div className='search-bar'>
                <input type="search" />
            </div>
            <nav className="navbar">
                <a href="/products">produtos</a>
                <a href="">carrinho</a>
                <a href="">minha conta</a>
            </nav>
        </div>
    );
}