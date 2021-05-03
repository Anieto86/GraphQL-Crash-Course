import React  from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import { useQuery, gql} from '@apollo/client'

import { Link } from "react-router-dom"


const CATEGORY_QUERY = gql `
{
    categories{
      id
      image
      category
      slug
  }
}
`;

function CategoryDisplay() {
    const {loading, error, data} = useQuery (CATEGORY_QUERY)
    
    //console.log({data}, "catergories")
    if (error) return <div> Error....</div>
    if (loading) return <div>Loading ...</div>


    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map(category => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.image]} alt="category" /> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay
