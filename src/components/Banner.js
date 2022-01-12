import './Banner.scss';

export default function Banner() {
    return (
        <div className='banner'>
            <div className='inside-banner'>
                <h1>Get ideas on what to watch this evening</h1>
                <h2>Informations on every movie</h2>
                <a href='#featured'>
                    <button> Featured Movies <i className="fas fa-arrow-down"></i></button>
                </a>
            </div>
        </div>
    )
}
