import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {
    
    const travelCards = data.map(entry => {
        return(
            <Entry 
                key={entry.id}
                // entry={entry}
                {...entry}
                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className='container'>
                {travelCards}
            </main>
        </>
    )
}

// Missing "key" prop for element in iterator
// Missing prop validation

// <Header />
// <main className="container">
//     <Entry 
//         img={{ 
//             src:
//             alt:
//         }}
//         title=
//         country=
//         googleMapsLink=
//         dates=
//         text=
//     />
// </main>