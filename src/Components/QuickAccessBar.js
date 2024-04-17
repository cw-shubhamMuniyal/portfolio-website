import "../Styles/quick-access-bar.css"

const QuickAccessBar = ({ links }) => {
    return (
        <div className="quick-access-bar">
            {
                links.map((link) => {
                    return (
                        <div key={link.key} className="quick-access-bar__element">
                            <a href={link.link} className="quick-access-bar__icon-link" rel="noreferrer" target="_blank">
                                <img src={link.darkIcon} alt={link.altProfileIcon} className="quick-access-bar__icon" />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default QuickAccessBar;