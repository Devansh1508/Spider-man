import React , {useState} from 'react'
import './Title.css'


const Title = () => {
  const [isHovered, setIsHovered] = useState(false)

  const styleSpiderMan = {
    textShadow: isHovered ? '2px 2px red' : ''
    // color: isHovered ? '' : 'white'
  }

  return (
    <div className='midContent'>
      <div className="actors">
        <h2>Tom Holland</h2>
        <h2>TOBY MAGUIRE</h2>
        <h2>ZENDAYA</h2>
        <h2>ANDREW GARFIELD</h2>
      </div>
      <div className='outSpider'>
      <p className='spiderMan' style={styleSpiderMan}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      >SPIDER MAN</p>
      </div>
    </div>
  )
}

export default Title
