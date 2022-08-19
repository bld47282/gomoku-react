type NumberDropdownProps = {
  start: number
  end: number
  onChange: (e: any) => void
}

export default function NumberDropdown({start, end, onChange} : NumberDropdownProps) {
  let numbers: number[] = []
  for (let i = start; i <= end; i++) {
    numbers.push(i)
  }

  return (
    <select onChange={onChange}>
      <option value={19} key={0} hidden>Board size:</option>
      {numbers.map((x) => <option key ={x} value={x}>{x}</option>)}
    </select>
  )
}
