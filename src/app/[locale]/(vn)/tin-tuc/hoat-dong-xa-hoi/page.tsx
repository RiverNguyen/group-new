// Trang lọc bài viết đọc trạng thái từ query string (nuqs -> useSearchParams). Khi Next
// prerender tĩnh thì useSearchParams không có giá trị nên build sẽ báo lỗi phải bọc suspense
// boundary, và nếu bọc thì HTML tĩnh chỉ còn hero — bot tìm kiếm không thấy danh sách bài viết.
// Render động cho từng request để nội dung nằm sẵn trong HTML. Bỏ dòng này thì build sẽ vỡ.
export const dynamic = 'force-dynamic'

const SocialActivitiesPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-white'>
      <p className='font-inter text-[1rem] text-gold-on-light'>Hoạt động xã hội</p>
    </main>
  )
}

export default SocialActivitiesPage
