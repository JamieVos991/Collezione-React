import "./Prijs.scss";
import JSONDATA from '../../Data/DataShoes.json';
import { useState } from "react";
import PrijsCard from "./PrijsCard";

const Prijs = (props) => {


    const [searchTerm, setSearchTerm] = useState('')
    

    return (
        <>
            <section id="3" className="section__searchfield">
                <div className="box">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" onChange={event => setSearchTerm(event.target.value)}/>
                </div>
            </section>
            <section className="seciton__prijs">
               <PrijsCard title="Jordan Blue" subText="a" backgroundImage="https://static.sneakerjagers.com/news/nl/2022/08/air-jordan-1-low-dz376-469-9.jpeg"/>
               <PrijsCard title="Jordan Red"  subText="a" backgroundImage="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/APSXLOGOIAI6ZN7OOTYJ3AT4UY.jpg&w=1440"/>
               <PrijsCard title="Jordan Green" subText="a" backgroundImage="https://cdn.sneakerbaron.nl/uploads/2022/10/24140700/header-Travis-Scott-Air-Jordan-1-Low-Olive-DZ4137-106-Release-Date-On-Feet-6.jpg"/>
               <PrijsCard title="Jordan Purple" subText="a" backgroundImage="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F02%2Fair-jordan-1-retro-high-og-all-star-0.jpg?w=960&cbr=1&q=90&fit=max"/>
               <PrijsCard title="Jordan Orange" subText="a" backgroundImage="https://i.pinimg.com/originals/c1/f6/ad/c1f6adbdc36b8bc9e1ef1e7de5c96cf3.jpg"/>
               <PrijsCard title="Jordan Pink" subText="a" backgroundImage="https://sothebys-com.brightspotcdn.com/91/5b/726a96c5436f8343f6e706925ebe/032621-mfm-sneaker-029.jpg"/>
               <PrijsCard title="Jordan Yellow" subText="a" backgroundImage="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fair-jordan-1-true-blue-DZ5485-410-photos-0.jpg?w=960&cbr=1&q=90&fit=max"/>
               <PrijsCard title="Jordan Black" subText="a" backgroundImage="https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/https-hypebeast.com-image-2020-01-dior-air-jordan-1-low-high-first-look-1-1-1024x683.jpg"/>
               <PrijsCard title="Jordan White" subText="a" backgroundImage="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/08135747/Untitled-design-3-3-1600x900.jpg"/>
               <PrijsCard title="Jordan Grey" subText="a" backgroundImage="https://sneakernews.com/wp-content/uploads/2017/09/jordan-32-creamsicle-okc-thunder.jpg"/>
               <PrijsCard title="Jordan Brown" subText="a" backgroundImage="https://i.pinimg.com/736x/e7/d2/58/e7d258a2294faca749f2dce9335aaf3c.jpg"/>
               <PrijsCard title="Jordan Magenta" subText="a" backgroundImage="https://sneakernews.com/wp-content/uploads/2020/02/air-jordan-1-retro-high-unc-to-chi-CD0461-046-5.jpg?w=1140"/>
               <PrijsCard title="Jordan Violet" subText="a" backgroundImage="https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
               <PrijsCard title="Jordan Khaki" subText="a" backgroundImage="https://sneakernews.com/wp-content/uploads/2021/12/air-jordan-1-mid-brown-fur-lining-2.jpg"/>
               <PrijsCard title="Jordan Gold" subText="a" backgroundImage="https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMGFpciUyMGpvcmRhbnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
               <PrijsCard title="Jordan Cyan" subText="a" backgroundImage="https://images.unsplash.com/photo-1559479083-f3b234ad0d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>`
               <PrijsCard title="Jordan Silver" subText="a" backgroundImage="https://houseofheat.co/app/uploads/2022/02/air-jordan-1-mid-elephant-toe-release-date-1-1.jpg"/>`
               <PrijsCard title="Jordan Cyan" subText="a" backgroundImage="https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>

            </section>
        </>
    );
}

export default Prijs;