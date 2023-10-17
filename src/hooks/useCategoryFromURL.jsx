import { useLocation } from 'react-router-dom'
import { categories } from '../data/data'

const useCategoryFromURL = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const categoryName = searchParams.get('name')
  const categoryImage = searchParams.get('image')

  const categoryObj = categories.set2.find(
    (category) => category.name === categoryName
  )

  return {
    categoryName,
    categoryImage,
    categoryNumber: categoryObj ? categoryObj.number : null,
  }
}

export default useCategoryFromURL
