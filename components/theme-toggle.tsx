"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div
        aria-hidden="true"
        className="h-6 w-12 rounded-full bg-muted/40 animate-pulse"
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <label className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <SunIcon className="h-4 w-4" aria-hidden="true" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-primary"
      />
      <MoonIcon className="h-4 w-4" aria-hidden="true" />
    </label>
  )
}
