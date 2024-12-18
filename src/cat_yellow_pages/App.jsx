import Contact from './Contact'

function App() {
    return (
        <div className="contacts">
            <Contact 
                img='./src/cat_yellow_pages/images/mr-whiskerson.png'
                name='Mr.Whiskerson'
                phone='(212) 555-1234'
                mail='mr.whiskaz@catnap.meow'
            />
            <Contact 
                img='./src/cat_yellow_pages/images/fluffykins.png'
                name='Fluffykins'
                phone='(212) 555-2345'
                mail='fluff@me.com'
            />
            <Contact 
                img='./src/cat_yellow_pages/images/felix.png'
                name='Felix'
                phone='(212) 555-4567'
                mail='thecat@hotmail.com'
            />
            <Contact 
                img='./src/cat_yellow_pages/images/pumpkin.png'
                name='Pumpkin'
                phone='(0800) CAT KING'
                mail='pumpkin@srimba.com'
            />
        </div>
    )
}

export default App