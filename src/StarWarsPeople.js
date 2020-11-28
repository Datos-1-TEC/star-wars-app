import React from 'react'
import React from 'react'
import StarWarsCharacter from './StarWarsCharacter'

export default class StarWarsPeople extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    render() {
        return (
            <table border = '1'>

                
                <thead title = 'Star Wars Characters '>
                    <tr>
                        <th>Name</th>
                        <th>Height(cm)</th>
                        <th>Mass (kg)</th>
                        <th>Hair color</th>
                        <th>Skin Color</th>
                        <th>Eye Color</th>
                        
                    </tr>
                </thead>
                <body>
                    { this.state.data.map(character => {
                        return <StarWarsCharacter character = {character} />
                    })}

                </body>
            </table>
        )
      
    }
    async loadData(){
        let response = await fetch("https://swapi.dev/api/people/")
        let parsedResponse = await response.json();
        this.setState({
            data : parsedResponse.results
        })

    }

}
