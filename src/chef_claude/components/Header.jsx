import chefClaudeLogo from '/home/rekun/javascript/learn-react/src/chef_claude/images/chef-claude-icon.png'

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude logo" />
            <h1>ChefClaude</h1>
        </header>
    )
}