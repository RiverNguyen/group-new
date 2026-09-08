import ShareholderRelationsModule from '@/modules/shareholder-relations'

// Trang lọc tài liệu đọc trạng thái từ query string (nuqs -> useSearchParams). Khi Next
// prerender tĩnh thì useSearchParams không có giá trị nên build sẽ báo lỗi phải bọc suspense
// boundary, và nếu bọc thì HTML tĩnh chỉ còn hero — bot tìm kiếm không thấy danh sách tài liệu.
// Render động cho từng request để nội dung nằm sẵn trong HTML. Bỏ dòng này thì build sẽ vỡ.
export const dynamic = 'force-dynamic'

const ShareholderRelationsPage = () => {
  return <ShareholderRelationsModule />
}

export default ShareholderRelationsPage
