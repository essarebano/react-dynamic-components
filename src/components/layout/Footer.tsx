function Footer() {
  const authorName = import.meta.env.VITE_AUTHOR_NAME ?? '[author_name]'
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="flex justify-center items-center">
        <div>
          <p>&copy; 2024 {authorName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
