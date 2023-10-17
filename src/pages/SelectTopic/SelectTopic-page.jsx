import DashboardLayout from '../../reusable-components/layouts/Dashboard-layout'
import MainLayout from '../../reusable-components/layouts/Main-layout'
import QuizCategories from '../../reusable-components/QuizCategories/QuizCategories'
import { categories } from '../../data/data'

import './SelectTopic-page.css'

function SelectTopics() {
  return (
    <DashboardLayout>
      <MainLayout
        title="Select Topic"
        description="Featured Category"
        actionButton={<button>More</button>}
      >
        <QuizCategories dataSet={categories.set2} />
      </MainLayout>
    </DashboardLayout>
  )
}

export default SelectTopics
