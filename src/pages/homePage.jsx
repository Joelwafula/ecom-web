import  React  from 'react'


import './homePage.styles.scss'
import Directory from '../component/directory/directory'

const HomePage = ({history}) => {
  return (
    <div className='homepage'>
        <Directory history={history}/>
        
    
    </div>
  )
}

export default HomePage
