import './Portofolio.css'
import Kasper from '../../assets/kasper.png'
import Elzero from '../../assets/elzero.png'
import Dashbord from '../../assets/Dashbord.png'
import Moviex from '../../assets/moviex.png'
import HardRock from '../../assets/Hard-Rock.png'
import { FaEye } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
const repos=[
    {
        img:Kasper,
        title: 'Kasper',
        dis:'we are kasper,we make art',
        link: 'https://ahmedabdelbasset.github.io/KASPER-TEMPLET/',
        reoLink:'https://github.com/AhmedAbdElbasset/KASPER-TEMPLET'
    },
    {
        img:Elzero,
        title:'elzero',
        dis:'elzero portofolio',
        link:'https://ahmedabdelbasset.github.io/Elzero/',
        reoLink:'https://github.com/AhmedAbdElbasset/Elzero'

    },
    {
        img:Dashbord,
        title:'dashbord',
        dis:'elzero dashbord',
        link: 'https://ahmedabdelbasset.github.io/Elzero2/',
        reoLink:'https://github.com/AhmedAbdElbasset/Elzero2'

    },
    {
        img:Moviex,
        title:'moviex',
        dis:'movies store',
        link:'https://ahmedabdelbasset.github.io/Moviex/',
        reoLink:'https://github.com/AhmedAbdElbasset/Moviex'
    },
    {
        img:HardRock,
        title:'hard rock',
        dis:'e commerce',
        link:'https://ahmedabdelbasset.github.io/Hard-Rock/',
        reoLink:'https://github.com/AhmedAbdElbasset/Hard-Rock'

    }
]
function Portofollio(){
    return(
        <div className="Portfolio" id='Portfolio'>
            <p className="main-header">Portfolio</p>
            <div className="work">
                {repos.map(repo=>(
                    <div className='box' key={repo.title}>
                        <img src={repo.img} alt="" />
                        <div className='layer'>
                            <p>{repo.title}</p>
                            <span>{repo.dis}</span>
                            <div className='links'>
                                <a href={repo.link} target='_blank'><FaEye/></a>
                                <a href={repo.reoLink} target='_blank'><IoIosAttach/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portofollio