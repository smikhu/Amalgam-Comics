import "./Page2.css"


function Page2(props) {

    return(
        <div className="css-grid">
            <div className="grid grid-item7">
                <h3><span className="seven">7. CONNECTIONS</span></h3>
                <div className="bubble bubble-bottom-left">
                <p><span className="red">GROUP AFFILIATION - </span>{props.characters.connections['group-affiliation']}</p>
                <br></br>
                <p><span className="red">RELATIVES - </span>{props.characters.connections['relatives']}</p>
                </div>
            </div>
            <div className="grid grid-item8">
                <h3><span className="red">8. GENERAL INFORMATION</span></h3>
                <div className="gen-info">
                    <p><span className="red">Full Name - </span>{props.characters.biography['full-name']}</p>
                    <p><span className="red">Place of birth - </span>{props.characters.biography['place-of-birth']}</p>
                    <p><span className="red">Alignment - </span>{props.characters.biography.alignment}</p>
                    <p><span className="red">Base - </span>{props.characters.work.base}</p>
                    <p><span className="red">Occupation - </span>{props.characters.work.occupation}</p>
                    <p><span className="red">Alter Egos - </span>{props.characters.biography['alter-egos']}</p>
                    <p><span className="red">First Comic Appearance - </span>{props.characters.biography['first-appearance']}</p>
                </div>
            </div>
            <div className="grid grid-item9">
                <h3><span className="seven">9. ALIASES</span></h3>
                <div className="aliases bubble2 bubble-bottom-right">
                    <p>{props.characters.biography.aliases[0]}</p>
                    <p>{props.characters.biography.aliases[1]}</p>
                    <p>{props.characters.biography.aliases[2]}</p>
                    <p>{props.characters.biography.aliases[3]}</p>
                    <p>{props.characters.biography.aliases[4]}</p>
                    <p>{props.characters.biography.aliases[5]}</p>
                </div>
            </div>
            <div className="grid grid-item10">
                <h3><span className="seven">10. APPEARANCE</span></h3>
                <div className="appearance">
                    <p>Eye Color - {props.characters.appearance?.['eye-color']}</p>
                    <p>Hair Color - {props.characters.appearance?.['hair-color']}</p>
                    <p>Height - {props.characters.appearance?.height[0]}</p>
                    <p>Weight - {props.characters.appearance?.weight[0]}</p>
                </div>
            </div>
            <div className="grid grid-item11">
                <h3>11.</h3>
            </div>
            <div className="grid grid-item12">
                <h3><span className="seven">12. PUBLISHER</span></h3>
                <div className="publisher">
                    <p>{props.characters.biography.publisher}</p>
                </div>
            </div>
        </div>
    )
}

export default Page2;