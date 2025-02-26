import ChefIcon from "../images/chef-icon.png";

export default function Header() {

    return (
        <header>
            <img src={ChefIcon} alt="Chef Icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}