import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()
const ThemeTable = themeComponents.table

// Nextra tables are horizontal scroll containers; keep them keyboard reachable
// at every viewport and with different platform font metrics.
function KeyboardTable(props) {
  return <ThemeTable {...props} tabIndex={0} />
}

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    table: KeyboardTable,
    ...components
  }
}
