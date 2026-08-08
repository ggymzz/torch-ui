import { createContext, createComponent, useContext, type JSX } from 'solid-js'

/** Built-in label locales supported by torch-ui components. Default: "en". */
export type TorchLocale = 'en' | 'zh'

const LocaleContext = createContext<TorchLocale | undefined>(undefined)

export interface LocaleProviderProps {
	/** Locale for all built-in component labels. Default: "en". */
	locale?: TorchLocale
	children: JSX.Element
}

/**
 * Provides a default locale for every torch-ui component with built-in labels
 * (Pagination, DatePicker, Select, AlertDialog, FileUpload, etc.). Works like
 * ANTD's ConfigProvider: components read the locale from context unless an
 * explicit `locale`/`labels` prop overrides it. When no provider is present,
 * components keep their upstream English defaults.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <LocaleProvider locale="zh">
 *       <MyApp />
 *     </LocaleProvider>
 *   )
 * }
 * ```
 */
export function LocaleProvider(props: LocaleProviderProps) {
	return createComponent(LocaleContext.Provider, {
		value: props.locale,
		get children() {
			return props.children
		},
	})
}

/**
 * Hook to read the nearest LocaleProvider locale. Returns `undefined` when no
 * provider is mounted (components fall back to their "en" defaults).
 */
export function useLocaleConfig() {
	return useContext(LocaleContext)
}

/**
 * Resolve the effective locale: explicit prop wins, then context, then "en".
 *
 * @param explicit - Locale passed via an explicit `locale` prop (undefined if not set)
 * @param contextLocale - Locale from the nearest LocaleProvider (undefined if none)
 * @returns The effective locale to use for component labels
 */
export function resolveLocale(explicit: TorchLocale | undefined, contextLocale: TorchLocale | undefined): TorchLocale {
	return explicit ?? contextLocale ?? 'en'
}
