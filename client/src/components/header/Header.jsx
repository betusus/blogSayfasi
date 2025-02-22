import "./header.css"

export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://i.pinimg.com/736x/8e/24/aa/8e24aada8ac0f16ecbbb174844fff49d.jpg" alt="" />
    </div>
  )
}
