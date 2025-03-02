import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss'

const Directory = ({directory}) => {
    const categories = directory
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;