import phoneIcon from './images/phone-icon.png'
import mailIcon from './images/mail-icon.png'


export default function Contact(props) {
    // console.log(props); 
    return (
        <article className="contact-card">
            <img 
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src={phoneIcon}
                    alt="phone icon" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={mailIcon}
                    alt="mail icon"
                />
                <p>{props.mail}</p>
            </div>
        </article>
    )
}


// This doesn't output to console. Why?

// const props = {
//     img: './src/cat_yellow_pages/images/mr-whiskerson.png',
//     name: 'Mr.Whiskerson',
//     phone: '(212) 555-1234',
//     mail: 'mr.whiskaz@catnap.meow'
// }

// const {img, name} = props
// console.log(img, name, props.img, props.name)