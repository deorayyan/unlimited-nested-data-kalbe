const Folder = ({
  data
}) => {
  return (
    <div className="p-6 bg-white bg-opacity-10 my-2 rounded">
      { data?.rootFolder || data?.subRootFolder }
      { data?.children?.map((folder) => (
        <Folder
          key={folder.id}
          data={folder}
        />
      ))}
    </div>
  )
}
export default Folder
