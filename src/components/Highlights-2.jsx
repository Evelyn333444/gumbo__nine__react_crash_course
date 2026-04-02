import Highlight from "./ui/Highlight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Highlights2 = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Why choose <span className="blue">Library</span></h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} />
                        <Highlight icon={<FontAwesomeIcon icon="book-open" />} />
                        <Highlight icon={<FontAwesomeIcon icon="tags" />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights2;