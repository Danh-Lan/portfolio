const BottomBar: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 p-4 text-center">
      <p>© {(new Date().getFullYear())}</p>
    </div>
  )
}

export default BottomBar;