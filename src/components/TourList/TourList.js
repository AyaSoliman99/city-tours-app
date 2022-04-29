import "./TourList.scss"
import Tour from "../Tour/Tour"
import {tourData} from "../tourData"
export default function TourList() {
    return (
        <section className="tourlist">
            {tourData.map((tour) => 
        <Tour
            img={tour.img}
            key={tour.id}
            city={tour.city}
            name={tour.name}
            info={tour.info}
        />
    )}
        </section>
    )
}