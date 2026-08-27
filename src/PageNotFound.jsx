import { Link } from "react-router"

export default function PageNotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <h2>404 ERROR</h2>
            <div>
                <Link to='/' >Go To Home </Link>
            </div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.h_tzfdBXJLL8fkbqkFcJBgHaHa%3Fpid%3DApi&f=1&ipt=12a6fc8b23bebd25a04a30f010207cdf120ce321bda3855b849ddb8eaf4a5c6e&ipo=images" alt="" />
        </div>
    )
}