import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocments } from "../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({children}) => {
    const [ categoriesMap, setCategoriesMap ] = useState({})
    useEffect(() => {
        const getCategoriesmap = async () => {
            const categoryMap = await getCategoriesAndDocments()
            setCategoriesMap(categoryMap)
            // console.log(categoryMap)
        }
        getCategoriesmap()
    }, [])

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}