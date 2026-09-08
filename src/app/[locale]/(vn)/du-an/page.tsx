import ProjectsModule from '@/modules/projects'

// Trang lọc dự án đọc trạng thái từ query string (nuqs -> useSearchParams). Khi Next
// prerender tĩnh thì useSearchParams không có giá trị nên build sẽ báo lỗi phải bọc suspense
// boundary, và nếu bọc thì HTML tĩnh chỉ còn hero — bot tìm kiếm không thấy danh sách dự án.
// Render động cho từng request để nội dung nằm sẵn trong HTML. Bỏ dòng này thì build sẽ vỡ.
export const dynamic = 'force-dynamic'

const ProjectsPage = () => {
  return <ProjectsModule />
}

export default ProjectsPage
