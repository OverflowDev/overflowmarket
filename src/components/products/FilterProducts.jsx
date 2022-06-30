
function FilterProducts({filterData}) {
  return (
    <div className="">
        {
            filterData.map((val, id) => {
                return (
                    <button
                        key={id}
                        className='flex'
                    >
                        {val}
                    </button>
                )
            })
        }
    </div>
  )
}

export default FilterProducts