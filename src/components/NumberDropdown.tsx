type NumberDropdownProps = {
  start: number
  end: number
}

export default function NumberDropdown({start, end} : NumberDropdownProps) {
  let numbers: number[] = []
  for (let i = start; i <= end; i++) {
    numbers.push(i)
  }

  return (
    <select>
      <option hidden>Board size:</option>
      {numbers.map((x) => <option>{x}</option>)}
    </select>
  )
}
