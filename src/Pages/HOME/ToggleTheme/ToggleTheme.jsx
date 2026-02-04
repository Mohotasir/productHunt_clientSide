import useTheme from "../../../Hooks/useTheme/useTheme"

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="border mx-3 px-2 py-1 rounded"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}

export default ToggleTheme
